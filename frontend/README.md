# Music School Platform

A full-stack, production-ready web application for music schools, built with Next.js, TypeScript, Tailwind CSS (Aceternity UI), and a Node.js/Express/MongoDB backend. The platform enables users to explore music courses, register for webinars, contact instructors, and more.

## Features

- **Modern UI/UX**: Responsive, accessible design using Tailwind CSS and Aceternity UI components.
- **TypeScript**: Type-safe codebase for maintainability and scalability.
- **Course Catalog**: Browse all music courses with detailed descriptions and images.
- **Featured Courses**: Highlighted section for top courses.
- **Upcoming Webinars**: List of featured and upcoming music webinars.
- **Instructor Profiles**: Meet the teaching staff with bios and photos.
- **Testimonials**: Real student feedback with animated cards.
- **Contact Form**: Secure, validated (Formik + Yup) contact form with backend integration and toast notifications.
- **Sticky Scroll & Animated Backgrounds**: Engaging UI with sticky scroll sections and animated backgrounds.
- **Navigation**: Interactive navbar with dropdowns for easy access to all sections.
- **API Integration**: Connects to a Node.js/Express backend for contact form submissions and data persistence.
- **Deployment**: Easily deployable on Vercel.

## Tech Stack

- **Frontend**: Next.js, TypeScript, Tailwind CSS, Aceternity UI, Framer Motion, Formik, Yup, React Hot Toast
- **Backend**: Node.js, Express, MongoDB (Mongoose)

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   # or yarn install
   ```
2. **Set environment variables:**
   - Create a `.env.local` file and set `NEXT_PUBLIC_BACKEND_URL` to your backend API URL.
3. **Run the development server:**
   ```bash
   npm run dev
   ```
4. **Open [http://localhost:3000](http://localhost:3000) in your browser.**

## Folder Structure

- `src/app/` – Main app pages (Home, Courses, Contact, etc.)
- `src/components/` – Reusable UI components (Navbar, Footer, FeatureSection, etc.)
- `src/data/` – Static data (e.g., music_courses.json)

## Key Files

- `src/app/page.tsx` – Home page with hero, features, testimonials, webinars, instructors
- `src/app/courses/page.tsx` – All courses listing
- `src/app/contact/page.tsx` – Contact form page
- `src/components/ContactForm.tsx` – Formik/Yup contact form with toast notifications
- `src/components/FeatureSection.tsx` – Featured courses
- `src/components/UpcomingWebinars.tsx` – Webinars section
- `src/components/Instructors.tsx` – Instructor profiles
- `src/components/TestimonialCards.tsx` – Student testimonials

## Backend Integration

- Contact form submits data to `/api/contact` endpoint (Node.js/Express backend)
- Backend stores messages in MongoDB

## Deployment

- Deploy frontend on Vercel for best performance and CI/CD.

## Credits
- UI inspired by Aceternity UI and modern web design best practices.

---

For backend API and admin features, see the backend README in `/backend-project/README.md`.
