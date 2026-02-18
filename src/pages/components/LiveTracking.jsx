import * as React from "react";
import {
  Box,
  Paper,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  Slider,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";
import { LocationOn, FilterList, Refresh, Route } from "@mui/icons-material";
import StatCard from "./ui/StatCard";
import { mapMarkers, sampleCampaigns } from "./data/sampleData";
import { useDashboardTheme } from "./dashboard/DashboardThemeContext";

export default function LiveTracking() {
  const { theme } = useDashboardTheme();
  const [campaignFilter, setCampaignFilter] = React.useState("all");

  const totalDistance = mapMarkers.reduce((a, m) => a + m.distance_today, 0);
  const activeVehicles = mapMarkers.length;

  return (
    <Box>
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
        <Typography variant="h5" fontWeight={700} sx={{ mb: 3, color: theme.text, fontFamily: theme.fontBody }}>
          Live Tracking
        </Typography>
      </motion.div>

      <Box sx={{ display: "flex", gap: 2, mb: 3, flexWrap: "wrap" }}>
        <StatCard title="Active Vehicles" value={activeVehicles} icon={LocationOn} variant="dark" />
        <StatCard
          title="Distance Today"
          value={totalDistance}
          suffix=" km"
          icon={Route}
          subtitle="Across all campaigns"
          variant="dark"
        />
      </Box>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
        <Paper
          elevation={0}
          sx={{
            borderRadius: 2,
            background: theme.bgCard,
            border: `1px solid ${theme.borderSubtle}`,
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              p: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 2,
              borderBottom: `1px solid ${theme.border}`,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, flexWrap: "wrap" }}>
              <FilterList sx={{ color: theme.mode === "dark" ? theme.mustard : theme.teal }} />
              <FormControl size="small" sx={{ minWidth: 180, "& .MuiInputLabel-root": { color: theme.mode === "dark" ? theme.mustard : undefined }, "& .MuiSelect-select": { color: theme.text }, "& .MuiOutlinedInput-notchedOutline": { borderColor: theme.border } }}>
                <InputLabel>Campaign</InputLabel>
                <Select
                  value={campaignFilter}
                  label="Campaign"
                  onChange={(e) => setCampaignFilter(e.target.value)}
                >
                  <MenuItem value="all">All Campaigns</MenuItem>
                  {sampleCampaigns.filter((c) => c.status === "Active").map((c) => (
                    <MenuItem key={c.id} value={c.id}>
                      {c.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <Button size="small" startIcon={<Refresh />} sx={{ color: theme.mode === "dark" ? theme.mustard : theme.text }}>
                Refresh
              </Button>
            </Box>
            <Typography variant="caption" sx={{ color: theme.mode === "dark" ? theme.mustard : theme.textMuted }}>
              Live • Updates every 30s
            </Typography>
          </Box>

          <Box
            sx={{
              height: 480,
              background: `linear-gradient(135deg, ${theme.teal}18 0%, ${theme.green}12 100%)`,
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: 16,
                left: 16,
                zIndex: 1,
                display: "flex",
                gap: 1,
                flexWrap: "wrap",
              }}
            >
              {mapMarkers
                .filter((m) => campaignFilter === "all" || m.campaign_id === campaignFilter)
                .map((m, i) => (
                  <motion.div
                    key={m.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Chip
                      icon={<LocationOn sx={{ fontSize: 16 }} />}
                      label={`Vehicle ${m.id} • ${m.distance_today} km`}
                      size="small"
                      sx={{
                        background: "rgba(255,255,255,0.95)",
                        "& .MuiChip-icon": { color: theme.green },
                      }}
                    />
                  </motion.div>
                ))}
            </Box>

            <Box
              sx={{
                width: "100%",
                height: "100%",
                borderRadius: 0,
                border: `2px dashed ${theme.border}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                gap: 1,
              }}
            >
              <LocationOn sx={{ fontSize: 64, color: theme.mode === "dark" ? theme.mustard : theme.teal, opacity: 0.6 }} />
              <Typography variant="body1" sx={{ color: theme.mode === "dark" ? theme.mustard : theme.text }}>
                Map Integration
              </Typography>
              <Typography variant="caption" sx={{ color: theme.mode === "dark" ? theme.mustard : theme.textMuted }}>
                Add Mapbox/Google Maps API key for live vehicle tracking
              </Typography>
              <Typography variant="caption" sx={{ color: theme.mode === "dark" ? theme.mustard : theme.textMuted }}>
                Coordinates: {mapMarkers.length} vehicles ready
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              p: 2,
              borderTop: `1px solid ${theme.border}`,
              display: "flex",
              gap: 3,
              flexWrap: "wrap",
            }}
          >
            <Box>
              <Typography variant="caption" sx={{ color: theme.mode === "dark" ? theme.mustard : theme.textMuted }}>Route heatmap</Typography>
              <Slider size="small" defaultValue={50} sx={{ width: 120, mt: 0.5 }} />
            </Box>
            <Box>
              <Typography variant="caption" sx={{ color: theme.mode === "dark" ? theme.mustard : theme.textMuted }}>Coverage opacity</Typography>
              <Slider size="small" defaultValue={70} sx={{ width: 120, mt: 0.5 }} />
            </Box>
          </Box>
        </Paper>
      </motion.div>
    </Box>
  );
}
