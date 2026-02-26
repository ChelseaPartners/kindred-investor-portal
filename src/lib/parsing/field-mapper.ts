import type { FieldMapping, ParsedLineItem } from "./types";

const DEFAULT_MAPPINGS: FieldMapping[] = [
  { source_field: "rental income", target_category: "revenue", target_label: "Rental Income" },
  { source_field: "other income", target_category: "other_income", target_label: "Other Income" },
  { source_field: "vacancy", target_category: "revenue", target_label: "Vacancy Loss" },
  { source_field: "insurance", target_category: "operating_expense", target_label: "Insurance" },
  { source_field: "property tax", target_category: "operating_expense", target_label: "Property Taxes" },
  { source_field: "utilities", target_category: "operating_expense", target_label: "Utilities" },
  { source_field: "repairs", target_category: "operating_expense", target_label: "Repairs & Maintenance" },
  { source_field: "management", target_category: "operating_expense", target_label: "Property Management" },
  { source_field: "mortgage", target_category: "debt_service", target_label: "Mortgage Payment" },
  { source_field: "capital", target_category: "capital_expense", target_label: "Capital Expenditure" },
];

export function mapFields(
  lineItems: ParsedLineItem[],
  customMappings?: FieldMapping[]
): ParsedLineItem[] {
  const mappings = customMappings || DEFAULT_MAPPINGS;

  return lineItems.map((item) => {
    const lower = item.label.toLowerCase();
    const mapping = mappings.find((m) => lower.includes(m.source_field.toLowerCase()));

    if (mapping) {
      return {
        ...item,
        category: mapping.target_category,
        subcategory: mapping.target_subcategory,
        label: mapping.target_label,
      };
    }

    return item;
  });
}
