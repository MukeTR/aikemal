import { Routes, Route, Link } from "react-router-dom";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { AskPage } from "./pages/AskPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { ExpertisePage } from "./pages/ExpertisePage";
import { ProjectDetailPage } from "./pages/ProjectDetailPage";
import { AboutPage } from "./pages/AboutPage";
export function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="ask" element={<AskPage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="projects/:slug" element={<ProjectDetailPage />} />
        <Route path="expertise" element={<ExpertisePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route
          path="*"
          element={
            <section className="container page">
              <p className="eyebrow">404</p>
              <h1>Bu fikir henüz burada değil.</h1>
              <Link className="button dark" to="/">
                Ana sayfaya dön
              </Link>
            </section>
          }
        />
      </Route>
    </Routes>
  );
}
