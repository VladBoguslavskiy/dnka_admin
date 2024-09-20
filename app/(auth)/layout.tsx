import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DNKA - Admin Auth",
  description: "Admin dashboard to manage DNKA data",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="ua">
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
