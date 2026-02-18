import * as React from "react";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
} from "recharts";
import { Download, TrendingUp } from "@mui/icons-material";
import StatCard from "./ui/StatCard";
import { campaignPerformanceData, dashboardStats } from "./data/sampleData";
import { useDashboardTheme } from "./dashboard/DashboardThemeContext";

export default function AnalyticsROI() {
  const { theme } = useDashboardTheme();
  const [dateRange, setDateRange] = React.useState("30d");
  const pieData = React.useMemo(
    () => [
      { name: "Westlands", value: 35, color: theme.teal },
      { name: "Kilimani", value: 28, color: theme.green },
      { name: "CBD", value: 22, color: theme.lime },
      { name: "Karen", value: 15, color: theme.mustard },
    ],
    [theme]
  );

  const costPerImpression = dashboardStats.spendThisMonth / dashboardStats.estimatedImpressions;

  return (
    <Box>
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3, flexWrap: "wrap", gap: 2 }}>
          <Typography variant="h5" fontWeight={700} sx={{ color: theme.text }}>
            Analytics & ROI
          </Typography>
          <Box sx={{ display: "flex", gap: 1 }}>
            <FormControl size="small" sx={{ minWidth: 120, "& .MuiInputLabel-root": { color: theme.mode === "dark" ? theme.mustard : undefined }, "& .MuiSelect-select": { color: theme.text } }}>
              <InputLabel>Date Range</InputLabel>
              <Select value={dateRange} label="Date Range" onChange={(e) => setDateRange(e.target.value)}>
                <MenuItem value="7d">Last 7 days</MenuItem>
                <MenuItem value="30d">Last 30 days</MenuItem>
                <MenuItem value="90d">Last 90 days</MenuItem>
                <MenuItem value="custom">Custom</MenuItem>
              </Select>
            </FormControl>
            <Button
              variant="outlined"
              startIcon={<Download />}
              sx={{
                borderColor: theme.teal,
                color: theme.teal,
                "&:hover": { borderColor: "#154a4e", background: `${theme.teal}12` },
              }}
            >
              PDF Report
            </Button>
          </Box>
        </Box>
      </motion.div>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Cost per Impression"
            variant="dark"
            value={costPerImpression.toFixed(2)}
            prefix="KES "
            decimals={2}
            icon={TrendingUp}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard title="Total Impressions" variant="dark" value={dashboardStats.estimatedImpressions} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard title="KM Coverage" variant="dark" value={dashboardStats.totalKmCovered} suffix=" km" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard title="Est. ROI" variant="dark" value="3.2" suffix="x" />
        </Grid>
      </Grid>

      <Grid container spacing={3} sx={{ mt: 1 }}>
        <Grid item xs={12} lg={8}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <Paper
              elevation={0}
              sx={{
                p: 2.5,
                borderRadius: 2,
                background: theme.bgCard,
                backdropFilter: "blur(8px)",
                border: `1px solid ${theme.border}`,
                height: 320,
              }}
            >
              <Typography variant="h6" fontWeight={600} sx={{ mb: 2, color: theme.text }}>
                Impressions Estimate
              </Typography>
              <ResponsiveContainer width="100%" height={240}>
                <AreaChart data={campaignPerformanceData}>
                  <defs>
                    <linearGradient id="impressionsGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor={theme.green} stopOpacity={0.4} />
                      <stop offset="95%" stopColor={theme.green} stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke={theme.border} />
                  <XAxis dataKey="name" stroke={theme.textMuted} fontSize={12} />
                  <YAxis stroke={theme.textMuted} fontSize={12} />
                  <Tooltip
                    contentStyle={{ borderRadius: 8, border: `1px solid ${theme.border}` }}
                    formatter={(v) => [v.toLocaleString(), "Impressions"]}
                  />
                  <Area
                    type="monotone"
                    dataKey="impressions"
                    stroke={theme.green}
                    strokeWidth={2}
                    fill="url(#impressionsGrad)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </Paper>
          </motion.div>
        </Grid>

        <Grid item xs={12} lg={4}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
            <Paper
              elevation={0}
              sx={{
                p: 2.5,
                borderRadius: 2,
                background: theme.bgCard,
                backdropFilter: "blur(8px)",
                border: `1px solid ${theme.border}`,
                height: 320,
              }}
            >
              <Typography variant="h6" fontWeight={600} sx={{ mb: 2, color: theme.text }}>
                Coverage by Area
              </Typography>
              <ResponsiveContainer width="100%" height={240}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {pieData.map((entry, i) => (
                      <Cell key={i} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{ borderRadius: 8, border: `1px solid ${theme.border}` }}
                    formatter={(v) => [`${v}%`, "Coverage"]}
                  />
                </PieChart>
              </ResponsiveContainer>
            </Paper>
          </motion.div>
        </Grid>

        <Grid item xs={12} md={6}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <Paper
              elevation={0}
              sx={{
                p: 2.5,
                borderRadius: 2,
                background: theme.bgCard,
                backdropFilter: "blur(8px)",
                border: `1px solid ${theme.border}`,
                height: 300,
              }}
            >
              <Typography variant="h6" fontWeight={600} sx={{ mb: 2, color: theme.text }}>
                KM Coverage Breakdown
              </Typography>
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={campaignPerformanceData} layout="vertical" margin={{ left: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke={theme.border} />
                  <XAxis type="number" stroke={theme.textMuted} fontSize={12} />
                  <YAxis dataKey="name" type="category" width={60} stroke={theme.textMuted} fontSize={12} />
                  <Tooltip
                    contentStyle={{ borderRadius: 8, border: `1px solid ${theme.border}` }}
                    formatter={(v) => [v.toLocaleString(), "KM"]}
                  />
                  <Bar dataKey="km" fill={theme.teal} radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </Paper>
          </motion.div>
        </Grid>

        <Grid item xs={12} md={6}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}>
            <Paper
              elevation={0}
              sx={{
                p: 2.5,
                borderRadius: 2,
                background: theme.bgCard,
                backdropFilter: "blur(8px)",
                border: `1px solid ${theme.border}`,
                height: 300,
              }}
            >
              <Typography variant="h6" fontWeight={600} sx={{ mb: 2, color: theme.text }}>
                Cost per Impression Calculator
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <TextField size="small" label="Total Spend (KES)" type="number" defaultValue={28500} InputLabelProps={{ sx: { color: theme.mode === "dark" ? theme.mustard : undefined } }} inputProps={{ style: { color: theme.text } }} />
                <TextField size="small" label="Est. Impressions" type="number" defaultValue={405000} InputLabelProps={{ sx: { color: theme.mode === "dark" ? theme.mustard : undefined } }} inputProps={{ style: { color: theme.text } }} />
                <Box
                  sx={{
                    p: 2,
                    borderRadius: 2,
                    background: `${theme.green}15`,
                    border: `1px solid ${theme.green}40`,
                  }}
                >
                  <Typography variant="caption" sx={{ color: theme.mode === "dark" ? theme.mustard : theme.textMuted }}>
                    Cost per 1000 impressions (CPM)
                  </Typography>
                  <Typography variant="h5" fontWeight={700} sx={{ color: theme.teal }}>
                    KES {(costPerImpression * 1000).toFixed(2)}
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
}
