# Amaze - Property Management Solutions

A modern, high-performance corporate website built with **Next.js 16 (App
Router)**, **Tailwind CSS v4**, and **HeroUI** for **Amaze PMS Pvt Ltd**, a
premier Property Management division of the Action Group of Companies.

---

## 🚀 Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router, React 19)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) with PostCSS
  configuration
- **UI Components:** [HeroUI (v3)](https://heroui.com/)
- **Animations:** [Framer Motion / Motion](https://motion.dev/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Theme Support:** [Next-Themes](https://github.com/pacocoursey/next-themes)
  for seamless light/dark mode switching

---

## ✨ Features

- **Responsive Modern Design:** Beautiful layouts optimized for mobile, tablet,
  and desktop viewports.
- **Dynamic Theme Switcher:** Fully integrated light and dark modes with color
  system calibration.
- **Micro-Animations:** Fluid slide transitions, hover states, and scroll
  animations powered by Framer Motion.
- **Integrated Sections & Pages:**
  - **Home Page:** Hero banner, client marquee, about summary, key
    differentiators, and interactive contact form.
  - **About Us (`/about`):** Detailed corporate history, Mr. Subhani Abdul
    (Founder) bio, mission statement.
  - **Services (`/services`):** Offerings overview (Housekeeping, MEP, Security,
    Pest Control, Gardening, STP/WTP).
  - **Recruitments (`/recruitments`):** Job openings and workforce placement
    solutions.
  - **Our Strength (`/strength`):** Analytical view of the workforce, emergency
    readiness, and standard operating procedures (SOPs).
  - **Our Clients (`/testimonials`):** Showcasing client success stories and
    corporate testimonials.
  - **Gallery (`/gallery`):** Project portfolios and service visual showcases.
  - **Careers (`/careers`):** Career options and training opportunities.

---

## 📁 Directory Structure

```text
amaze/
├── public/               # Static assets (images, logos)
├── src/
│   ├── app/              # Next.js App Router (Layouts and Pages)
│   │   ├── (main)/       # Main website pages group
│   │   │   ├── about/    # About page
│   │   │   ├── careers/  # Careers page
│   │   │   ├── gallery/  # Gallery page
│   │   │   ├── layout.js # Subpage wrapper layout
│   │   │   ├── page.js   # Landing / Home page
│   │   │   └── ...       # Other routes (services, strength, testimonials)
│   │   ├── globals.css   # Main CSS entry (Tailwind imports & variables)
│   │   ├── layout.js     # Root layout (Metadata, Providers)
│   │   └── providers.jsx # HeroUI & Theme provider wrappers
│   └── components/       # Reusable React components
│       ├── layout/       # Layout structural elements (Navbar, Footer)
│       ├── About.jsx     # Landing page About section
│       ├── Banner.jsx    # Hero Slider Carousel
│       └── ...           # Contact, Marque, WhyChoseUs, etc.
├── next.config.mjs       # Next.js config
├── package.json          # Dependency manifest
└── tailwind.config       # Tailwind CSS configurations
```

---

## 🛠️ Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (v18+ recommended).

### Installation

Clone the repository and install dependencies:

```bash
npm install
```

### Run Local Development Server

Run the server locally to preview development changes:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the
application.

### Build and Deployment

Generate an optimized production build:

```bash
npm run build
```

Start the built production server:

```bash
npm run start
```
