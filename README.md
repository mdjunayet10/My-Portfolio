# My Portfolio

A modern personal portfolio website for **Md Junayet**, built to showcase my skills, projects, academic background, resume, and contact information through a premium dark UI.

## Live Website

**Portfolio:**  
https://md-junayet-portfolio.web.app/

## About

This portfolio highlights my work as a developer focused on building useful digital products across web, mobile, Firebase, full-stack, educational, productivity, and game development projects.

The website includes a dark animated interface, smooth navigation, project showcases with screenshots, a tech stack section, resume page, and a working contact form.

## Features

- Premium dark UI design
- Responsive layout for desktop, tablet, and mobile
- Animated hero section with typing effect
- Smooth page navigation
- About section
- Academic background section
- Tech stack / skills section
- Project showcase with real screenshots
- Resume page with downloadable CV
- Contact page with EmailJS integration
- Firebase Hosting deployment
- Custom favicon and browser title
- Optimized static export with Next.js

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Firebase Hosting
- EmailJS
- Lucide React
- React Icons

## Featured Projects

### Study Leveling App

A study productivity and gamification app that turns learning into missions with XP, coins, levels, rewards, a global leaderboard, and multiplayer study rooms.

**Live Demo:** https://study-leveling.web.app/

### IslamQUIZ

An Islamic educational quiz app designed to help users test and improve Islamic knowledge through structured questions, answers, and progress-based learning.

**Live Demo:** https://islamquiz-app.web.app/

### Career Bridge

A Bangladesh-focused career platform connecting job seekers and employers through profiles, job listings, applications, and career-building features.

### Savings Planner

A savings and budgeting planner that helps users track savings goals, manage money plans, and organize financial progress clearly.

### Hill Rider

An original 2D hill-racing game with vehicle progression, driving physics, level objectives, coins, fuel, upgrades, and terrain challenges.

## Project Structure

```text
Portfolio/
├── public/
│   ├── projects/
│   └── resume/
├── src/
│   ├── app/
│   ├── components/
│   └── data/
├── firebase.json
├── next.config.ts
├── package.json
└── README.md
```

## Getting Started

Clone the repository:

```bash
git clone https://github.com/mdjunayet10/My-Portfolio.git
cd My-Portfolio
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open the local site:

```text
http://localhost:3000
```

## Environment Variables

The contact form uses EmailJS. Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

Do not commit `.env.local` to GitHub.

## Build

Create a production build:

```bash
npm run build
```

## Deploy to Firebase Hosting

Deploy the site:

```bash
firebase deploy --only hosting:portfolio
```

Or use the deploy script:

```bash
npm run deploy
```

## Important Security Notes

Do not push private or secret files to GitHub.

Never commit:

```text
.env.local
serviceAccountKey.json
*.jks
*.keystore
key.properties
firebase-debug.log
```

## Contact

- Email: mithu.bu.bd@gmail.com
- GitHub: https://github.com/mdjunayet10
- LinkedIn: https://www.linkedin.com/in/mdjunayet
- Portfolio: https://md-junayet-portfolio.web.app/

## License

This project is licensed under the terms in the [LICENSE](LICENSE) file.

The source code may be used for learning and reference, but the personal branding, text, images, screenshots, resume, and identity-related assets belong to **Md Junayet** and must not be reused as another person's portfolio.
