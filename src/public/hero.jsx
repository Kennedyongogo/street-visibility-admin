import * as React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import blurBg from "../assets/image5.png";

 const Hero = () => {
  return (
    <Box
      component="section"
      sx={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        position: "relative",
        overflow: "hidden",
        py: { xs: 8, md: 10 },

        // Background image requested by you:
        backgroundImage: `linear-gradient(180deg, rgba(7,10,15,0.58), rgba(7,10,15,0.78)), url(${blurBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Soft glow overlay */}
      <Box
        aria-hidden="true"
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(900px 420px at 15% 15%, rgba(29, 100, 105, 0.30), transparent 55%), radial-gradient(900px 420px at 85% 0%, rgba(38, 176, 96, 0.14), transparent 50%)",
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative" }}>
        <Stack spacing={3} alignItems="center" textAlign="center">
          <Typography
            component="h1"
            sx={{
              whiteSpace: "pre-line",
              fontFamily: '"Georgia","Times New Roman",serif',
              fontWeight: 600,
              lineHeight: 0.98,
              letterSpacing: "-0.02em",
              color: "rgba(255,255,255,0.94)",
              textShadow: "0 14px 60px rgba(0,0,0,0.35)",
              fontSize: { xs: "3.0rem", sm: "4.3rem", md: "5.6rem" },
              maxWidth: 860,
            }}
          >
            Street Visibility Limited
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Hero;

