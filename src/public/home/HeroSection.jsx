import * as React from "react";
import {
  Box,
  Button,
  CardContent,
  Chip,
  Container,
  Divider,
  Grid,
  LinearProgress,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import InsightsIcon from "@mui/icons-material/Insights";
import MapIcon from "@mui/icons-material/Map";
import PaymentsIcon from "@mui/icons-material/Payments";
import { heroCampaignSnapshot, heroChips, heroKpis, heroLiveFeed, heroMapVehicles } from "./constants";
import { useNavigate } from "react-router-dom";
import { SvCard } from "./ui";
import { cardAnimations, textAnimations, buttonAnimations, containerAnimations, keyframes } from "./animations";
import ContactDetailsOverlay from "./ContactDetailsOverlay";
import campaignImage1 from "../../assets/home-images/img1.png";
import campaignImage2 from "../../assets/home-images/img2.PNG";
import campaignImage3 from "../../assets/home-images/img3.jpeg";
import campaignImage4 from "../../assets/home-images/img4.jpeg";

function ImageSlideshow({ images, interval = 5000 }) {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        minHeight: "100vh",
        overflow: "hidden",
        marginLeft: "calc((100vw - 100%) / -2)",
        marginRight: "calc((100vw - 100%) / -2)",
      }}
    >
      {images.map((image, index) => (
        <Box
          key={index}
          component="img"
          src={image}
          alt={`Campaign showcase ${index + 1}`}
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: currentIndex === index ? 1 : 0,
            transition: "opacity 1s ease-in-out",
            display: "block",
          }}
        />
      ))}
      {/* Slide indicators */}
      <Box
        sx={{
          position: "absolute",
          bottom: 16,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 1,
          zIndex: 2,
        }}
      >
        {images.map((_, index) => (
          <Box
            key={index}
            onClick={() => setCurrentIndex(index)}
            sx={{
              width: currentIndex === index ? 24 : 8,
              height: 8,
              borderRadius: 4,
              backgroundColor: currentIndex === index ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.4)",
              cursor: "pointer",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.7)",
              },
            }}
          />
        ))}
      </Box>
    </Box>
  );
}

