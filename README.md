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


## Job-ready career tracks and interactive practice

The eight-course dashboard includes Python Engineering A–Z, GoHighLevel CRM & Automation, and Agentic AI Engineering. Each offers a named 90-day syllabus, practical projects, and official training resources. The /career Career Lab adds original bite-sized lessons, quick quizzes, XP, daily streaks, progress, Python exercises, project briefs and interview practice.

Routes: / for the eight-course dashboard; /career?track=python for Python practice; /career?track=gohighlevel for HighLevel client delivery; /career?track=agentic for AI agent engineering; and /watch?course=python (or gohighlevel or agentic) for the embedded video collection.

Scope: Career pathways do not guarantee employment. In-browser Python execution uses Pyodide loaded from a third-party CDN in a Web Worker with a 12-second timeout; never run untrusted code or paste secrets. HighLevel and agent labs describe practice in your own development or test environment, not authenticated live integration. The AI interview mode depends on separately configured server credentials and access control. Streak and XP progress is stored on the browser only.


## Full day-by-day course classroom

The `/watch` route now uses a course-content layout inspired by modern learning management systems. Each of the eight tracks has a 90-day accordion syllabus, with five activities on every day: related video, reading/study notes, practice, three-question knowledge check, and self-attested assessment. All activities can be opened inside the academy; the video player uses permission-dependent YouTube embeds, and many day topics currently share related course-level videos rather than having unique day-specific lectures. Daily learning activities are tracked in `sa-watch-curriculum-v2` browser storage. Quizzes use contextual formative question templates, not a unique independently validated exam for every day. No certificate or job qualification is issued.


## Relevant YouTube tutorials for each day (2026-11-24)

The classroom now prefers an **explicitly matched YouTube video for the selected day** over the browser-narrated slide lesson. Curated mappings in `app/watch/verified-videos.js` include publisher-video chapters positioned at relevant timestamps. A long source course may be reused across distinct day lessons at **different verified chapter starts**; this is not presented as a unique filmed lecture. The original narrated lesson remains as an alternative tab. Existing external instructor videos are preserved.

For automated discovery of further videos, the server route `/api/videos?course=<track>&day=<1-90>` uses the official YouTube Data API when the **server-side** `YOUTUBE_API_KEY` environment variable exists. It requests embeddable, syndicated public YouTube videos, fetches status metadata, checks relevance against the lesson title, and returns only qualifying results. Search responses cache for seven days. **Never put the key in NEXT_PUBLIC_ variables or frontend code.** Set it in Vercel Project Settings → Environment Variables for production, then redeploy. Google applies daily YouTube API search quotas and videos may become unavailable or have embedding disabled. The project currently has no such key set, so the service cannot automatically populate every unmatched day. A no-match state is intentionally shown instead of faking a video. These are third-party educational videos, not Success Academy-owned recordings.
