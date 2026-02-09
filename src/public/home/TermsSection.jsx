import * as React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Stack,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Section, useScrollFadeIn } from "./ui";

function TermsAccordion({ title, children, index, defaultExpanded = false }) {
  const accordionFade = useScrollFadeIn({ threshold: 0.1 });

  return (
    <Box
      ref={accordionFade.ref}
      sx={{
        opacity: accordionFade.isVisible ? 1 : 0,
        transform: accordionFade.isVisible ? "translateY(0)" : "translateY(30px)",
        transition: `opacity 0.6s ease-out ${index * 0.15}s, transform 0.6s ease-out ${index * 0.15}s`,
      }}
    >
      <Accordion defaultExpanded={defaultExpanded}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography sx={{ fontWeight: 900 }}>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {children}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

function TermsSectionImpl({ tone = "default" }) {
  return (
    <Section
      id="terms"
      overline="Terms & privacy"
      title="Trust and transparency"
      subtitle="We respect your privacy and expect responsible platform use. Here's a clear summary."
      tone={tone}
    >
      <Stack spacing={2}>
        <TermsAccordion
          title="Terms of Use"
          index={0}
          defaultExpanded
        >
          By accessing Street Visibility, you agree to use our platform
          responsibly and comply with all applicable laws. Drivers and clients
          must provide accurate information and maintain campaign integrity.
          Street Visibility reserves the right to suspend or terminate accounts
          that violate these terms.
        </TermsAccordion>

        <TermsAccordion
          title="Privacy Policy"
          index={1}
        >
          We respect your privacy. All personal and campaign data collected is
          used solely to provide and improve our services. GPS and activity data
          are processed to track campaign performance and ensure compliance. We
          do not share your information with third parties without consent,
          except as required by law.
        </TermsAccordion>

        <TermsAccordion
          title="Security"
          index={2}
        >
          Street Visibility implements industry-standard measures to protect your
          data. However, users are responsible for maintaining the confidentiality
          of their login credentials.
        </TermsAccordion>
      </Stack>
    </Section>
  );
}

const TermsSection = React.memo(TermsSectionImpl);
export default TermsSection;

