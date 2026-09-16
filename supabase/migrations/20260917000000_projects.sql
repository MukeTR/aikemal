-- Optional first schema. Public users may only read published projects.
create table public.projects (
 id uuid primary key default gen_random_uuid(),
 slug text unique not null,
 name text not null,
 description text not null default '',
 status text not null default 'planned' check (status in ('planned', 'active', 'archived')),
 published boolean not null default false,
 created_at timestamptz not null default now()
);
alter table public.projects enable row level security;
revoke all on public.projects from anon, authenticated;
grant select on public.projects to anon, authenticated;
create policy "Published projects are readable" on public.projects for select to anon, authenticated using (published = true);
-- No client-side write policy. Add explicit authenticated ownership policies before enabling writes.
