import * as React from "react";
import {
  Box,
  Button,
  CardContent,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
  Link,
  IconButton,
  Tooltip,
} from "@mui/material";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import GroupsIcon from "@mui/icons-material/Groups";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Section, SvCard, useScrollFadeIn, scrollToId } from "./ui";
import { cardAnimations, iconAnimations, textAnimations } from "./animations";
import { aboutFeatureBlocks, aboutStatistics } from "./constants";

function ValueCard({ value, valueDescriptionsByLabel, index }) {
  const cardFade = useScrollFadeIn({ threshold: 0.1 });
  
  return (
    <Box
      ref={cardFade.ref}
      sx={{
        opacity: cardFade.isVisible ? 1 : 0,
        transform: cardFade.isVisible ? "translateY(0)" : "translateY(30px)",
        transition: `opacity 0.6s ease-out ${index * 0.1}s, transform 0.6s ease-out ${index * 0.1}s`,
      }}
    >
      <SvCard
        sx={{
          height: "100%",
          boxShadow: { xs: "0 10px 26px rgba(29, 100, 105, 0.10)", md: "0 14px 38px rgba(29, 100, 105, 0.10)" },
          ...cardAnimations.valueCard,
        }}
      >
        <CardContent sx={{ p: 3 }}>
          <Stack direction="row" spacing={1.5} alignItems="center">
            <Box
              className="value-icon-box"
              sx={{
                width: 44,
                height: 44,
                borderRadius: 3,
                display: "grid",
                placeItems: "center",
                backgroundColor: "rgba(29, 100, 105, 0.18)",
                border: "1px solid",
                borderColor: "divider",
                flex: "0 0 auto",
                ...iconAnimations.scaleGlow,
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 900 }}>
                {value.key === "I2" ? "I" : value.key}
              </Typography>
            </Box>
            <Box sx={{ minWidth: 0 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 900, ...textAnimations.colorTransition }}>
                {value.label}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary", ...textAnimations.colorToPrimary }}>
                {valueDescriptionsByLabel?.[value.label] ??
                  "We sweat details for a premium experience."}
              </Typography>
            </Box>
          </Stack>
        </CardContent>
      </SvCard>
    </Box>
  );
}

function FeatureBlock({ icon, title, description, index, iconBgColor = "rgba(29, 100, 105, 0.18)", ariaLabel }) {
  const fade = useScrollFadeIn({ threshold: 0.1 });
  
  return (
    <Box
      ref={fade.ref}
      role="article"
      aria-label={ariaLabel || title}
      sx={{
        opacity: fade.isVisible ? 1 : 0,
        transform: fade.isVisible ? "translateX(0)" : "translateX(-30px)",
        transition: `opacity 0.6s ease-out ${index * 0.1}s, transform 0.6s ease-out ${index * 0.1}s`,
        mb: { xs: 4, md: 5 },
        "&:last-child": {
          mb: 0,
        },
      }}
    >
      <Grid 
        container 
        spacing={{ xs: 2, sm: 3, md: 4 }} 
        alignItems="flex-start" 
        sx={{ 
          flexWrap: { xs: "wrap", sm: "nowrap" },
        }}
      >
        <Grid item xs={12} sm="auto" md="auto" sx={{ display: { xs: "flex", sm: "block" }, justifyContent: { xs: "center", sm: "flex-start" } }}>
          <Box
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              mr: { xs: 0, sm: 3, md: 4 },
              ml: { xs: 0, sm: -4, md: -6 },
              mb: { xs: 2, sm: 0 },
            }}
            aria-hidden="true"
          >
            <Box
              sx={{
                width: { xs: 35, sm: 45, md: 55 },
                height: { xs: 35, sm: 45, md: 55 },
                borderRadius: "50%",
                border: "2px dashed",
                borderColor: "rgba(0,0,0,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: iconBgColor,
                position: "relative",
                flexShrink: 0,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.1)",
                  boxShadow: "0 4px 12px rgba(29, 100, 105, 0.2)",
                },
              }}
            >
              {icon}
            </Box>
            <Box
              sx={{
                position: "absolute",
                right: { xs: -20, sm: -32, md: -40 },
                top: "50%",
                transform: "translateY(-50%)",
                width: { xs: 24, sm: 36, md: 48 },
                height: "2px",
                borderTop: "2px dashed",
                borderColor: "rgba(0,0,0,0.2)",
                zIndex: 1,
                display: { xs: "none", sm: "block" },
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm sx={{ minWidth: 0 }}>
          <Box
            component="div"
            sx={{
              border: "2px solid",
              borderColor: "primary.main",
              borderTopWidth: "4px",
              borderRadius: 2,
              p: { xs: 2, sm: 2.5, md: 3 },
              backgroundColor: "background.paper",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              width: "100%",
              cursor: "pointer",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "translateY(-4px)",
                boxShadow: "0 8px 24px rgba(29, 100, 105, 0.15)",
                borderColor: "secondary.main",
                borderTopColor: "secondary.main",
              },
              "&:active": {
                transform: "translateY(-2px)",
              },
            }}
            onClick={() => {
              // Optional: Add click handler if needed
            }}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                // Optional: Add keyboard interaction
              }
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 900,
                color: "primary.main",
                textAlign: "center",
                mb: 2,
                textTransform: "uppercase",
                fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" },
              }}
            >
              {title}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
                lineHeight: 1.7,
                textAlign: "left",
              }}
            >
              {description}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

