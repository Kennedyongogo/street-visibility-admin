import * as React from "react";
import { Box } from "@mui/material";

import { features, testimonials } from "./home/constants";

import FeaturesSection from "./home/FeaturesSection";
import FooterSection from "./home/FooterSection";
import HeroSection from "./home/HeroSection";
import TermsSection from "./home/TermsSection";
// import TestimonialsSection from "./home/TestimonialsSection";
import PublicShell from "./PublicShell";
import PageBackground from "./pages/PageBackground";
import { scrollToId, setContactOverlayHandler } from "./home/ui";

export default function Home({ onGoToLogin }) {
  const [showContactDetails, setShowContactDetails] = React.useState(false);
  const [trianglePosition, setTrianglePosition] = React.useState({ left: "50%", transform: "translateX(-50%)" });
  const contactButtonRef = React.useRef(null);
  const pricingButtonRef = React.useRef(null);

  const handleContactInfo = React.useCallback(() => {
    if (showContactDetails) {
      setShowContactDetails(false);
    } else {
      setShowContactDetails(true);
      if (contactButtonRef.current) {
        const buttonRect = contactButtonRef.current.getBoundingClientRect();
        // Calculate position relative to viewport center (since buttons are centered)
        const buttonCenter = buttonRect.left + buttonRect.width / 2;
        const viewportCenter = window.innerWidth / 2;
        const offsetFromCenter = buttonCenter - viewportCenter;
        setTrianglePosition({
          left: `calc(50% + ${offsetFromCenter}px)`,
          transform: "translateX(-50%)",
        });
      }
    }
  }, [showContactDetails]);

  // Handle navigation to contact section - open overlay when targeted via scrollToId
  React.useEffect(() => {
    // Create handler function for opening contact overlay
    const openContactOverlay = () => {
      if (!showContactDetails) {
        handleContactInfo();
        // Scroll after overlay renders
        setTimeout(() => {
          scrollToId("contact-info-section");
        }, 150);
      } else {
        scrollToId("contact-info-section");
      }
    };

    // Register handler with scrollToId utility
    setContactOverlayHandler(openContactOverlay);

    // Check hash on mount
    const hash = window.location.hash.replace("#", "");
    if (hash === "contact-info-section") {
      openContactOverlay();
    }

    // Listen for hash changes
    const handleHashChange = () => {
      const newHash = window.location.hash.replace("#", "");
      if (newHash === "contact-info-section") {
        openContactOverlay();
      }
    };
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      // Cleanup: remove handler and event listener
      setContactOverlayHandler(null);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [showContactDetails, handleContactInfo]);

  const handleRequestPricing = (openPricing) => {
    // Hide contact overlay if open (for better UX)
    if (showContactDetails) {
      setShowContactDetails(false);
    }
    // Open request pricing dialog
    if (openPricing) {
      openPricing();
    } else {
      window.location.href = `mailto:sales@streetvisibility.com?subject=Request%20pricing`;
    }
  };

  return (
    <PublicShell onGoToLogin={onGoToLogin}>
      {({ openSignUp, openPricing }) => (
        <PageBackground sx={{ py: 0 }}>
          <Box sx={{ width: "100%", minHeight: "min-content" }}>
            <HeroSection
              onOpenSignUp={openSignUp}
              tone="onDark"
              onContactButtonClick={handleContactInfo}
              onPricingButtonClick={() => handleRequestPricing(openPricing)}
              showContactDetails={showContactDetails}
              contactButtonRef={contactButtonRef}
              pricingButtonRef={pricingButtonRef}
              trianglePosition={trianglePosition}
              onCollapseContact={() => setShowContactDetails(false)}
            />
            <FeaturesSection features={features} tone="onDark" />
            {/* <TestimonialsSection testimonials={testimonials} tone="onDark" /> */}
            <TermsSection tone="onDark" />
            {/* ContactSection removed - contact details now overlay on slideshow */}
            <FooterSection onOpenSignUp={openSignUp} tone="onDark" />
          </Box>
        </PageBackground>
      )}
    </PublicShell>
  );
}

