/**
 * Animation styles and keyframes for cards and UI elements
 * Import and use these in components for consistent animations
 */

// Keyframe animations
export const keyframes = {
  slideDownFadeIn: {
    "@keyframes slideDownFadeIn": {
      "0%": {
        opacity: 0,
        transform: "translateY(-20px)",
      },
      "100%": {
        opacity: 1,
        transform: "translateY(0)",
      },
    },
  },
  fadeInUp: {
    "@keyframes fadeInUp": {
      "0%": {
        opacity: 0,
        transform: "translateY(20px)",
      },
      "100%": {
        opacity: 1,
        transform: "translateY(0)",
      },
    },
  },
  fadeInScale: {
    "@keyframes fadeInScale": {
      "0%": {
        opacity: 0,
        transform: "scale(0.95) translateY(20px)",
      },
      "100%": {
        opacity: 1,
        transform: "scale(1) translateY(0)",
      },
    },
  },
  rotateIn: {
    "@keyframes rotateIn": {
      "0%": {
        opacity: 0,
        transform: "rotate(-90deg) scale(0.5)",
      },
      "100%": {
        opacity: 1,
        transform: "rotate(0deg) scale(1)",
      },
    },
  },
  triangleAppear: (transform) => ({
    "@keyframes triangleAppear": {
      "0%": {
        opacity: 0,
        transform: `${transform} translateY(-10px)`,
      },
      "100%": {
        opacity: 1,
        transform: transform,
      },
    },
  }),
};

// Card hover animations
export const cardHoverStyles = {
  base: {
    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    "@media (hover:hover)": {
      "&:hover": {
        transform: "translateY(-8px) scale(1.02)",
        boxShadow: "0 24px 60px rgba(0,0,0,0.2), 0 0 0 1px rgba(29, 100, 105, 0.1)",
        borderColor: "rgba(255,255,255,0.3)",
      },
    },
    "&:active": {
      transform: "translateY(-4px) scale(1.01)",
    },
  },
  subtle: {
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    "@media (hover:hover)": {
      "&:hover": {
        transform: "translateY(-4px)",
        boxShadow: "0 12px 32px rgba(0,0,0,0.15)",
      },
    },
  },
};

// Icon animations
export const iconAnimations = {
  scaleRotate: {
    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    "&:hover": {
      transform: "scale(1.15) rotate(5deg)",
      filter: "drop-shadow(0 0 8px rgba(29, 100, 105, 0.3))",
    },
  },
  scaleGlow: {
    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    "&:hover": {
      transform: "scale(1.1)",
      boxShadow: "0 8px 24px rgba(29, 100, 105, 0.25)",
    },
  },
  pulse: {
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    "&:hover": {
      transform: "scale(1.5)",
      boxShadow: "0 0 12px currentColor",
    },
  },
};

// Text animations
export const textAnimations = {
  colorTransition: {
    transition: "color 0.3s ease",
    "&:hover": {
      color: "secondary.main",
    },
  },
  colorToPrimary: {
    transition: "color 0.3s ease",
    "&:hover": {
      color: "text.primary",
    },
  },
  glow: {
    transition: "text-shadow 0.3s ease",
    "&:hover": {
      textShadow: "0 0 8px rgba(245, 166, 35, 0.5)",
    },
  },
  slideRight: {
    transition: "all 0.3s ease",
    "&:hover": {
      transform: "translateX(4px)",
      textShadow: "0 0 8px rgba(245, 166, 35, 0.4)",
    },
  },
};

// Button animations
export const buttonAnimations = {
  scale: {
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    transform: "scale(1)",
    "&:hover": {
      transform: "scale(1.05)",
      boxShadow: "0 4px 12px rgba(29, 100, 105, 0.4)",
    },
    "&:active": {
      transform: "scale(0.98)",
    },
  },
  rotate: {
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    "&:hover": {
      transform: "rotate(90deg) scale(1.1)",
    },
  },
};

// Container animations
export const containerAnimations = {
  slideDownFadeIn: {
    animation: "slideDownFadeIn 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
    ...keyframes.slideDownFadeIn,
  },
  fadeInUp: (delay = "0s") => ({
    animation: `fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${delay} both`,
    ...keyframes.fadeInUp,
  }),
  fadeInScale: (delay = "0s") => ({
    animation: `fadeInScale 0.7s cubic-bezier(0.4, 0, 0.2, 1) ${delay} both`,
    ...keyframes.fadeInScale,
  }),
  rotateIn: (delay = "0s") => ({
    animation: `rotateIn 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${delay} both`,
    ...keyframes.rotateIn,
  }),
};

// Card-specific animation combinations
export const cardAnimations = {
  featureCard: {
    "&:hover .feature-icon": iconAnimations.scaleGlow,
    "& .feature-icon": {
      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    },
  },
  stepCard: {
    "&:hover .step-chip": {
      transform: "scale(1.1)",
      boxShadow: "0 4px 12px rgba(29, 100, 105, 0.3)",
    },
    "&:hover .step-dot": iconAnimations.pulse,
    "& .step-chip, & .step-dot": {
      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    },
  },
  packageCard: {
    "&:hover .package-header": {
      transform: "scale(1.02)",
      boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
    },
    "&:hover .package-investment": {
      color: "secondary.main",
      transform: "scale(1.05)",
    },
    "& .package-header": {
      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    },
    "& .package-investment": {
      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    },
  },
  valueCard: {
    "&:hover .value-icon-box": iconAnimations.scaleGlow,
    "& .value-icon-box": {
      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    },
  },
  statisticsCard: {
    "&:hover": {
      boxShadow: "0 16px 48px rgba(0, 0, 0, 0.5)",
      transform: "translateY(-4px)",
    },
    "&:hover .stat-icon": iconAnimations.scaleRotate,
    "&:hover .stat-value": {
      transform: "scale(1.05)",
      textShadow: "0 0 12px rgba(255,255,255,0.3)",
    },
    "& .stat-icon, & .stat-value": {
      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    },
  },
  heroCard: {
    "&:hover .kpi-box": {
      transform: "translateY(-4px) scale(1.02)",
      backgroundColor: "rgba(255,255,255,0.06)",
      boxShadow: "0 8px 20px rgba(29, 100, 105, 0.15)",
    },
    "&:hover .kpi-value": {
      color: "secondary.main",
    },
    "& .kpi-box": {
      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      cursor: "pointer",
    },
    "& .kpi-value": {
      transition: "color 0.3s ease",
    },
  },
  mapContainer: {
    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    "&:hover": {
      boxShadow: "0 12px 48px rgba(0,0,0,0.4)",
      transform: "scale(1.01)",
      borderColor: "rgba(255,255,255,0.2)",
    },
  },
};

// Helper function to merge animations
export const mergeAnimations = (...animationObjects) => {
  return Object.assign({}, ...animationObjects);
};
