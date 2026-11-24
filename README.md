# Success Academy — Advanced Edition

A responsive Next.js learning academy with **four disciplines**, **90 days per track**, and a secure optional AI teaching agent.

- AI Automation Engineering: n8n, JSON, HTTP, APIs, webhooks, CRM, AI agents, databases, security and production design
- B2B Sales: ICP research, discovery, qualification, objection handling, negotiation and closing
- Executive English: pronunciation, speaking confidently, meetings, interviews and storytelling
- Psychology, Emotional Intelligence & Leadership: empathy, regulation, ethical influence, conflict and leadership

## Quick start

```bash
npm install
npm run dev
```

Visit http://localhost:3000/advanced for the new academy. The original dashboard is at /.

## Teaching agent configuration

Set `OPENAI_API_KEY` and `TUTOR_ACCESS_CODE` in Vercel environment variables. Optionally set `OPENAI_TUTOR_MODEL` (default: `gpt-4.1-mini`). Never commit real secrets or put an API key in a `NEXT_PUBLIC_` variable. The AI endpoint uses the OpenAI Responses API. The access code is entered in the web UI and remains in browser session storage.

**Public-access production note:** the shared access code and in-memory per-instance request limiter are basic safeguards only, not full authenticated-user security. For a publicly accessible, paid production service, add real authentication, durable per-user quotas, abuse protections and billing limits before configuring an API key. Without credentials, the endpoint responds with an explanation and the offline academy continues to work.

## Current learning experience

- 360 structured learning sessions across four tracks
- Foundation → Integration → Professional Delivery → Guided Repetition → Applied Performance → Advanced Challenges → Capstone
- Topic-indexed learning goals, practice activities and assignment evidence requirements
- Beginner-to-advanced external courses, guided labs, project milestones, assessment and progress saved locally
- AI tutor modes: Explain, Socratic, Quiz, Debug, Review, Project, Interview and Roadmap
- Legacy browser speaking coach and interactive dashboard

## Transparency

The application provides an advanced **learning framework**, not 360 independently written textbook chapters or a verified video for each topic. Most sessions use topic-aware reusable teaching structures. External tutorials are hosted by their publishers. Real AI feedback requires configuration and will incur API usage costs. The offline assessment is not a professional certification. Completion does not guarantee employment or expertise.

## IELTS A–Z Preparation

Visit `/ielts` to access a dedicated 90-day IELTS preparation course including:

- Academic and General Training selector
- Seven learning phases from English fundamentals through test-day preparation
- Four dedicated skills: Listening, Reading, Writing and Speaking
- 90 numbered topic lessons with skills-specific teaching explanations, original reading practice drills, writing prompts, timed practices and learning journals
- Official third-party IELTS and British Council preparation links; the app does not host official audio or exam papers
- Optional IELTS tutor mode using the existing protected AI endpoint (credentials and production-grade authentication required)

**Not an official IELTS product:** No association with IELTS test owners is implied, and built-in practice scores or AI advice are not official IELTS band scores. Real audio, official mock tests and exam-style scoring should be accessed from official providers. Progress is stored in local browser storage and not synced across devices.

## Unified Learning Dashboard

The root route `/` is now the single front door for all five courses: AI Automation Engineering, B2B Sales, Executive English, Psychology/EQ and IELTS A–Z. It includes a unified course catalog, classroom, curated resource library, progress overview, course roadmap and secure optional AI teaching agent. The existing `/advanced` and `/ielts` routes remain accessible for specialist practice.

On first browser load the dashboard imports progress from existing local browser keys (`sa-advanced-v1`, `success-ielts-v1`) into `sa-unified-v1`. The unified dashboard writes completion to its own state and mirrors it to legacy course storage for interoperability; progress synchronization is device-local and cannot resolve simultaneous changes across tabs or devices. IELTS Academic vs General Training is supported in the course interface; overview completion is combined per course day. The 450 sessions represent structured curricula with reusable lesson formats, not 450 independently reviewed full-length courses or 450 video lectures. Live AI remains disabled until server-side credentials and stronger public access protection are configured.


## In-Academy Video Studio

Visit `/watch` for an integrated 16:9 player, chapter navigation, playlists organized by course, practice assignments, personal notes and manual video completion tracking. The main dashboard's Video Studio and each course's Watch stage offer embedded playback. Source videos use YouTube's privacy-enhanced embed host, so playback occurs in the academy *when the original publisher permits embedding*. Ownership, streaming and advertising controls remain with publishers, and some videos may refuse inline playback. Only known video URLs have been added to the player. Non-video resources remain links rather than being falsely represented as videos. Video completion is saved to local browser storage, not verified by playback events or synchronized across accounts.
