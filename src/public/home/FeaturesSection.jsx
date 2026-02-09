import * as React from "react";
import { Box, CardContent, Grid, Stack, Typography } from "@mui/material";
import { Section, SvCard, useScrollFadeIn } from "./ui";
import { cardAnimations, iconAnimations, textAnimations } from "./animations";

function FeatureCard({ feature, index }) {
  const cardFade = useScrollFadeIn({ threshold: 0.1 });

  return (
    <Box
      ref={cardFade.ref}
      sx={{
        height: "100%",
        display: "flex",
        opacity: cardFade.isVisible ? 1 : 0,
        transform: cardFade.isVisible ? "translateY(0)" : "translateY(30px)",
        transition: `opacity 0.6s ease-out ${index * 0.1}s, transform 0.6s ease-out ${index * 0.1}s`,
      }}
    >
      <SvCard
        sx={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          boxShadow: { xs: "0 10px 26px rgba(29, 100, 105, 0.10)", md: "0 14px 38px rgba(29, 100, 105, 0.10)" },
          ...cardAnimations.featureCard,
        }}
      >
        <CardContent sx={{ p: 3, display: "flex", flexDirection: "column", flex: 1 }}>
          <Stack spacing={1.2} sx={{ flex: 1 }}>
            <Box
              className="feature-icon"
              sx={{
                width: 42,
                height: 42,
                borderRadius: 3,
                display: "grid",
                placeItems: "center",
                border: "1px solid",
                borderColor: "divider",
                backgroundColor: "rgba(29, 100, 105, 0.08)",
                color: "secondary.main",
                flexShrink: 0,
                ...iconAnimations.scaleGlow,
              }}
            >
              {feature.icon}
            </Box>
            <Typography variant="subtitle1" sx={{ fontWeight: 900, ...textAnimations.colorTransition }}>
              {feature.title}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary", ...textAnimations.colorToPrimary, flex: 1 }}>
              {feature.desc}
            </Typography>
          </Stack>
        </CardContent>
      </SvCard>
    </Box>
  );
}

function FeaturesSectionImpl({ features, tone = "default" }) {
  return (
    <Section
      id="features"
      overline="Features snapshot"
      title="Built for visibility you can measure"
      subtitle="Real-time tracking, data analytics, and a clear earnings/reporting experience—so every journey has accountable value."
      tone={tone}
    >
      <Grid container spacing={{ xs: 2, sm: 2.5, md: 2.5 }} alignItems="stretch">
        {features.map((f, index) => (
          <Grid item xs={12} sm={6} md={6} lg={3} key={f.title} sx={{ display: "flex" }}>
            <FeatureCard feature={f} index={index} />
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}

const FeaturesSection = React.memo(FeaturesSectionImpl);
export default FeaturesSection;

