import * as React from "react";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Avatar,
  Switch,
  FormControlLabel,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import { motion } from "framer-motion";
import {
  Business,
  CloudUpload,
  Notifications,
  People,
  Add,
  MoreVert,
  Edit,
  Delete,
} from "@mui/icons-material";
import EmptyState from "./ui/EmptyState";
import { useDashboardTheme } from "./dashboard/DashboardThemeContext";

const teamMembers = [
  { id: "1", name: "Admin User", email: "admin@company.com", role: "Owner", avatar: "A" },
  { id: "2", name: "Jane Manager", email: "jane@company.com", role: "Manager", avatar: "J" },
  { id: "3", name: "Bob Viewer", email: "bob@company.com", role: "Viewer", avatar: "B" },
];

const roles = ["Owner", "Manager", "Viewer"];

export default function BrandSettings() {
  const { theme } = useDashboardTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [notifEmail, setNotifEmail] = React.useState(true);
  const [notifSms, setNotifSms] = React.useState(false);
  const [profile, setProfile] = React.useState({
    companyName: "Acme Brands Ltd",
    email: "brands@acme.com",
    phone: "+254 700 000 000",
    address: "Westlands, Nairobi",
  });

  return (
    <Box>
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
        <Typography variant="h5" fontWeight={700} sx={{ mb: 3, color: theme.text }}>
          Brand Settings
        </Typography>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}>
        <Paper
          elevation={0}
          sx={{
            p: 2.5,
            mb: 3,
            borderRadius: 2,
            background: theme.bgCard,
            backdropFilter: "blur(8px)",
            border: `1px solid ${theme.border}`,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
            <Business sx={{ color: theme.teal }} />
            <Typography variant="h6" fontWeight={600} sx={{ color: theme.text }}>
              Company Profile
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2, maxWidth: 480 }}>
            <TextField
              label="Company Name"
              value={profile.companyName}
              onChange={(e) => setProfile((p) => ({ ...p, companyName: e.target.value }))}
              size="small"
              InputLabelProps={{ sx: { color: theme.mode === "dark" ? theme.mustard : undefined } }}
              inputProps={{ style: { color: theme.text } }}
            />
            <TextField
              label="Email"
              type="email"
              value={profile.email}
              onChange={(e) => setProfile((p) => ({ ...p, email: e.target.value }))}
              size="small"
              InputLabelProps={{ sx: { color: theme.mode === "dark" ? theme.mustard : undefined } }}
              inputProps={{ style: { color: theme.text } }}
            />
            <TextField
              label="Phone"
              value={profile.phone}
              onChange={(e) => setProfile((p) => ({ ...p, phone: e.target.value }))}
              size="small"
              InputLabelProps={{ sx: { color: theme.mode === "dark" ? theme.mustard : undefined } }}
              inputProps={{ style: { color: theme.text } }}
            />
            <TextField
              label="Address"
              value={profile.address}
              onChange={(e) => setProfile((p) => ({ ...p, address: e.target.value }))}
              size="small"
              InputLabelProps={{ sx: { color: theme.mode === "dark" ? theme.mustard : undefined } }}
              placeholder="Street Name, City, State, ZIP"
              inputProps={{ style: { color: theme.text } }}
            />
            <Button
              variant="contained"
              sx={{
                alignSelf: "flex-start",
                background: `linear-gradient(135deg, ${theme.teal} 0%, #154a4e 100%)`,
                "&:hover": { background: `linear-gradient(135deg, #257a80 0%, ${theme.teal} 100%)` },
              }}
            >
              Save Changes
            </Button>
          </Box>
        </Paper>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
        <Paper
          elevation={0}
          sx={{
            p: 2.5,
            mb: 3,
            borderRadius: 2,
            background: theme.bgCard,
            backdropFilter: "blur(8px)",
            border: `1px solid ${theme.border}`,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
            <CloudUpload sx={{ color: theme.teal }} />
            <Typography variant="h6" fontWeight={600} sx={{ color: theme.text }}>
              Brand Assets Library
            </Typography>
          </Box>
          <Box
            sx={{
              border: `2px dashed ${theme.border}`,
              borderRadius: 2,
              p: 4,
              textAlign: "center",
              "&:hover": { borderColor: theme.teal, background: `${theme.teal}08` },
              cursor: "pointer",
            }}
          >
            <CloudUpload sx={{ fontSize: 48, color: theme.mode === "dark" ? theme.mustard : theme.textMuted, mb: 1 }} />
            <Typography sx={{ color: theme.text }}>Upload logos, artwork, and brand assets</Typography>
            <Typography variant="caption" sx={{ color: theme.mode === "dark" ? theme.mustard : theme.textMuted }}>
              PNG, JPG, SVG up to 10MB
            </Typography>
          </Box>
        </Paper>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
        <Paper
          elevation={0}
          sx={{
            p: 2.5,
            mb: 3,
            borderRadius: 2,
            background: theme.bgCard,
            backdropFilter: "blur(8px)",
            border: `1px solid ${theme.border}`,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
            <Notifications sx={{ color: theme.teal }} />
            <Typography variant="h6" fontWeight={600} sx={{ color: theme.text }}>
              Notification Preferences
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <FormControlLabel
              control={<Switch checked={notifEmail} onChange={(e) => setNotifEmail(e.target.checked)} color="primary" />}
              label="Email notifications"
              sx={{ "& .MuiFormControlLabel-label": { color: theme.mode === "dark" ? theme.mustard : theme.text } }}
            />
            <FormControlLabel
              control={<Switch checked={notifSms} onChange={(e) => setNotifSms(e.target.checked)} color="primary" />}
              label="SMS notifications"
              sx={{ "& .MuiFormControlLabel-label": { color: theme.mode === "dark" ? theme.mustard : theme.text } }}
            />
          </Box>
        </Paper>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        <Paper
          elevation={0}
          sx={{
            borderRadius: 2,
            background: theme.bgCard,
            backdropFilter: "blur(8px)",
            border: `1px solid ${theme.border}`,
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              p: 2,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: `1px solid ${theme.border}`,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <People sx={{ color: theme.teal }} />
              <Typography variant="h6" fontWeight={600} sx={{ color: theme.text }}>
                Team Members
              </Typography>
            </Box>
            <Button
              size="small"
              startIcon={<Add />}
              sx={{
                color: theme.teal,
                "&:hover": { background: `${theme.teal}12` },
              }}
            >
              Invite
            </Button>
          </Box>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow sx={{ background: `${theme.teal}08` }}>
                  <TableCell sx={{ fontWeight: 600, color: theme.mode === "dark" ? theme.mustard : theme.text }}>Member</TableCell>
                  <TableCell sx={{ fontWeight: 600, color: theme.mode === "dark" ? theme.mustard : theme.text }}>Role</TableCell>
                  <TableCell align="right" sx={{ fontWeight: 600, color: theme.mode === "dark" ? theme.mustard : theme.text }}></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {teamMembers.map((m) => (
                  <TableRow key={m.id} sx={{ "&:hover": { background: `${theme.teal}06` } }}>
                    <TableCell>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                        <Avatar sx={{ bgcolor: theme.teal, width: 36, height: 36 }}>
                          {m.avatar}
                        </Avatar>
                        <Box>
                          <Typography fontWeight={500} sx={{ color: theme.text }}>{m.name}</Typography>
                          <Typography variant="caption" sx={{ color: theme.mode === "dark" ? theme.mustard : theme.textMuted }}>
                            {m.email}
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Chip
                        label={m.role}
                        size="small"
                        sx={{
                          background: m.role === "Owner" ? `${theme.teal}20` : `${theme.green}20`,
                          color: m.role === "Owner" ? theme.teal : theme.green,
                        }}
                      />
                    </TableCell>
                    <TableCell align="right">
                      <IconButton size="small" onClick={(e) => setAnchorEl(e.currentTarget)} sx={{ color: theme.mode === "dark" ? theme.mustard : theme.text }}>
                        <MoreVert />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={() => setAnchorEl(null)}
            slotProps={{ paper: { sx: { borderRadius: 2 } } }}
          >
            <MenuItem>
              <Edit fontSize="small" sx={{ mr: 1 }} />
              Edit Role
            </MenuItem>
            <MenuItem sx={{ color: "error.main" }}>
              <Delete fontSize="small" sx={{ mr: 1 }} />
              Remove
            </MenuItem>
          </Menu>
        </Paper>
      </motion.div>
    </Box>
  );
}
