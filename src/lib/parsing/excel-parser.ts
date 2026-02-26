import * as XLSX from "xlsx";
import type { ParseResult, ParsedLineItem } from "./types";

export async function parseExcelFile(buffer: Buffer): Promise<ParseResult> {
  try {
    const workbook = XLSX.read(buffer, { type: "buffer" });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 }) as unknown[][];

    const lineItems: ParsedLineItem[] = [];
    let currentCategory = "other_expense";

    for (const row of data) {
      if (!row || row.length < 2) continue;

      const label = String(row[0] || "").trim();
      const amount = parseFloat(String(row[1] || "0").replace(/[,$]/g, ""));

      if (!label || isNaN(amount)) continue;

      const detectedCategory = detectCategory(label);
      if (detectedCategory) {
        currentCategory = detectedCategory;
      }

      lineItems.push({
        category: currentCategory,
        label,
        amount,
      });
    }

    return {
      success: true,
      data: {
        line_items: lineItems,
        raw_data: { sheets: workbook.SheetNames, rows: data.length },
      },
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to parse Excel file",
    };
  }
}

function detectCategory(label: string): string | null {
  const lower = label.toLowerCase();
  if (lower.includes("revenue") || lower.includes("income") || lower.includes("rent")) {
    return "revenue";
  }
  if (lower.includes("operating") || lower.includes("expense") || lower.includes("maintenance")) {
    return "operating_expense";
  }
  if (lower.includes("capital") || lower.includes("capex") || lower.includes("improvement")) {
    return "capital_expense";
  }
  if (lower.includes("debt") || lower.includes("mortgage") || lower.includes("loan")) {
    return "debt_service";
  }
  if (lower.includes("reserve")) {
    return "reserves";
  }
  return null;
}
