"use client";

import Box from "@mui/material/Box";

export default function WaveDivider() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        lineHeight: 0,
        mt: -1,
      }}
      aria-hidden="true"
    >
      <Box
        component="svg"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        sx={{ width: "100%", height: { xs: 40, md: 64 }, display: "block" }}
      >
        <path
          d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,80 L0,80 Z"
          fill="currentColor"
        />
      </Box>
    </Box>
  );
}
