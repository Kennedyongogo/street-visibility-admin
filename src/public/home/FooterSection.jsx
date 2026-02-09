import * as React from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  IconButton,
  Link,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { scrollToId } from "./ui";

function FooterSectionImpl({ onOpenSignUp, tone = "default" }) {
  const onDark = tone === "onDark";

  return (
    <Box
      component="footer"
      id="contact"
      sx={{
        py: 6,
        borderTop: "1px solid",
        borderColor: onDark ? "rgba(255,255,255,0.18)" : "divider",
        background: onDark
          ? "rgba(255,255,255,0.02)"
          : "radial-gradient(900px 340px at 20% 0%, rgba(29, 100, 105, 0.22), transparent 60%), rgba(255,255,255,0.01)",
      }}
    >
      <Container>
        <Grid container spacing={{ xs: 2.5, sm: 3, md: 3 }}>
          <Grid item xs={12} md={5}>
            <Stack spacing={1}>
              <Typography
                variant="h6"
                sx={{ fontWeight: 900, color: onDark ? "common.white" : "text.primary" }}
              >
                Street Visibility
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: onDark ? "rgba(255,255,255,0.78)" : "text.secondary" }}
              >
                Turn city streets into high-impact, measurable advertising channels.
              </Typography>
              <Stack direction="row" spacing={1} sx={{ pt: 1 }}>
                <Button
                  size="small"
                  variant="contained"
                  color="info"
                  onClick={() => onOpenSignUp("advertiser")}
                >
                  Start a campaign
                </Button>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12} md={7}>
            <Grid container spacing={{ xs: 2, sm: 2, md: 2 }}>
              <Grid item xs={6} sm={4}>
                <Typography variant="subtitle2" sx={{ fontWeight: 900, mb: 1 }}>
                  Product
                </Typography>
                <Stack spacing={0.7}>
                  <Link
                    component="button"
                    onClick={() => scrollToId("how")}
                    underline="hover"
                    sx={{
                      textAlign: "left",
                      color: onDark ? "rgba(255,255,255,0.78)" : "text.secondary",
                      "&:hover": { color: onDark ? "rgba(255,255,255,0.95)" : "secondary.main" },
                    }}
                  >
                    How it works
                  </Link>
                  <Link
                    component="button"
                    onClick={() => scrollToId("features")}
                    underline="hover"
                    sx={{
                      textAlign: "left",
                      color: onDark ? "rgba(255,255,255,0.78)" : "text.secondary",
                      "&:hover": { color: onDark ? "rgba(255,255,255,0.95)" : "secondary.main" },
                    }}
                  >
                    Features
                  </Link>
                  <Link
                    component="button"
                    onClick={() => scrollToId("testimonials")}
                    underline="hover"
                    sx={{
                      textAlign: "left",
                      color: onDark ? "rgba(255,255,255,0.78)" : "text.secondary",
                      "&:hover": { color: onDark ? "rgba(255,255,255,0.95)" : "secondary.main" },
                    }}
                  >
                    Testimonials
                  </Link>
                </Stack>
              </Grid>
              <Grid item xs={6} sm={4}>
                <Typography variant="subtitle2" sx={{ fontWeight: 900, mb: 1 }}>
                  Company
                </Typography>
                <Stack spacing={0.7}>
                  <Link
                    component="button"
                    onClick={() => scrollToId("about")}
                    underline="hover"
                    sx={{
                      textAlign: "left",
                      color: onDark ? "rgba(255,255,255,0.78)" : "text.secondary",
                      "&:hover": { color: onDark ? "rgba(255,255,255,0.95)" : "secondary.main" },
                    }}
                  >
                    About us
                  </Link>
                  <Link
                    component="button"
                    onClick={() => scrollToId("values")}
                    underline="hover"
                    sx={{
                      textAlign: "left",
                      color: onDark ? "rgba(255,255,255,0.78)" : "text.secondary",
                      "&:hover": { color: onDark ? "rgba(255,255,255,0.95)" : "secondary.main" },
                    }}
                  >
                    Core values
                  </Link>
                </Stack>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant="subtitle2" sx={{ fontWeight: 900, mb: 1 }}>
                  Legal
                </Typography>
                <Stack spacing={0.7}>
                  <Link
                    component="button"
                    onClick={() => scrollToId("terms")}
                    underline="hover"
                    sx={{
                      textAlign: "left",
                      color: onDark ? "rgba(255,255,255,0.78)" : "text.secondary",
                      "&:hover": { color: onDark ? "rgba(255,255,255,0.95)" : "secondary.main" },
                    }}
                  >
                    Terms & privacy
                  </Link>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Divider sx={{ my: 3, borderColor: onDark ? "rgba(255,255,255,0.18)" : "divider" }} />
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={1}
          alignItems={{ sm: "center" }}
          justifyContent="space-between"
        >
          <Typography
            variant="caption"
            sx={{ color: onDark ? "rgba(255,255,255,0.70)" : "text.secondary" }}
          >
            © {new Date().getFullYear()} Street Visibility. All rights reserved.
          </Typography>
          <Stack direction="row" spacing={1}>
            <Tooltip title="Back to top">
              <IconButton onClick={() => scrollToId("top")} size="small">
                <ExpandMoreIcon
                  sx={{
                    transform: "rotate(180deg)",
                    color: onDark ? "rgba(255,255,255,0.78)" : "text.secondary",
                  }}
                />
              </IconButton>
            </Tooltip>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

const FooterSection = React.memo(FooterSectionImpl);
export default FooterSection;

