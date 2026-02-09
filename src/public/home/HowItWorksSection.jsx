import * as React from "react";
import { Box, Button, CardContent, Chip, Container, Divider, Grid, IconButton, Stack, Tooltip, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Section, SvCard, useScrollFadeIn, scrollToId } from "./ui";
import { cardAnimations, iconAnimations, textAnimations, buttonAnimations } from "./animations";

function StepCard({ step, index }) {
  const stepFade = useScrollFadeIn({ threshold: 0.1 });

  return (
    <Box
      ref={stepFade.ref}
      sx={{
        opacity: stepFade.isVisible ? 1 : 0,
        transform: stepFade.isVisible ? "translateY(0)" : "translateY(30px)",
        transition: `opacity 0.6s ease-out ${index * 0.15}s, transform 0.6s ease-out ${index * 0.15}s`,
      }}
    >
      <SvCard
        sx={{
          height: "100%",
          boxShadow: { xs: "0 10px 26px rgba(29, 100, 105, 0.10)", md: "0 14px 38px rgba(29, 100, 105, 0.10)" },
          ...cardAnimations.stepCard,
        }}
      >
        <CardContent sx={{ p: { xs: 2.5, sm: 2.75, md: 3 } }}>
          <Stack spacing={1.2}>
            <Stack direction="row" spacing={1} alignItems="center">
              <Chip
                className="step-chip"
                label={`Step ${index + 1}`}
                size="small"
                sx={{
                  bgcolor: "rgba(29, 100, 105, 0.18)",
                  border: "1px solid",
                  borderColor: "divider",
                }}
              />
              <Box sx={{ flex: 1 }} />
              <Box
                className="step-dot"
                aria-hidden="true"
                sx={{
                  width: 10,
                  height: 10,
                  borderRadius: 999,
                  bgcolor:
                    index === 0
                      ? "primary.main"
                      : index === 1
                        ? "secondary.main"
                        : index === 2
                          ? "info.main"
                          : "primary.main",
                }}
              />
            </Stack>
            <Typography variant="h6" sx={{ fontWeight: 900, ...textAnimations.colorTransition }}>
              {step.title}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary", ...textAnimations.colorToPrimary }}>
              {step.desc}
            </Typography>
          </Stack>
        </CardContent>
      </SvCard>
    </Box>
  );
}

function PackageCard({ package: pkg, index }) {
  const packageFade = useScrollFadeIn({ threshold: 0.1 });

  return (
    <Box
      ref={packageFade.ref}
      sx={{
        opacity: packageFade.isVisible ? 1 : 0,
        transform: packageFade.isVisible
          ? "translateY(0) scale(1)"
          : "translateY(30px) scale(0.95)",
        transition: `opacity 0.6s ease-out ${index * 0.12}s, transform 0.6s ease-out ${index * 0.12}s`,
      }}
    >
      <SvCard
        sx={{
          height: "100%",
          boxShadow: { xs: "0 10px 26px rgba(29, 100, 105, 0.10)", md: "0 14px 38px rgba(29, 100, 105, 0.10)" },
          overflow: "hidden",
          ...cardAnimations.packageCard,
        }}
      >
        <Box
          className="package-header"
          sx={{
            ...pkg.headerSx,
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            px: 2.25,
            py: 1.6,
            borderBottom: "1px solid",
            borderColor: "divider",
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 900,
              textTransform: "uppercase",
              color: "common.white",
              ...textAnimations.glow,
            }}
          >
            {pkg.name}
          </Typography>
        </Box>
        <CardContent sx={{ p: 2.5 }}>
          <Stack spacing={1.1}>
            <Typography variant="body1" sx={{ fontWeight: 900, ...textAnimations.colorTransition }}>
              {pkg.lines[0]}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary", ...textAnimations.colorToPrimary }}>
              {pkg.lines[1]}
            </Typography>
          </Stack>
        </CardContent>
      </SvCard>
    </Box>
  );
}

