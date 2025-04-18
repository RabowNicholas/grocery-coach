// app/layout.tsx
"use client";

import "./globals.css";
import { useEffect } from "react";
import * as mixpanel from "@/app/services/mixpanel";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    mixpanel.initMixpanel();
  }, []);

  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
