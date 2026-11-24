import {topics,tracks,resources,lessons} from '../data';
export {tracks,resources,lessons};
const prefixes=['Understand','Apply','Integrate','Debug','Deliver','Refactor','Explain','Evaluate','Optimize','Demonstrate'];
const approaches={
python:{
prereq:['Variables and control flow','Functions and data structures','Modules and virtual environments','OOP and typing','Algorithms','HTTP and APIs','SQL and FastAPI','Testing and debugging','Deployment','Portfolio interviews'],
goals:['Explain core concepts in','Implement a small example of','Apply','Debug and validate','Test and document','Compare design approaches for','Explain time and space complexity in','Review security and reliability of','Optimize production patterns for','Present a job-ready demonstration of'],
sim:'You are a Python backend developer building and supporting a reliable lead intake API for a US logistics operator, with validation, persistence, tests and clear documentation.',
deliver:'Publish a reproducible GitHub project with tests, setup steps, example requests and a short architecture explanation.',
questions:['What input validation is required?','How will you verify correctness?','What failure paths could appear in production?','How would you explain the design in a technical interview?'],
tools:['Python interpreter','VS Code','pytest','FastAPI','GitHub']
},
gohighlevel:{
prereq:['CRM concepts','Agency and sub-account boundaries','Contacts and opportunities','Forms and calendars','Workflow triggers','Compliance and opt-outs','Reporting','Webhooks and API integrations','Troubleshooting','Client training'],
goals:['Identify business requirements for','Configure a working example of','Map the data model of','Troubleshoot a misconfiguration in','Test a real-world workflow for','Compare alternative HighLevel setups for','Explain business impact from','Review client data security in','Improve reliability of','Present a client delivery case for'],
sim:'A growing service business needs a HighLevel CRM system to capture inbound leads, assign opportunities, book appointments and handle permission-based follow-ups without duplicates.',
deliver:'Provide setup screenshots, workflow diagrams, data mapping, consent rules, acceptance tests and a client handover video.',
questions:['What problem is the client solving?','What data and permissions are needed?','How will you prevent accidental duplicate outreach?','How will you train the client to maintain the solution?'],
tools:['HighLevel sandbox account','CRM pipeline','Workflow builder','Calendars','Client documentation']
},
agentic:{
prereq:['Python and APIs','LLM prompts and messages','Structured outputs','Agent tools','State and memory','LangGraph','RAG','Guardrails','Agent evaluation','Production monitoring'],
goals:['Explain the agent architecture of','Implement an example using','Connect a validated tool to','Debug failure modes in','Test and observe','Compare agent designs for','Explain trust boundaries of','Evaluate the safety of','Optimize cost and latency of','Present a production-oriented system for'],
sim:'A support operations team needs a secure knowledge agent with evidence-based answers, constrained tools, clear handoff to humans and measurable evaluation results.',
deliver:'Publish an agent application with typed tool contracts, retrieval citations, test/evaluation dataset, observability traces, approval flow and deployment notes.',
questions:['Which decisions may the model make autonomously?','How will you handle prompt injection?','What evaluation results prove usefulness?','How do cost, latency and escalation affect your architecture?'],
tools:['Python','LangGraph','LangSmith','FastAPI','Evaluation dataset']
},
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
export function lessonFor(track,day){const cfg=approaches[track]||approaches.automation;const topicCount=topics[track].length;const sourceIndex=topicCount===90?day-1:(day-1)%30;const topic=topics[track][sourceIndex];const cycle=Math.floor((day-1)/30);const offset=(day-1)%10;const phase=degree.find(x=>day>=x.range[0]&&day<=x.range[1]);const stageLabel=cycle===0?'Foundation lesson':cycle===1?'Client implementation sprint':'Advanced independent challenge';const goal=cfg.goals[offset]+' '+topic+'.';const tasks=cycle===0?[
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