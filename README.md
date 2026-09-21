# Sadik R. Khan — Developer Portfolio Website

A modern, minimal, and responsive developer portfolio website .

Built with **React 18**, **Vite**, **Tailwind CSS**, and **Lucide Icons**.

---

## Features

- **Developer-Focused Aesthetic**: Clean typography (Plus Jakarta Sans & JetBrains Mono), spacious layout, off-white/slate palette, electric blue accents, and subtle borders.
- **Strictly Verified Information**: Content is derived from Sadik's official resume and provided project materials.
- **Featured Projects**:
  - **DriveShare** (Car Rental Platform — Spring Boot, Angular, AWS EC2/S3/RDS, Docker, MySQL, Spring Security)
  - **High-Concurrency Ticket Booking Engine** (Spring Boot, Angular, Redis Lua scripts, MySQL, AWS EC2/S3/RDS, Docker)
  - **DocWallet** (Secure Document Management Platform)
- **Freelance Web Development**:
  - **AN Enterprises** (Signage & Branding Business Website)
  - **The Decor Studio** (Interior & Furnishing Solutions Website)
- **Certifications & Education**:
  - **AWS Certified Cloud Practitioner** (Score: 914 / 1000)
  - **B.Tech in Computer Science & Engineering** (Ajeenkya D. Y. Patil University, CGPA: 8.32 / 10)
  - **Java Full Stack with Angular** (Symbiosis Digital Academy)
- **Interactive Lightbox**: Click any project preview to inspect full-resolution UI designs.
- **Direct Resume Download**: Downloads `Sadik_Khan_Resume.pdf` from any "Download Resume" button across the site.
- **Interactive Contact Card**: Direct email and phone with instant one-click copy-to-clipboard functionality.
- **Profiles**: Verified links to GitHub, LinkedIn, and LeetCode.

---

## Getting Started

### Prerequisites
- Node.js (v18+)
- npm (v9+)

### Installation
```bash
npm install
```

### Local Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### Production Build
```bash
npm run build
```
Generates a static production bundle in `dist/`.

### Preview Production Build
```bash
npm run preview
```

---

## Directory Structure

```
Portfolio/
├── dist/                     # Optimized static distribution build
├── public/                   # Public assets (resume PDF, images, favicon)
│   ├── assets/
│   │   ├── images/
│   │   │   ├── sadik-khan.png
│   │   │   └── projects/
│   │   │       ├── driveshare.png
│   │   │       ├── docwallet.png
│   │   │       ├── an-enterprises.png
│   │   │       └── decor-studio.png
│   │   └── Sadik_Khan_Resume.pdf
│   └── favicon.svg
├── resources/                # Original source images and PDF
├── src/
│   ├── components/           # Modular UI components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── FeaturedProjects.jsx
│   │   ├── FreelanceProjects.jsx
│   │   ├── Education.jsx
│   │   ├── Certifications.jsx
│   │   ├── LeetCodeSection.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── ImageModal.jsx
│   ├── data/
│   │   └── portfolioData.js  # Central source of truth for content
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## Deployment

The project is built with `base: './'`, allowing you to deploy the contents of the `dist/` directory directly to:
- **Vercel** / **Netlify**
- **GitHub Pages**
- **AWS S3 + CloudFront**
