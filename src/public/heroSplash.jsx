import * as React from "react";
import { Box, Slide } from "@mui/material";
import Hero from "./hero";

const HeroSplash = ({ onEnter }) => {
  const [exiting, setExiting] = React.useState(false);

  const startExit = React.useCallback(() => {
    setExiting(true);
  }, []);

  React.useEffect(() => {
    if (exiting) return;
    const id = window.setTimeout(() => startExit(), 3000);
    return () => window.clearTimeout(id);
  }, [exiting, startExit]);

  return (
    <Box
      sx={{
        minHeight: "100vh",
      }}
    >
      <Slide
        direction="left"
        in={!exiting}
        appear
        timeout={450}
        onExited={() => onEnter?.()}
      >
        <Box>
          <Hero />
        </Box>
      </Slide>
    </Box>
  );
};

export default HeroSplash;
