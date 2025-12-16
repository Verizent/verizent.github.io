# 🌐 Personal Portfolio Website

A modern, responsive portfolio website built with **Vite.js** and **React**, featuring a clean design with dark mode support, smooth animations, and a dynamic blog system.

[![Deploy to GitHub Pages](https://github.com/Verizent/verizent.github.io/workflows/Deploy%20to%20GitHub%20Pages/badge.svg)](https://github.com/Verizent/verizent.github.io/actions)

## 🚀 Live Demo

**[verizent.github.io](https://verizent.github.io)**

## ✨ Features

- **🎨 Modern UI/UX** - Clean, professional design with smooth transitions and hover effects
- **🌓 Dark Mode** - Toggle between light and pitch-black dark theme
- **📱 Fully Responsive** - Optimized for all screen sizes and devices
- **✍️ Dynamic Blog** - HTML-based blog system with routing support
- **🎵 Music Section** - Curated Spotify playlist with direct links
- **💼 Work & Education Timeline** - Interactive resume with connecting lines
- **🛠️ Skills Showcase** - Animated carousel with technology categorization
- **🎯 Projects Gallery** - Featured projects with live links and tech stack
- **🏆 Awards & Achievements** - Recognition and honors section
- **📧 Contact Integration** - Direct email and social media links
- **⚡ Lightning Fast** - Vite-powered development with optimized builds
- **🎬 Scroll Animations** - AOS (Animate On Scroll) integration throughout
- **🔗 Client-side Routing** - React Router for seamless navigation

## 🛠️ Tech Stack

### Core
- **[Vite](https://vitejs.dev/)** - Next Generation Frontend Tooling
- **[React 19](https://react.dev/)** - UI Library
- **[React Router DOM](https://reactrouter.com/)** - Client-side Routing

### Styling
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS Framework
- **[PostCSS](https://postcss.org/)** - CSS Processing
- **[Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans)** - Google Font

### Libraries & Tools
- **[AOS](https://michalsnik.github.io/aos/)** - Animate On Scroll Library
- **ESLint** - Code Quality
- **GitHub Actions** - CI/CD Pipeline

## 📂 Project Structure

```
my-new-web/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment
├── public/
│   ├── Assets/                 # Images and media
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Bottom navigation bar
│   │   ├── ProjectCard.jsx     # Project display cards
│   │   ├── ResumeCard.jsx      # Work/Education cards
│   │   └── TechStack.jsx       # Skills carousel
│   ├── data/
│   │   ├── blog.js             # Blog posts data
│   │   ├── portfolio.js        # Main portfolio data
│   │   └── techStack.js        # Technology categories
│   ├── pages/
│   │   ├── Home.jsx            # Main landing page
│   │   ├── Blog.jsx            # Blog listing page
│   │   └── BlogPost.jsx        # Individual blog post
│   ├── utils/
│   │   └── markdown.jsx        # Markdown link parser
│   ├── App.jsx                 # Router configuration
│   ├── index.css               # Global styles
│   └── main.jsx                # Entry point
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## 🚀 Getting Started

### Prerequisites
- Node.js 22.x or higher
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Verizent/verizent.github.io.git
   cd verizent.github.io
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
```

Built files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 🌐 Deployment

This project uses **GitHub Actions** for automatic deployment to GitHub Pages.

### Deployment Workflow
- Pushes to `master` branch trigger automatic builds
- Vite builds the project to `dist/`
- 404.html is created for SPA routing support
- Built files are deployed to `gh-pages` branch
- Site is live at **verizent.github.io**

### Manual Deployment
```bash
npm run build
# Deploy the dist/ folder to your hosting service
```

## 📝 Customization

### Update Portfolio Data
Edit `src/data/portfolio.js` to customize:
- Personal information
- Work experience
- Education
- Projects
- Awards
- Music preferences
- Contact details

### Add Blog Posts
Add new posts in `src/data/blog.js`:
```javascript
{
  slug: "post-url",
  title: "Post Title",
  publishedAt: "2025-12-16",
  summary: "Brief summary...",
  content: `<p>HTML content...</p>`
}
```

### Modify Tech Stack
Update `src/data/techStack.js` to add/remove technologies.

### Styling
- Global styles: `src/index.css`
- Tailwind config: `tailwind.config.js`
- Component-level: Inline Tailwind classes

## 🎨 Color Scheme

- **Light Mode**: White background with gray accents
- **Dark Mode**: Pitch black (#000000) with subtle grays
- **Accent**: Green (#10B981) for interactive elements

## � Inspiration

Design and structure inspired by [dillionverma/portfolio](https://github.com/dillionverma/portfolio)

## �📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Michael Richard Suryajaya**

- GitHub: [@Verizent](https://github.com/Verizent)
- LinkedIn: [Michael Richard Suryajaya](https://linkedin.com/in/michael-richard-suryajaya)
- Email: mrichardsuryajaya@gmail.com

---

⭐ **Star this repo if you found it helpful!**
