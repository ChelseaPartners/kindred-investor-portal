import type { ParseResult, ParsedLineItem } from "./types";

export async function parsePdfFile(buffer: Buffer): Promise<ParseResult> {
  try {
    // Dynamic import to avoid pdf-parse loading test fixtures at build time
    const pdf = (await import("pdf-parse")).default;
    const data = await pdf(buffer);
    const text = data.text;
    const lines = text.split("\n").filter((line: string) => line.trim());

    const lineItems: ParsedLineItem[] = [];

    for (const line of lines) {
      const match = line.match(/^(.+?)\s+([\d,$.-]+)\s*$/);
      if (match) {
        const label = match[1].trim();
        const amount = parseFloat(match[2].replace(/[,$]/g, ""));
        if (!isNaN(amount)) {
          lineItems.push({
            category: "other_expense",
            label,
            amount,
          });
        }
      }
    }

    return {
      success: true,
      data: {
        line_items: lineItems,
        raw_data: { pages: data.numpages, text_length: text.length },
      },
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to parse PDF file",
    };
  }
}
