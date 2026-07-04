# Ionita Aurel Mihai - Personal Portfolio 🌟

![Portfolio Preview](public/description.png)

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

## Description 📝

Welcome to the personal portfolio of **Ionita Aurel Mihai**, a dedicated web developer with a keen interest in crafting innovative web solutions. This dynamic website serves as a comprehensive showcase of professional expertise, creative projects, and technical proficiency in modern web development. Leveraging cutting-edge technologies, the portfolio not only highlights completed works but also demonstrates a commitment to clean code, user-centric design, and scalable architecture.

The site is meticulously built with React and TypeScript for robust type safety and component reusability, accelerated by Vite's lightning-fast build process. Tailwind CSS ensures a sleek, responsive design that adapts seamlessly across devices, while shadcn/ui components provide polished, accessible UI elements. Supabase powers backend functionalities.

### Key Features ✨

- **Custom Cursor** 🖱️: Animated glowing cyan dot that follows mouse movement with hover scaling effects, hidden on touch devices for better accessibility.
- **Background Music** 🎵: Ambient music toggle button (bottom-left) that auto-starts on first user interaction, creating an immersive browsing experience.
- **Sticky Navigation** 🧭: Transparent navbar with blur backdrop on scroll, responsive hamburger menu for mobile with smooth section navigation.
- **Hero Section** 🚀: Dynamic animations with Framer Motion and a compelling personal narrative to captivate visitors immediately.
- **About Section** 👨‍💻: In-depth biography with an expandable dialog covering professional journey, education (Colegiul Național Ștefan cel Mare), personal interests, and preferred technologies.
- **Projects Gallery** 💼: Dedicated `/projects` route with SEO optimization, sortable grid, category badges, and individual project detail pages (`/projects/:slug`) featuring:
   - **Green Week** - Environmental platform for eco-friendly actions and community cleaning events
   - **Medix** - Medical platform for patient management, appointments, and medical records
   - **Geolocation API** - Real-time location tracking with interactive maps (Leaflet.js, OpenStreetMap)
   - **Christmas Memory** - Festive web app with memory games, gift catcher, and holiday memory wall
   - **Stan Radu Gabriel Portfolio** - Personal portfolio for a high school student and student council member
   - **Task Manager** - Productivity app for task creation, tracking, and organization
   - **Connecto** - Real-time messaging platform with contact management
   - **Târgu Neamț Tourism Guide** - Digital guide for Târgu Neamț city attractions and history
   - **Olimpix** - Educational platform for student learning and exam preparation
   - **Jayson Tatum Portfolio** - Personal portfolio with project highlights
   - High-quality images and live demos with GitHub deployment
- **Skills Overview** 🛠️: Categorized competencies with proficiency levels:
   | Category | Technologies |
   |----------|--------------|
   | Frontend | React, TypeScript, HTML5, CSS3, JavaScript, Tailwind CSS, shadcn/ui, Framer Motion, Bootstrap |
   | Backend | Node.js, Express, Supabase, WebSocket, REST APIs |
   | Database | MongoDB, PostgreSQL |
   | Game Development | Unity |
   | Tools | Git, VS Code, Figma, Postman, Sublime Text, IntelliJ IDEA, Cursor AI |
   | Programming | C, C++, C#, JavaScript, TypeScript |
   | Other | Leaflet.js, OpenStreetMap, Nominatim API, TanStack Query |
- **Certifications** 🏆: Interactive cards opening modal dialogs with credential images, descriptions, verification links, and download buttons.
- **Blog Platform** 📚: Full `/blog` and `/blog/:slug` routes with SEO optimization, search functionality, category filtering, and advanced features:
   - Syntax-highlighted code blocks (prism-react-renderer)
   - Like/heart button with localStorage persistence
   - Share functionality via Web Share API with clipboard fallback
   - Related posts suggestions
   - JSON-LD Schema.org structured data for SEO
- **Projects Preview** 🖼️: Homepage section showcasing 3 recent projects with hover overlays, category badges, and tech stack chips.
- **Blog Preview** 📄: Homepage section displaying 3 latest blog posts with images, tags, dates, read time, and "View all articles" link.
- **Footer** 📋: Multi-column footer with navigation buttons, blog section links, copyright notice, and social icons (GitHub, LinkedIn, Mail, Twitter/X).
- **404 Not Found Page** ❌: Dedicated error page for invalid routes.
- **Contact Integration** 📞: Multi-channel contact options with form validation using react-hook-form, zod schema validation, and toast notifications (sonner).
- **Chatbot** 🤖: Client-side AI assistant with smart keyword/intent matching for contextual responses about projects and technologies.

Performance optimizations include lazy loading, code splitting, and efficient asset management. Security measures encompass input validation, HTTPS enforcement, and secure API integrations. Accessibility is prioritized with semantic HTML, ARIA attributes, and keyboard navigation support.

## Blog Articles 📚

The blog contains multiple in-depth articles:
- "Algoritmi de bază pentru începători" (2026-01-20)
- "Cum funcționează HTML, CSS și JavaScript" (2026-01-20)
- "Bazele programării: variabile, tipuri de date și funcții" (2026-01-20)
- "Dezvoltarea aplicațiilor mobile cu Flutter" (2026-04-11)
- "Git și GitHub - Ghid Complet" (2026-04-14)
- "React pentru începători" (2026-05-23)
- "Cum să-ți faci primul site și să-l pui online gratis" (2026-07-02)

