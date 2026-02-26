export interface ParsedFinancialData {
  property_name?: string;
  period_start?: string;
  period_end?: string;
  period_type?: "monthly" | "quarterly" | "annual";
  line_items: ParsedLineItem[];
  raw_data?: Record<string, unknown>;
}

export interface ParsedLineItem {
  category: string;
  subcategory?: string;
  label: string;
  amount: number;
  notes?: string;
}

export interface ParseResult {
  success: boolean;
  data?: ParsedFinancialData;
  error?: string;
  warnings?: string[];
}

export interface FieldMapping {
  source_field: string;
  target_category: string;
  target_subcategory?: string;
  target_label: string;
}
