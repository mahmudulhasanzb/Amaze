# Amaze Property Management Solutions — Web Redesign

A premium, high-fidelity redesign and development of [Amaze PMS](https://www.amazepms.com) built with **Next.js**, **React**, and **Tailwind CSS**. 

This project transforms the original site into a modern, engaging B2B portal matching the aesthetics of premium digital brands (such as Stripe, Apple, and Vercel) while fully preserving the business objectives and layout intent.

---

## 🌟 Key Features

### 1. Premium & Engaging UI Design
* **Pure White & Slate Aesthetics**: Swapped generic gray backgrounds with clean, high-contrast pure white layouts. Implemented fine borders (`border-slate-100` / `border-slate-200`) and soft, deep shadows for a crisp visual hierarchy.
* **Cohesive Corporate Palette**: Accents styled in deep blue (`#1d4ed8` / `#1e3a8a`) and teal (`#0f766e` / `#14b8a6`) colors that convey corporate trust, institutional capability, and operational scale.
* **Dual-Theme Support**: Flawless support for both Light Mode and Dark Mode, integrated with system preference detection and manual override theme-toggles.

### 2. High-Fidelity & Interactive Components
* **Hero Carousel Slider (`Banner.jsx`)**: A full-bleed slideshow featuring responsive images, floating typography layout, manual next/prev controls, index indicators, and Framer Motion transitions.
* **Overlapping Card Infographics (`About.jsx` & `/about`):** Creative layout layers depicting Action Group's Navy background shield and the team photo.
* **Infinite Partners Marquee (`Marque.jsx`)**: An infinite horizontal logo loop featuring hover-to-pause logic, showcasing valued partners and institutional clients.
* **Contact & Form Validation (`Contact.jsx`)**: Includes custom status responses, input validation, and interactive focus states.

### 3. Subpages, Navigation, & Route Handlers
* **Navbar Underline Micro-Interactions**: Hovering menu links triggers an expanding horizontal slide indicator from left-to-right using custom CSS transitions.
* **Special Route Layouts**:
  * **Loading Component (`loading.jsx`)**: A custom Next.js fallback boundary featuring a centerpiece blue dot wrapped inside a rotating spinner track.
  * **Custom 404 Page (`not-found.jsx`)**: A brand-aligned static error screen guiding lost users back to the homepage lobby or allowing them to file a support ticket.
  * **Coming Soon Placeholder (`CommingSoon.jsx`)**: A reusable card layout rendered across routes currently undergoing design expansion (Services, Careers, Testimonials, Strength, etc.).

---

## 🛠️ Technology Stack

* **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
* **Library**: [React 19](https://react.dev/)
* **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
* **Animations**: [Framer Motion](https://www.framer.com/motion/)
* **Icons**: [Lucide React](https://lucide.dev/)

---

## 🚀 Getting Started & Local Setup

To run this project on your local machine, follow these simple steps:

### Prerequisites
* Ensure you have [Node.js](https://nodejs.org/) installed (v18.x or higher recommended).
* A package manager like `npm` (packaged with Node) or `yarn` / `pnpm`.

### Installation
1. **Clone the repository**:
   ```bash
   git clone https://github.com/mahmudulhasanzb/Amaze.git
   cd Amaze
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **View in browser**:
   Open [http://localhost:3000](http://localhost:3000) inside your web browser.

---

## 📂 Project Directory Structure

```text
├── public/                 # Static assets (images, logos, vector icons)
├── src/
│   ├── app/                # Next.js App Router root layout & routes
│   │   ├── (main)/         # Main layout group
│   │   │   ├── about/      # Detailed About Page route
│   │   │   ├── services/   # Services placeholder route
│   │   │   ├── strength/   # Our Strength placeholder route
│   │   │   └── ...         # Gallery, Testimonials, Careers page routes
│   │   ├── globals.css     # Global styles & tailwind configurations
│   │   ├── loading.jsx     # Global Next.js route transition screen
│   │   └── not-found.jsx   # Custom 404 Page
│   ├── components/         # Reusable presentation components
│   │   ├── layout/         # Shared layouts (Navbar.jsx, Footer.jsx)
│   │   ├── About.jsx       # About us excerpt (Home page)
│   │   ├── Banner.jsx      # Premium Hero slider
│   │   ├── Contact.jsx     # Interactive contact form
│   │   ├── Marque.jsx      # Infinite loop marquee
│   │   ├── WhyChoseUs.jsx  # Feature grids
│   │   └── CommingSoon.jsx # Reusable Coming Soon placeholder card
└── package.json            # Project configurations and npm scripts
```

---

## 🎨 Best Practices & Standards Applied

* **SEO and Semantics**: Pages use semantic HTML5 elements (`<header>`, `<section>`, `<article>`, `<main>`, `<footer>`) with structured heading hierarchies (`h1` -> `h2` -> `h3`).
* **Design Standards**: Complies with standard accessibility colors and contrast ratios. Touch targets and hover states feature cursor-pointers and transition timings.
* **Component Modularity**: Business logic, presentation elements, and assets are separated into decoupled components to maximize ease of maintenance.
