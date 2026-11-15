"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { FiMoon, FiSun } from "react-icons/fi";
import { DARK_THEME, LIGHT_THEME } from "@/lib/theme";

const subscribe = () => () => {};

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);

  if (!mounted) {
    return <span className="btn btn-ghost btn-circle" aria-hidden="true" />;
  }

  const isDark = resolvedTheme === DARK_THEME;

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? LIGHT_THEME : DARK_THEME)}
      className="btn btn-ghost btn-circle"
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Light mode" : "Dark mode"}
    >
      {isDark ? <FiSun size={20} /> : <FiMoon size={20} />}
    </button>
  );
}