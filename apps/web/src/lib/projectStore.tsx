import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { projects as builtInProjects, type Project } from "@aikemal/shared";

const STORAGE_KEY = "aikemal.project-admin.v1";

type StoredProjectState = {
  custom: Project[];
  overrides: Record<string, Project>;
  hidden: string[];
};

type ProjectStore = {
  projects: Project[];
  allProjects: Project[];
  hiddenSlugs: string[];
  saveProject: (project: Project, originalSlug?: string) => void;
  hideProject: (slug: string) => void;
  restoreProject: (slug: string) => void;
  resetProjects: () => void;
  isBuiltIn: (slug: string) => boolean;
};

const emptyState: StoredProjectState = {
  custom: [],
  overrides: {},
  hidden: [],
};

function loadState(): StoredProjectState {
  if (typeof window === "undefined") return emptyState;

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return emptyState;
    const parsed = JSON.parse(raw) as Partial<StoredProjectState>;
    return {
      custom: Array.isArray(parsed.custom) ? parsed.custom : [],
      overrides:
        parsed.overrides && typeof parsed.overrides === "object"
          ? parsed.overrides
          : {},
      hidden: Array.isArray(parsed.hidden) ? parsed.hidden : [],
    };
  } catch {
    return emptyState;
  }
}

const ProjectStoreContext = createContext<ProjectStore | null>(null);

export function ProjectProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<StoredProjectState>(loadState);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const allProjects = useMemo(
    () => [
      ...builtInProjects.map(
        (project) => state.overrides[project.slug] ?? project,
      ),
      ...state.custom,
    ],
    [state.custom, state.overrides],
  );

  const projects = useMemo(
    () => allProjects.filter((project) => !state.hidden.includes(project.slug)),
    [allProjects, state.hidden],
  );

  const value = useMemo<ProjectStore>(
    () => ({
      projects,
      allProjects,
      hiddenSlugs: state.hidden,
      isBuiltIn: (slug) =>
        builtInProjects.some((project) => project.slug === slug),
      saveProject: (project, originalSlug) => {
        setState((current) => {
          const editingSlug = originalSlug ?? project.slug;
          const builtIn = builtInProjects.some(
            ({ slug }) => slug === editingSlug,
          );

          if (builtIn) {
            return {
              ...current,
              overrides: { ...current.overrides, [editingSlug]: project },
              hidden: current.hidden.filter((slug) => slug !== editingSlug),
            };
          }

          const exists = current.custom.some(
            ({ slug }) => slug === editingSlug,
          );
          return {
            ...current,
            custom: exists
              ? current.custom.map((item) =>
                  item.slug === editingSlug ? project : item,
                )
              : [...current.custom, project],
            hidden: current.hidden.filter((slug) => slug !== project.slug),
          };
        });
      },
      hideProject: (slug) => {
        setState((current) => ({
          ...current,
          hidden: current.hidden.includes(slug)
            ? current.hidden
            : [...current.hidden, slug],
        }));
      },
      restoreProject: (slug) => {
        setState((current) => ({
          ...current,
          hidden: current.hidden.filter((item) => item !== slug),
        }));
      },
      resetProjects: () => setState(emptyState),
    }),
    [allProjects, projects, state.hidden],
  );

  return (
    <ProjectStoreContext.Provider value={value}>
      {children}
    </ProjectStoreContext.Provider>
  );
}

export function useProjects() {
  const store = useContext(ProjectStoreContext);
  if (!store)
    throw new Error("useProjects must be used inside ProjectProvider");
  return store;
}

export function slugifyProjectName(value: string) {
  return value
    .toLocaleLowerCase("tr-TR")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ı/g, "i")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
