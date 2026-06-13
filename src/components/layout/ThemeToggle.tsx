"use client";

import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import Box from "@mui/material/Box";
import Switch from "@mui/material/Switch";
import { useColorMode } from "@/hooks/useColorMode";

export default function ThemeToggle() {
  const { mode, toggleColorMode } = useColorMode();
  const isDark = mode === "dark";

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 0.5,
        px: 1,
        py: 0.25,
        borderRadius: 999,
        bgcolor: "action.hover",
      }}
    >
      <LightModeOutlinedIcon
        sx={{
          fontSize: 18,
          color: isDark ? "text.disabled" : "warning.main",
          transition: "color 0.2s ease",
        }}
      />
      <Switch
        checked={isDark}
        onChange={() => toggleColorMode()}
        size="small"
        inputProps={{
          "aria-label": isDark ? "Switch to light mode" : "Switch to dark mode",
        }}
        sx={{
          "& .MuiSwitch-switchBase.Mui-checked": {
            color: "primary.main",
          },
          "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
            bgcolor: "primary.main",
            opacity: 0.6,
          },
        }}
      />
      <DarkModeOutlinedIcon
        sx={{
          fontSize: 18,
          color: isDark ? "primary.light" : "text.disabled",
          transition: "color 0.2s ease",
        }}
      />
    </Box>
  );
}
