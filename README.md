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