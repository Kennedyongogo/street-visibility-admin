import * as React from "react";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import PublicShell from "../PublicShell";
import PageBackground from "./PageBackground";
import { SvCard } from "../home/ui";
import { containerAnimations, textAnimations } from "../home/animations";
import SearchingBookAnimation from "./SearchingBookAnimation";

export default function NotFound() {
  const navigate = useNavigate();

  const handleGoHome = React.useCallback(() => {
    navigate("/");
  }, [navigate]);

  const handleGoBack = React.useCallback(() => {
    navigate(-1);
  }, [navigate]);

  return (
    <PublicShell>
      <PageBackground>
        <Container>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              minHeight: { xs: "60vh", md: "70vh" },
              textAlign: "center",
              ...containerAnimations.fadeInUp("0.2s"),
            }}
          >
            <SvCard
              sx={{
                p: { xs: 4, md: 6 },
                maxWidth: 600,
                width: "100%",
                background: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                ...containerAnimations.fadeInScale("0.4s"),
              }}
            >
              <Stack spacing={3} alignItems="center">
                {/* Cartoon Animation */}
                <SearchingBookAnimation />

                {/* 404 Number */}
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: "4rem", sm: "6rem", md: "8rem" },
                    fontWeight: 900,
                    lineHeight: 1,
                    background: "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.7) 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    ...textAnimations.glow,
                    mt: { xs: -2, sm: -3, md: -4 },
                  }}
                >
                  404
                </Typography>

                {/* Error Message */}
                <Stack spacing={1.5}>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 800,
                      color: "common.white",
                      fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
                    }}
                  >
                    Page Not Found
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "rgba(255,255,255,0.86)",
                      fontSize: { xs: "0.95rem", sm: "1rem", md: "1.1rem" },
                      maxWidth: 500,
                      mx: "auto",
                    }}
                  >
                    The page you're looking for doesn't exist or has been moved. Let's get you back on track.
                  </Typography>
                </Stack>

                {/* Action Buttons */}
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={2}
                  sx={{ width: "100%", maxWidth: 400, pt: 1 }}
                >
                  <Button
                    variant="contained"
                    size="large"
                    startIcon={<HomeIcon />}
                    onClick={handleGoHome}
                    fullWidth={false}
                    sx={{
                      flex: { xs: 1, sm: "none" },
                      bgcolor: "info.main",
                      "&:hover": { bgcolor: "primary.main" },
                      px: { xs: 3, sm: 4 },
                      py: 1.5,
                    }}
                  >
                    Go Home
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    startIcon={<ArrowBackIcon />}
                    onClick={handleGoBack}
                    fullWidth={false}
                    sx={{
                      flex: { xs: 1, sm: "none" },
                      borderColor: "rgba(255,255,255,0.3)",
                      color: "common.white",
                      "&:hover": {
                        borderColor: "rgba(255,255,255,0.5)",
                        bgcolor: "rgba(255,255,255,0.1)",
                      },
                      px: { xs: 3, sm: 4 },
                      py: 1.5,
                    }}
                  >
                    Go Back
                  </Button>
                </Stack>

                {/* Helpful Links */}
                <Box sx={{ pt: 2 }}>
                  <Typography
                    variant="caption"
                    sx={{
                      color: "rgba(255,255,255,0.7)",
                      display: "block",
                      mb: 1.5,
                    }}
                  >
                    Or visit these pages:
                  </Typography>
                  <Stack
                    direction="row"
                    spacing={2}
                    justifyContent="center"
                    flexWrap="wrap"
                    sx={{ gap: 1 }}
                  >
                    <Button
                      variant="text"
                      size="small"
                      onClick={() => navigate("/")}
                      sx={{
                        color: "rgba(255,255,255,0.86)",
                        "&:hover": { color: "common.white", bgcolor: "rgba(255,255,255,0.1)" },
                      }}
                    >
                      Home
                    </Button>
                    <Button
                      variant="text"
                      size="small"
                      onClick={() => navigate("/about")}
                      sx={{
                        color: "rgba(255,255,255,0.86)",
                        "&:hover": { color: "common.white", bgcolor: "rgba(255,255,255,0.1)" },
                      }}
                    >
                      About
                    </Button>
                    <Button
                      variant="text"
                      size="small"
                      onClick={() => navigate("/how-it-works")}
                      sx={{
                        color: "rgba(255,255,255,0.86)",
                        "&:hover": { color: "common.white", bgcolor: "rgba(255,255,255,0.1)" },
                      }}
                    >
                      How It Works
                    </Button>
                  </Stack>
                </Box>
              </Stack>
            </SvCard>
          </Box>
        </Container>
      </PageBackground>
    </PublicShell>
  );
}
