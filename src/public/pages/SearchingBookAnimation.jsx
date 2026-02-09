import * as React from "react";
import { Box, GlobalStyles, Typography } from "@mui/material";

// Define keyframe animations - timeline-based sequence
const keyframes = `
  /* Character moves between folders: Blue → Yellow → Green → Purple → Blue (repeat) */
  @keyframes characterMove {
    /* Start at Blue folder (center-bottom) - 65% from left, centered */
    /* Position character directly above blue folder so torch light touches it */
    /* Character stands on ground level (translateY 0%) */
    0% { transform: translate(0%, 0%) scaleX(1); }
    2% { transform: translate(0%, 0%) scaleX(1); }
    6% { transform: translate(0%, 0%) scaleX(1); }
    12% { transform: translate(0%, 0%) scaleX(1); }
    
    /* Walk to Yellow folder (left-bottom) - 15% from left */
    12% { transform: translate(0%, 0%) scaleX(1); }
    24% { transform: translate(-50%, 0%) scaleX(1); }
    
    /* Position character directly above yellow folder so torch light touches it */
    24% { transform: translate(-50%, 0%) scaleX(1); }
    26% { transform: translate(-50%, 0%) scaleX(1); }
    30% { transform: translate(-50%, 0%) scaleX(1); }
    36% { transform: translate(-50%, 0%) scaleX(1); }
    
    /* Walk to Green folder (right-bottom) - 85% from left (turn around) */
    36% { transform: translate(-50%, 0%) scaleX(1); }
    48% { transform: translate(20%, 0%) scaleX(-1); }
    
    /* Position character directly above green folder so torch light touches it */
    48% { transform: translate(20%, 0%) scaleX(-1); }
    50% { transform: translate(20%, 0%) scaleX(-1); }
    54% { transform: translate(20%, 0%) scaleX(-1); }
    60% { transform: translate(20%, 0%) scaleX(-1); }
    
    /* Walk to Purple folder (between yellow and blue) - 40% from left */
    60% { transform: translate(20%, 0%) scaleX(-1); }
    72% { transform: translate(-25%, 0%) scaleX(1); }
    
    /* Position character directly above purple folder so torch light touches it */
    72% { transform: translate(-25%, 0%) scaleX(1); }
    74% { transform: translate(-25%, 0%) scaleX(1); }
    78% { transform: translate(-25%, 0%) scaleX(1); }
    84% { transform: translate(-25%, 0%) scaleX(1); }
    
    /* Walk back to Blue folder (center-bottom) */
    84% { transform: translate(-25%, 0%) scaleX(1); }
    96% { transform: translate(0%, 0%) scaleX(1); }
    
    /* Back at Blue folder */
    96% { transform: translate(0%, 0%) scaleX(1); }
    100% { transform: translate(0%, 0%) scaleX(1); }
  }
  
  /* Walking animation - only during movement phases */
  @keyframes legWalkLeft {
    /* Stopped at Blue folder (start) */
    0%, 11% { transform: translateY(0px) rotate(0deg); }
    
    /* Walk to Yellow folder */
    12%, 23% { 
      animation-timing-function: steps(4, end);
    }
    12% { transform: translateY(0px) rotate(0deg); }
    14.75% { transform: translateY(-8px) rotate(-15deg); }
    17.5% { transform: translateY(0px) rotate(0deg); }
    20.25% { transform: translateY(2px) rotate(10deg); }
    23% { transform: translateY(0px) rotate(0deg); }
    
    /* Stopped at Yellow folder */
    24%, 35% { transform: translateY(0px) rotate(0deg); }
    
    /* Walk to Green folder */
    36%, 47% { 
      animation-timing-function: steps(4, end);
    }
    36% { transform: translateY(0px) rotate(0deg); }
    38.75% { transform: translateY(-8px) rotate(-15deg); }
    41.5% { transform: translateY(0px) rotate(0deg); }
    44.25% { transform: translateY(2px) rotate(10deg); }
    47% { transform: translateY(0px) rotate(0deg); }
    
    /* Stopped at Green folder */
    48%, 59% { transform: translateY(0px) rotate(0deg); }
    
    /* Walk to Purple folder */
    60%, 71% { 
      animation-timing-function: steps(4, end);
    }
    60% { transform: translateY(0px) rotate(0deg); }
    62.75% { transform: translateY(-8px) rotate(-15deg); }
    65.5% { transform: translateY(0px) rotate(0deg); }
    68.25% { transform: translateY(2px) rotate(10deg); }
    71% { transform: translateY(0px) rotate(0deg); }
    
    /* Stopped at Purple folder */
    72%, 83% { transform: translateY(0px) rotate(0deg); }
    
    /* Walk back to Blue folder */
    84%, 95% { 
      animation-timing-function: steps(4, end);
    }
    84% { transform: translateY(0px) rotate(0deg); }
    86.75% { transform: translateY(-8px) rotate(-15deg); }
    89.5% { transform: translateY(0px) rotate(0deg); }
    92.25% { transform: translateY(2px) rotate(10deg); }
    95% { transform: translateY(0px) rotate(0deg); }
    
    /* Back at Blue folder */
    96%, 100% { transform: translateY(0px) rotate(0deg); }
  }
  
  @keyframes legWalkRight {
    /* Stopped at Blue folder (start) */
    0%, 11% { transform: translateY(0px) rotate(0deg); }
    
    /* Walk to Yellow folder */
    12%, 23% { 
      animation-timing-function: steps(4, end);
    }
    12% { transform: translateY(0px) rotate(0deg); }
    14.75% { transform: translateY(2px) rotate(10deg); }
    17.5% { transform: translateY(0px) rotate(0deg); }
    20.25% { transform: translateY(-8px) rotate(-15deg); }
    23% { transform: translateY(0px) rotate(0deg); }
    
    /* Stopped at Yellow folder */
    24%, 35% { transform: translateY(0px) rotate(0deg); }
    
    /* Walk to Green folder */
    36%, 47% { 
      animation-timing-function: steps(4, end);
    }
    36% { transform: translateY(0px) rotate(0deg); }
    38.75% { transform: translateY(2px) rotate(10deg); }
    41.5% { transform: translateY(0px) rotate(0deg); }
    44.25% { transform: translateY(-8px) rotate(-15deg); }
    47% { transform: translateY(0px) rotate(0deg); }
    
    /* Stopped at Green folder */
    48%, 59% { transform: translateY(0px) rotate(0deg); }
    
    /* Walk to Purple folder */
    60%, 71% { 
      animation-timing-function: steps(4, end);
    }
    60% { transform: translateY(0px) rotate(0deg); }
    62.75% { transform: translateY(2px) rotate(10deg); }
    65.5% { transform: translateY(0px) rotate(0deg); }
    68.25% { transform: translateY(-8px) rotate(-15deg); }
    71% { transform: translateY(0px) rotate(0deg); }
    
    /* Stopped at Purple folder */
    72%, 83% { transform: translateY(0px) rotate(0deg); }
    
    /* Walk back to Blue folder */
    84%, 95% { 
      animation-timing-function: steps(4, end);
    }
    84% { transform: translateY(0px) rotate(0deg); }
    86.75% { transform: translateY(2px) rotate(10deg); }
    89.5% { transform: translateY(0px) rotate(0deg); }
    92.25% { transform: translateY(-8px) rotate(-15deg); }
    95% { transform: translateY(0px) rotate(0deg); }
    
    /* Back at Blue folder */
    96%, 100% { transform: translateY(0px) rotate(0deg); }
  }
  
  @keyframes armSwing {
    /* Stopped at Blue folder */
    0%, 11% { transform: rotate(0deg); }
    
    /* Walk to Yellow folder */
    12%, 23% { transform: rotate(-15deg); }
    17.5% { transform: rotate(15deg); }
    
    /* Stopped at Yellow folder */
    24%, 35% { transform: rotate(0deg); }
    
    /* Walk to Green folder */
    36%, 47% { transform: rotate(-15deg); }
    41.5% { transform: rotate(15deg); }
    
    /* Stopped at Green folder */
    48%, 59% { transform: rotate(0deg); }
    
    /* Walk to Purple folder */
    60%, 71% { transform: rotate(-15deg); }
    65.5% { transform: rotate(15deg); }
    
    /* Stopped at Purple folder */
    72%, 83% { transform: rotate(0deg); }
    
    /* Walk back to Blue folder */
    84%, 95% { transform: rotate(-15deg); }
    89.5% { transform: rotate(15deg); }
    
    /* Back at Blue folder */
    96%, 100% { transform: rotate(0deg); }
  }
  
  /* Body bends over to search */
  @keyframes bodyBend {
    /* Normal walking */
    0%, 12%, 24%, 36%, 48%, 60%, 72%, 84%, 96%, 100% { 
      transform: translateX(-50%) translateY(0px) rotate(0deg);
    }
    /* Bend at Blue folder */
    2% { transform: translateX(-50%) translateY(15px) rotate(-10deg); }
    6% { transform: translateX(-50%) translateY(15px) rotate(-10deg); }
    /* Bend at Yellow folder */
    26% { transform: translateX(-50%) translateY(15px) rotate(-10deg); }
    30% { transform: translateX(-50%) translateY(15px) rotate(-10deg); }
    /* Bend at Green folder */
    50% { transform: translateX(-50%) translateY(15px) rotate(10deg); }
    54% { transform: translateX(-50%) translateY(15px) rotate(10deg); }
    /* Bend at Purple folder */
    74% { transform: translateX(-50%) translateY(15px) rotate(-10deg); }
    78% { transform: translateX(-50%) translateY(15px) rotate(-10deg); }
  }
  
  /* Head shakes "no" when file not found */
  @keyframes headShake {
    0%, 12%, 24%, 36%, 48%, 60%, 72%, 84%, 96%, 100% { 
      transform: translateX(-50%) rotate(0deg);
    }
    /* Shake at Blue folder */
    4% { transform: translateX(-50%) rotate(-10deg); }
    5% { transform: translateX(-50%) rotate(10deg); }
    6% { transform: translateX(-50%) rotate(-10deg); }
    7% { transform: translateX(-50%) rotate(10deg); }
    /* Shake at Yellow folder */
    28% { transform: translateX(-50%) rotate(-10deg); }
    29% { transform: translateX(-50%) rotate(10deg); }
    30% { transform: translateX(-50%) rotate(-10deg); }
    31% { transform: translateX(-50%) rotate(10deg); }
    /* Shake at Green folder */
    52% { transform: translateX(-50%) rotate(-10deg); }
    53% { transform: translateX(-50%) rotate(10deg); }
    54% { transform: translateX(-50%) rotate(-10deg); }
    55% { transform: translateX(-50%) rotate(10deg); }
    /* Shake at Purple folder */
    76% { transform: translateX(-50%) rotate(-10deg); }
    77% { transform: translateX(-50%) rotate(10deg); }
    78% { transform: translateX(-50%) rotate(-10deg); }
    79% { transform: translateX(-50%) rotate(10deg); }
  }
  
  @keyframes eyeBlink {
    0%, 90%, 100% { height: 12%; }
    95% { height: 2%; }
  }
  
  /* Torch points down when searching */
  @keyframes torchSearch {
    /* Normal position while walking */
    0%, 12%, 24%, 36%, 48%, 60%, 72%, 84%, 96%, 100% { 
      transform: rotate(-45deg);
    }
    /* Point down at Blue folder */
    2% { transform: rotate(90deg); }
    6% { transform: rotate(90deg); }
    /* Point down at Yellow folder */
    26% { transform: rotate(90deg); }
    30% { transform: rotate(90deg); }
    /* Point down at Green folder */
    50% { transform: rotate(90deg); }
    54% { transform: rotate(90deg); }
    /* Point down at Purple folder */
    74% { transform: rotate(90deg); }
    78% { transform: rotate(90deg); }
  }
  
  /* Torch beam points down when searching */
  @keyframes torchBeamSearch {
    /* Normal beam while walking */
    0%, 12%, 24%, 36%, 48%, 60%, 72%, 84%, 96%, 100% { 
      opacity: 0.6;
      transform: translateX(-50%) rotate(-45deg) scaleY(1);
    }
    /* Beam down at Blue folder - ensure it extends down to touch the folder */
    2% { 
      opacity: 0.9;
      transform: translateX(-50%) rotate(90deg) scaleY(2);
    }
    6% { 
      opacity: 0.9;
      transform: translateX(-50%) rotate(90deg) scaleY(2);
    }
    /* Beam down at Yellow folder - ensure it extends down to touch the folder */
    26% { 
      opacity: 0.9;
      transform: translateX(-50%) rotate(90deg) scaleY(2);
    }
    30% { 
      opacity: 0.9;
      transform: translateX(-50%) rotate(90deg) scaleY(2);
    }
    /* Beam down at Green folder - ensure it extends down to touch the folder */
    50% { 
      opacity: 0.9;
      transform: translateX(-50%) rotate(90deg) scaleY(2);
    }
    54% { 
      opacity: 0.9;
      transform: translateX(-50%) rotate(90deg) scaleY(2);
    }
    /* Beam down at Purple folder - ensure it extends down to touch the folder */
    74% { 
      opacity: 0.9;
      transform: translateX(-50%) rotate(90deg) scaleY(2);
    }
    78% { 
      opacity: 0.9;
      transform: translateX(-50%) rotate(90deg) scaleY(2);
    }
  }
  
  @keyframes torchGlow {
    0%, 100% { opacity: 0.9; filter: brightness(1); }
    50% { opacity: 1; filter: brightness(1.2); }
  }
  
  @keyframes folderPulse {
    0%, 100% { transform: scale(1); opacity: 0.8; }
    50% { transform: scale(1.05); opacity: 1; }
  }
  
  /* Speech bubble appears after searching */
  @keyframes speechBubble {
    0%, 6%, 29%, 31%, 53%, 55%, 77%, 79%, 95%, 100% {
      opacity: 0;
      transform: translateY(10px) scale(0.8) scaleX(1);
      pointer-events: none;
    }
    /* Show after Blue folder search (character facing forward) */
    7% {
      opacity: 0;
      transform: translateY(10px) scale(0.8) scaleX(1);
    }
    8% {
      opacity: 1;
      transform: translateY(0px) scale(1) scaleX(1);
    }
    10% {
      opacity: 1;
      transform: translateY(0px) scale(1) scaleX(1);
    }
    11% {
      opacity: 0;
      transform: translateY(-5px) scale(0.9) scaleX(1);
    }
    /* Show after Yellow folder search (character facing forward) */
    28% {
      opacity: 0;
      transform: translateY(10px) scale(0.8) scaleX(1);
    }
    29% {
      opacity: 1;
      transform: translateY(0px) scale(1) scaleX(1);
    }
    31% {
      opacity: 1;
      transform: translateY(0px) scale(1) scaleX(1);
    }
    32% {
      opacity: 0;
      transform: translateY(-5px) scale(0.9) scaleX(1);
    }
    /* Show after Green folder search (character flipped, so counter-flip bubble) */
    52% {
      opacity: 0;
      transform: translateY(10px) scale(0.8) scaleX(-1);
    }
    53% {
      opacity: 1;
      transform: translateY(0px) scale(1) scaleX(-1);
    }
    55% {
      opacity: 1;
      transform: translateY(0px) scale(1) scaleX(-1);
    }
    56% {
      opacity: 0;
      transform: translateY(-5px) scale(0.9) scaleX(-1);
    }
    /* Show after Purple folder search (character facing forward) */
    80% {
      opacity: 0;
      transform: translateY(10px) scale(0.8) scaleX(1);
    }
    81% {
      opacity: 1;
      transform: translateY(0px) scale(1) scaleX(1);
    }
    83% {
      opacity: 1;
      transform: translateY(0px) scale(1) scaleX(1);
    }
    84% {
      opacity: 0;
      transform: translateY(-5px) scale(0.9) scaleX(1);
    }
  }
`;

