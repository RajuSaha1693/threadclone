import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import React from "react";

import "../globals.css";
export const metadata = {
  title: "Threads Clone",
  desc: "Thread Clone using Next JS",
};

const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className}`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
