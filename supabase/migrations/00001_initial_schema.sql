-- Enable necessary extensions
create extension if not exists "uuid-ossp";

-- Profiles table (extends Supabase auth.users)
create type user_role as enum ('admin', 'investor');

create table profiles (
  id uuid references auth.users on delete cascade primary key,
  email text not null,
  full_name text,
  company_name text,
  phone text,
  role user_role not null default 'investor',
  avatar_url text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Properties
create type property_status as enum ('active', 'under_contract', 'sold', 'prospective');
create type property_type as enum ('multifamily', 'office', 'retail', 'industrial', 'mixed_use', 'other');

create table properties (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  address_line1 text,
  address_line2 text,
  city text,
  state text,
  zip text,
  property_type property_type not null default 'multifamily',
  status property_status not null default 'active',
  units integer,
  square_footage integer,
  year_built integer,
  acquisition_date date,
  acquisition_price numeric(15,2),
  current_valuation numeric(15,2),
  image_url text,
  description text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Investor <-> Property access (junction table)
create table investor_access (
  id uuid default uuid_generate_v4() primary key,
  investor_id uuid references profiles(id) on delete cascade not null,
  property_id uuid references properties(id) on delete cascade not null,
  ownership_percentage numeric(5,2),
  invested_amount numeric(15,2),
  invested_date date,
  created_at timestamptz default now(),
  unique(investor_id, property_id)
);

-- Financial periods
create type period_type as enum ('monthly', 'quarterly', 'annual');
create type period_status as enum ('draft', 'reviewed', 'published');

create table financial_periods (
  id uuid default uuid_generate_v4() primary key,
  property_id uuid references properties(id) on delete cascade not null,
  period_type period_type not null,
  start_date date not null,
  end_date date not null,
  status period_status not null default 'draft',
  created_at timestamptz default now(),
  updated_at timestamptz default now(),
  unique(property_id, period_type, start_date)
);

-- Financial line items
create type line_item_category as enum (
  'revenue', 'operating_expense', 'capital_expense',
  'debt_service', 'reserves', 'other_income', 'other_expense'
);

create table financial_line_items (
  id uuid default uuid_generate_v4() primary key,
  period_id uuid references financial_periods(id) on delete cascade not null,
  category line_item_category not null,
  subcategory text,
  label text not null,
  amount numeric(15,2) not null default 0,
  notes text,
  sort_order integer default 0,
  created_at timestamptz default now()
);

-- Documents
create type document_type as enum (
  'financial_statement', 'tax_document', 'k1',
  'operating_agreement', 'insurance', 'inspection',
  'report', 'correspondence', 'other'
);

create table documents (
  id uuid default uuid_generate_v4() primary key,
  property_id uuid references properties(id) on delete cascade,
  uploaded_by uuid references profiles(id),
  document_type document_type not null default 'other',
  title text not null,
  description text,
  file_path text not null,
  file_size integer,
  mime_type text,
  period_start date,
  period_end date,
  is_published boolean default false,
  dropbox_link text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Reports
create type report_type as enum ('monthly', 'quarterly', 'annual');
create type report_status as enum ('draft', 'review', 'published');

create table reports (
  id uuid default uuid_generate_v4() primary key,
  property_id uuid references properties(id) on delete cascade not null,
  period_id uuid references financial_periods(id),
  report_type report_type not null,
  title text not null,
  content jsonb,
  status report_status not null default 'draft',
  published_at timestamptz,
  created_by uuid references profiles(id),
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Upload log
create type upload_status as enum ('pending', 'processing', 'completed', 'failed');

create table uploads (
  id uuid default uuid_generate_v4() primary key,
  property_id uuid references properties(id) on delete cascade not null,
  uploaded_by uuid references profiles(id),
  file_path text not null,
  original_filename text not null,
  file_size integer,
  mime_type text,
  status upload_status not null default 'pending',
  parsed_data jsonb,
  error_message text,
  created_at timestamptz default now(),
  processed_at timestamptz
);

-- Activity log
create table activity_log (
  id uuid default uuid_generate_v4() primary key,
  actor_id uuid references profiles(id),
  property_id uuid references properties(id),
  action text not null,
  details jsonb,
  created_at timestamptz default now()
);

-- Row Level Security Policies
alter table profiles enable row level security;
alter table properties enable row level security;
alter table investor_access enable row level security;
alter table financial_periods enable row level security;
alter table financial_line_items enable row level security;
alter table documents enable row level security;
alter table reports enable row level security;
alter table uploads enable row level security;
alter table activity_log enable row level security;

-- Helper function to check if user is admin
create or replace function is_admin()
returns boolean as $$
  select exists (
    select 1 from profiles where id = auth.uid() and role = 'admin'
  );
$$ language sql security definer;

-- Helper function to check if user has access to a property
create or replace function has_property_access(prop_id uuid)
returns boolean as $$
  select exists (
    select 1 from investor_access
    where investor_id = auth.uid() and property_id = prop_id
  ) or is_admin();
$$ language sql security definer;

-- Profiles policies
create policy "Users can view own profile" on profiles for select using (id = auth.uid());
create policy "Admins can view all profiles" on profiles for select using (is_admin());
create policy "Users can update own profile" on profiles for update using (id = auth.uid());
create policy "Admins can manage all profiles" on profiles for all using (is_admin());

-- Properties policies
create policy "Investors see their properties" on properties for select using (has_property_access(id));
create policy "Admins manage properties" on properties for all using (is_admin());

-- Investor access policies
create policy "Investors see own access" on investor_access for select using (investor_id = auth.uid());
create policy "Admins manage access" on investor_access for all using (is_admin());

-- Financial periods policies
create policy "View financial periods" on financial_periods for select using (has_property_access(property_id) and status = 'published');
create policy "Admins manage periods" on financial_periods for all using (is_admin());

-- Financial line items policies
create policy "View line items" on financial_line_items for select using (exists (
  select 1 from financial_periods fp
  where fp.id = period_id and has_property_access(fp.property_id) and fp.status = 'published'
));
create policy "Admins manage line items" on financial_line_items for all using (is_admin());

-- Documents policies
create policy "View published documents" on documents for select using (
  (property_id is null or has_property_access(property_id)) and is_published = true
);
create policy "Admins manage documents" on documents for all using (is_admin());

-- Reports policies
create policy "View published reports" on reports for select using (has_property_access(property_id) and status = 'published');
create policy "Admins manage reports" on reports for all using (is_admin());

-- Uploads policies
create policy "Admins manage uploads" on uploads for all using (is_admin());

-- Activity log policies
create policy "View relevant activity" on activity_log for select using (property_id is null or has_property_access(property_id));
create policy "Admins manage activity" on activity_log for all using (is_admin());

-- Trigger to auto-create profile on signup
create or replace function handle_new_user()
returns trigger as $$
begin
  insert into profiles (id, email, full_name, role)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data->>'full_name', ''),
    coalesce((new.raw_user_meta_data->>'role')::user_role, 'investor')
  );
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function handle_new_user();

-- Indexes for performance
create index idx_investor_access_investor on investor_access(investor_id);
create index idx_investor_access_property on investor_access(property_id);
create index idx_financial_periods_property on financial_periods(property_id);
create index idx_financial_line_items_period on financial_line_items(period_id);
create index idx_documents_property on documents(property_id);
create index idx_reports_property on reports(property_id);
create index idx_activity_log_property on activity_log(property_id);
create index idx_uploads_property on uploads(property_id);
