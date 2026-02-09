import * as React from "react";
import { Box, Container, Grid, IconButton, Stack, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { containerAnimations, cardAnimations, buttonAnimations, textAnimations, keyframes } from "./animations";
import { contactConfig, defaultMapEmbedUrl } from "../../config/contactConfig";

function ContactDetailsOverlay({ trianglePosition, onCollapse, onOpenSignUp }) {
  return (
    <>
      {/* Blue triangle */}
      <Box
        sx={{
          width: 0,
          height: 0,
          borderLeft: "20px solid transparent",
          borderRight: "20px solid transparent",
          borderTop: "14px solid",
          borderTopColor: "#0d2137",
          position: "absolute",
          top: { xs: 80, sm: 100, md: 120 },
          left: trianglePosition.left,
          transform: trianglePosition.transform,
          zIndex: 11,
          animation: "triangleAppear 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          ...keyframes.triangleAppear(trianglePosition.transform),
          transition: "left 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      />

      {/* Dark blue main content - positioned as overlay */}
      <Box
        id="contact-info-section"
        sx={{
          position: "absolute",
          top: { xs: 94, sm: 114, md: 134 },
          left: { xs: 16, sm: "50%" },
          right: { xs: 16, sm: "auto" },
          transform: { xs: "none", sm: "translateX(-50%)" },
          width: { xs: "calc(100% - 32px)", sm: "90%", md: "85%", lg: "80%" },
          maxWidth: 1200,
          background: "linear-gradient(180deg, #0d2137 0%, #0a1929 100%)",
          py: { xs: 4, md: 5 },
          minHeight: { md: 420 },
          borderRadius: { xs: 2, md: 3 },
          boxShadow: "0 20px 60px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1)",
          zIndex: 10,
          ...containerAnimations.slideDownFadeIn,
          overflow: "auto",
          maxHeight: { xs: "calc(100vh - 150px)", md: "calc(100vh - 200px)" },
        }}
      >
        {/* Close button */}
        <IconButton
          onClick={onCollapse}
          sx={{
            position: "absolute",
            top: 16,
            right: 16,
            zIndex: 10,
            color: "rgba(255,255,255,0.9)",
            backgroundColor: "rgba(0,0,0,0.2)",
            ...containerAnimations.rotateIn("0.3s"),
            "&:hover": {
              backgroundColor: "rgba(0,0,0,0.4)",
              color: "common.white",
              ...buttonAnimations.rotate,
            },
          }}
          aria-label="Close contact information"
        >
          <CloseIcon />
        </IconButton>
        <Container>
          <Grid container spacing={{ xs: 3, md: 4 }} alignItems="stretch">
            {/* Left: Location & Contact details */}
            <Grid item xs={12} md={3}>
              <Stack spacing={3.5} sx={{ pr: { md: 2 } }}>
                <Box sx={containerAnimations.fadeInUp("0.2s")}>
                  <Stack direction="row" alignItems="flex-start" spacing={1.5}>
                    <Box
                      sx={{
                        width: 4,
                        minHeight: 28,
                        borderRadius: 1,
                        backgroundColor: "#f5a623",
                        flex: "0 0 auto",
                        mt: 0.3,
                        transition: "all 0.3s ease",
                        "&:hover": {
                          width: 6,
                          boxShadow: "0 0 12px rgba(245, 166, 35, 0.6)",
                        },
                      }}
                    />
                    <Box>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          fontWeight: 900,
                          color: "#f5a623",
                          letterSpacing: 0.5,
                          textTransform: "uppercase",
                          ...textAnimations.glow,
                        }}
                      >
                        Location
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: "rgba(255,255,255,0.95)",
                          mt: 1,
                          lineHeight: 1.6,
                          transition: "color 0.3s ease",
                          whiteSpace: "pre-line",
                          "&:hover": {
                            color: "common.white",
                          },
                        }}
                      >
                        {contactConfig.location.fullAddress}
                      </Typography>
                    </Box>
                  </Stack>
                </Box>

                <Box sx={containerAnimations.fadeInUp("0.4s")}>
                  <Stack direction="row" alignItems="flex-start" spacing={1.5}>
                    <Box
                      sx={{
                        width: 4,
                        minHeight: 28,
                        borderRadius: 1,
                        backgroundColor: "#f5a623",
                        flex: "0 0 auto",
                        mt: 0.3,
                        transition: "all 0.3s ease",
                        "&:hover": {
                          width: 6,
                          boxShadow: "0 0 12px rgba(245, 166, 35, 0.6)",
                        },
                      }}
                    />
                    <Box>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          fontWeight: 900,
                          color: "#f5a623",
                          letterSpacing: 0.5,
                          textTransform: "uppercase",
                          ...textAnimations.glow,
                        }}
                      >
                        Contact details
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: "rgba(255,255,255,0.95)",
                          mt: 1,
                          lineHeight: 1.7,
                          transition: "color 0.3s ease",
                          "&:hover": {
                            color: "common.white",
                          },
                        }}
                      >
                        {contactConfig.contact.phone}
                        <br />
                        {contactConfig.contact.phoneAlt}
                        <br />
                        <Box
                          component="a"
                          href={`mailto:${contactConfig.contact.email}`}
                          sx={{
                            color: "rgba(255,255,255,0.95)",
                            textDecoration: "underline",
                            ...textAnimations.slideRight,
                            "&:hover": {
                              color: "#f5a623",
                            },
                          }}
                        >
                          {contactConfig.contact.email}
                        </Box>
                      </Typography>
                    </Box>
                  </Stack>
                </Box>
              </Stack>
            </Grid>

            {/* Right: Google Map */}
            <Grid item xs={12} md={9}>
              <Box
                sx={{
                  width: { xs: "100%", md: "40vw" },
                  height: { xs: 320, md: "100%" },
                  minHeight: 320,
                  borderRadius: 2,
                  overflow: "hidden",
                  border: "1px solid rgba(255,255,255,0.12)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
                  ...containerAnimations.fadeInScale("0.5s"),
                  ...cardAnimations.mapContainer,
                }}
              >
                <iframe
                  title="Street Visibility location"
                  src={defaultMapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: 320 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default ContactDetailsOverlay;
