import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import { sv } from "../../../theme";
import { useDashboardTheme } from "../dashboard/DashboardThemeContext";

export default function EmptyState({
  icon: Icon,
  title,
  description,
  actionLabel,
  onAction,
  illustration,
  variant = "light",
}) {
  const { theme } = useDashboardTheme();
  const isDashboard = variant === "dark";
  const bg = isDashboard ? theme.bgCard : "rgba(255,255,255,0.7)";
  const border = isDashboard ? theme.border : sv.border;
  const textColor = isDashboard ? theme.text : sv.text;
  const accent = isDashboard ? theme.teal : sv.primary;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Box
        sx={{
          py: 8,
          px: 4,
          textAlign: "center",
          borderRadius: 2,
          background: bg,
          border: `1px dashed ${border}`,
        }}
      >
        {Icon && (
          <Box
            sx={{
              width: 80,
              height: 80,
              borderRadius: "50%",
              background: isDashboard ? `${theme.teal}20` : `linear-gradient(135deg, ${sv.primary}15 0%, ${sv.accentGreen}15 100%)`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mx: "auto",
              mb: 2,
              color: accent,
            }}
          >
            <Icon sx={{ fontSize: 40 }} />
          </Box>
        )}
        {illustration}
        <Typography variant="h6" fontWeight={600} sx={{ mb: 1, color: textColor }}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ mb: 3, maxWidth: 400, mx: "auto", color: isDashboard ? theme.textMuted : undefined }}>
          {description}
        </Typography>
        {actionLabel && onAction && (
          <Button
            variant="contained"
            onClick={onAction}
            sx={{
              background: `linear-gradient(135deg, ${accent} 0%, #154a4e 100%)`,
              textTransform: "none",
              fontWeight: 600,
              px: 3,
              "&:hover": { background: `linear-gradient(135deg, #257a80 0%, ${accent} 100%)` },
            }}
          >
            {actionLabel}
          </Button>
        )}
      </Box>
    </motion.div>
  );
}
