import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export function Navbar() {
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || 'light');
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#171916' : '#f7f7f2');
    try { localStorage.setItem('portfolio-theme', theme); } catch { /* Theme remains usable without storage. */ }
  }, [theme]);
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="wordmark" to="/" onClick={() => setMenuOpen(false)} aria-label="Michael Richard — home">mr<span>.</span></Link>
        <nav id="main-navigation" className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
          <Link to="/#about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/#projects" onClick={() => setMenuOpen(false)}>Projects</Link>
          <Link to="/#work" onClick={() => setMenuOpen(false)}>Experience</Link>
          <Link to="/blog" aria-current={pathname.startsWith('/blog') ? 'page' : undefined} onClick={() => setMenuOpen(false)}>Writing</Link>
          <Link className="nav-contact" to="/#contact" onClick={() => setMenuOpen(false)}>Let’s talk <span aria-hidden="true">↗</span></Link>
        </nav>
        <div className="header-controls">
          <button className="theme-toggle" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`} title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              {theme === 'dark' ? <><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"/></> : <path d="M20.5 14A8.5 8.5 0 0 1 10 3.5 8.5 8.5 0 1 0 20.5 14Z"/>}
            </svg>
          </button>
          <button className="menu-toggle" aria-controls="main-navigation" aria-expanded={menuOpen} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? 'Close' : 'Menu'}</button>
        </div>
      </div>
    </header>
  );
}
