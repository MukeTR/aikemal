import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { ArrowUpRight, Asterisk } from "lucide-react";
import { useEffect } from "react";
export function Layout() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [pathname, hash]);
  return (
    <>
      <a className="skip-link" href="#main">
        İçeriğe geç
      </a>
      <header className="header container">
        <Link to="/" className="brand" aria-label="AI Kemal ana sayfa">
          <span className="brand-mark">
            <Asterisk size={25} />
          </span>{" "}
          ai kemal<span className="brand-dot">.</span>
        </Link>
        <nav aria-label="Ana menü">
          <NavLink to="/about">Kemal kim?</NavLink>
          <NavLink to="/expertise">Uzmanlıklar</NavLink>
          <NavLink to="/projects">Projeler & araçlar</NavLink>
          <Link className="nav-cta" to="/ask">
            Birlikte düşünelim <ArrowUpRight size={16} />
          </Link>
        </nav>
      </header>
      <main id="main" tabIndex={-1}>
        <Outlet />
      </main>
      <footer className="container footer">
        <Link className="brand" to="/">
          ai kemal.
        </Link>
        <p>Ciddiyet işte. Mizah her yerde.</p>
        <a href="https://github.com/MukeTR" target="_blank" rel="noreferrer">
          GitHub ↗
        </a>
        <span>© {new Date().getFullYear()} AI Kemal</span>
        <a href="#main" aria-label="Sayfanın başına dön">
          Yukarı ↑
        </a>
      </footer>
    </>
  );
}
