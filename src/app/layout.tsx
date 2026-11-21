import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OHRA | Property Management & Hospitality",
  description: "OHRA brings residential and commercial property management, NRI property care and boutique stays together under one roof.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