/**
 * Cartoon-style animation of a person walking between file managers,
 * bending over to search, and not finding the file
 */
export default function SearchingBookAnimation() {
  return (
    <>
      <GlobalStyles styles={keyframes} />
      <Box
        sx={{
          width: "100%",
          height: { xs: 220, sm: 260, md: 300 },
          position: "relative",
          mx: "auto",
          mb: 2,
          overflow: "hidden",
        }}
      >
        {/* File Manager Folders */}
        {/* Folder 1 - Left (Yellow) */}
        <Box
          sx={{
            position: "absolute",
            bottom: { xs: 20, sm: 25, md: 30 },
            left: { xs: "10%", sm: "12.5%", md: "15%" },
            width: { xs: 50, sm: 60, md: 70 },
            height: { xs: 50, sm: 60, md: 70 },
            animation: "folderPulse 2s ease-in-out infinite",
            zIndex: 1,
          }}
        >
          {/* Folder icon */}
          <Box
            sx={{
              width: "100%",
              height: "100%",
              background: "linear-gradient(135deg, #FFD700 0%, #FFA500 100%)",
              borderRadius: "4px 4px 0 0",
              position: "relative",
              boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
              "&::before": {
                content: '""',
                position: "absolute",
                top: -8,
                left: 0,
                width: "40%",
                height: 8,
                background: "linear-gradient(135deg, #FFD700 0%, #FFA500 100%)",
                borderRadius: "4px 4px 0 0",
                border: "1px solid rgba(0,0,0,0.2)",
              },
            }}
          />
        </Box>

        {/* Folder 2 - Between Yellow and Blue (Purple) */}
        <Box
          sx={{
            position: "absolute",
            bottom: { xs: 20, sm: 25, md: 30 },
            left: { xs: "30%", sm: "35%", md: "40%" },
            width: { xs: 50, sm: 60, md: 70 },
            height: { xs: 50, sm: 60, md: 70 },
            animation: "folderPulse 2s ease-in-out infinite 0.45s",
            zIndex: 1,
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              background: "linear-gradient(135deg, #9B59B6 0%, #7D3C98 100%)",
              borderRadius: "4px 4px 0 0",
              position: "relative",
              boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
              "&::before": {
                content: '""',
                position: "absolute",
                top: -8,
                left: 0,
                width: "40%",
                height: 8,
                background: "linear-gradient(135deg, #9B59B6 0%, #7D3C98 100%)",
                borderRadius: "4px 4px 0 0",
                border: "1px solid rgba(0,0,0,0.2)",
              },
            }}
          />
        </Box>

        {/* Folder 3 - Center (Blue) */}
        <Box
          sx={{
            position: "absolute",
            bottom: { xs: 20, sm: 25, md: 30 },
            left: { xs: "50%", sm: "57.5%", md: "65%" },
            transform: { xs: "translateX(-50%)", sm: "translateX(-50%)", md: "translateX(-50%)" },
            width: { xs: 50, sm: 60, md: 70 },
            height: { xs: 50, sm: 60, md: 70 },
            animation: "folderPulse 2s ease-in-out infinite 0.3s",
            zIndex: 1,
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              background: "linear-gradient(135deg, #4A90E2 0%, #357ABD 100%)",
              borderRadius: "4px 4px 0 0",
              position: "relative",
              boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
              "&::before": {
                content: '""',
                position: "absolute",
                top: -8,
                left: 0,
                width: "40%",
                height: 8,
                background: "linear-gradient(135deg, #4A90E2 0%, #357ABD 100%)",
                borderRadius: "4px 4px 0 0",
                border: "1px solid rgba(0,0,0,0.2)",
              },
            }}
          />
        </Box>

        {/* Folder 4 - Right (Green) */}
        <Box
          sx={{
            position: "absolute",
            bottom: { xs: 20, sm: 25, md: 30 },
            left: { xs: "70%", sm: "77.5%", md: "85%" },
            width: { xs: 50, sm: 60, md: 70 },
            height: { xs: 50, sm: 60, md: 70 },
            animation: "folderPulse 2s ease-in-out infinite 0.6s",
            zIndex: 1,
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              background: "linear-gradient(135deg, #26B060 0%, #1D6469 100%)",
              borderRadius: "4px 4px 0 0",
              position: "relative",
              boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
              "&::before": {
                content: '""',
                position: "absolute",
                top: -8,
                left: 0,
                width: "40%",
                height: 8,
                background: "linear-gradient(135deg, #26B060 0%, #1D6469 100%)",
                borderRadius: "4px 4px 0 0",
                border: "1px solid rgba(0,0,0,0.2)",
              },
            }}
          />
        </Box>

        {/* Character Container - moves between folders */}
        <Box
          sx={{
            position: "absolute",
            bottom: { xs: 20, sm: 25, md: 30 },
            left: "50%",
            width: { xs: 80, sm: 100, md: 120 },
            height: { xs: 120, sm: 150, md: 180 },
            animation: "characterMove 10s ease-in-out infinite",
            transformOrigin: "bottom center",
            zIndex: 2,
          }}
        >
          {/* Person - Head */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: "50%",
              transform: "translateX(-50%)",
              width: { xs: 40, sm: 50, md: 60 },
              height: { xs: 40, sm: 50, md: 60 },
              borderRadius: "50%",
              background: "linear-gradient(135deg, #FFDBAC 0%, #F4C2A1 100%)",
              border: "2px solid rgba(0,0,0,0.1)",
              animation: "headShake 10s ease-in-out infinite",
              zIndex: 3,
            }}
          >
            {/* Hair */}
            <Box
              sx={{
                position: "absolute",
                top: -4,
                left: "50%",
                transform: "translateX(-50%)",
                width: "85%",
                height: "65%",
                borderRadius: "50% 50% 0 0",
                background: "#4A4A4A",
                border: "2px solid #333",
              }}
            />

            {/* Eyes */}
            <Box
              sx={{
                position: "absolute",
                top: "35%",
                left: "25%",
                width: "12%",
                height: "12%",
                borderRadius: "50%",
                background: "#000",
                animation: "eyeBlink 3s ease-in-out infinite",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: "35%",
                right: "25%",
                width: "12%",
                height: "12%",
                borderRadius: "50%",
                background: "#000",
                animation: "eyeBlink 3s ease-in-out infinite",
              }}
            />
          </Box>

          {/* Person - Body */}
          <Box
            sx={{
              position: "absolute",
              top: { xs: 38, sm: 48, md: 58 },
              left: "50%",
              transform: "translateX(-50%)",
              width: { xs: 45, sm: 55, md: 65 },
              height: { xs: 60, sm: 75, md: 90 },
              background: "linear-gradient(135deg, #4A90E2 0%, #357ABD 100%)",
              borderRadius: "8px 8px 0 0",
              border: "2px solid rgba(0,0,0,0.1)",
              animation: "bodyBend 10s ease-in-out infinite",
              zIndex: 2,
            }}
          >
            {/* Shirt details */}
            <Box
              sx={{
                position: "absolute",
                top: "20%",
                left: "50%",
                transform: "translateX(-50%)",
                width: "35%",
                height: "25%",
                border: "1px solid rgba(255,255,255,0.3)",
                borderRadius: "50%",
              }}
            />
          </Box>

          {/* Left Arm - holding torch */}
          <Box
            sx={{
              position: "absolute",
              top: { xs: 42, sm: 52, md: 62 },
              left: { xs: "20%", sm: "18%", md: "15%" },
              width: { xs: 6, sm: 8, md: 10 },
              height: { xs: 50, sm: 65, md: 80 },
              background: "linear-gradient(135deg, #FFDBAC 0%, #F4C2A1 100%)",
              borderRadius: "5px",
              transformOrigin: "top center",
              animation: "armSwing 10s ease-in-out infinite",
              zIndex: 4,
            }}
          >
            {/* Hand holding torch */}
            <Box
              sx={{
                position: "absolute",
                bottom: -8,
                left: "50%",
                transform: "translateX(-50%)",
                width: { xs: 14, sm: 18, md: 22 },
                height: { xs: 14, sm: 18, md: 22 },
                borderRadius: "50%",
                background: "linear-gradient(135deg, #FFDBAC 0%, #F4C2A1 100%)",
                border: "1px solid rgba(0,0,0,0.1)",
              }}
            >
              {/* Torch */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: { xs: 8, sm: 10, md: 12 },
                  left: "50%",
                  transform: "translateX(-50%) rotate(-45deg)",
                  width: { xs: 4, sm: 5, md: 6 },
                  height: { xs: 20, sm: 25, md: 30 },
                  background: "linear-gradient(180deg, #FFD700 0%, #FFA500 50%, #8B4513 100%)",
                  borderRadius: "3px",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.3)",
                  animation: "torchSearch 10s ease-in-out infinite, torchGlow 1.5s ease-in-out infinite",
                  transformOrigin: "bottom center",
                }}
              >
                {/* Torch light/beam */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: { xs: 20, sm: 25, md: 30 },
                    left: "50%",
                    width: { xs: 40, sm: 50, md: 60 },
                    height: { xs: 80, sm: 100, md: 120 },
                    background: "linear-gradient(180deg, rgba(255,255,200,0.6) 0%, rgba(255,255,150,0.4) 30%, transparent 100%)",
                    borderRadius: "50% 50% 0 0",
                    transformOrigin: "top center",
                    animation: "torchBeamSearch 10s ease-in-out infinite",
                    filter: "blur(8px)",
                    pointerEvents: "none",
                  }}
                />
              </Box>
            </Box>
          </Box>

          {/* Right Arm - swinging */}
          <Box
            sx={{
              position: "absolute",
              top: { xs: 42, sm: 52, md: 62 },
              right: { xs: "20%", sm: "18%", md: "15%" },
              width: { xs: 6, sm: 8, md: 10 },
              height: { xs: 50, sm: 65, md: 80 },
              background: "linear-gradient(135deg, #FFDBAC 0%, #F4C2A1 100%)",
              borderRadius: "5px",
              transformOrigin: "top center",
              animation: "armSwing 10s ease-in-out infinite 0.5s",
              zIndex: 1,
            }}
          >
            {/* Hand */}
            <Box
              sx={{
                position: "absolute",
                bottom: -8,
                left: "50%",
                transform: "translateX(-50%)",
                width: { xs: 14, sm: 18, md: 22 },
                height: { xs: 14, sm: 18, md: 22 },
                borderRadius: "50%",
                background: "linear-gradient(135deg, #FFDBAC 0%, #F4C2A1 100%)",
                border: "1px solid rgba(0,0,0,0.1)",
              }}
            />
          </Box>

          {/* Legs - walking animation */}
          <Box
            sx={{
              position: "absolute",
              top: { xs: 95, sm: 120, md: 145 },
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              gap: { xs: 4, sm: 6, md: 8 },
              alignItems: "flex-start",
            }}
          >
            {/* Left leg */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                transformOrigin: "top center",
                animation: "legWalkLeft 10s ease-in-out infinite",
              }}
            >
              <Box
                sx={{
                  width: { xs: 8, sm: 10, md: 12 },
                  height: { xs: 20, sm: 25, md: 30 },
                  background: "linear-gradient(135deg, #2C3E50 0%, #34495E 100%)",
                  borderRadius: "4px 4px 0 0",
                }}
              />
              {/* Foot */}
              <Box
                sx={{
                  width: { xs: 12, sm: 14, md: 16 },
                  height: { xs: 6, sm: 7, md: 8 },
                  background: "linear-gradient(135deg, #1A252F 0%, #2C3E50 100%)",
                  borderRadius: "0 0 8px 8px",
                  mt: -0.5,
                }}
              />
            </Box>
            {/* Right leg */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                transformOrigin: "top center",
                animation: "legWalkRight 10s ease-in-out infinite",
              }}
            >
              <Box
                sx={{
                  width: { xs: 8, sm: 10, md: 12 },
                  height: { xs: 20, sm: 25, md: 30 },
                  background: "linear-gradient(135deg, #2C3E50 0%, #34495E 100%)",
                  borderRadius: "4px 4px 0 0",
                }}
              />
              {/* Foot */}
              <Box
                sx={{
                  width: { xs: 12, sm: 14, md: 16 },
                  height: { xs: 6, sm: 7, md: 8 },
                  background: "linear-gradient(135deg, #1A252F 0%, #2C3E50 100%)",
                  borderRadius: "0 0 8px 8px",
                  mt: -0.5,
                }}
              />
            </Box>
          </Box>

          {/* Speech Bubble - appears after searching */}
          <Box
            sx={{
              position: "absolute",
              top: { xs: -35, sm: -40, md: -45 },
              left: "50%",
              transform: "translateX(-50%)",
              background: "rgba(255, 255, 255, 0.95)",
              borderRadius: "12px",
              padding: { xs: "6px 10px", sm: "8px 12px", md: "10px 14px" },
              boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
              border: "2px solid rgba(0,0,0,0.1)",
              zIndex: 10,
              animation: "speechBubble 10s ease-in-out infinite",
              minWidth: { xs: 60, sm: 70, md: 80 },
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: -8,
                left: "50%",
                transform: "translateX(-50%)",
                width: 0,
                height: 0,
                borderLeft: "8px solid transparent",
                borderRight: "8px solid transparent",
                borderTop: "8px solid rgba(255, 255, 255, 0.95)",
              },
              "&::before": {
                content: '""',
                position: "absolute",
                bottom: -10,
                left: "50%",
                transform: "translateX(-50%)",
                width: 0,
                height: 0,
                borderLeft: "9px solid transparent",
                borderRight: "9px solid transparent",
                borderTop: "9px solid rgba(0,0,0,0.1)",
              },
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "0.65rem", sm: "0.75rem", md: "0.85rem" },
                fontWeight: 700,
                color: "#333",
                textAlign: "center",
                whiteSpace: "nowrap",
              }}
            >
              Not Found!
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}