function HowItWorksSectionImpl({ steps, onOpenPricing }) {
  const packagesHeaderFade = useScrollFadeIn({ threshold: 0.1 });
  const packages = React.useMemo(
    () => [
      {
        name: "Diamond",
        headerSx: {
          background:
            "linear-gradient(135deg, rgba(225, 240, 247, 0.95) 0%, rgba(70, 114, 132, 0.95) 70%, rgba(28, 66, 78, 0.95) 100%)",
        },
        lines: ["600–750 cars | 75 days", "4.5M – 5.6M km coverage"],
      },
      {
        name: "Gold",
        headerSx: {
          background:
            "linear-gradient(135deg, rgba(248, 236, 182, 0.95) 0%, rgba(190, 150, 55, 0.95) 70%, rgba(95, 69, 10, 0.95) 100%)",
        },
        lines: ["250–400 cars | 45 days", "1.1M – 1.8M km coverage"],
      },
      {
        name: "Silver",
        headerSx: {
          background:
            "linear-gradient(135deg, rgba(240, 240, 240, 0.95) 0%, rgba(150, 150, 150, 0.95) 65%, rgba(60, 60, 60, 0.95) 100%)",
        },
        lines: ["100–175 cars | 30 days", "300,000–525,000 km coverage"],
      },
      {
        name: "Bronze",
        headerSx: {
          background:
            "linear-gradient(135deg, rgba(242, 214, 184, 0.95) 0%, rgba(169, 107, 53, 0.95) 70%, rgba(92, 51, 16, 0.95) 100%)",
        },
        lines: ["10–50 cars", "30,000–150,000km coverage"],
      },
    ],
    [],
  );

  return (
    <React.Fragment>
    <Section
      id="how"
      overline="How it works"
      title="How it works"
      subtitle="A clear flow from placement to reporting, plus flexible package options for every campaign size."
      tone="onDark"
    >
      <Box
        sx={{
          position: "relative",
          mt: 2.5,
          px: { xs: 2.5, md: 3.5 },
          py: { xs: 3, md: 4 },
          bgcolor: "primary.main",
          borderRadius: 4,
          overflow: "hidden",
          clipPath: {
            xs: "polygon(0 0, 100% 0, 100% 82%, 82% 100%, 0 100%)",
            md: "polygon(0 0, 100% 0, 100% 74%, 74% 100%, 0 100%)",
          },
        }}
      >
        <Grid container spacing={{ xs: 2, sm: 2.5, md: 2.5 }}>
          {steps.map((s, idx) => (
            <Grid item xs={12} sm={6} md={6} lg={3} key={s.title}>
              <StepCard step={s} index={idx} />
            </Grid>
          ))}
        </Grid>
      </Box>

      <Divider sx={{ my: { xs: 3, md: 4 } }} />

      <Stack spacing={1.5}>
        <Box
          ref={packagesHeaderFade.ref}
          sx={{
            opacity: packagesHeaderFade.isVisible ? 1 : 0,
            transform: packagesHeaderFade.isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 900, letterSpacing: -0.2 }}>
            Advertising Packages
          </Typography>
        </Box>
        <Grid container spacing={{ xs: 2, sm: 2.5, md: 2.5 }}>
          {packages.map((p, idx) => (
            <Grid item xs={12} sm={12} md={6} key={p.name}>
              <PackageCard package={p} index={idx} />
            </Grid>
          ))}
        </Grid>
        {onOpenPricing && (
          <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
            <Button
              variant="contained"
              color="info"
              size="large"
              onClick={onOpenPricing}
              sx={{
                fontWeight: 700,
                textTransform: "none",
                px: 4,
                py: 1.5,
                fontSize: "1rem",
                ...buttonAnimations.scale,
              }}
            >
              Request Pricing
            </Button>
          </Box>
        )}
      </Stack>
      <Typography variant="body2" sx={{ color: "text.secondary" }}>
        We offer a range of advertising packages to suit your needs. Choose the one that best fits your budget and goals. 
      </Typography>
    </Section>

    {/* Simple Footer - Concludes the page */}
    <Box
      component="footer"
      sx={{
        py: 3,
        borderTop: "1px solid",
        borderColor: "rgba(255,255,255,0.18)",
        backgroundColor: "#1d6469",
      }}
    >
      <Container>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={1}
          alignItems={{ sm: "center" }}
          justifyContent="space-between"
        >
          <Typography
            variant="caption"
            sx={{ color: "common.white" }}
          >
            © {new Date().getFullYear()} Street Visibility. All rights reserved.
          </Typography>
          <Tooltip title="Back to top">
            <IconButton 
              onClick={() => scrollToId("top")} 
              size="small"
              aria-label="Scroll back to top of page"
              sx={{ color: "common.white" }}
            >
              <ExpandMoreIcon
                sx={{
                  transform: "rotate(180deg)",
                }}
                aria-hidden="true"
              />
            </IconButton>
          </Tooltip>
        </Stack>
      </Container>
    </Box>
    </React.Fragment>
  );
}

const HowItWorksSection = React.memo(HowItWorksSectionImpl);
export default HowItWorksSection;

