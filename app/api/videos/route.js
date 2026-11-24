import {NextResponse} from 'next/server';
import {topics} from '../../data';
import {getVerifiedVideo} from '../../watch/verified-videos';
import {lessonVideos} from '../../watch/video-data';
export const runtime='nodejs';
const courseNames={automation:'n8n workflow automation',sales:'B2B sales',english:'business English',psychology:'emotional intelligence leadership',ielts:'IELTS exam preparation',python:'Python programming',gohighlevel:'GoHighLevel CRM',agentic:'Agentic AI LangGraph'};
const deny=new Set(['introduction','tutorial','course','beginner','beginners','advanced','guide','full','complete','free','with','from','about','and','the','for','this','your','how','what','lesson','project','lab','day','using','use','into','review','practice']);
const words=x=>[...new Set(String(x||'').toLowerCase().match(/[a-z0-9]+/g)||[])].filter(t=>t.length>2&&!deny.has(t));
function scoreVideo(title,topic,course){
 const t=words(title),q=words(topic),brand=words(courseNames[course]),matches=q.filter(w=>t.some(v=>v===w||v.startsWith(w)||w.startsWith(v)));
 const strict=matches.length/Math.max(1,q.length);
 const brandMatch=brand.some(w=>t.includes(w));
 return strict+(brandMatch ? 0.17 : 0)+(t.includes('tutorial') ? 0.03 : 0);
}
const cacheHeaders={'Cache-Control':'public, s-maxage=86400, stale-while-revalidate=604800'};
function json(data,status=200){return NextResponse.json(data,{status,headers:cacheHeaders});}
export async function GET(request){
 const {searchParams}=new URL(request.url);
 const course=searchParams.get('course')||'',day=Number(searchParams.get('day'));
 if(!(course in courseNames)||!Number.isInteger(day)||day<1||day>90)return json({error:'Invalid course or day'},400);
 const exact=getVerifiedVideo(course,day)||lessonVideos.find(v=>v.course===course&&v.day===day);
 if(exact)return json({status:'found',source:'curated',video:exact});
 const key=process.env.YOUTUBE_API_KEY;
 if(!key)return json({status:'not_configured',source:'official-search',video:null,message:'Additional daily video discovery requires the server-side YouTube Data API key. The original narrated daily lesson is available.'});
 const topic=topics[course]?.[(day-1)%topics[course].length];
 if(!topic)return json({status:'no_topic',video:null});
 try{
  const query=courseNames[course]+' '+topic+' step by step tutorial';
  const search=new URL('https://www.googleapis.com/youtube/v3/search');
  for(const [k,v] of Object.entries({key,part:'snippet',type:'video',q:query,order:'relevance',relevanceLanguage:'en',maxResults:'12',safeSearch:'moderate',videoEmbeddable:'true',videoSyndicated:'true',videoDuration:'medium'}))search.searchParams.set(k,v);
  const response=await fetch(search,{next:{revalidate:604800},signal:AbortSignal.timeout(9000)});
  if(!response.ok){return json({status:'provider_unavailable',video:null,message:'YouTube discovery is temporarily unavailable.'},200)}
  const result=await response.json();
  const entries=(result.items||[]).filter(v=>/^[\w-]{11}$/.test(v.id?.videoId||''));
  if(!entries.length)return json({status:'no_match',video:null,message:'No embeddable result for this exact topic.'});
  const list=new URL('https://www.googleapis.com/youtube/v3/videos');
  list.searchParams.set('key',key);list.searchParams.set('part','status,contentDetails,snippet');list.searchParams.set('id',entries.map(v=>v.id.videoId).join(','));
  const metadata=await fetch(list,{next:{revalidate:604800},signal:AbortSignal.timeout(9000)});
  if(!metadata.ok)return json({status:'provider_unavailable',video:null});
  const byId=new Map((await metadata.json()).items?.map(v=>[v.id,v])||[]);
  const ranked=entries.map(v=>{const meta=byId.get(v.id.videoId);return {entry:v,meta,rank:scoreVideo(v.snippet.title,topic,course)};}).filter(x=>x.meta?.status?.embeddable&&x.meta?.status?.privacyStatus==='public'&&x.rank>=.56).sort((a,b)=>b.rank-a.rank);
  if(!ranked.length)return json({status:'no_match',video:null,message:'No sufficiently relevant, embeddable tutorial was found.'});
  const best=ranked[0],video={id:course+'-day-'+day,course,day,videoId:best.entry.id.videoId,title:best.entry.snippet.title,provider:best.entry.snippet.channelTitle,startSecond:0,duration:'YouTube tutorial',summary:best.entry.snippet.description||'Related tutorial',curation:'automatically-discovered',matchScore:Number(best.rank.toFixed(2))};
  return json({status:'found',source:'official-search',video});
 }catch{return json({status:'provider_unavailable',video:null,message:'Cannot reach YouTube discovery right now.'});}
}