## Tech Stack 🛠️
- **Core Framework**: React ⚛️ with TypeScript 📘 for type-safe development
- **Build Tool**: Vite ⚡ for rapid development and optimized production builds
- **Styling**: Tailwind CSS 🎨 with PostCSS for utility-first CSS, class-based dark mode support
- **UI Library**: shadcn/ui based on Radix UI primitives for consistent, accessible components
- **Routing**: React Router for multi-page SPA with `/blog`, `/projects`, and 404 routes
- **SEO**: React Helmet for dynamic meta tags, canonical URLs, and Open Graph tags
- **Animations**: Framer Motion for smooth, performant animations
- **Backend**: Supabase for real-time database, authentication, and serverless functions
- **Syntax Highlighting**: prism-react-renderer for blog code blocks
- **Forms**: react-hook-form + zod for validated form inputs
- **Notifications**: sonner for toast notifications
- **State Management**: TanStack Query for server state management
- **Development Tools**: ESLint 🔍 for code quality, Git for version control
- **Deployment**: Compatible with Vercel, Netlify, or GitHub Pages (`gh-pages`)

## Screenshots 📸
*(Add screenshots here when available)*
- Hero Section
- Projects Showcase
- Skills Dashboard
- Blog Interface
- Project Detail Page
- Blog Post with Code Blocks

## Installation & Setup 🚀
1. **Prerequisites**: Ensure Node.js (v16+) and npm are installed.
2. **Clone Repository**: `git clone https://github.com/yourusername/ionitaaurelmihai.git`
3. **Navigate**: `cd ionitaaurelmihai`
4. **Install Dependencies**: `npm install`
5. **Environment Setup**: Copy `.env.example` to `.env` and configure Supabase keys.
6. **Development Server**: `npm run dev` - Launches on `http://localhost:5173`
7. **Build Production**: `npm run build`
8. **Preview Build**: `npm run preview`
9. **Deploy to GitHub Pages**: `npm run deploy`
10. **Linting**: `npm run lint` to check code quality

## Project Structure 📁
```
ionitaaurelmihai/
├── public/
│   ├── projects/           # Project screenshots
│   └── *.png               # Tech stack icons
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── ui/           # shadcn/ui components
│   │   ├── CustomCursor.tsx
│   │   ├── BackgroundMusic.tsx
│   │   ├── Navigation.tsx
│   │   ├── Footer.tsx
│   │   ├── BlogPreview.tsx
│   │   ├── ProjectsPreview.tsx
│   │   ├── CodeBlock.tsx
│   │   ├── Certifications.tsx
│   │   └── *.tsx         # Custom components (Hero, About, Projects, etc.)
│   ├── pages/            # Route-based page components
│   │   ├── Blog.tsx
│   │   ├── BlogPost.tsx
│   │   ├── Projects.tsx
│   │   ├── ProjectDetail.tsx
│   │   └── NotFound.tsx
│   ├── data/             # Static data files (projects.ts, blogPosts.ts, etc.)
│   ├── hooks/            # Custom React hooks (useToast.ts)
│   ├── integrations/     # External service integrations (Supabase)
│   ├── lib/              # Utility functions and configurations
│   └── index.css         # Global styles with custom cursor effects
├── supabase/              # Backend functions and config
├── *.config.*            # Configuration files (Vite, Tailwind, Router, etc.)
└── package.json          # Dependencies and scripts
```

## Routing Architecture 🔀
- `/` - Homepage with hero, about, projects preview, blog preview, and contact sections
- `/blog` - Full blog listing with search and category filtering
- `/blog/:slug` - Individual blog post with likes, sharing, and related posts
- `/projects` - All projects in a sortable grid with SEO optimization
- `/projects/:slug` - Individual project detail page
- `*` - 404 Not Found error page

## SEO & Accessibility ♿
- React Helmet for per-page dynamic titles, meta descriptions, keywords, and canonical URLs
- Open Graph tags for social sharing
- JSON-LD Schema.org structured data on blog posts
- Semantic HTML elements and ARIA attributes throughout
- Keyboard navigation support for all interactive elements
- Dark mode support via `next-themes`

## API Integrations 🔗
- **Supabase**: Handles user authentication, database queries, and potential AI functionality.
- **TanStack Query**: Manages server state, caching, and background updates for data fetching.
- **Geolocation API**: Integrated in projects for location-based features.
- **Web Share API**: Native sharing capability for blog posts and projects.

## Dependencies 📦
Key libraries used:
- `react`, `react-dom`, `react-router-dom`
- `framer-motion`, `prism-react-renderer`, `html-react-parser`
- `react-hook-form`, `zod`, `@hookform/resolvers`
- `@tanstack/react-query`, `sonner`, `next-themes`
- `react-helmet-async`
- `date-fns`

## Contributing 🤝
Contributions are welcome! Please follow these steps:
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

For major changes, please discuss in an issue first.

## Testing 🧪
- Run tests: `npm test` (if implemented)
- Manual testing guidelines for UI components and integrations

## Deployment 🌐
- **Vercel**: Connect GitHub repo for automatic deployments
- **Netlify**: Drag-and-drop build folder or integrate with Git
- **GitHub Pages**: Use `npm run deploy` for automated deployment
- **Custom**: Use `npm run build` output in any static host

## License 📄
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments 🙏
- Thanks to the open-source community for tools like React, Vite, and Tailwind CSS
- Special appreciation for shadcn/ui and Supabase for empowering modern web development

## Contact 📧
- **Live Site**: [https://ionitaaurelmihai.vercel.app/](https://ionitaaurelmihai.vercel.app/)
- **Email**: aurel.ionita@example.com (placeholder)
- **LinkedIn**: [linkedin.com/in/itsiamdev](https://linkedin.com/in/itsiamdev)
- **GitHub**: [github.com/itsiamdev](https://github.com/itsiamdev)

---

*Built with ❤️ by Ionita Aurel Mihai*
