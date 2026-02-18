import * as React from "react";
import {
  Box,
  Paper,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  IconButton,
  Stack,
} from "@mui/material";
import { motion } from "framer-motion";
import {
  AccountBalance,
  Download,
  Receipt,
  CreditCard,
  PhoneAndroid,
} from "@mui/icons-material";
import StatCard from "./ui/StatCard";
import { useDashboardTheme } from "./dashboard/DashboardThemeContext";

const invoices = [
  { id: "INV-2024-012", date: "2024-02-15", amount: 28500, status: "Paid" },
  { id: "INV-2024-011", date: "2024-01-15", amount: 45000, status: "Paid" },
  { id: "INV-2024-010", date: "2023-12-15", amount: 18000, status: "Paid" },
];

const paymentHistory = [
  { id: 1, desc: "Invoice INV-2024-012", amount: 28500, date: "2024-02-16", method: "M-Pesa" },
  { id: 2, desc: "Invoice INV-2024-011", amount: 45000, date: "2024-01-16", method: "M-Pesa" },
  { id: 3, desc: "Top-up", amount: 10000, date: "2024-01-05", method: "Card" },
];

export default function BillingPayments() {
  const { theme } = useDashboardTheme();
  const [payMethod, setPayMethod] = React.useState("mpesa");

  return (
    <Box>
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
        <Typography variant="h5" fontWeight={700} sx={{ mb: 3, color: theme.text }}>
          Billing & Payments
        </Typography>
      </motion.div>

      <Box sx={{ display: "flex", gap: 2, mb: 3, flexWrap: "wrap" }}>
        <StatCard
          title="Current Balance"
          variant="dark"
          value={0}
          prefix="KES "
          icon={AccountBalance}
          subtitle="No outstanding balance"
        />
        <StatCard
          title="This Month"
          variant="dark"
          value={28500}
          prefix="KES "
          icon={Receipt}
          subtitle="Total spend"
        />
      </Box>

      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" }, gap: 3 }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <Paper
            elevation={0}
            sx={{
              p: 2.5,
              borderRadius: 2,
              background: theme.bgCard,
              backdropFilter: "blur(8px)",
              border: `1px solid ${theme.border}`,
            }}
          >
            <Typography variant="h6" fontWeight={600} sx={{ mb: 2, color: theme.text }}>
              Make Payment
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Box
                sx={{
                  p: 2,
                  borderRadius: 2,
                  border: `2px solid ${payMethod === "mpesa" ? theme.teal : theme.border}`,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  background: payMethod === "mpesa" ? `${theme.teal}08` : "transparent",
                  "&:hover": { borderColor: theme.teal },
                }}
                onClick={() => setPayMethod("mpesa")}
              >
                <PhoneAndroid sx={{ fontSize: 40, color: theme.green }} />
                <Box>
                  <Typography fontWeight={600} sx={{ color: theme.mode === "dark" ? theme.mustard : theme.text }}>M-Pesa</Typography>
                  <Typography variant="caption" sx={{ color: theme.mode === "dark" ? theme.mustard : theme.textMuted }}>
                    Pay via M-Pesa
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  p: 2,
                  borderRadius: 2,
                  border: `2px solid ${payMethod === "card" ? theme.teal : theme.border}`,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  background: payMethod === "card" ? `${theme.teal}08` : "transparent",
                  "&:hover": { borderColor: theme.teal },
                }}
                onClick={() => setPayMethod("card")}
              >
                <CreditCard sx={{ fontSize: 40, color: theme.mode === "dark" ? theme.mustard : theme.textMuted }} />
                <Box>
                  <Typography fontWeight={600} sx={{ color: theme.mode === "dark" ? theme.mustard : theme.text }}>Card / Bank</Typography>
                  <Typography variant="caption" sx={{ color: theme.mode === "dark" ? theme.mustard : theme.textMuted }}>
                    Visa, Mastercard, Bank transfer
                  </Typography>
                </Box>
              </Box>
              <Button
                variant="contained"
                fullWidth
                sx={{
                  background: `linear-gradient(135deg, ${theme.teal} 0%, #154a4e 100%)`,
                  py: 1.5,
                  "&:hover": { background: `linear-gradient(135deg, #257a80 0%, ${theme.teal} 100%)` },
                }}
              >
                Pay Now
              </Button>
            </Box>
          </Paper>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
          <Paper
            elevation={0}
            sx={{
              p: 2.5,
              borderRadius: 2,
              background: theme.bgCard,
              backdropFilter: "blur(8px)",
              border: `1px solid ${theme.border}`,
            }}
          >
            <Typography variant="h6" fontWeight={600} sx={{ mb: 2, color: theme.text }}>
              Subscription Plan
            </Typography>
            <Box
              sx={{
                p: 2,
                borderRadius: 2,
                background: `linear-gradient(135deg, ${theme.teal}12 0%, ${theme.green}12 100%)`,
                border: `1px solid ${theme.teal}30`,
              }}
            >
              <Typography variant="subtitle1" fontWeight={600} sx={{ color: theme.mode === "dark" ? theme.mustard : theme.text }}>
                Advertiser Pro
              </Typography>
              <Typography variant="body2" sx={{ color: theme.mode === "dark" ? theme.mustard : theme.textMuted }}>
                Pay-as-you-go • No monthly fee
              </Typography>
              <Typography variant="h6" fontWeight={700} sx={{ mt: 1, color: theme.teal }}>
                Active
              </Typography>
            </Box>
          </Paper>
        </motion.div>
      </Box>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        <Paper
          elevation={0}
          sx={{
            mt: 3,
            borderRadius: 2,
            background: theme.bgCard,
            backdropFilter: "blur(8px)",
            border: `1px solid ${theme.border}`,
            overflow: "hidden",
          }}
        >
          <Box sx={{ p: 2, borderBottom: `1px solid ${theme.border}` }}>
            <Typography variant="h6" fontWeight={600} sx={{ color: theme.text }}>
              Past Invoices
            </Typography>
          </Box>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow sx={{ background: `${theme.teal}08` }}>
                  <TableCell sx={{ fontWeight: 600, color: theme.mode === "dark" ? theme.mustard : theme.text }}>Invoice</TableCell>
                  <TableCell sx={{ fontWeight: 600, color: theme.mode === "dark" ? theme.mustard : theme.text }}>Date</TableCell>
                  <TableCell sx={{ fontWeight: 600, color: theme.mode === "dark" ? theme.mustard : theme.text }}>Amount</TableCell>
                  <TableCell sx={{ fontWeight: 600, color: theme.mode === "dark" ? theme.mustard : theme.text }}>Status</TableCell>
                  <TableCell align="right" sx={{ fontWeight: 600, color: theme.mode === "dark" ? theme.mustard : theme.text }}>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {invoices.map((row) => (
                  <TableRow key={row.id} sx={{ "&:hover": { background: `${theme.teal}06` } }}>
                    <TableCell>
                      <Typography fontWeight={500} sx={{ color: theme.text }}>{row.id}</Typography>
                    </TableCell>
                    <TableCell sx={{ color: theme.text }}>{row.date}</TableCell>
                    <TableCell sx={{ color: theme.text }}>KES {row.amount.toLocaleString()}</TableCell>
                    <TableCell>
                      <Chip label={row.status} color="success" size="small" />
                    </TableCell>
                    <TableCell align="right">
                      <IconButton size="small" title="Download PDF" sx={{ color: theme.mode === "dark" ? theme.mustard : theme.text }}>
                        <Download fontSize="small" />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}>
        <Paper
          elevation={0}
          sx={{
            mt: 3,
            p: 2.5,
            borderRadius: 2,
            background: theme.bgCard,
            backdropFilter: "blur(8px)",
            border: `1px solid ${theme.border}`,
          }}
        >
          <Typography variant="h6" fontWeight={600} sx={{ mb: 2, color: theme.text }}>
            Payment History
          </Typography>
          <Stack spacing={2}>
            {paymentHistory.map((p, i) => (
              <Box
                key={p.id}
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 2,
                  pb: i < paymentHistory.length - 1 ? 2 : 0,
                  borderBottom: i < paymentHistory.length - 1 ? `1px solid ${theme.border}` : "none",
                }}
              >
                <Box
                  sx={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    background: theme.green,
                    mt: 0.75,
                    flexShrink: 0,
                  }}
                />
                <Box>
                  <Typography variant="body2" fontWeight={500} sx={{ color: theme.text }}>
                    {p.desc}
                  </Typography>
                  <Typography variant="caption" sx={{ color: theme.mode === "dark" ? theme.mustard : theme.textMuted }}>
                    {p.date} • {p.method} • KES {p.amount.toLocaleString()}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Stack>
        </Paper>
      </motion.div>
    </Box>
  );
}
