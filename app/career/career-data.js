import {topics} from '../data';
export const careerTracks={
python:{title:'Python Developer',sub:'Backend · APIs · Data · Testing',color:'linear-gradient(120deg,#2762D9,#42B6E9)',role:'Junior Python Developer / Backend Engineer',skills:['Python 3','pytest','FastAPI','SQL','Git','Docker'],interviews:[
['Explain the difference between lists and tuples.','Lists are mutable and tuples are immutable. Explain iteration, hashability constraints, and when each is appropriate.'],
['What happens when you use a mutable default argument?','The default object is created once at function definition; changes persist across calls. Use None and create a new value inside.'],
['How does a Python dictionary work?','Hash-based key lookup with average O(1) time, collision handling, insertion ordering and hashable keys.'],
['What is a decorator?','A callable wrapping or modifying another callable; explain functools.wraps and a practical logging example.'],
['When would you use async and await?','For concurrent I/O-bound tasks; clarify that asyncio does not automatically speed CPU-heavy computation.'],
['How do you design a FastAPI endpoint?','Validate input with Pydantic, handle errors, authorize, test, version and document responses.'],
['What is the difference between an iterator and a generator?','Generators produce values lazily using yield and implement iterator behavior.'],
['How would you test an API integration?','Unit tests for parsing, dependency injection, mocked HTTP responses, and integration tests for end-to-end behavior.'],
['What would you do if an endpoint is slow?','Measure first; review database queries, I/O, caching, profiling, rate limits and observability.'],
['Describe your strongest Python project.','Use problem → architecture → implementation → tests → metrics → what you would improve.']
],projects:[['CLI Expense Tracker','Python collections, files and validation','A script with CSV import, summary totals and a README'],['Tested FastAPI Service','HTTP, Pydantic, SQL and pytest','REST API with validation, 10+ tests and Docker instructions'],['Logistics Analytics Pipeline','Pandas, SQL, reliability','Repeatable data cleaning and a KPI report']]},
gohighlevel:{title:'GoHighLevel Specialist',sub:'CRM · Pipelines · Funnels · Client Delivery',color:'linear-gradient(120deg,#EA7840,#F3B256)',role:'HighLevel CRM Administrator / Automation Specialist',skills:['CRM','Pipelines','Calendars','Workflows','Forms','API'],interviews:[
['Agency vs sub-account: what is the difference?','Explain agency-level administration and client/location-level configurations, including isolation and permissions.'],
['How would you model a sales pipeline?','Agree on stages, entry/exit criteria, owners, required fields and monitoring.'],
['How do you stop duplicate workflow messages?','Use entry rules, tags, contact state, deduplication, opt-outs and tests for re-entry.'],
['How do you troubleshoot an appointment that did not appear?','Inspect calendar settings, time zone, workflow triggers, contact record and logs.'],
['What should be checked before automated SMS?','Consent, applicable law, suppression, frequency limits, timing and provider restrictions.'],
['How would you migrate contacts?','Clean and map fields, validate consent, run a pilot import, dedupe and reconcile counts.'],
['What are snapshots used for?','Reusable implementation templates; explain what needs verification for each client.'],
['How can HighLevel connect to external systems?','Use supported integrations, webhooks and APIs with credential scope and failure handling.'],
['How do you create a reliable client handover?','Provide access roles, annotated workflow diagrams, test evidence and troubleshooting instructions.'],
['Walk through a CRM implementation project.','Explain discovery, scope, build, QA, acceptance tests and post-launch monitoring.']
],projects:[['Service Business CRM','Contacts, custom fields and pipeline','A clean CRM configuration with a data dictionary'],['Booking & Follow-Up Automation','Forms, calendars, workflows and consent','Demonstrated lead-to-booking workflow with QA cases'],['Multi-Client Implementation Pack','Snapshots, permissions and handover','Reusable implementation blueprint and client guide']]},
agentic:{title:'Agentic AI Engineer',sub:'LangGraph · RAG · Tools · Production',color:'linear-gradient(120deg,#6054E9,#AB6DF2)',role:'AI Agent Engineer / LLM Application Engineer',skills:['Python','Tool calling','LangGraph','RAG','Evaluations','Security'],interviews:[
['What distinguishes an agent from a workflow?','Workflows use predetermined paths; agents can select tools or actions according to policy, with bounded autonomy.'],
['What is the tool-call lifecycle?','Define schema, validate arguments, authorize, execute safely, inspect result, log and handle failures.'],
['How would you build RAG?','Ingest, chunk, embed, index, retrieve, rerank, generate with citations and evaluate grounding.'],
['What is prompt injection?','Untrusted content attempting to redirect model behavior; defend with trust boundaries and constrained tools.'],
['How do you handle persistent state in an agent?','Use checkpointing or a state store, with lifecycle rules, privacy and consistent versioning.'],
['When should an agent require human approval?','For high-impact, irreversible or sensitive tool actions; approval should be enforced outside the model.'],
['What metrics matter for evaluation?','Task success, groundedness, tool accuracy, safety, latency, cost and human preference.'],
['How do you prevent an infinite tool loop?','Bound steps and timeouts, validate state transitions and define termination conditions.'],
['How do you manage multi-agent complexity?','Start with a single agent, add specialists only when evaluation demonstrates benefit.'],
['Explain a production incident involving an agent.','Describe symptoms, trace logs, root cause, containment, remediation and regression tests.']
],projects:[['Single-Tool Agent','Schemas, approval and error handling','Agent with validated tool calls and tests'],['Cited Knowledge Agent','RAG, retrieval and evaluation','Grounded Q&A with source references and benchmark data'],['Production Service Agent','LangGraph, observability and security','Traceable agent with approval checkpoints and runbook']]}
};
export const challenges={
python:[
{title:'Print a friendly greeting',prompt:'Write Python code that outputs exactly Hello, Success Academy!',starter:'print("Hello, Success Academy!")',expected:'Hello, Success Academy!',hint:'Use the print() function and match the punctuation.'},
{title:'Perform arithmetic',prompt:'Print the sum of 7 and 5.',starter:'a = 7\nb = 5\nprint(a + b)',expected:'12',hint:'The + operator adds numbers.'},
{title:'Use string transformations',prompt:'Print the uppercase version of the word python.',starter:'word = "python"\nprint(word.upper())',expected:'PYTHON',hint:'Use the .upper() method.'},
{title:'Loop over a collection',prompt:'Print numbers 1, 2, 3 on separate lines.',starter:'for number in [1, 2, 3]:\n    print(number)',expected:'1\n2\n3',hint:'A for loop iterates through items.'},
{title:'Define a function',prompt:'Write a function named double that returns twice its input, then print double(4).',starter:'def double(value):\n    return value * 2\n\nprint(double(4))',expected:'8',hint:'Use def, return and call the function.'},
{title:'Use a dictionary',prompt:'Print the value of the role key in the employee dictionary.',starter:'employee = {"role": "Python Developer"}\nprint(employee["role"])',expected:'Python Developer',hint:'Access a dictionary value using square brackets.'}
]};
export const stepTitles=['Understand','Try it','Quick quiz','Apply'];
export function getMicroLesson(track,day){const topic=topics[track]?.[day-1]||'Professional Practice';const cfg=careerTracks[track]||careerTracks.python;const mode=day<=30?'Foundation':day<=60?'Intermediate':day<=80?'Advanced':'Career & Interview';const question=cfg.interviews[(day-1)%cfg.interviews.length];return {topic,level:mode,day,track,objective:'Explain '+topic+' clearly, practise one concrete example, and document the result.',analogy:track==='python'?'Treat each program as a precise set of instructions: inputs are transformed by explicit rules into outputs.':track==='gohighlevel'?'Treat the CRM like an organized reception desk: each lead needs clean details, a clear owner and a defined next action.':'Treat an AI agent as a supervised operator: it may suggest decisions, but must work within permissions and validated tools.',steps:['State the practical problem this topic solves.','Identify the inputs, outputs and failure conditions.','Reproduce a small example or configuration in a safe practice environment.','Explain the outcome and save evidence.'],question:question[0],answer:question[1],project:cfg.projects[Math.min(2,Math.floor((day-1)/30))],coding:track==='python'?challenges.python[Math.min(challenges.python.length-1,Math.floor((day-1)/15))]:null};}
