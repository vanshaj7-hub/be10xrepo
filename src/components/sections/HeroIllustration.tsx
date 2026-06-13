"use client";

import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useActiveSection";
import { netflixColors } from "@/theme/tokens";

const MotionG = motion.create("g");

export default function HeroIllustration() {
  const reducedMotion = useReducedMotion();
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const float = reducedMotion
    ? {}
    : {
        animate: { y: [0, -8, 0] },
        transition: { duration: 4, repeat: Infinity, ease: "easeInOut" as const },
      };

  const floatSlow = reducedMotion
    ? {}
    : {
        animate: { y: [0, -12, 0] },
        transition: { duration: 5.5, repeat: Infinity, ease: "easeInOut" as const },
      };

  const windowBg = isDark ? netflixColors.graphite : netflixColors.white;
  const chromeBg = isDark ? netflixColors.charcoal : netflixColors.lightBg;
  const strokeColor = isDark ? netflixColors.slate : netflixColors.lightMuted;
  const nodeColor = isDark ? netflixColors.slate : "#CBD5E1";

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        maxWidth: 520,
        mx: "auto",
        aspectRatio: "1 / 1",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          right: "-5%",
          width: "55%",
          height: "55%",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(229, 9, 20, 0.25) 0%, transparent 70%)",
          filter: "blur(12px)",
          pointerEvents: "none",
        }}
      />

      <Box
        component="svg"
        viewBox="0 0 480 480"
        sx={{ width: "100%", height: "100%", overflow: "visible" }}
        aria-hidden="true"
      >
        <circle cx="60" cy="120" r="4" fill={nodeColor} opacity="0.6" />
        <circle cx="420" cy="80" r="5" fill={nodeColor} opacity="0.5" />
        <circle cx="390" cy="360" r="4" fill={nodeColor} opacity="0.4" />
        <line x1="60" y1="120" x2="140" y2="180" stroke={strokeColor} strokeWidth="1.5" />
        <line x1="420" y1="80" x2="340" y2="150" stroke={strokeColor} strokeWidth="1.5" />
        <line x1="340" y1="150" x2="240" y2="200" stroke={strokeColor} strokeWidth="1.5" />

        <MotionG {...floatSlow} style={{ transformOrigin: "80px 320px" }}>
          <circle cx="80" cy="320" r="28" fill="none" stroke={netflixColors.silver} strokeWidth="2" />
          <circle cx="80" cy="320" r="10" fill={strokeColor} />
          {[0, 60, 120, 180, 240, 300].map((angle) => (
            <rect
              key={angle}
              x="76"
              y="288"
              width="8"
              height="12"
              rx="2"
              fill={netflixColors.silver}
              transform={`rotate(${angle} 80 320)`}
            />
          ))}
        </MotionG>

        <MotionG {...float}>
          <rect x="100" y="340" width="120" height="72" rx="8" fill={chromeBg} stroke={strokeColor} strokeWidth="2" />
          <rect x="112" y="352" width="96" height="48" rx="4" fill={windowBg} stroke={strokeColor} />
          <rect x="145" y="412" width="30" height="8" rx="2" fill={strokeColor} />
          <rect x="130" y="420" width="60" height="6" rx="3" fill={chromeBg} />
        </MotionG>

        <MotionG {...floatSlow}>
          <rect x="155" y="95" width="290" height="230" rx="14" fill={windowBg} stroke={strokeColor} strokeWidth="2" />
          <rect x="155" y="95" width="290" height="36" rx="14" fill={chromeBg} />
          <rect x="155" y="113" width="290" height="18" fill={chromeBg} />
          <circle cx="178" cy="113" r="5" fill={netflixColors.red} />
          <circle cx="196" cy="113" r="5" fill={netflixColors.silver} />
          <circle cx="214" cy="113" r="5" fill={netflixColors.charcoal} />

          <line x1="300" y1="280" x2="300" y2="210" stroke={netflixColors.silver} strokeWidth="3" strokeLinecap="round" />
          <line x1="240" y1="210" x2="360" y2="210" stroke={netflixColors.silver} strokeWidth="3" strokeLinecap="round" />

          <line x1="240" y1="210" x2="220" y2="240" stroke={netflixColors.silver} strokeWidth="2" />
          <ellipse cx="220" cy="248" rx="42" ry="8" fill={strokeColor} />
          <path
            d="M220 232 C210 232 205 245 220 248 C235 245 230 232 220 232Z"
            fill={netflixColors.red}
            opacity="0.85"
          />
          <text x="220" y="268" textAnchor="middle" fill={netflixColors.silver} fontSize="10" fontFamily="sans-serif">
            User Needs
          </text>

          <line x1="360" y1="210" x2="380" y2="240" stroke={netflixColors.silver} strokeWidth="2" />
          <ellipse cx="380" cy="248" rx="42" ry="8" fill={strokeColor} />
          <rect x="365" y="228" width="30" height="18" rx="3" fill={netflixColors.darkRed} opacity="0.9" />
          <text x="380" y="268" textAnchor="middle" fill={netflixColors.silver} fontSize="10" fontFamily="sans-serif">
            Business Goals
          </text>

          <path
            d="M300 165 L300 145 M290 155 L300 145 L310 155"
            stroke={netflixColors.red}
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="300" cy="135" r="22" fill={isDark ? netflixColors.deepSpace : "#FFF0F0"} stroke={netflixColors.red} strokeWidth="2" />
          <path
            d="M300 125 L295 140 L305 140 Z M300 140 L300 148"
            fill="none"
            stroke={netflixColors.red}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <text x="300" y="175" textAnchor="middle" fill={netflixColors.red} fontSize="11" fontWeight="600" fontFamily="sans-serif">
            Craft
          </text>
        </MotionG>
      </Box>
    </Box>
  );
}
