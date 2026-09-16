import { useMemo, useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import {
  ArchiveRestore,
  ArrowUpRight,
  Eye,
  Pencil,
  Plus,
  RotateCcw,
  Save,
  Trash2,
  X,
} from "lucide-react";
import type { Project } from "@aikemal/shared";
import { projectStatusLabels } from "@aikemal/shared";
import { slugifyProjectName, useProjects } from "../lib/projectStore";

const blankProject: Project = {
  slug: "",
  name: "",
  category: "DİJİTAL ÜRÜN",
  status: "repository",
  tags: [],
  description: "",
  problem: "",
  approach: "",
  scope: "",
};

export function AdminProjectsPage() {
  const {
    projects,
    allProjects,
    hiddenSlugs,
    saveProject,
    hideProject,
    restoreProject,
    resetProjects,
    isBuiltIn,
  } = useProjects();
  const [draft, setDraft] = useState<Project>(blankProject);
  const [editingSlug, setEditingSlug] = useState<string | null>(null);
  const [tags, setTags] = useState("");
  const [message, setMessage] = useState("");

  const hiddenProjects = useMemo(
    () => allProjects.filter((project) => hiddenSlugs.includes(project.slug)),
    [allProjects, hiddenSlugs],
  );

  function update<K extends keyof Project>(key: K, value: Project[K]) {
    setDraft((current) => ({ ...current, [key]: value }));
  }

  function startNew() {
    setDraft(blankProject);
    setTags("");
    setEditingSlug(null);
    setMessage("");
    document
      .getElementById("project-form")
      ?.scrollIntoView({ behavior: "smooth" });
  }

  function startEdit(project: Project) {
    setDraft(project);
    setTags(project.tags.join(", "));
    setEditingSlug(project.slug);
    setMessage("");
    document
      .getElementById("project-form")
      ?.scrollIntoView({ behavior: "smooth" });
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const slug = editingSlug || draft.slug || slugifyProjectName(draft.name);
    const duplicate = allProjects.some(
      (project) => project.slug === slug && project.slug !== editingSlug,
    );

    if (duplicate) {
      setMessage("Bu URL kısa adı zaten kullanılıyor.");
      return;
    }

    saveProject(
      {
        ...draft,
        slug,
        name: draft.name.trim(),
        category: draft.category.trim().toLocaleUpperCase("tr-TR"),
        tags: tags
          .split(",")
          .map((tag) => tag.trim())
          .filter(Boolean),
        description: draft.description.trim(),
        problem: draft.problem.trim(),
        approach: draft.approach.trim(),
        scope: draft.scope.trim(),
        website: draft.website?.trim() || undefined,
        github: draft.github?.trim() || undefined,
      },
      editingSlug ?? undefined,
    );
    setMessage(editingSlug ? "Proje güncellendi." : "Yeni proje eklendi.");
    setDraft(blankProject);
    setTags("");
    setEditingSlug(null);
  }

  return (
    <div className="container page admin-page">
      <section className="admin-hero">
        <div>
          <p className="eyebrow">YÖNETİM / PROJE VİTRİNİ</p>
          <h1>
            Ekle. Düzenle.
            <br />
            Gerekirse kaldır.
          </h1>
          <p className="page-intro">
            Buradaki değişiklikler bu tarayıcıda saklanır ve proje sayfalarına
            anında yansır. Supabase bağlandığında aynı ekran kalıcı yönetim
            paneline dönüşebilir.
          </p>
        </div>
        <div className="admin-summary">
          <span>{projects.length}</span>
          <p>vitrindeki proje</p>
          <button className="button dark" type="button" onClick={startNew}>
            <Plus size={17} /> Yeni proje
          </button>
        </div>
      </section>

      <div className="admin-layout">
        <form className="admin-form" id="project-form" onSubmit={submit}>
          <div className="admin-form-heading">
            <div>
              <p className="eyebrow">
                {editingSlug ? "PROJEYİ DÜZENLE" : "YENİ PROJE"}
              </p>
              <h2>{editingSlug ? draft.name : "Vitrine bir iş ekle"}</h2>
            </div>
            {editingSlug && (
              <button className="icon-button" type="button" onClick={startNew}>
                <X size={18} />
                <span className="sr-only">Düzenlemeyi kapat</span>
              </button>
            )}
          </div>

          <div className="admin-field-grid">
            <label>
              Proje adı
              <input
                required
                value={draft.name}
                onChange={(event) => {
                  update("name", event.target.value);
                  if (!editingSlug)
                    update("slug", slugifyProjectName(event.target.value));
                }}
              />
            </label>
            <label>
              URL kısa adı
              <input
                required
                disabled={Boolean(editingSlug)}
                value={draft.slug}
                onChange={(event) =>
                  update("slug", slugifyProjectName(event.target.value))
                }
              />
            </label>
            <label>
              Kategori
              <input
                required
                list="project-categories"
                value={draft.category}
                onChange={(event) => update("category", event.target.value)}
              />
              <datalist id="project-categories">
                <option value="YAPAY ZEKÂ" />
                <option value="DİJİTAL ÜRÜN" />
                <option value="MİNİ ARAÇ" />
                <option value="E-TİCARET" />
                <option value="VERİ & ARAŞTIRMA" />
              </datalist>
            </label>
            <label>
              Durum
              <select
                value={draft.status}
                onChange={(event) =>
                  update("status", event.target.value as Project["status"])
                }
              >
                <option value="live">Yayında</option>
                <option value="repository">GitHub projesi</option>
                <option value="planned">Fikir aşamasında</option>
              </select>
            </label>
          </div>

          <label>
            Kısa açıklama
            <textarea
              required
              rows={3}
              value={draft.description}
              onChange={(event) => update("description", event.target.value)}
            />
          </label>
          <label>
            Çözdüğü problem
            <textarea
              required
              rows={4}
              value={draft.problem}
              onChange={(event) => update("problem", event.target.value)}
            />
          </label>
          <label>
            Yaklaşım
            <textarea
              required
              rows={4}
              value={draft.approach}
              onChange={(event) => update("approach", event.target.value)}
            />
          </label>
          <label>
            Kapsam / proje notu
            <textarea
              required
              rows={3}
              value={draft.scope}
              onChange={(event) => update("scope", event.target.value)}
            />
          </label>
          <label>
            Etiketler
            <input
              value={tags}
              placeholder="SaaS, TypeScript, Otomasyon"
              onChange={(event) => setTags(event.target.value)}
            />
            <small>Etiketleri virgülle ayır.</small>
          </label>
          <div className="admin-field-grid">
            <label>
              Website
              <input
                type="url"
                value={draft.website ?? ""}
                placeholder="https://..."
                onChange={(event) => update("website", event.target.value)}
              />
            </label>
            <label>
              GitHub
              <input
                type="url"
                value={draft.github ?? ""}
                placeholder="https://github.com/..."
                onChange={(event) => update("github", event.target.value)}
              />
            </label>
          </div>

          {message && (
            <p className="admin-message" role="status">
              {message}
            </p>
          )}
          <div className="admin-form-actions">
            <button className="button dark" type="submit">
              <Save size={17} />{" "}
              {editingSlug ? "Değişiklikleri kaydet" : "Projeyi ekle"}
            </button>
            {editingSlug && (
              <button
                className="button admin-secondary"
                type="button"
                onClick={startNew}
              >
                Vazgeç
              </button>
            )}
          </div>
        </form>

        <section
          className="admin-project-list"
          aria-labelledby="admin-projects-title"
        >
          <div className="admin-list-heading">
            <div>
              <p className="eyebrow">YAYINDAKİ LİSTE</p>
              <h2 id="admin-projects-title">{projects.length} proje</h2>
            </div>
            <Link className="text-link" to="/projects">
              Vitrini aç <ArrowUpRight size={16} />
            </Link>
          </div>
          <div className="admin-project-rows">
            {projects.map((project) => (
              <article key={project.slug}>
                <div>
                  <p className="eyebrow">
                    {project.category} · {projectStatusLabels[project.status]}
                  </p>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <span>
                    {isBuiltIn(project.slug)
                      ? "Ana katalog"
                      : "Panelden eklendi"}
                  </span>
                </div>
                <div className="admin-row-actions">
                  <Link
                    className="icon-button"
                    to={`/projects/${project.slug}`}
                  >
                    <Eye size={17} />{" "}
                    <span className="sr-only">Projeyi gör</span>
                  </Link>
                  <button
                    className="icon-button"
                    type="button"
                    onClick={() => startEdit(project)}
                  >
                    <Pencil size={17} />{" "}
                    <span className="sr-only">Projeyi düzenle</span>
                  </button>
                  <button
                    className="icon-button danger"
                    type="button"
                    onClick={() => hideProject(project.slug)}
                  >
                    <Trash2 size={17} />{" "}
                    <span className="sr-only">Projeyi kaldır</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>

      {hiddenProjects.length > 0 && (
        <section className="admin-archive">
          <div>
            <p className="eyebrow">VİTRİNDEN KALDIRILANLAR</p>
            <h2>Geri dönüş kapısı açık.</h2>
          </div>
          <div>
            {hiddenProjects.map((project) => (
              <button
                type="button"
                key={project.slug}
                onClick={() => restoreProject(project.slug)}
              >
                <span>{project.name}</span>
                <ArchiveRestore size={16} /> Geri yükle
              </button>
            ))}
          </div>
        </section>
      )}

      <button className="admin-reset" type="button" onClick={resetProjects}>
        <RotateCcw size={14} /> Yerel değişiklikleri sıfırla
      </button>
    </div>
  );
}
