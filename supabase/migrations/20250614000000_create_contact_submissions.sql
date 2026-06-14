-- Contact form submissions stored in Supabase
create table if not exists public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(trim(name)) >= 2),
  email text not null check (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
  message text not null check (char_length(trim(message)) >= 10),
  created_at timestamptz not null default now()
);

create index if not exists contact_submissions_created_at_idx
  on public.contact_submissions (created_at desc);

alter table public.contact_submissions enable row level security;

-- Allow public contact form inserts (anon/authenticated via publishable key)
create policy "Allow contact form inserts"
  on public.contact_submissions
  for insert
  to public
  with check (true);

-- Block public reads; view submissions in Supabase dashboard only
create policy "Block public reads"
  on public.contact_submissions
  for select
  to anon, authenticated
  using (false);
