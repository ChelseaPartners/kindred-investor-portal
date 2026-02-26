export const APP_NAME = "Kindred Capital";
export const APP_DESCRIPTION = "Professional real estate investment management";

export const ROUTES = {
  home: "/",
  about: "/about",
  portfolio: "/portfolio",
  contact: "/contact",
  login: "/auth/login",
  portal: {
    dashboard: "/portal",
    properties: "/portal/properties",
    property: (id: string) => `/portal/properties/${id}`,
    propertyFinancials: (id: string) => `/portal/properties/${id}/financials`,
    propertyDocuments: (id: string) => `/portal/properties/${id}/documents`,
    propertyReports: (id: string) => `/portal/properties/${id}/reports`,
    documents: "/portal/documents",
    settings: "/portal/settings",
  },
  admin: {
    dashboard: "/admin",
    properties: "/admin/properties",
    property: (id: string) => `/admin/properties/${id}`,
    newProperty: "/admin/properties/new",
    investors: "/admin/investors",
    investor: (id: string) => `/admin/investors/${id}`,
    newInvestor: "/admin/investors/new",
    upload: "/admin/upload",
    reports: "/admin/reports",
    report: (id: string) => `/admin/reports/${id}`,
    newReport: "/admin/reports/new",
    documents: "/admin/documents",
  },
} as const;

export const PROPERTY_TYPE_LABELS: Record<string, string> = {
  multifamily: "Multifamily",
  office: "Office",
  retail: "Retail",
  industrial: "Industrial",
  mixed_use: "Mixed Use",
  other: "Other",
};

export const PROPERTY_STATUS_LABELS: Record<string, string> = {
  active: "Active",
  under_contract: "Under Contract",
  sold: "Sold",
  prospective: "Prospective",
};

export const DOCUMENT_TYPE_LABELS: Record<string, string> = {
  financial_statement: "Financial Statement",
  tax_document: "Tax Document",
  k1: "K-1",
  operating_agreement: "Operating Agreement",
  insurance: "Insurance",
  inspection: "Inspection",
  report: "Report",
  correspondence: "Correspondence",
  other: "Other",
};