const CountUpNumber = React.memo(function CountUpNumber({ end, duration = 2000, suffix = "", ariaLabel }) {
  const [count, setCount] = React.useState(0);
  const fade = useScrollFadeIn({ threshold: 0.1 });
  const animationFrameRef = React.useRef(null);
  
  React.useEffect(() => {
    if (!fade.isVisible) return;
    
    let startTime = null;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      if (typeof end === "string" && end.includes("+")) {
        const num = parseInt(end.replace("+", ""), 10);
        setCount(Math.floor(num * progress));
      } else if (typeof end === "number") {
        setCount(Math.floor(end * progress));
      }
      
      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate);
      } else {
        if (typeof end === "string" && end.includes("+")) {
          const num = parseInt(end.replace("+", ""), 10);
          setCount(num);
        } else if (typeof end === "number") {
          setCount(end);
        }
      }
    };
    
    animationFrameRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [fade.isVisible, end, duration]);
  
  const displayValue = React.useMemo(() => {
    if (typeof end === "string" && end.includes("+")) {
      return `${count.toLocaleString()}+`;
    }
    return count.toLocaleString();
  }, [count, end]);
  
  return (
    <Box ref={fade.ref} aria-label={ariaLabel || displayValue}>
      <Typography
        variant="h3"
        component="span"
        sx={{
          fontWeight: 900,
          color: "common.white",
          fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
        }}
      >
        {displayValue}
        {suffix}
      </Typography>
    </Box>
  );
});

