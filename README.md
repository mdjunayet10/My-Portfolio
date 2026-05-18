# Md Junayet Portfolio

Dark starry personal portfolio built with Next.js App Router, TypeScript, Tailwind CSS, and Firebase Hosting static export.

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## EmailJS Contact Form

Create `.env.local` from `.env.example` before building if you want the contact form to send email:

```text
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_emailjs_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
```

## Project Assets

Project preview assets live in:

```text
public/projects/
```

Current expected filenames:

```text
study-leveling-main.png
islamquiz-main.png
career-bridge-main.png
savings-planner-main.png
hill-rider-main.png
```

If an asset is unavailable, the project card shows a polished dark fallback inside the image area.

Resume file:

```text
public/resume/Md-Junayet-CV.pdf
```

## Build For Firebase Hosting

```bash
npm run build
firebase deploy --only hosting:portfolio
```

The static export is generated in `out`, and `firebase.json` already uses `out` as the hosting public directory.

## Edit Content

Portfolio data is in:

```text
src/data/portfolio.ts
```

Portfolio content, links, academics, skills, and project data are managed there.

## Notes

- Profile image uses `https://github.com/mdjunayet10.png`.
- Do not commit secrets such as `.env`, service account keys, Firebase private keys, keystores, or signing keys.