function HeroSectionImpl({ onOpenSignUp, tone = "default", onContactButtonClick, onPricingButtonClick, showContactDetails, contactButtonRef, pricingButtonRef, trianglePosition, onCollapseContact }) {
  const navigate = useNavigate();
  const onDark = tone === "onDark";
  const [secondsSinceUpdate, setSecondsSinceUpdate] = React.useState(0);
  const activeMapCount = heroMapVehicles.filter((v) => v.state === "active").length;
  const inactiveMapCount = heroMapVehicles.filter((v) => v.state === "inactive").length;

  React.useEffect(() => {
    const id = window.setInterval(() => {
      setSecondsSinceUpdate((s) => (s + 1) % 60);
    }, 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <Box
      id="top"
      sx={{
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Full viewport slideshow */}
      <Box sx={{ position: "relative" }}>
        <ImageSlideshow images={[campaignImage1, campaignImage2, campaignImage3, campaignImage4]} interval={5000} />

        {/* Overlay buttons on slideshow */}
        <Box
          sx={{
            position: "absolute",
            top: { xs: 16, sm: 24, md: 32 },
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 10,
            display: "flex",
            flexWrap: "wrap",
            gap: { xs: 1, sm: 1.5 },
            justifyContent: "center",
            alignItems: "center",
            width: { xs: "calc(100% - 32px)", sm: "auto" },
            maxWidth: "100%",
          }}
        >
          <Button
            ref={contactButtonRef}
            variant="contained"
            color="info"
            onClick={onContactButtonClick}
            sx={{
              fontWeight: 700,
              textTransform: "none",
              px: { xs: 2, sm: 2.5 },
              py: { xs: 1, sm: 1.25 },
              fontSize: { xs: "0.875rem", sm: "1rem" },
              backgroundColor: "rgba(255, 255, 255, 0.15)",
              backdropFilter: "blur(20px) saturate(180%)",
              WebkitBackdropFilter: "blur(20px) saturate(180%)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.4)",
              color: "common.white",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.25)",
                backdropFilter: "blur(25px) saturate(180%)",
                WebkitBackdropFilter: "blur(25px) saturate(180%)",
                border: "1px solid rgba(255, 255, 255, 0.4)",
                boxShadow: "0 12px 40px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.5)",
                transform: "translateY(-2px)",
              },
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            {showContactDetails ? "Hide contact information" : "Contact information"}
          </Button>
          <Button
            ref={pricingButtonRef}
            variant="outlined"
            onClick={onPricingButtonClick}
            sx={{
              fontWeight: 700,
              textTransform: "none",
              px: { xs: 2, sm: 2.5 },
              py: { xs: 1, sm: 1.25 },
              fontSize: { xs: "0.875rem", sm: "1rem" },
              backgroundColor: "rgba(255, 255, 255, 0.15)",
              backdropFilter: "blur(20px) saturate(180%)",
              WebkitBackdropFilter: "blur(20px) saturate(180%)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              borderWidth: 2,
              color: "common.white",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.4)",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.25)",
                backdropFilter: "blur(25px) saturate(180%)",
                WebkitBackdropFilter: "blur(25px) saturate(180%)",
                border: "1px solid rgba(255, 255, 255, 0.4)",
                borderWidth: 2,
                boxShadow: "0 12px 40px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.5)",
                transform: "translateY(-2px)",
              },
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            Request pricing
          </Button>
        </Box>

        {/* Contact details card overlay - appears below buttons on slideshow */}
        {showContactDetails && (
          <ContactDetailsOverlay
            trianglePosition={trianglePosition}
            onCollapse={onCollapseContact}
            onOpenSignUp={onOpenSignUp}
          />
        )}
      </Box>

      {/* Content section below slideshow */}
      <Box
        sx={{
          position: "relative",
          pt: { xs: 7, md: 10 },
          pb: { xs: 6, md: 8 },
        }}
      >
        {onDark ? null : (
          <>
            <Box
              aria-hidden="true"
              sx={{
                position: "absolute",
                inset: 0,
                backgroundImage:
                  "radial-gradient(900px 420px at 15% 15%, rgba(29, 100, 105, 0.30), transparent 55%), radial-gradient(900px 420px at 85% 0%, rgba(38, 176, 96, 0.16), transparent 50%), radial-gradient(700px 360px at 70% 90%, rgba(133, 195, 65, 0.10), transparent 55%)",
              }}
            />
            <Box
              aria-hidden="true"
              sx={{
                position: "absolute",
                inset: 0,
                opacity: 0.12,
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
                backgroundSize: "46px 46px",
                maskImage:
                  "radial-gradient(420px 260px at 50% 40%, rgba(0,0,0,1), transparent 70%)",
              }}
            />
          </>
        )}

        <Container sx={{ position: "relative" }}>
          <Grid container spacing={{ xs: 3, sm: 4, md: 4 }} alignItems="center">
            <Grid item xs={12} md={6}>
              <Stack spacing={2.5}>
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                  {heroChips.map((c) => (
                    <Chip
                      key={c.label}
                      icon={c.icon ?? undefined}
                      label={c.label}
                      variant="outlined"
                      size="small"
                      sx={{
                        borderColor: onDark ? "rgba(255,255,255,0.28)" : "rgba(255,255,255,0.18)",
                        backgroundColor: onDark ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.03)",
                        color: onDark ? "common.white" : "inherit",
                        fontSize: { xs: "0.7rem", sm: "0.75rem" },
                      }}
                    />
                  ))}
                </Stack>

                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: 28, sm: 40, md: 48, lg: 56 },
                    lineHeight: 1.05,
                    color: onDark ? "common.white" : "text.primary",
                  }}
                >
                  Turn Every Journey
                  <Box component="span" sx={{ color: "secondary.main" }}>
                    {" "}
                    Into
                  </Box>{" "}
                  Measurable Visibility
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    color: onDark ? "rgba(255,255,255,0.86)" : "text.secondary",
                    fontSize: { xs: 14, sm: 15, md: 16, lg: 18 },
                    lineHeight: 1.6,
                  }}
                >
                  Street Visibility transforms everyday vehicles into moving billboards,
                  turning city streets into high-impact advertising channels—with
                  tracking, analytics, and transparent reporting.
                </Typography>

                <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
                  <Button
                    size="large"
                    variant="contained"
                    color="info"
                    onClick={() => onOpenSignUp("advertiser")}
                    fullWidth={{ xs: true, sm: false }}
                    sx={{
                      fontSize: { xs: "0.875rem", sm: "1rem" },
                      py: { xs: 1.25, sm: 1.5 },
                    }}
                  >
                    Sign up as Advertiser
                  </Button>
                  <Button
                    size="large"
                    color="inherit"
                    onClick={() => navigate("/how-it-works")}
                    fullWidth={{ xs: true, sm: false }}
                    sx={{
                      color: onDark ? "rgba(255,255,255,0.86)" : "text.secondary",
                      fontSize: { xs: "0.875rem", sm: "1rem" },
                      py: { xs: 1.25, sm: 1.5 },
                    }}
                  >
                    See how it works
                  </Button>
                </Stack>

                <Stack
                  direction="row"
                  spacing={2}
                  sx={{ pt: 1, color: onDark ? "rgba(255,255,255,0.78)" : "text.secondary" }}
                >
                  <Stack direction="row" spacing={1} alignItems="center">
                    <MapIcon fontSize="small" />
                    <Typography variant="body2">Tracking</Typography>
                  </Stack>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <InsightsIcon fontSize="small" />
                    <Typography variant="body2">Analytics</Typography>
                  </Stack>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <PaymentsIcon fontSize="small" />
                    <Typography variant="body2">Earnings</Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box sx={{ position: "relative" }}>
                <SvCard
                  sx={{
                    width: "75vw",
                    minHeight: { xs: 320, md: 420 },
                    boxShadow: { xs: "0 14px 38px rgba(29, 100, 105, 0.12)", md: "0 18px 46px rgba(29, 100, 105, 0.12)" },
                    position: "relative",
                    zIndex: 1,
                    ...cardAnimations.heroCard,
                  }}
                >
                  <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
                    <Stack spacing={2.2}>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <InsightsIcon color="primary" />
                        <Typography variant="h6" sx={{ fontWeight: 900 }}>
                          Live campaign snapshot
                        </Typography>
                        <Box sx={{ flex: 1 }} />
                        <Tooltip title="Demo-only UI">
                          <Chip size="small" color="success" label="Live (demo)" />
                        </Tooltip>
                      </Stack>

                      <Grid container spacing={2}>
                        {heroKpis.map((kpi) => (
                          <Grid key={kpi.label} item xs={6}>
                            <Box
                              className="kpi-box"
                              sx={{
                                p: 2,
                                borderRadius: 3,
                                border: "1px solid",
                                borderColor: "divider",
                                backgroundColor: "rgba(255,255,255,0.03)",
                                cursor: "pointer",
                              }}
                            >
                              <Typography variant="caption" sx={{ color: "text.secondary" }}>
                                {kpi.label}
                              </Typography>
                              <Typography className="kpi-value" variant="h5" sx={{ fontWeight: 900, mt: 0.5 }}>
                                {kpi.value}
                              </Typography>
                            </Box>
                          </Grid>
                        ))}
                      </Grid>

                      <Box
                        sx={{
                          borderRadius: 3,
                          border: "1px solid",
                          borderColor: "divider",
                          backgroundColor: "rgba(255,255,255,0.03)",
                          p: 2,
                        }}
                      >
                        <Stack spacing={1.25}>
                          <Stack direction="row" spacing={1} alignItems="baseline">
                            <Typography variant="subtitle2" sx={{ fontWeight: 900 }}>
                              {heroCampaignSnapshot.name}
                            </Typography>
                            <Typography variant="caption" sx={{ color: "text.secondary" }}>
                              {heroCampaignSnapshot.coverageLabel}
                            </Typography>
                            <Box sx={{ flex: 1 }} />
                            <Typography variant="caption" sx={{ color: "text.secondary" }}>
                              Updated {secondsSinceUpdate}s ago
                            </Typography>
                          </Stack>

                          <Stack spacing={0.5}>
                            <Stack direction="row" spacing={1} alignItems="center">
                              <Typography variant="caption" sx={{ color: "text.secondary" }}>
                                Coverage target
                              </Typography>
                              <Box sx={{ flex: 1 }} />
                              <Typography variant="caption" sx={{ fontWeight: 800 }}>
                                {heroCampaignSnapshot.coverageProgress}%
                              </Typography>
                            </Stack>
                            <LinearProgress
                              variant="determinate"
                              value={heroCampaignSnapshot.coverageProgress}
                              sx={{
                                height: 8,
                                borderRadius: 999,
                                backgroundColor: "rgba(255,255,255,0.06)",
                              }}
                            />
                            <Typography variant="caption" sx={{ color: "text.secondary" }}>
                              Proof photos verified: {heroCampaignSnapshot.photosVerified}/{heroCampaignSnapshot.photosTarget}
                            </Typography>
                          </Stack>

                          <Divider />

                          <Stack spacing={1}>
                            <Typography variant="subtitle2" sx={{ color: "text.secondary" }}>
                              Active vehicles (sample)
                            </Typography>
                            <Stack spacing={1}>
                              {heroLiveFeed.map((v) => (
                                <Stack key={v.id} direction="row" spacing={1.25} alignItems="center">
                                  <Box
                                    aria-hidden="true"
                                    sx={{
                                      width: 10,
                                      height: 10,
                                      borderRadius: 999,
                                      backgroundColor: v.status === "On route" ? "success.main" : "warning.main",
                                      boxShadow:
                                        v.status === "On route"
                                          ? "0 0 0 4px rgba(46, 204, 113, 0.16)"
                                          : "0 0 0 4px rgba(255, 193, 7, 0.16)",
                                      flexShrink: 0,
                                    }}
                                  />
                                  <Stack spacing={0} sx={{ minWidth: 0 }}>
                                    <Typography variant="body2" sx={{ fontWeight: 800 }} noWrap>
                                      {v.id} • {v.area}
                                    </Typography>
                                    <Typography variant="caption" sx={{ color: "text.secondary" }} noWrap>
                                      {v.status} • {v.kmToday} km today • last seen {Math.max(0, v.lastSeenSecondsAgo - secondsSinceUpdate)}s ago
                                    </Typography>
                                  </Stack>
                                  <Box sx={{ flex: 1 }} />
                                  <Chip
                                    size="small"
                                    variant="outlined"
                                    label={v.compliance}
                                    sx={{ borderColor: "divider", backgroundColor: "rgba(255,255,255,0.02)" }}
                                  />
                                </Stack>
                              ))}
                            </Stack>
                          </Stack>
                        </Stack>
                      </Box>

                      <Box
                        sx={{
                          borderRadius: 3,
                          border: "1px solid",
                          borderColor: "divider",
                          background:
                            "radial-gradient(500px 260px at 35% 25%, rgba(29, 100, 105, 0.24), transparent 55%), radial-gradient(500px 260px at 85% 65%, rgba(38, 176, 96, 0.14), transparent 55%), rgba(255,255,255,0.03)",
                          height: 170,
                          p: 2,
                          position: "relative",
                          overflow: "hidden",
                        }}
                      >
                        <Stack spacing={1}>
                          <Stack direction="row" spacing={1} alignItems="baseline">
                            <Typography variant="subtitle2" sx={{ color: "text.secondary" }}>
                              Live map (demo)
                            </Typography>
                            <Typography variant="caption" sx={{ color: "text.secondary" }}>
                              {heroCampaignSnapshot.city}
                            </Typography>
                            <Box sx={{ flex: 1 }} />
                            <Stack direction="row" spacing={0.75} alignItems="center">
                              <Stack direction="row" spacing={0.5} alignItems="center">
                                <Box
                                  aria-hidden="true"
                                  sx={{
                                    width: 8,
                                    height: 8,
                                    borderRadius: 999,
                                    backgroundColor: "success.main",
                                  }}
                                />
                                <Typography variant="caption" sx={{ color: "text.secondary" }}>
                                  Active {activeMapCount}
                                </Typography>
                              </Stack>
                              <Stack direction="row" spacing={0.5} alignItems="center">
                                <Box
                                  aria-hidden="true"
                                  sx={{
                                    width: 8,
                                    height: 8,
                                    borderRadius: 999,
                                    backgroundColor: "text.disabled",
                                  }}
                                />
                                <Typography variant="caption" sx={{ color: "text.secondary" }}>
                                  Inactive {inactiveMapCount}
                                </Typography>
                              </Stack>
                            </Stack>
                          </Stack>
                        </Stack>

                        {/* Stylized mini-map */}
                        <Box
                          aria-label="Demo map with active and inactive cars"
                          sx={{
                            position: "absolute",
                            inset: 12,
                            top: 46,
                            borderRadius: 2.5,
                            border: "1px solid",
                            borderColor: "divider",
                            background:
                              "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02)), radial-gradient(340px 180px at 25% 30%, rgba(38, 176, 96, 0.10), transparent 55%), radial-gradient(340px 180px at 80% 70%, rgba(29, 100, 105, 0.18), transparent 60%)",
                            overflow: "hidden",
                          }}
                        >
                          {/* "Roads" */}
                          <Box
                            aria-hidden="true"
                            sx={{
                              position: "absolute",
                              inset: 0,
                              opacity: 0.22,
                              backgroundImage:
                                "linear-gradient(rgba(255,255,255,0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.16) 1px, transparent 1px)",
                              backgroundSize: "34px 34px",
                              maskImage:
                                "radial-gradient(220px 120px at 55% 55%, rgba(0,0,0,1), transparent 70%)",
                            }}
                          />

                          {/* Markers */}
                          {heroMapVehicles.map((v) => {
                            const isActive = v.state === "active";
                            const pulseAlpha = isActive ? 0.16 : 0.0;
                            return (
                              <Tooltip key={v.id} title={`${v.id} • ${v.area} • ${v.state}`}>
                                <Box
                                  role="img"
                                  aria-label={`${v.id} in ${v.area} (${v.state})`}
                                  sx={{
                                    position: "absolute",
                                    left: `${v.x}%`,
                                    top: `${v.y}%`,
                                    transform: "translate(-50%, -50%)",
                                    width: 12,
                                    height: 12,
                                    borderRadius: 999,
                                    backgroundColor: isActive ? "success.main" : "text.disabled",
                                    boxShadow: isActive
                                      ? `0 0 0 6px rgba(46, 204, 113, ${pulseAlpha}), 0 10px 20px rgba(0,0,0,0.18)`
                                      : "0 10px 20px rgba(0,0,0,0.14)",
                                    border: "1px solid rgba(255,255,255,0.22)",
                                  }}
                                />
                              </Tooltip>
                            );
                          })}

                          {/* Subtle "last update" */}
                          <Box
                            aria-hidden="true"
                            sx={{
                              position: "absolute",
                              right: 10,
                              bottom: 8,
                              fontSize: 11,
                              color: "text.secondary",
                            }}
                          >
                            refreshed {secondsSinceUpdate}s ago
                          </Box>
                        </Box>
                        <Box
                          aria-hidden="true"
                          sx={{
                            position: "absolute",
                            right: -18,
                            bottom: -18,
                            width: 120,
                            height: 120,
                            borderRadius: 999,
                            background:
                              "radial-gradient(circle at 30% 30%, rgba(198, 255, 0, 0.18), transparent 55%)",
                          }}
                        />
                      </Box>
                    </Stack>
                  </CardContent>
                </SvCard>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

const HeroSection = React.memo(HeroSectionImpl);
export default HeroSection;