function AboutSectionImpl({ onOpenSignUp, values = [], valueDescriptionsByLabel = {} }) {
  const mainContentFade = useScrollFadeIn({ threshold: 0.1 });
  const sideCardsFade = useScrollFadeIn({ threshold: 0.1 });

  return (
    <>
      <Section
        id="about"
        overline="About us"
        title="Drive Your Brand Everywhere People Go."
        subtitle="Revolutionary moving outdoor advertising that turns traffic into attention and engagement."
        tone="onDark"
        aria-label="About Street Visibility"
      >
        <Grid container spacing={{ xs: 2, sm: 2.5, md: 2.5 }}>
          <Grid item xs={12} md={7}>
            <Box
              ref={mainContentFade.ref}
              sx={{
                opacity: mainContentFade.isVisible ? 1 : 0,
                transform: mainContentFade.isVisible ? "translateY(0)" : "translateY(30px)",
                transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
              }}
            >
              <SvCard
                sx={{
                  boxShadow: { xs: "0 10px 26px rgba(29, 100, 105, 0.10)", md: "0 14px 38px rgba(29, 100, 105, 0.10)" },
                }}
              >
              <CardContent sx={{ p: { xs: 2.5, sm: 3, md: 3.2 } }}>
                <Stack spacing={1.5}>
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: 900, lineHeight: 1.15, letterSpacing: -0.2 }}
                  >
                    What if{" "}
                    <Typography component="span" sx={{ color: "primary.main" }}>
                      advertising
                    </Typography>{" "}
                    could move with the{" "}
                    <Typography component="span" sx={{ color: "secondary.main" }}>
                      people
                    </Typography>
                    ?
                  </Typography>
                  <Typography variant="body1" sx={{ color: "text.secondary" }}>
                    Street Visibility transforms ordinary taxis into moving impact zones,
                    placing your brand in the heart of real life—traffic jams, highways,
                    and neighborhoods.
                  </Typography>
                  <Typography variant="body1" sx={{ color: "text.secondary" }}>
                    With over 10,000 cars across Nairobi, we deliver unmatched brand
                    visibility where static billboards and digital ads cannot reach.
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 800,
                      color: "text.primary",
                      opacity: 0.95,
                      mt: 0.5,
                    }}
                  >
                    “Your brand deserves to be seen where it matters most.”
                  </Typography>
                  <Divider sx={{ my: 1 }} />
                  <Stack direction={{ xs: "column", sm: "row" }} spacing={1.2}>
                    <Button
                      variant="contained"
                      size="large"
                      onClick={() => onOpenSignUp("advertiser")}
                      aria-label="See our fleet in action - open sign up"
                    >
                      See Our Fleet in Action
                    </Button>
                    <Button
                      variant="outlined"
                      size="large"
                      onClick={() => onOpenSignUp("advertiser")}
                      aria-label="Get a free quote - open sign up"
                      sx={{
                        borderColor: "rgba(255,255,255,0.28)",
                        color: "common.white",
                        "&:hover": {
                          borderColor: "rgba(255,255,255,0.40)",
                          backgroundColor: "rgba(255,255,255,0.08)",
                        },
                      }}
                    >
                      Get a Free Quote
                    </Button>
                  </Stack>
                </Stack>
              </CardContent>
            </SvCard>
            </Box>
          </Grid>
          <Grid item xs={12} md={5}>
            <Box
              ref={sideCardsFade.ref}
              sx={{
                opacity: sideCardsFade.isVisible ? 1 : 0,
                transform: sideCardsFade.isVisible ? "translateY(0)" : "translateY(30px)",
                transition: "opacity 0.6s ease-out 0.2s, transform 0.6s ease-out 0.2s",
              }}
            >
              <Grid container spacing={2.5}>
                <Grid item xs={12} sm={6}>
                  <SvCard
                    sx={{
                      boxShadow: { xs: "0 10px 26px rgba(29, 100, 105, 0.10)", md: "0 14px 38px rgba(29, 100, 105, 0.10)" },
                      height: "100%",
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <AutoAwesomeIcon color="primary" />
                        <Typography variant="h6" sx={{ fontWeight: 900 }}>
                          Vision
                        </Typography>
                      </Stack>
                      <Typography variant="body2" sx={{ color: "text.secondary", mt: 1 }}>
                        “To make every brand VISIBLE, remembered, and impactful.”
                      </Typography>
                    </CardContent>
                  </SvCard>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <SvCard
                    sx={{
                      boxShadow: { xs: "0 10px 26px rgba(29, 100, 105, 0.10)", md: "0 14px 38px rgba(29, 100, 105, 0.10)" },
                      height: "100%",
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <GroupsIcon color="primary" />
                        <Typography variant="h6" sx={{ fontWeight: 900 }}>
                          Mission
                        </Typography>
                      </Stack>
                      <Typography variant="body2" sx={{ color: "text.secondary", mt: 1 }}>
                        “We amplify visibility through bold, creative, and measurable
                        experiences.”
                      </Typography>
                    </CardContent>
                  </SvCard>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Section>

      <Section
        id="values"
        overline="Core values"
        title="VISIBLE"
        subtitle="Our principles guide how we build products, run campaigns, and partner with drivers and advertisers."
        tone="onDark"
        aria-label="Core values - VISIBLE"
      >
        <Grid container spacing={2.5}>
          {values.map((v, index) => (
            <Grid item xs={12} sm={6} md={4} key={v.key}>
              <ValueCard
                value={v}
                valueDescriptionsByLabel={valueDescriptionsByLabel}
                index={index}
              />
            </Grid>
          ))}
        </Grid>
      </Section>

      {/* WHY STREET VISIBILITY Section */}
      <Section
        id="why-street-visibility"
        overline=""
        title="WHY STREET VISIBILITY"
        subtitle=""
        tone="default"
        sx={{ backgroundColor: "background.paper", pb: { xs: 4, md: 5 } }}
      >
        <Box sx={{ maxWidth: 1000, mx: "auto" }} role="region" aria-label="Why Street Visibility features">
          {aboutFeatureBlocks.slice(0, 2).map((block, idx) => (
            <FeatureBlock
              key={block.title}
              icon={block.icon}
              title={block.title}
              description={block.description}
              index={idx}
              iconBgColor={block.iconBgColor}
              ariaLabel={block.ariaLabel}
            />
          ))}
        </Box>
      </Section>

      {/* Additional Feature Blocks Section */}
      <Section
        id="features-extended"
        overline=""
        title=""
        subtitle=""
        tone="default"
        sx={{ backgroundColor: "background.paper", pt: { xs: 4, md: 5 }, pb: { xs: 4, md: 5 } }}
      >
        <Box sx={{ maxWidth: 1000, mx: "auto" }} role="region" aria-label="Additional features">
          {aboutFeatureBlocks.slice(2).map((block, idx) => (
            <FeatureBlock
              key={block.title}
              icon={block.icon}
              title={block.title}
              description={block.description}
              index={idx + 2}
              iconBgColor={block.iconBgColor}
              ariaLabel={block.ariaLabel}
            />
          ))}
        </Box>
      </Section>

      {/* Statistics Card - Black Themed, Centered */}
      {/* Commented out statistics section */}
      {/* <Box
        component="section"
        aria-label="Company statistics"
        sx={{
          py: { xs: 6, md: 8 },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <SvCard
              sx={{
                backgroundColor: "rgba(0, 0, 0, 0.85)",
                color: "common.white",
                p: { xs: 4, md: 6 },
                maxWidth: { xs: "100%", sm: 800, md: 900 },
                width: "100%",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
                "&:hover": {
                  boxShadow: "0 16px 48px rgba(0, 0, 0, 0.5)",
                  transform: "translateY(-4px)",
                },
                "&:hover .stat-icon": {
                  transform: "scale(1.15) rotate(5deg)",
                  filter: "drop-shadow(0 0 8px rgba(255,255,255,0.3))",
                },
                "&:hover .stat-value": {
                  transform: "scale(1.05)",
                  textShadow: "0 0 12px rgba(255,255,255,0.3)",
                },
              }}
            >
              <Grid container spacing={3} role="list" aria-label="Company statistics">
                {aboutStatistics.map((stat, idx) => (
                  <Grid item xs={6} sm={3} key={stat.label} role="listitem">
                    <Stack spacing={1} alignItems="center" textAlign="center">
                      <Box
                        className="stat-icon"
                        aria-hidden="true"
                        sx={{
                          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                        }}
                      >
                        {stat.icon}
                      </Box>
                      <Box
                        className="stat-value"
                        sx={{
                          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                        }}
                      >
                        <CountUpNumber end={stat.value} ariaLabel={stat.ariaLabel} />
                      </Box>
                      <Typography
                        variant="body1"
                        component="span"
                        sx={{
                          color: "rgba(255,255,255,0.9)",
                          fontWeight: 500,
                          fontSize: { xs: "0.875rem", md: "1rem" },
                          transition: "color 0.3s ease",
                          "&:hover": {
                            color: "common.white",
                          },
                        }}
                      >
                        {stat.label}
                      </Typography>
                    </Stack>
                  </Grid>
                ))}
              </Grid>
            </SvCard>
          </Box>
        </Container>
      </Box> */}

      {/* Footer Section - Matching home.jsx style, Contact Us only */}
      <Box
        component="footer"
        id="contact"
        sx={{
          py: 6,
          borderTop: "1px solid",
          borderColor: "rgba(255,255,255,0.18)",
          background: "rgba(255,255,255,0.02)",
        }}
      >
        <Container>
          <Grid container spacing={{ xs: 2.5, sm: 3, md: 3 }}>
            <Grid item xs={12} md={5}>
              <Stack spacing={1}>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 900, color: "common.white" }}
                >
                  Street Visibility
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "rgba(255,255,255,0.78)" }}
                >
                  Turn city streets into high-impact, measurable advertising channels.
                </Typography>
                <Stack direction="row" spacing={1} sx={{ pt: 1 }}>
                  <Button
                    size="small"
                    variant="contained"
                    color="info"
                    onClick={() => onOpenSignUp("advertiser")}
                    aria-label="Start a campaign - open sign up"
                  >
                    Start a campaign
                  </Button>
                </Stack>
              </Stack>
            </Grid>
            <Grid item xs={12} md={7}>
              <Grid container spacing={{ xs: 2, sm: 2, md: 2 }}>
                <Grid item xs={12} sm={12} md={12}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 900, mb: 1, color: "common.white" }}>
                    Contact Us
                  </Typography>
                  <Stack spacing={2}>
                    {/* Location */}
                    <Box>
                      <Typography
                        variant="body2"
                        sx={{
                          fontWeight: 700,
                          color: "primary.main",
                          mb: 0.5,
                          textTransform: "uppercase",
                          letterSpacing: 0.5,
                        }}
                      >
                        Location
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: "rgba(255,255,255,0.95)",
                          whiteSpace: "pre-line",
                          lineHeight: 1.6,
                        }}
                      >
                        Riara cooperative suites.
                        {"\n"}P. O. Box 13861-00800, Nairobi, Kenya
                      </Typography>
                    </Box>
                    {/* Contact details */}
                    <Box>
                      <Typography
                        variant="body2"
                        sx={{
                          fontWeight: 700,
                          color: "primary.main",
                          mb: 0.5,
                          textTransform: "uppercase",
                          letterSpacing: 0.5,
                        }}
                      >
                        Contact details
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: "rgba(255,255,255,0.95)",
                          lineHeight: 1.7,
                        }}
                      >
                        +254 707 660 173
                        <br />
                        8587 911 064
                        <br />
                        <Box
                          component="a"
                          href="mailto:info@streetvisibility.com"
                          sx={{
                            color: "rgba(255,255,255,0.95)",
                            textDecoration: "underline",
                            "&:hover": {
                              color: "primary.main",
                            },
                          }}
                        >
                          info@streetvisibility.com
                        </Box>
                      </Typography>
                    </Box>
                    <Stack direction="row" spacing={1} role="list" aria-label="Social media links">
                      <IconButton
                        size="small"
                        component="a"
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit our Facebook page"
                        sx={{
                          color: "rgba(255,255,255,0.78)",
                          "&:hover": {
                            color: "rgba(255,255,255,0.95)",
                            backgroundColor: "rgba(255,255,255,0.1)",
                          },
                        }}
                      >
                        <FacebookIcon fontSize="small" />
                      </IconButton>
                      <IconButton
                        size="small"
                        component="a"
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit our Twitter page"
                        sx={{
                          color: "rgba(255,255,255,0.78)",
                          "&:hover": {
                            color: "rgba(255,255,255,0.95)",
                            backgroundColor: "rgba(255,255,255,0.1)",
                          },
                        }}
                      >
                        <TwitterIcon fontSize="small" />
                      </IconButton>
                      <IconButton
                        size="small"
                        component="a"
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit our LinkedIn page"
                        sx={{
                          color: "rgba(255,255,255,0.78)",
                          "&:hover": {
                            color: "rgba(255,255,255,0.95)",
                            backgroundColor: "rgba(255,255,255,0.1)",
                          },
                        }}
                      >
                        <LinkedInIcon fontSize="small" />
                      </IconButton>
                      <IconButton
                        size="small"
                        component="a"
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit our Instagram page"
                        sx={{
                          color: "rgba(255,255,255,0.78)",
                          "&:hover": {
                            color: "rgba(255,255,255,0.95)",
                            backgroundColor: "rgba(255,255,255,0.1)",
                          },
                        }}
                      >
                        <InstagramIcon fontSize="small" />
                      </IconButton>
                    </Stack>
                  </Stack>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Divider sx={{ my: 3, borderColor: "rgba(255,255,255,0.18)" }} />
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={1}
            alignItems={{ sm: "center" }}
            justifyContent="space-between"
          >
            <Typography
              variant="caption"
              sx={{ color: "rgba(255,255,255,0.70)" }}
            >
              © {new Date().getFullYear()} Street Visibility. All rights reserved.
            </Typography>
            <Stack direction="row" spacing={1}>
            <Tooltip title="Back to top">
              <IconButton 
                onClick={() => scrollToId("top")} 
                size="small"
                aria-label="Scroll back to top of page"
              >
                <ExpandMoreIcon
                  sx={{
                    transform: "rotate(180deg)",
                    color: "rgba(255,255,255,0.78)",
                  }}
                  aria-hidden="true"
                />
              </IconButton>
            </Tooltip>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </>
  );
}

const AboutSection = React.memo(AboutSectionImpl);
export default AboutSection;

