import * as React from "react";
import { Box, Paper, Typography } from "@mui/material";
import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";
import { sv } from "../../../theme";
import { useDashboardTheme } from "../dashboard/DashboardThemeContext";

export default function StatCard({
  title,
  value,
  suffix = "",
  prefix = "",
  decimals = 0,
  icon: Icon,
  subtitle,
  trend,
  trendUp = true,
  delay = 0,
  onClick,
  expandable,
  variant = "light",
}) {
  const { theme } = useDashboardTheme();
  const isDashboard = variant === "dark";
  const bg = isDashboard ? theme.bgCard : "rgba(255,255,255,0.85)";
  const border = isDashboard ? theme.borderSubtle : sv.border;
  const textColor = isDashboard ? theme.text : sv.text;
  const mutedColor = isDashboard ? (theme.mode === "dark" ? theme.mustard : theme.textMuted) : sv.textMuted;
  const accentColor = isDashboard ? theme.green : sv.accentGreen;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4, ease: "easeOut" }}
      whileHover={{ y: -2, transition: { duration: 0.2 } }}
      style={{ height: "100%" }}
    >
      <Paper
        onClick={onClick}
        elevation={0}
        sx={{
          p: 2.5,
          height: "100%",
          borderRadius: 2,
          background: bg,
          border: `1px solid ${border}`,
          cursor: onClick || expandable ? "pointer" : "default",
          transition: "all 0.2s",
          "&:hover": {
            borderColor: isDashboard ? theme.border : `${sv.primary}40`,
            ...(isDashboard && { background: theme.bgCardHover }),
          },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 1 }}>
          <Typography variant="body2" fontWeight={500} sx={{ color: mutedColor, fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>
            {title}
          </Typography>
          {Icon && (
            <Box
              sx={{
                width: 36,
                height: 36,
                borderRadius: 1.5,
                background: isDashboard ? `${theme.green}20` : `${sv.primary}20`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: accentColor,
              }}
            >
              <Icon sx={{ fontSize: 20 }} />
            </Box>
          )}
        </Box>
        <Typography variant="h4" fontWeight={700} sx={{ color: textColor, mb: 0.5, fontFamily: isDashboard ? theme.fontBody : "inherit" }}>
          <AnimatedCounter value={value} suffix={suffix} prefix={prefix} decimals={decimals} />
        </Typography>
        {(subtitle || trend) && (
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 0.5 }}>
            {subtitle && (
              <Typography variant="caption" sx={{ color: mutedColor }}>
                {subtitle}
              </Typography>
            )}
            {trend !== undefined && (
              <Typography variant="caption" sx={{ color: trendUp ? accentColor : "#f87171", fontWeight: 600 }}>
                {trendUp ? "↑" : "↓"} {trend}
              </Typography>
            )}
          </Box>
        )}
      </Paper>
    </motion.div>
  );
}
