"use client";

import * as React from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { ColorModeProvider, useColorMode } from "@/hooks/useColorMode";
import { getTheme } from "@/theme/theme";

function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const { mode } = useColorMode();
  const theme = React.useMemo(() => getTheme(mode), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  return (
    <AppRouterCacheProvider>
      <ColorModeProvider>
        <ThemeWrapper>{children}</ThemeWrapper>
      </ColorModeProvider>
    </AppRouterCacheProvider>
  );
}
