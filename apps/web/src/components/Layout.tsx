import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { ArrowUpRight, Asterisk } from "lucide-react";
import { useEffect } from "react";
import { ScrollEffects } from "./ScrollEffects";
import { Seo } from "./Seo";
export function Layout() {
  const { pathname, hash } = useLocation();
  const isEnglish = pathname.startsWith("/en");
  const routeName =
    pathname === "/" || pathname === "/en"
      ? "home"
      : pathname.startsWith("/projects/")
        ? "project-detail"
        : pathname.slice(1).replaceAll("/", "-") || "home";
  useEffect(() => {
    document.documentElement.lang = isEnglish ? "en" : "tr";
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [pathname, hash, isEnglish]);
  return (
    <>
      <Seo />
      <ScrollEffects routeKey={pathname} />
      <a className="skip-link" href="#main">
        {isEnglish ? "Skip to content" : "İçeriğe geç"}
      </a>
      <header className="header container">
        <Link
          to={isEnglish ? "/en" : "/"}
          className="brand"
          aria-label={isEnglish ? "AI Kemal home" : "AI Kemal ana sayfa"}
        >
          <span className="brand-mark">
            <Asterisk size={25} />
          </span>{" "}
          ai kemal<span className="brand-dot">.</span>
        </Link>
        <nav aria-label={isEnglish ? "Main navigation" : "Ana menü"}>
          {isEnglish ? (
            <>
              <Link to="/en#about">About</Link>
              <Link to="/en#expertise">Expertise</Link>
              <Link to="/en#projects">Work</Link>
              <Link className="nav-cta" to="/en/ask">
                Think together <ArrowUpRight size={16} />
              </Link>
            </>
          ) : (
            <>
              <NavLink to="/about">Kemal kim?</NavLink>
              <NavLink to="/expertise">Uzmanlıklar</NavLink>
              <NavLink to="/projects">Projeler & araçlar</NavLink>
              <Link className="nav-cta" to="/ask">
                Birlikte düşünelim <ArrowUpRight size={16} />
              </Link>
            </>
          )}
          <Link className="language-switch" to={isEnglish ? "/" : "/en"}>
            {isEnglish ? "TR" : "EN"}
          </Link>
        </nav>
      </header>
      <main id="main" tabIndex={-1}>
        <div className={`route-stage route-${routeName}`} key={pathname}>
          <Outlet />
        </div>
      </main>
      <footer className="container footer">
        <Link className="brand" to={isEnglish ? "/en" : "/"}>
          ai kemal.
        </Link>
        <p>you should see me in a crown</p>
        <a href="https://github.com/MukeTR" target="_blank" rel="noreferrer">
          GitHub ↗
        </a>
        <span>© 12.11.1995 AI Kemal</span>
        <a
          href="#main"
          aria-label={isEnglish ? "Back to top" : "Sayfanın başına dön"}
        >
          {isEnglish ? "Up ↑" : "Yukarı ↑"}
        </a>
      </footer>
    </>
  );
}
