import * as React from "react";
import { Box, Button, Container, Grid, IconButton, Stack, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { containerAnimations, cardAnimations, buttonAnimations, textAnimations, keyframes } from "./animations";

const CONTACT_CONFIG = {
  location: {
    address: "Riara cooperative suites, Nairobi, Kenya",
    fullAddress: "Riara cooperative suites, Nairobi, Kenya. P. O. Box 13861-00800, Nairobi, Kenya",
  },
  contact: {
    phone: "+254 707 660 173",
    phoneAlt: "8587 911 064",
    email: "info@streetvisibility.com",
    emailSales: "sales@streetvisibility.com",
  },
};

function ContactSectionImpl({ tone = "default", onOpenSignUp, showContactDetails = false, onCollapse, trianglePosition = { left: "50%", transform: "translateX(-50%)" } }) {
  const onDark = tone === "onDark";

  return (
    <Box
      component="section"
      id="contact-info-section"
      sx={{
        position: "relative",
        backgroundColor: onDark ? "common.white" : "grey.50",
      }}
    >
      {/* Blue triangle and dark blue card – shown when Contact information is clicked */}
      {showContactDetails && (
        <>
          <Box
            sx={{
              width: 0,
              height: 0,
              borderLeft: "20px solid transparent",
              borderRight: "20px solid transparent",
              borderTop: "14px solid",
              borderTopColor: "#0d2137",
              position: "relative",
              top: -1,
              left: trianglePosition.left,
              transform: trianglePosition.transform,
              zIndex: 1,
              animation: "triangleAppear 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
              ...keyframes.triangleAppear(trianglePosition.transform),
              transition: "left 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          />

          {/* Dark blue main content */}
          <Box
            id="contact-details"
            sx={{
              background: "linear-gradient(180deg, #0d2137 0%, #0a1929 100%)",
              py: { xs: 4, md: 5 },
              minHeight: { md: 420 },
              position: "relative",
              ...containerAnimations.slideDownFadeIn,
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
                              "&:hover": {
                                color: "common.white",
                              },
                            }}
                          >
                            {CONTACT_CONFIG.location.fullAddress}
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
                            {CONTACT_CONFIG.contact.phone}
                            <br />
                            {CONTACT_CONFIG.contact.phoneAlt}
                            <br />
                            <Box
                              component="a"
                              href={`mailto:${CONTACT_CONFIG.contact.email}`}
                              sx={{
                                color: "rgba(255,255,255,0.95)",
                                textDecoration: "underline",
                                ...textAnimations.slideRight,
                                "&:hover": {
                                  color: "#f5a623",
                                },
                              }}
                            >
                              {CONTACT_CONFIG.contact.email}
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
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.814284715!2d36.7814!3d-1.2864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d3b2e1b0a5%3A0x1!2sNairobi!5e0!3m2!1sen!2ske!4v1"
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
      )}
    </Box>
  );
}

const ContactSection = React.memo(ContactSectionImpl);
export default ContactSection;
