import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { portfolioData } from './data/portfolio';
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';

function RoutePosition() {
  const { pathname, hash, key } = useLocation();
  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'instant' });
    else window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname, hash, key]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <RoutePosition />
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navbar />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="*" element={<div className="page-shell not-found"><p className="eyebrow">404 / A wrong turn</p><h1>Nothing here. Yet.</h1><Link className="button" to="/">Back to home ↗</Link></div>} />
        </Routes>
      </main>
      <footer className="site-footer page-shell">
        <Link to="/" className="wordmark" aria-label="Michael Richard — home">mr<span>.</span></Link>
        <p>© {new Date().getFullYear()} {portfolioData.name}</p>
        <a href="#main-content">Back to top ↑</a>
      </footer>
    </BrowserRouter>
  );
}
