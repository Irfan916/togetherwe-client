"use client";

import { ThemeProvider, useTheme } from "next-themes";
import { ToastContainer } from "react-toastify";
import { DARK_THEME, LIGHT_THEME, THEMES } from "@/lib/theme";

function Toaster() {
  const { resolvedTheme } = useTheme();
  return (
    <ToastContainer
      position="top-right"
      autoClose={3500}
      theme={resolvedTheme === DARK_THEME ? "dark" : "light"}
    />
  );
}

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="data-theme"
      themes={THEMES}
      defaultTheme={LIGHT_THEME}
      enableSystem={false}
    >
      {children}
      <Toaster />
    </ThemeProvider>
  );
}