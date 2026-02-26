import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chelsea Partners | Real Estate Investment Management",
  description:
    "Chelsea Partners delivers institutional-quality real estate investments with transparent reporting, consistent distributions, and hands-on asset management.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
