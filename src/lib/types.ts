export type UserRole = "admin" | "investor";
export type PropertyStatus = "active" | "under_contract" | "sold" | "prospective";
export type PropertyType = "multifamily" | "office" | "retail" | "industrial" | "mixed_use" | "other";
export type PeriodType = "monthly" | "quarterly" | "annual";
export type PeriodStatus = "draft" | "reviewed" | "published";
export type LineItemCategory =
  | "revenue"
  | "operating_expense"
  | "capital_expense"
  | "debt_service"
  | "reserves"
  | "other_income"
  | "other_expense";
export type DocumentType =
  | "financial_statement"
  | "tax_document"
  | "k1"
  | "operating_agreement"
  | "insurance"
  | "inspection"
  | "report"
  | "correspondence"
  | "other";
export type ReportType = "monthly" | "quarterly" | "annual";
export type ReportStatus = "draft" | "review" | "published";
export type UploadStatus = "pending" | "processing" | "completed" | "failed";

export interface Profile {
  id: string;
  email: string;
  full_name: string | null;
  company_name: string | null;
  phone: string | null;
  role: UserRole;
  avatar_url: string | null;
  created_at: string;
  updated_at: string;
}

export interface Property {
  id: string;
  name: string;
  address_line1: string | null;
  address_line2: string | null;
  city: string | null;
  state: string | null;
  zip: string | null;
  property_type: PropertyType;
  status: PropertyStatus;
  units: number | null;
  square_footage: number | null;
  year_built: number | null;
  acquisition_date: string | null;
  acquisition_price: number | null;
  current_valuation: number | null;
  image_url: string | null;
  description: string | null;
  created_at: string;
  updated_at: string;
}

export interface InvestorAccess {
  id: string;
  investor_id: string;
  property_id: string;
  ownership_percentage: number | null;
  invested_amount: number | null;
  invested_date: string | null;
  created_at: string;
  investor?: Profile;
  property?: Property;
}

export interface FinancialPeriod {
  id: string;
  property_id: string;
  period_type: PeriodType;
  start_date: string;
  end_date: string;
  status: PeriodStatus;
  created_at: string;
  updated_at: string;
  line_items?: FinancialLineItem[];
}

export interface FinancialLineItem {
  id: string;
  period_id: string;
  category: LineItemCategory;
  subcategory: string | null;
  label: string;
  amount: number;
  notes: string | null;
  sort_order: number;
  created_at: string;
}

export interface Document {
  id: string;
  property_id: string | null;
  uploaded_by: string | null;
  document_type: DocumentType;
  title: string;
  description: string | null;
  file_path: string;
  file_size: number | null;
  mime_type: string | null;
  period_start: string | null;
  period_end: string | null;
  is_published: boolean;
  dropbox_link: string | null;
  created_at: string;
  updated_at: string;
}

export interface Report {
  id: string;
  property_id: string;
  period_id: string | null;
  report_type: ReportType;
  title: string;
  content: Record<string, unknown> | null;
  status: ReportStatus;
  published_at: string | null;
  created_by: string | null;
  created_at: string;
  updated_at: string;
  property?: Property;
}

export interface Upload {
  id: string;
  property_id: string;
  uploaded_by: string | null;
  file_path: string;
  original_filename: string;
  file_size: number | null;
  mime_type: string | null;
  status: UploadStatus;
  parsed_data: Record<string, unknown> | null;
  error_message: string | null;
  created_at: string;
  processed_at: string | null;
}

export interface ActivityLog {
  id: string;
  actor_id: string | null;
  property_id: string | null;
  action: string;
  details: Record<string, unknown> | null;
  created_at: string;
}
