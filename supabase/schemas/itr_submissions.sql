-- Create storage bucket for ITR documents
insert into storage.buckets (id, name, public)
values ('itr-documents', 'itr-documents', true);

-- Enable row level security (RLS) on the bucket
alter table storage.objects enable row level security;

-- Create a table for storing ITR submissions
create table if not exists public.itr_submissions (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  name text not null,
  phone text not null,
  email text not null,
  pan_card_url text not null,
  aadhaar_card_url text not null,
  status text not null default 'pending' check (status in ('pending', 'processing', 'completed'))
);

-- Enable row level security (RLS) on the table
alter table public.itr_submissions enable row level security;

-- Create policies for the storage bucket
create policy "Public Access"
  on storage.objects for select
  using ( bucket_id = 'itr-documents' );

create policy "Authenticated users can upload files"
  on storage.objects for insert
  with check ( bucket_id = 'itr-documents' AND auth.role() = 'authenticated' );

-- Create policies for the submissions table
create policy "Authenticated users can view submissions"
  on public.itr_submissions for select
  using ( auth.role() = 'authenticated' );

create policy "Authenticated users can create submissions"
  on public.itr_submissions for insert
  with check ( auth.role() = 'authenticated' );

create policy "Authenticated users can update submissions"
  on public.itr_submissions for update
  using ( auth.role() = 'authenticated' );