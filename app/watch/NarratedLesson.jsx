'use client';
import React,{useCallback,useEffect,useMemo,useRef,useState} from 'react';
import {Play,Pause,RotateCcw,ChevronLeft,ChevronRight,Volume2,VolumeX,GraduationCap,Lightbulb,Target,CheckCircle2,SkipForward,Info} from 'lucide-react';
const normal=s=>String(s||'').replace(/\s+/g,' ').trim();
const short=(s,max=400)=>{let v=normal(s);return v.length>max?v.slice(0,max).replace(/\s+\S*$/,'')+'.':v};
export function generateLessonSlides({course,day,title,detail,ideas}){
 const topic=normal(title),intro=short(course==='ielts'?detail.intro:detail.goal,290)||'Understand '+topic+'.';
 const context=short(course==='ielts'?detail.task:detail.sim,370)||'Apply the concept to a realistic example.';
 const steps=course==='ielts'?(detail.steps||[]):(detail.tasks||[]);
 const first=steps.slice(0,3).map(x=>short(x,145));
 const extra=Array.isArray(ideas)?ideas.slice(0,3).map(x=>short(x,165)):[];
 const allSteps=extra.length?extra:first;
 const sample=short(course==='ielts'?ideas?.worked||detail.task:detail.examples?.code||detail.sim,500);
 return [
 {kind:'intro',eyebrow:'WELCOME TO YOUR MASTERCLASS',title:topic,text:'Day '+day+' · '+intro,bullets:['Learn the idea','Study a worked example','Practise independently'],narration:'Welcome to day '+day+'. Today we are learning '+topic+'. '+intro},
 {kind:'concept',eyebrow:'01 · UNDERSTAND',title:'What does this mean?',text:intro,bullets:allSteps,narration:'First, understand the topic. '+intro+' '+allSteps.join('. ')},
 {kind:'scenario',eyebrow:'02 · USE IT AT WORK',title:'A real-world scenario',text:context,bullets:['Identify the goal and constraints','Define a successful result','Consider common mistakes'],narration:'Here is a practical context. '+context+' Start by identifying the goal, constraints, and success criteria.'},
 {kind:'example',eyebrow:'03 · WORKED EXAMPLE',title:'See how it works',text:sample,bullets:['Observe the approach','Check the expected outcome','Adapt the example to your own project'],narration:'Now examine this example. '+short(sample,350)+' Look at how the input and decisions produce an outcome.'},
 {kind:'practice',eyebrow:'04 · YOUR TURN',title:'Pause and practise',text:short(steps[3]||steps[0]||'Explain and apply today’s concept in your own words.',290),bullets:first.length?first:['Write your approach','Test your result','Record one improvement'],narration:'Now it is your turn. '+short(steps[3]||steps[0]||'Explain the concept in your own words.',200)+' Pause if you need more time. Your hands-on exercise is in the Practice tab.'},
 {kind:'summary',eyebrow:'05 · RECAP',title:'Remember these ideas',text:'You have completed the narrated lesson for '+topic+'.',bullets:['Explain the concept in plain language','Apply it to a realistic problem','Finish the quiz and assessment'],narration:'Great work. You have finished the narrated overview of '+topic+'. Now move to the practice exercise, quiz, and assessment to test your understanding.'}
 ];
}
export default function NarratedLesson({course,day,title,detail,ideas,onComplete}){
 const slides=useMemo(()=>generateLessonSlides({course,day,title,detail,ideas}),[course,day,title,detail,ideas]);
 const [index,setIndex]=useState(0),[playing,setPlaying]=useState(false),[muted,setMuted]=useState(false),[done,setDone]=useState(false),[speechAvailable,setSpeechAvailable]=useState(true),[rate,setRate]=useState(1),[narrationEnded,setNarrationEnded]=useState(false);
 const indexRef=useRef(0),playRef=useRef(false),idRef=useRef(0),onCompleteRef=useRef(onComplete),mutedRef=useRef(false);
 useEffect(()=>{onCompleteRef.current=onComplete},[onComplete]);
 const clearSpeech=useCallback(()=>{try{window.speechSynthesis?.cancel()}catch{}},[]);
 const stop=useCallback(()=>{idRef.current++;playRef.current=false;setPlaying(false);clearSpeech()},[clearSpeech]);
 useEffect(()=>{stop();setIndex(0);indexRef.current=0;setDone(false);setNarrationEnded(false);setSpeechAvailable(typeof window!=='undefined'&&'speechSynthesis'in window);return()=>{stop()}},[course,day,stop]);
 const readSlide=useCallback((n,token,voiceEnabled=true)=>{
  if(token!==idRef.current||!playRef.current)return;
  indexRef.current=n;setIndex(n);setNarrationEnded(false);
  if(n>=slides.length){stop();setDone(true);onCompleteRef.current?.();return;}
  if(!voiceEnabled){return}
  if(typeof window==='undefined'||!('speechSynthesis'in window)){setSpeechAvailable(false);return}
  try{
   window.speechSynthesis.cancel();
   const utterance=new SpeechSynthesisUtterance(slides[n].narration);
   utterance.lang='en-US';utterance.rate=rate;utterance.pitch=1.02;
   const voices=window.speechSynthesis.getVoices();const voice=voices.find(v=>v.lang.startsWith('en')&&v.localService)||voices.find(v=>v.lang.startsWith('en'));if(voice)utterance.voice=voice;
   utterance.onend=()=>{if(token!==idRef.current||!playRef.current)return;setNarrationEnded(true);if(n<slides.length-1){readSlide(n+1,token,!mutedRef.current)}else{stop();setDone(true);onCompleteRef.current?.()}};
   utterance.onerror=e=>{if(token===idRef.current){setNarrationEnded(true);setSpeechAvailable(e.error==='canceled'?true:false);if(e.error!=='canceled')setPlaying(false)}};
   window.speechSynthesis.speak(utterance);
  }catch{setSpeechAvailable(false);setPlaying(false)}
 },[slides,rate,stop]);
 const play=useCallback(()=>{if(!slides.length)return;idRef.current++;let token=idRef.current;playRef.current=true;setPlaying(true);if(indexRef.current>=slides.length){indexRef.current=0;setIndex(0);setDone(false)}readSlide(indexRef.current,token,!mutedRef.current)},[readSlide,slides.length]);
 const pause=useCallback(()=>{stop()},[stop]);
 const seek=useCallback(n=>{const next=Math.max(0,Math.min(slides.length-1,n));stop();indexRef.current=next;setIndex(next);setDone(false)},[slides.length,stop]);
 const current=slides[index]||slides[0],progress=(index+1)/slides.length*100;
 return <div className='narratedRoot'><div className={'narratedCanvas slide-'+current.kind} role='region' aria-label={'Interactive narrated lesson: '+title}>
  <div className='narratedTop'><div className='narratedIdentity'><GraduationCap size={21}/><span>SUCCESS ACADEMY ORIGINAL LESSON</span></div><span>DAY {day} · {String(index+1).padStart(2,'0')} / {slides.length}</span></div>
  <div className='narratedScene' key={course+'-'+day+'-'+index}><span className='narratedEyebrow'>{current.eyebrow}</span><h2>{current.title}</h2><p>{current.text}</p><div className='narratedHighlights'>{current.bullets?.map((b,i)=><div key={i}><span>{String(i+1).padStart(2,'0')}</span><span>{b}</span></div>)}</div></div>
  <div className='narratedBottom'><span>ANIMATED · SLIDE-BASED · AI-READY LESSON</span><span>{Math.round(progress)}% overview</span></div>
  {!playing&&!done&&<button className='narratedBigPlay' onClick={play} aria-label='Play this narrated lesson'><Play size={29}/></button>}
  {done&&<div className='narratedEnd'><CheckCircle2 size={22}/> Narrated lesson completed</div>}
 </div>
 <div className='narratedControls'><button onClick={()=>seek(index-1)} disabled={index===0} aria-label='Previous slide'><ChevronLeft size={19}/></button><button className='narratedPlayToggle' onClick={playing?pause:play}>{playing?<><Pause size={17}/> Pause</>:<><Play size={17}/> {done?'Replay':'Play lesson'}</>}</button><button onClick={()=>seek(index+1)} disabled={index===slides.length-1} aria-label='Next slide'><ChevronRight size={19}/></button><div className='narratedTrack' role='progressbar' aria-valuenow={index+1} aria-valuemin={1} aria-valuemax={slides.length}><i style={{width:progress+'%'}}/></div><button onClick={()=>{mutedRef.current=!mutedRef.current;setMuted(mutedRef.current);if(playing){pause()}}} aria-label={muted?'Unmute narration':'Mute narration'}>{muted?<VolumeX size={19}/>:<Volume2 size={19}/>}</button><select aria-label='Narration speed' value={rate} onChange={e=>{setRate(Number(e.target.value));if(playing)pause()}}><option value={0.85}>0.85×</option><option value={1}>1×</option><option value={1.2}>1.2×</option><option value={1.5}>1.5×</option></select></div>
 <div className='narratedHelp'><Info size={15}/><span>Topic-specific visual lessons with browser text-to-speech, not prerecorded instructor videos. Use Play to hear the English narration. If your browser blocks speech, slides remain navigable using arrows.</span></div>
 </div>
}
