// Dashboard-specific aesthetic – dark & light modes
export const dashboardDark = {
  mode: "dark",
  bg: "#0d1117",
  bgElevated: "#161b22",
  bgCard: "#1c2128",
  bgCardHover: "#22272e",
  border: "rgba(99, 110, 123, 0.25)",
  borderSubtle: "rgba(99, 110, 123, 0.12)",
  text: "#e6edf3",
  textMuted: "#b8c4ce",
  textFaint: "#D4AF37",  // mustard for labels/captions – better visibility on dark
  textLabel: "#D4AF37",  // mustard for uppercase labels, subtitles
  teal: "#1D6469",
  tealGlow: "rgba(29, 100, 105, 0.35)",
  green: "#26B060",
  greenGlow: "rgba(38, 176, 96, 0.25)",
  lime: "#85C341",
  mustard: "#D4AF37",
  mustardGlow: "rgba(212, 175, 55, 0.2)",
  fontBody: "'DM Sans', system-ui, sans-serif",
  fontDisplay: "'Instrument Serif', Georgia, serif",
};

export const dashboardLight = {
  mode: "light",
  bg: "#f5f8f8",
  bgElevated: "#ffffff",
  bgCard: "#ffffff",
  bgCardHover: "#f0f4f4",
  border: "rgba(29, 100, 105, 0.2)",
  borderSubtle: "rgba(29, 100, 105, 0.1)",
  text: "#0a2e2d",
  textMuted: "#2f5e5d",
  textFaint: "#5a7d7c",
  textLabel: "#2f5e5d",  // light mode keeps muted for labels
  teal: "#1D6469",
  tealGlow: "rgba(29, 100, 105, 0.25)",
  green: "#26B060",
  greenGlow: "rgba(38, 176, 96, 0.2)",
  lime: "#85C341",
  mustard: "#D4AF37",
  mustardGlow: "rgba(212, 175, 55, 0.15)",
  fontBody: "'DM Sans', system-ui, sans-serif",
  fontDisplay: "'Instrument Serif', Georgia, serif",
};

// Backward compat – default to dark
export const dashboard = dashboardDark;
