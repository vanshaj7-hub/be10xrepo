"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { ColorMode } from "@/theme/tokens";
import { STORAGE_KEY } from "@/theme/tokens";

type ColorModeContextValue = {
  mode: ColorMode;
  toggleColorMode: () => void;
  setColorMode: (mode: ColorMode) => void;
};

const ColorModeContext = createContext<ColorModeContextValue | undefined>(undefined);

function getInitialMode(): ColorMode {
  if (typeof window === "undefined") {
    return "light";
  }

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "light" || stored === "dark") {
    return stored;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function ColorModeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setModeState] = useState<ColorMode>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setModeState(getInitialMode());
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    window.localStorage.setItem(STORAGE_KEY, mode);
    document.documentElement.setAttribute("data-color-mode", mode);
  }, [mode, mounted]);

  const setColorMode = useCallback((nextMode: ColorMode) => {
    setModeState(nextMode);
  }, []);

  const toggleColorMode = useCallback(() => {
    setModeState((prev) => (prev === "light" ? "dark" : "light"));
  }, []);

  const value = useMemo(
    () => ({ mode, toggleColorMode, setColorMode }),
    [mode, toggleColorMode, setColorMode],
  );

  return <ColorModeContext.Provider value={value}>{children}</ColorModeContext.Provider>;
}

export function useColorMode() {
  const context = useContext(ColorModeContext);
  if (!context) {
    throw new Error("useColorMode must be used within ColorModeProvider");
  }
  return context;
}
