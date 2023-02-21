"use client";

import { ThemeProvider } from "next-themes";
import '@tremor/react/dist/esm/tremor.css'

export function Providers({ children }) {
  return (
    <ThemeProvider attribute="class"  defaultTheme="light">
      {children}
    </ThemeProvider>
  );
}
