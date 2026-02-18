import * as React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Line,
} from "recharts";
import { dashboardStats, campaignPerformanceData, activityFeed } from "./data/sampleData";
import { useDashboardTheme } from "./dashboard/DashboardThemeContext";
import AnimatedCounter from "./ui/AnimatedCounter";

export default function DashboardOverview() {
  const { theme } = useDashboardTheme();
  return (
    <Box sx={{ fontFamily: theme.fontBody }}>
      {/* Header – minimal, confident */}
      <Box sx={{ mb: 4 }}>
        <Typography
          component="h1"
          sx={{
            fontFamily: theme.fontDisplay,
            fontSize: "1.75rem",
            fontStyle: "italic",
            color: theme.text,
            letterSpacing: "-0.02em",
          }}
        >
          Your performance
        </Typography>
        <Typography variant="body2" sx={{ color: theme.textFaint, mt: 0.5 }}>
          February 2024
        </Typography>
      </Box>

      {/* Bento grid – asymmetric, varied */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr", lg: "2fr 1fr 1fr" },
          gridTemplateRows: "auto auto auto",
          gap: 2,
        }}
      >
        {/* Hero stat – campaigns (large, prominent) */}
        <Box sx={{ gridColumn: { md: "1" }, gridRow: { md: "1 / 3" } }}>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          style={{ height: "100%" }}
        >
          <Box
            sx={{
              height: { xs: 140, md: "100%" },
              minHeight: 140,
              p: 3,
              borderRadius: 2,
              background: theme.bgCard,
              border: `1px solid ${theme.borderSubtle}`,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              "&:hover": { borderColor: theme.border, background: theme.bgCardHover },
              transition: "all 0.2s",
            }}
          >
            <Typography sx={{ fontSize: "0.75rem", color: theme.textFaint, textTransform: "uppercase", letterSpacing: "0.1em" }}>
              Active campaigns
            </Typography>
            <Typography
              sx={{
                fontSize: "3rem",
                fontWeight: 700,
                color: theme.text,
                fontFamily: theme.fontBody,
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
              }}
            >
              <AnimatedCounter value={dashboardStats.activeCampaigns} />
            </Typography>
            <Typography sx={{ fontSize: "0.8125rem", color: theme.textMuted }}>
              Running this month
            </Typography>
          </Box>
        </motion.div>
        </Box>

        {/* Compact stat – cars */}
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.03 }}>
          <Box
            sx={{
              p: 2.5,
              borderRadius: 2,
              background: theme.bgCard,
              border: `1px solid ${theme.borderSubtle}`,
              "&:hover": { borderColor: theme.border },
              transition: "all 0.2s",
            }}
          >
            <Typography sx={{ fontSize: "0.7rem", color: theme.textFaint, textTransform: "uppercase", letterSpacing: "0.08em", mb: 0.5 }}>
              Cars running
            </Typography>
            <Typography sx={{ fontSize: "1.75rem", fontWeight: 700, color: theme.text, fontFamily: theme.fontBody }}>
              <AnimatedCounter value={dashboardStats.totalCarsRunning} />
            </Typography>
            <Typography sx={{ fontSize: "0.7rem", color: theme.green, fontWeight: 600 }}>+12%</Typography>
          </Box>
        </motion.div>

        {/* Compact stat – KM */}
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.06 }}>
          <Box
            sx={{
              p: 2.5,
              borderRadius: 2,
              background: theme.bgCard,
              border: `1px solid ${theme.borderSubtle}`,
              "&:hover": { borderColor: theme.border },
              transition: "all 0.2s",
            }}
          >
            <Typography sx={{ fontSize: "0.7rem", color: theme.textFaint, textTransform: "uppercase", letterSpacing: "0.08em", mb: 0.5 }}>
              KM covered
            </Typography>
            <Typography sx={{ fontSize: "1.75rem", fontWeight: 700, color: theme.text, fontFamily: theme.fontBody }}>
              <AnimatedCounter value={dashboardStats.totalKmCovered} />
              <Box component="span" sx={{ fontSize: "0.9rem", fontWeight: 500, color: theme.textMuted, ml: 0.5 }}>km</Box>
            </Typography>
            <Typography sx={{ fontSize: "0.7rem", color: theme.green, fontWeight: 600 }}>+8%</Typography>
          </Box>
        </motion.div>

        {/* Impressions – wide */}
        <Box sx={{ gridColumn: { md: "2 / 4" } }}>
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.09 }}>
          <Box
            sx={{
              p: 2.5,
              borderRadius: 2,
              background: theme.bgCard,
              border: `1px solid ${theme.borderSubtle}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 2,
              "&:hover": { borderColor: theme.border },
              transition: "all 0.2s",
            }}
          >
            <Box>
              <Typography sx={{ fontSize: "0.7rem", color: theme.textFaint, textTransform: "uppercase", letterSpacing: "0.08em", mb: 0.5 }}>
                Estimated impressions
              </Typography>
              <Typography sx={{ fontSize: "2rem", fontWeight: 700, color: theme.text, fontFamily: theme.fontBody }}>
                <AnimatedCounter value={dashboardStats.estimatedImpressions} />
              </Typography>
              <Typography sx={{ fontSize: "0.7rem", color: theme.green, fontWeight: 600 }}>+15%</Typography>
            </Box>
            <Box sx={{ textAlign: "right" }}>
              <Typography sx={{ fontSize: "0.7rem", color: theme.textFaint, textTransform: "uppercase", letterSpacing: "0.08em", mb: 0.5 }}>
                Spend this month
              </Typography>
              <Typography sx={{ fontSize: "1.5rem", fontWeight: 700, color: theme.text, fontFamily: theme.fontBody }}>
                KES <AnimatedCounter value={dashboardStats.spendThisMonth} />
              </Typography>
            </Box>
          </Box>
        </motion.div>
        </Box>

        {/* ROI – accent card */}
        <Box sx={{ gridColumn: { md: "1" } }}>
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.12 }}>
          <Box
            sx={{
              p: 2.5,
              borderRadius: 2,
              background: `linear-gradient(135deg, ${theme.teal}22 0%, ${theme.green}18 100%)`,
              border: `1px solid ${theme.teal}40`,
              "&:hover": { borderColor: `${theme.teal}60`, boxShadow: `0 0 30px ${theme.tealGlow}` },
              transition: "all 0.2s",
            }}
          >
            <Typography sx={{ fontSize: "0.7rem", color: theme.textMuted, textTransform: "uppercase", letterSpacing: "0.08em", mb: 0.5 }}>
              ROI projection
            </Typography>
            <Typography sx={{ fontSize: "2.5rem", fontWeight: 700, color: theme.green, fontFamily: theme.fontBody, letterSpacing: "-0.02em" }}>
              3.2×
            </Typography>
            <Typography sx={{ fontSize: "0.8125rem", color: theme.textMuted }}>
              Est. return on ad spend
            </Typography>
          </Box>
        </motion.div>
        </Box>

        {/* Chart – dominates */}
        <Box sx={{ gridColumn: { md: "2 / 4" }, gridRow: { md: "2 / 4" } }}>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.15 }}
          style={{ height: "100%" }}
        >
          <Box
            sx={{
              height: 320,
              p: 2.5,
              borderRadius: 2,
              background: theme.bgCard,
              border: `1px solid ${theme.borderSubtle}`,
              "&:hover": { borderColor: theme.border },
              transition: "all 0.2s",
            }}
          >
            <Typography sx={{ fontSize: "0.875rem", fontWeight: 600, color: theme.text, mb: 2 }}>
              Campaign performance
            </Typography>
            <ResponsiveContainer width="100%" height={260}>
              <AreaChart data={campaignPerformanceData}>
                <defs>
                  <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={theme.green} stopOpacity={0.3} />
                    <stop offset="100%" stopColor={theme.green} stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke={theme.borderSubtle} vertical={false} />
                <XAxis dataKey="name" stroke={theme.textFaint} fontSize={11} tickLine={false} axisLine={false} />
                <YAxis stroke={theme.textFaint} fontSize={11} tickLine={false} axisLine={false} tickFormatter={(v) => (v >= 1000 ? `${v / 1000}k` : v)} />
                <Tooltip
                  contentStyle={{
                    background: theme.bgElevated,
                    border: `1px solid ${theme.border}`,
                    borderRadius: 8,
                    fontFamily: theme.fontBody,
                  }}
                  formatter={(value, name) => [value.toLocaleString(), name === "km" ? "KM" : "Impressions"]}
                />
                <Area type="monotone" dataKey="impressions" stroke={theme.green} strokeWidth={2} fill="url(#chartGrad)" />
                <Line type="monotone" dataKey="km" stroke={theme.teal} strokeWidth={1.5} dot={false} strokeDasharray="4 4" opacity={0.8} />
              </AreaChart>
            </ResponsiveContainer>
          </Box>
        </motion.div>
        </Box>

        {/* Activity feed – tall, narrow */}
        <Box sx={{ gridColumn: { md: "1" }, gridRow: { md: "3" } }}>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.18 }}
          style={{ height: "100%" }}
        >
          <Box
            sx={{
              height: 280,
              p: 2.5,
              borderRadius: 2,
              background: theme.bgCard,
              border: `1px solid ${theme.borderSubtle}`,
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              "&:hover": { borderColor: theme.border },
              transition: "all 0.2s",
            }}
          >
            <Typography sx={{ fontSize: "0.875rem", fontWeight: 600, color: theme.text, mb: 1.5 }}>
              Activity
            </Typography>
            <Box sx={{ flex: 1, overflow: "auto" }}>
              {activityFeed.map((item) => (
                <Box
                  key={item.id}
                  sx={{
                    py: 1.5,
                    borderBottom: `1px solid ${theme.borderSubtle}`,
                    "&:last-child": { borderBottom: "none" },
                  }}
                >
                  <Typography sx={{ fontSize: "0.8125rem", color: theme.text }}>{item.text}</Typography>
                  <Typography sx={{ fontSize: "0.7rem", color: theme.textFaint }}>{item.time}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </motion.div>
        </Box>
      </Box>

      {/* Map placeholder – full width, minimal */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: 0.2 }}>
        <Box
          sx={{
            mt: 3,
            p: 3,
            borderRadius: 2,
            background: theme.bgCard,
            border: `1px dashed ${theme.border}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: 200,
          }}
        >
          <Typography sx={{ fontSize: "0.8125rem", color: theme.textFaint }}>
            Live car distribution — map integration ready
          </Typography>
        </Box>
      </motion.div>
    </Box>
  );
}
