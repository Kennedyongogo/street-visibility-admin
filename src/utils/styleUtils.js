/**
 * Common styling utilities and patterns
 * Reduces code duplication by centralizing frequently used styles
 */

import { sv } from "../theme";

// Brand color RGBA values for gradients and shadows
export const brandColors = {
  teal: { r: 29, g: 100, b: 105 },
  green: { r: 38, g: 176, b: 96 },
  lime: { r: 133, g: 195, b: 65 },
};

// Common white opacity values
export const whiteOpacity = {
  full: "rgba(255,255,255,1)",
  high: "rgba(255,255,255,0.95)",
  medium: "rgba(255,255,255,0.86)",
  low: "rgba(255,255,255,0.78)",
  veryLow: "rgba(255,255,255,0.70)",
  minimal: "rgba(255,255,255,0.04)",
  subtle: "rgba(255,255,255,0.02)",
  tiny: "rgba(255,255,255,0.01)",
};

// Helper function to create rgba string
export const rgba = (color, alpha) => {
  if (typeof color === "string") {
    // If it's already a color name, use it directly
    return color;
  }
  return `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha})`;
};

/**
 * Common radial gradient patterns
 */
export const gradients = {
  /**
   * Hero background gradient - teal and green glow
   */
  heroBackground: (options = {}) => {
    const {
      tealOpacity = 0.30,
      greenOpacity = 0.14,
      limeOpacity = 0.10,
      size = "900px 420px",
      includeLime = true,
    } = options;

    const tealGrad = `radial-gradient(${size} at 15% 15%, ${rgba(brandColors.teal, tealOpacity)}, transparent 55%)`;
    const greenGrad = `radial-gradient(${size} at 85% 0%, ${rgba(brandColors.green, greenOpacity)}, transparent 50%)`;
    const limeGrad = includeLime
      ? `radial-gradient(700px 360px at 70% 90%, ${rgba(brandColors.lime, limeOpacity)}, transparent 55%)`
      : "";

    return [tealGrad, greenGrad, limeGrad].filter(Boolean).join(", ");
  },

  /**
   * Dialog/Modal background gradient
   */
  dialogBackground: (options = {}) => {
    const {
      tealOpacity = 0.22,
      greenOpacity = 0.14,
      size = "900px 400px",
    } = options;

    return `radial-gradient(${size} at 0% 0%, ${rgba(brandColors.teal, tealOpacity)}, transparent 55%), radial-gradient(${size} at 100% 0%, ${rgba(brandColors.green, greenOpacity)}, transparent 50%)`;
  },

  /**
   * Footer background gradient
   */
  footerBackground: () => {
    return `radial-gradient(900px 340px at 20% 0%, ${rgba(brandColors.teal, 0.22)}, transparent 60%), ${whiteOpacity.tiny}`;
  },

  /**
   * Card background gradient (subtle)
   */
  cardBackground: (options = {}) => {
    const {
      tealOpacity = 0.24,
      greenOpacity = 0.14,
      whiteOpacity = 0.03,
      size = "500px 260px",
    } = options;

    return `radial-gradient(${size} at 35% 25%, ${rgba(brandColors.teal, tealOpacity)}, transparent 55%), radial-gradient(${size} at 85% 65%, ${rgba(brandColors.green, greenOpacity)}, transparent 55%), rgba(255,255,255,${whiteOpacity})`;
  },

  /**
   * Page background gradient (light theme)
   */
  pageBackground: (options = {}) => {
    const {
      whiteOpacity = 0.14,
      greenOpacity = 0.18,
      limeOpacity = 0.14,
      size = "900px 420px",
    } = options;

    return `radial-gradient(${size} at 15% 15%, rgba(255,255,255,${whiteOpacity}), transparent 55%), radial-gradient(${size} at 85% 0%, ${rgba(brandColors.green, greenOpacity)}, transparent 50%), radial-gradient(700px 360px at 70% 90%, ${rgba(brandColors.lime, limeOpacity)}, transparent 55%)`;
  },
};

/**
 * Common text color utilities for dark/light themes
 */
export const textColors = {
  onDark: {
    primary: whiteOpacity.full,
    secondary: whiteOpacity.low,
    muted: whiteOpacity.veryLow,
  },
  onLight: {
    primary: sv.text,
    secondary: sv.textMuted,
  },
};

/**
 * Common transition timings
 */
export const transitions = {
  fast: "160ms ease",
  normal: "300ms ease",
  slow: "600ms ease-out",
  spring: "450ms cubic-bezier(0.4, 0, 0.2, 1)",
};

/**
 * Common shadow utilities
 */
export const shadows = {
  card: "0 10px 26px rgba(29, 100, 105, 0.10)",
  cardHover: "0 14px 38px rgba(29, 100, 105, 0.10)",
  overlay: "0 20px 60px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1)",
  map: "0 8px 32px rgba(0,0,0,0.3)",
};

/**
 * Common spacing patterns
 */
export const spacing = {
  sectionPadding: { xs: 7, md: 10 },
  containerPadding: { xs: "16px", sm: "24px", md: "32px" },
};
