import * as React from "react";
import { Box } from "@mui/material";

export default function PageBackground({ children, sx }) {
  return (
    <Box
      data-sv-scroll-container
      sx={{
        position: "relative",
        overflow: "auto",
        overflowX: "hidden",
        bgcolor: "primary.main",
        color: "common.white",
        flex: 1,
        display: "flex",
        flexDirection: "column",
        minHeight: 0,
        py: { xs: 4, sm: 5, md: 7, lg: 9 },
        px: { xs: 2, sm: 2.5, md: 3 },
        ...sx,
      }}
    >
      <Box
        aria-hidden="true"
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(900px 420px at 15% 15%, rgba(255,255,255,0.14), transparent 55%), radial-gradient(900px 420px at 85% 0%, rgba(38, 176, 96, 0.18), transparent 50%), radial-gradient(700px 360px at 70% 90%, rgba(133, 195, 65, 0.14), transparent 55%)",
          opacity: 0.95,
          pointerEvents: "none",
        }}
      />
      <Box
        aria-hidden="true"
        sx={{
          position: "absolute",
          inset: 0,
          opacity: 0.18,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
          backgroundSize: "46px 46px",
          maskImage:
            "radial-gradient(560px 320px at 50% 40%, rgba(0,0,0,1), transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <Box sx={{ position: "relative", flex: 1, minHeight: "min-content" }}>{children}</Box>
    </Box>
  );
}

