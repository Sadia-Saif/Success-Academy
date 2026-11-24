import {topics,tracks,resources,lessons} from '../data';
export {tracks,resources,lessons};
const prefixes=['Understand','Apply','Integrate','Debug','Deliver','Refactor','Explain','Evaluate','Optimize','Demonstrate'];
const approaches={
automation:{
prereq:['Browser basics','Data types','JSON objects','HTTP requests','API credentials','Webhooks','n8n nodes','Error handling','Databases','AI tool calling'],
goals:['Recognize the input and output of','Explain the technical purpose of','Build a minimal example involving','Handle an error condition in','Test and document','Compare two approaches to','Explain to a nontechnical buyer','Assess security risks in','Optimize for reliability','Demonstrate a production-quality result for'],
sim:'A US logistics company wants to reduce manual CRM processing without sacrificing data quality. Build a traceable workflow with clear ownership and human approval.',
deliver:'Save an architecture diagram, example JSON payload, test cases, and a brief demonstration recording.',
questions:['What input data must be validated?','What happens when an API request fails?','Which steps need human approval?','How will you prove that the solution works?'],
tools:['n8n','HTTP API test client','JSON editor','Database sandbox','workflow run log'],
},
sales:{
prereq:['ICP definition','Lead research','Personalization','Discovery call basics','Questioning','Qualification','Objections','Negotiation','Stakeholder mapping','Closing'],
goals:['Define the buyer context for','Research a practical example of','Draft a credible opener using','Simulate resistance around','Record an effective response for','Compare alternate sales motions for','Explain the value of','Evaluate decision criteria for','Improve the clarity of','Demonstrate an ethical sales process for'],
sim:'A US logistics COO has a 12-person technical team and is cautious about outside vendors. Understand priorities and offer a relevant next step without pressure.',
deliver:'Produce account notes, discovery script, objection response, next-step email and pipeline entry.',
questions:['What evidence justifies reaching out?','What problem does the buyer actually want solved?','Which stakeholders should be involved?','What ethical next step would you suggest?'],
tools:['Sales Navigator','CRM','Meeting notes','Role-play recorder','Proposal document']
},
english:{
prereq:['Basic grammar','Common business terms','Short explanations','Professional introductions','Stress and intonation','Pauses','Clear questions','Storytelling','Negotiation phrases','Executive presentations'],
goals:['Recognize useful vocabulary in','Explain the purpose of','Deliver a structured answer about','Practise a difficult sentence in','Record a role-play involving','Compare a weak and strong answer for','Communicate calmly about','Evaluate the tone of','Improve word economy in','Demonstrate executive presence with'],
sim:'You are on an international client call. You must explain an automation proposal clearly, handle interruptions and finish with a specific next step.',
deliver:'Record a 60-second answer, produce a transcript, identify two improvements and record a revised attempt.',
questions:['Can you make the main point in one sentence?','What jargon can you remove?','Where should you pause?','How would you close confidently?'],
tools:['Microphone','Transcript','Pronunciation dictionary','Speech notes','Meeting simulator']
},
psychology:{
prereq:['Self-awareness','Emotional labeling','Regulation','Empathy','Active listening','Decision biases','Trust','Boundaries','Conflict','Ethical influence'],
goals:['Describe the psychological foundation of','Identify an ethical application of','Practise empathy in','Respond under pressure using','Reflect on a difficult case involving','Compare assumptions about','Explain a trust-building approach to','Evaluate common biases around','Improve a difficult exchange using','Demonstrate emotional intelligence in'],
sim:'A stakeholder fears that AI automation will make their expertise less valuable. Facilitate a calm, honest conversation without making unsupported promises.',
deliver:'Write a conversation script, list emotional cues, document assumptions and propose a reversible experiment.',
questions:['What might the other person be feeling?','Which assumption could be wrong?','What neutral question would improve understanding?','How can you support informed choice?'],
tools:['Reflection journal','Role-play prompts','Feedback framework','Decision checklist','Conversation recorder']
}};
export const degree=[{range:[1,10],title:'Foundations',level:'Beginner',focus:'Build precise mental models and vocabulary'},{range:[11,20],title:'Integration',level:'Intermediate',focus:'Connect tools and explain decisions'},{range:[21,30],title:'Professional Delivery',level:'Advanced',focus:'Complete practical portfolio projects'},{range:[31,45],title:'Guided Repetition',level:'Professional',focus:'Repeat complete workflows and case studies'},{range:[46,60],title:'Applied Performance',level:'Professional',focus:'Handle changing customer and technical constraints'},{range:[61,75],title:'Expert Challenges',level:'Advanced',focus:'Debug, scale and defend independent solutions'},{range:[76,90],title:'Capstone & Interviews',level:'Advanced',focus:'Ship, present and reflect on multiple scenarios'}];
export function lessonFor(track,day){const cfg=approaches[track]||approaches.automation;const sourceIndex=(day-1)%30;const topic=topics[track][sourceIndex];const cycle=Math.floor((day-1)/30);const offset=(day-1)%10;const phase=degree.find(x=>day>=x.range[0]&&day<=x.range[1]);const stageLabel=cycle===0?'Foundation lesson':cycle===1?'Client implementation sprint':'Advanced independent challenge';const goal=cfg.goals[offset]+' '+topic+'.';const tasks=cycle===0?[
'Explain '+topic+' in your own words and define three essential terms.',
'Study a worked example and identify its assumptions.',
'Use '+cfg.tools[0]+' or an equivalent practice environment to reproduce the smallest working example.',
'Write one failure case, one success case and how you would verify each.',
'Present a two-minute explanation of what you built and why.'
]:cycle===1?[
'Identify a realistic business requirement involving '+topic+'.',
'Write acceptance criteria and specify the expected outcome.',
'Implement or role-play a complete solution without following every step of a tutorial.',
'Simulate a change request and document the revision.',
'Review with an evidence checklist, then explain your decisions.'
]:[
'Define a difficult business problem that requires '+topic+'.',
'Design two plausible solution approaches and justify your choice.',
'Build, test and stress your selected approach with realistic edge cases.',
'Conduct a peer-style review covering reliability, ethics and scalability.',
'Record a final demonstration and a retrospective on improvements.'
];return {track,day,topic,goal,tasks,phase,stageLabel,sim:cfg.sim,deliver:cfg.deliver,questions:cfg.questions,tools:cfg.tools,prereq:cfg.prereq.slice(Math.max(0,Math.floor(sourceIndex/3)-1),Math.floor(sourceIndex/3)+2),examples:lessons[track],resources:resources.filter(x=>x.track===track),confidence:cycle===0?'Guided':cycle===1?'Applied':'Independent',coreTitle:topics[track][sourceIndex],cycle};}
export const milestones=[
{day:7,label:'First validated project',text:'Demonstrate a small working example and identify its edge cases.'},
{day:15,label:'Integration checkpoint',text:'Explain a complete workflow or client process with clear inputs and outputs.'},
{day:30,label:'Foundations portfolio',text:'Show three documented projects or equivalent assessed case studies.'},
{day:45,label:'Applied simulation',text:'Complete a timed business case without step-by-step prompting.'},
{day:60,label:'Client-style delivery',text:'Present a working solution and respond to change requests.'},
{day:75,label:'Advanced technical review',text:'Defend security, quality, performance and ethical decisions.'},
{day:90,label:'Final mastery review',text:'Present your portfolio, complete interviews and reflect on skill gaps.'}
];