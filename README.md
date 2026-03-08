# 🎨 Active Paints – Business Website

Official website for **Active Paints**, a paint company that manufactures high-quality paints for residential and commercial use.

Built with [Next.js](https://nextjs.org) (v16), [React](https://react.dev) (v19), [TypeScript](https://www.typescriptlang.org/), and [Tailwind CSS](https://tailwindcss.com).

---

## 🚀 Getting Started

### Prerequisites

Make sure you have **Node.js** (v18 or higher) and **npm** installed.

### Installation

```bash
# Clone the repository
git clone https://github.com/abhiynar2804/business-website.git
cd business-website

# Install dependencies
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the site.

---

## 📁 Project Structure

```
business-website/
├── public/                  # Static assets (images, icons, etc.)
├── src/
│   └── app/
│       ├── Components/
│       │   ├── Navbar/      # Site navigation bar
│       │   ├── Home/        # Main landing/hero section
│       │   ├── Footer/      # Site footer
│       │   └── Sub-Components/  # Shared reusable components
│       ├── globals.css      # Global styles
│       ├── layout.tsx       # Root layout with metadata & fonts
│       └── page.tsx         # Main page entry point
├── tailwind.config.js       # Tailwind CSS configuration
├── next.config.ts           # Next.js configuration
└── tsconfig.json            # TypeScript configuration
```

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| [Next.js](https://nextjs.org) | 16.1.6 | React framework & SSR |
| [React](https://react.dev) | 19.2.3 | UI library |
| [TypeScript](https://www.typescriptlang.org/) | ^5 | Type safety |
| [Tailwind CSS](https://tailwindcss.com) | ^4 | Utility-first styling |
| [Swiper](https://swiperjs.com/) | ^12.1.2 | Touch slider / carousel |
| [Geist Font](https://vercel.com/font) | – | Typography (via `next/font`) |

---

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the development server |
| `npm run build` | Build the app for production |
| `npm start` | Start the production server |
| `npm run lint` | Run ESLint to check for code issues |

---

## ☁️ Deployment

This project is optimized for deployment on [Vercel](https://vercel.com/new), the platform built by the creators of Next.js.

1. Push your code to GitHub.
2. Import the repository on [vercel.com](https://vercel.com).
3. Vercel will auto-detect Next.js and deploy instantly.

For more details, see the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

---

## 📄 License

This project is private and proprietary to **Active Paints**. All rights reserved.
