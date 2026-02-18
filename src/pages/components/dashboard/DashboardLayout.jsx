import * as React from "react";
import { Box } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import AnimatedSidebar from "./AnimatedSidebar";
import DashboardNavbar from "./DashboardNavbar";
import { useDashboardTheme } from "./DashboardThemeContext";

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export default function DashboardLayout({ children, onQuickCreateCampaign }) {
  const location = useLocation();
  const { theme } = useDashboardTheme();

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        maxHeight: "100dvh",
        background: theme.bg,
        overflow: "hidden",
      }}
    >
      <AnimatedSidebar />
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          minWidth: 0,
          overflow: "hidden",
        }}
      >
        <DashboardNavbar onQuickCreateCampaign={onQuickCreateCampaign} />
        <Box
          component="main"
          sx={{
            flex: 1,
            overflow: "auto",
            p: 3,
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.2 }}
              style={{ height: "100%" }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </Box>
      </Box>
    </Box>
  );
}
