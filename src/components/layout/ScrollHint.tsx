"use client";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { scrollToSection } from "@/lib/scroll";

export default function ScrollHint() {
  const reducedMotion = useReducedMotion();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: { xs: 2, md: -2 },
        mb: { xs: 0, md: 2 },
      }}
    >
      <motion.div
        animate={reducedMotion ? {} : { y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <IconButton
          onClick={() => scrollToSection("#about")}
          aria-label="Scroll to about section"
          sx={{
            color: "text.secondary",
            border: 1,
            borderColor: "divider",
            bgcolor: "background.paper",
            "&:hover": {
              bgcolor: "action.hover",
              color: "primary.main",
            },
          }}
        >
          <KeyboardArrowDownIcon />
        </IconButton>
      </motion.div>
    </Box>
  );
}
