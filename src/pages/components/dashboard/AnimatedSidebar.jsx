import * as React from "react";
import { Box, List, ListItemButton, ListItemIcon, ListItemText, Tooltip } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Dashboard as DashboardIcon,
  Campaign,
  LocationOn,
  Analytics,
  Payment,
  Business,
  ChevronLeft,
  ChevronRight,
} from "@mui/icons-material";
import { useDashboardTheme } from "./DashboardThemeContext";
import image6 from "../../../assets/image6.png";
import image8 from "../../../assets/image8.png";

const navItems = [
  { path: "/dashboard", label: "Overview", icon: DashboardIcon },
  { path: "/dashboard/campaigns", label: "Campaigns", icon: Campaign },
  { path: "/dashboard/tracking", label: "Live Tracking", icon: LocationOn },
  { path: "/dashboard/analytics", label: "Analytics & ROI", icon: Analytics },
  { path: "/dashboard/billing", label: "Billing & Payments", icon: Payment },
  { path: "/dashboard/settings", label: "Brand Settings", icon: Business },
];

export default function AnimatedSidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { theme, mode } = useDashboardTheme();
  const [collapsed, setCollapsed] = React.useState(false);
  const logoImage = mode === "light" ? image6 : image8;

  return (
    <motion.div
      initial={false}
      animate={{ width: collapsed ? 68 : 240 }}
      transition={{ type: "spring", stiffness: 400, damping: 35 }}
      style={{ height: "100%", overflow: "hidden", flexShrink: 0 }}
    >
      <Box
        sx={{
          height: "100%",
          background: theme.bgElevated,
          borderRight: `1px solid ${theme.borderSubtle}`,
          display: "flex",
          flexDirection: "column",
          minWidth: collapsed ? 68 : 240,
        }}
      >
        <Box
          sx={{
            py: 2,
            px: collapsed ? 2 : 2.5,
            minHeight: 56,
            display: "flex",
            alignItems: "center",
            justifyContent: collapsed ? "center" : "flex-start",
          }}
        >
          <AnimatePresence mode="wait">
            {!collapsed ? (
              <motion.div
                key="expanded"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{ display: "flex", alignItems: "center", gap: 10 }}
              >
                <img
                  src={logoImage}
                  alt="Street Visibility logo"
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 4,
                    objectFit: "contain",
                  }}
                />
                <Box>
                  <Box component="span" sx={{ fontFamily: theme.fontDisplay, fontSize: "1.1rem", color: theme.text, fontStyle: "italic" }}>
                    Street Visibility
                  </Box>
                  <Box component="span" sx={{ display: "block", fontSize: "0.65rem", color: theme.textFaint, fontFamily: theme.fontBody, letterSpacing: "0.05em", textTransform: "uppercase" }}>
                    Advertiser
                  </Box>
                </Box>
              </motion.div>
            ) : (
              <motion.div key="collapsed" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <img
                  src={logoImage}
                  alt="Street Visibility logo"
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 4,
                    objectFit: "contain",
                  }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </Box>

        <List sx={{ flex: 1, py: 1, px: 1.5 }}>
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;
            return (
              <Tooltip key={item.path} title={collapsed ? item.label : ""} placement="right">
                <ListItemButton
                  onClick={() => navigate(item.path)}
                  selected={isActive}
                  sx={{
                    borderRadius: 1.5,
                    mb: 0.25,
                    py: 1,
                    px: collapsed ? 1.5 : 2,
                    "&.Mui-selected": {
                      background: `${theme.green}18`,
                      "& .MuiListItemIcon-root": { color: theme.green },
                    },
                    "&:hover": {
                      background: "rgba(255,255,255,0.04)",
                    },
                    justifyContent: collapsed ? "center" : "flex-start",
                  }}
                >
                  <ListItemIcon sx={{ minWidth: collapsed ? 0 : 36, color: isActive ? theme.green : theme.textMuted }}>
                    <Icon sx={{ fontSize: 20 }} />
                  </ListItemIcon>
                  <AnimatePresence>
                    {!collapsed && (
                      <motion.div
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: "auto", opacity: 1 }}
                        exit={{ width: 0, opacity: 0 }}
                        transition={{ duration: 0.15 }}
                        style={{ overflow: "hidden" }}
                      >
                        <ListItemText
                          primary={item.label}
                          primaryTypographyProps={{
                            fontSize: "0.875rem",
                            fontWeight: isActive ? 600 : 500,
                            color: isActive ? theme.text : theme.textMuted,
                            fontFamily: theme.fontBody,
                          }}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </ListItemButton>
              </Tooltip>
            );
          })}
        </List>

        <Box sx={{ p: 1.5, borderTop: `1px solid ${theme.borderSubtle}` }}>
          <ListItemButton
            onClick={() => setCollapsed((c) => !c)}
            sx={{
              borderRadius: 1.5,
              py: 1,
              px: collapsed ? 1.5 : 2,
              justifyContent: collapsed ? "center" : "flex-start",
              color: theme.textFaint,
              "&:hover": { background: "rgba(255,255,255,0.04)", color: theme.textMuted },
            }}
          >
            <ListItemIcon sx={{ minWidth: collapsed ? 0 : 36, color: "inherit" }}>
              {collapsed ? <ChevronRight sx={{ fontSize: 20 }} /> : <ChevronLeft sx={{ fontSize: 20 }} />}
            </ListItemIcon>
            {!collapsed && (
              <ListItemText
                primary="Collapse"
                primaryTypographyProps={{ fontSize: "0.8rem", fontFamily: theme.fontBody }}
              />
            )}
          </ListItemButton>
        </Box>
      </Box>
    </motion.div>
  );
}
