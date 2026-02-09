import { createTheme } from "@mui/material/styles";

// Street Visibility brand palette (derived from logo image6.png)
// S logo: three shades – dark teal (border, VISIBILITY), vibrant green (one S segment, STREET), yellowish green (other S segment)
export const sv = {
  // All three logo shades from the S mark
  logoTeal: "#1D6469",     // dark teal – circle border, "VISIBILITY" text
  logoGreen: "#26B060",    // vibrant green – one S segment, "STREET" text
  logoLime: "#85C341",     // yellowish green – other S segment
  // RGB for rgba() in gradients/shadows: teal 29,100,105 | green 38,176,96 | lime 133,195,65

  primary: "#1D6469",      // logoTeal – main brand (border, VISIBILITY)
  primaryDark: "#154a4e",
  primarySoft: "#257a80",

  accentGreen: "#26B060",  // logoGreen – vibrant green (STREET, S segment)
  accentLime: "#85C341",   // logoLime – yellowish green (S segment)
  mustardYellow: "#D4AF37", // mustard yellow with warm undertones – navigation & login

  bg: "#f5f8f8",
  surface: "#ffffff",
  border: "#dce6e6",

  text: "#0a2e2d",
  textMuted: "#2f5e5d",
};

const theme = createTheme({
  palette: {
    primary: {
      main: sv.primary,
      dark: sv.primaryDark,
      contrastText: "#ffffff",
    },
    secondary: {
      main: sv.accentGreen,
      contrastText: "#052b1a",
    },
    info: {
      main: sv.accentLime,
      contrastText: "#1a1f09",
    },
    background: {
      default: sv.bg,
      paper: sv.surface,
    },
    text: {
      primary: sv.text,
      secondary: sv.textMuted,
    },
    divider: sv.border,
  },
  shape: {
    borderRadius: 12,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: { xs: "16px", sm: "24px", md: "32px" },
          paddingRight: { xs: "16px", sm: "24px", md: "32px" },
        },
      },
      defaultProps: {
        maxWidth: { xs: "100%", sm: "600px", md: "900px", lg: "1200px", xl: "1400px" },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        ":root": {
          "--sv-logo-teal": sv.logoTeal,
          "--sv-logo-green": sv.logoGreen,
          "--sv-logo-lime": sv.logoLime,
          "--sv-primary": sv.primary,
          "--sv-primary-dark": sv.primaryDark,
          "--sv-primary-soft": sv.primarySoft,
          "--sv-accent-green": sv.accentGreen,
          "--sv-accent-lime": sv.accentLime,
          "--sv-mustard-yellow": sv.mustardYellow,
          "--sv-bg": sv.bg,
          "--sv-surface": sv.surface,
          "--sv-border": sv.border,
          "--sv-text": sv.text,
          "--sv-text-muted": sv.textMuted,
        },
      },
    },
  },
});

export default theme;