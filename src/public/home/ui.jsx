import * as React from "react";
import {
  Box,
  Card,
  CardActionArea,
  Container,
  Stack,
  Typography,
  useScrollTrigger,
} from "@mui/material";

// Store the contact overlay handler in a module-level variable
// This allows scrollToId to access it without needing React context
let contactOverlayHandler = null;

/**
 * Set the contact overlay handler (called from Home component)
 * @param {Function|null} handler - Function to open the contact overlay
 */
export function setContactOverlayHandler(handler) {
  contactOverlayHandler = handler;
}

/**
 * Scroll to an element by ID, with special handling for contact overlay
 * @param {string} id - The ID of the element to scroll to
 */
export function scrollToId(id) {
  // Special handling for contact-info-section (opens overlay if closed)
  if (id === "contact-info-section" && typeof contactOverlayHandler === "function") {
    contactOverlayHandler();
    return;
  }
  
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function useElevatedAppBar() {
  const [target, setTarget] = React.useState(undefined);

  React.useEffect(() => {
    // Pages may scroll inside a container (not the window). If so, use that element as the trigger target.
    const el = document.querySelector("[data-sv-scroll-container]");
    setTarget(el ?? undefined);
  }, []);

  const trigger = useScrollTrigger({
    threshold: 12,
    disableHysteresis: true,
    target,
  });

  return trigger;
}

export function useScrollFadeIn(options = {}) {
  const { threshold = 0.1, rootMargin = "0px 0px 100px 0px" } = options;
  const [isVisible, setIsVisible] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    let observer = null;
    let timeoutId = null;

    // Defer initial visibility check to avoid blocking render
    // Use requestIdleCallback for better performance, fallback to setTimeout
    const checkInitialVisibility = () => {
      if (!currentRef) return;

      const rect = currentRef.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const buffer = 200;

      const isInViewport =
        rect.top < viewportHeight + buffer &&
        rect.bottom > -buffer &&
        rect.left < window.innerWidth &&
        rect.right > 0;

      if (isInViewport) {
        setIsVisible(true);
        return; // No observer needed
      }

      // Set up Intersection Observer for elements not yet visible
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Unobserve once visible for better performance
            if (observer && currentRef) {
              observer.unobserve(currentRef);
            }
          }
        },
        { threshold, rootMargin }
      );

      observer.observe(currentRef);
    };

    // Schedule check for next idle period
    if (typeof requestIdleCallback !== "undefined") {
      timeoutId = requestIdleCallback(checkInitialVisibility, { timeout: 100 });
    } else {
      timeoutId = setTimeout(checkInitialVisibility, 0);
    }

    return () => {
      if (timeoutId) {
        if (typeof cancelIdleCallback !== "undefined") {
          cancelIdleCallback(timeoutId);
        } else {
          clearTimeout(timeoutId);
        }
      }
      if (observer && currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin]);

  return { ref, isVisible };
}

import { cardHoverStyles } from "./animations";

export function SvCard({ children, sx, interactive = true, onClick, href, ...props }) {
  const clickable = Boolean(onClick) || Boolean(href);

  return (
    <Card
      elevation={0}
      variant="outlined"
      onClick={clickable ? onClick : undefined}
      {...props}
      sx={{
        borderRadius: { xs: 3, md: 4 },
        borderColor: "divider",
        ...(interactive
          ? {
            ...cardHoverStyles.base,
            "&:focus-within": {
              outline: "2px solid",
              outlineColor: "info.main",
              outlineOffset: 2,
              transform: "translateY(-4px)",
            },
          }
          : null),
        ...sx,
      }}
    >
      {clickable ? (
        <CardActionArea
          href={href}
          sx={{
            height: "100%",
            alignItems: "stretch",
            "& .MuiCardActionArea-focusHighlight": { opacity: 0.06 },
          }}
        >
          {children}
        </CardActionArea>
      ) : (
        children
      )}
    </Card>
  );
}

export function Section({ id, overline, title, subtitle, children, tone = "default", sx, ...props }) {
  const onDark = tone === "onDark";

  return (
    <Box
      id={id}
      component="section"
      sx={{
        scrollMarginTop: { xs: 76, md: 90 },
        py: { xs: 7, md: 10 },
        ...sx,
      }}
      {...props}
    >
      <Container>
        <Stack spacing={1.5} sx={{ mb: 4 }}>
          {overline ? (
            <Typography
              variant="overline"
              sx={{
                color: onDark ? "rgba(255,255,255,0.78)" : "text.secondary",
                letterSpacing: 1.6,
              }}
            >
              {overline}
            </Typography>
          ) : null}
          {title ? (
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: 24, sm: 28, md: 36, lg: 40 },
                lineHeight: 1.12,
                color: onDark ? "common.white" : "text.primary",
              }}
            >
              {title}
            </Typography>
          ) : null}
          {subtitle ? (
            <Typography
              variant="body1"
              sx={{
                color: onDark ? "rgba(255,255,255,0.86)" : "text.secondary",
                maxWidth: { xs: "100%", sm: 720, md: 900 },
                fontSize: { xs: 14, sm: 15, md: 16 },
                lineHeight: 1.6,
              }}
            >
              {subtitle}
            </Typography>
          ) : null}
        </Stack>
        {children}
      </Container>
    </Box>
  );
}

