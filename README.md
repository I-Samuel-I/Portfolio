# Samuel Gomes Portfolio

> 🟡 Status: In Progress

This repository contains the personal portfolio website of **Samuel Gomes**, a web/mobile developer. It presents selected web and mobile projects, professional background, technology stack, and a contact form for new opportunities.

The interface is inspired by a desktop workspace: visitors can open and drag interactive windows for the About, Projects, and Contact sections. It also includes dark mode, language switching, sound effects, and responsive layouts for mobile, tablet, and desktop devices.

## 💻 Repository

[https://github.com/I-Samuel-I/Portfolio](https://github.com/I-Samuel-I/Portfolio)

## ✨ Features

- Responsive interface for mobile, tablet, and desktop
- Draggable section windows
- Project filtering and detailed project modals
- Portuguese and English language support
- Dark mode and interface sound controls
- Animated visual elements powered by Matter.js and Motion
- Contact form with validation, email delivery, and rate limiting

## 📋 Requirements

To run this project locally, make sure you have **Node.js** and **npm** installed.

## 🔗 Clone the repository

```bash
git clone https://github.com/I-Samuel-I/Portfolio.git
cd Portfolio
```

## ⚙️ Installation

Install the dependencies:

```bash
npm install
```

## 🚀 Getting Started

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

To create a production build:

```bash
npm run build
npm run start
```

## 🔐 Environment Variables

The contact form requires the following services to be configured in a local `.env` file:

```env
RESEND_API_KEY=your_resend_api_key
UPSTASH_REDIS_REST_URL=your_upstash_redis_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token
```

## 🛠 Built With

- ▲ [Next.js](https://nextjs.org/) – React framework for the application
- ⚛️ [React](https://react.dev/) – User interface library
- 🔷 [TypeScript](https://www.typescriptlang.org/) – Typed JavaScript
- 🎨 [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS framework
- 🎬 [Motion](https://motion.dev/) – UI animations
- ⚙️ [Matter.js](https://brm.io/matter-js/) – Physics engine for interactive elements
- ✉️ [Resend](https://resend.com/) – Contact form email delivery
- 🛡️ [Upstash Ratelimit](https://upstash.com/docs/redis/sdks/ratelimit-ts/overview) – Contact endpoint rate limiting
- ✅ [Zod](https://zod.dev/) – Form data validation
- ▲ [Vercel](https://vercel.com/) – Recommended deployment platform

## Version

Current version: **v0.1.0**

## Author

- **Samuel Gomes** – _Front-end Developer_ – [I-Samuel-I](https://github.com/I-Samuel-I)

## 🌐 Contact

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/I-Samuel-I)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/samuel-gomes-481062316/)
[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:samgomes.dev@gmail.com)
