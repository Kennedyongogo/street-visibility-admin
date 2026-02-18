import * as React from "react";
import {
  AppBar,
  Box,
  IconButton,
  Badge,
  Menu,
  MenuItem,
  Avatar,
  Button,
  Tooltip,
  Divider,
  ListItemIcon,
  Typography,
} from "@mui/material";
import { Notifications, Add, Person, Logout, Settings, DarkMode, LightMode } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useDashboardTheme } from "./DashboardThemeContext";

export default function DashboardNavbar({ onQuickCreateCampaign }) {
  const navigate = useNavigate();
  const { mode, theme, setMode } = useDashboardTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [notifAnchor, setNotifAnchor] = React.useState(null);
  const [notifCount] = React.useState(3);

  const toggleMode = () => setMode((m) => (m === "dark" ? "light" : "dark"));

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        background: theme.bgElevated,
        borderBottom: `1px solid ${theme.borderSubtle}`,
        color: theme.text,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", px: 3, py: 1.5, minHeight: 56 }}>
        <Box sx={{ flex: 1 }} />
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <Tooltip title={mode === "dark" ? "Switch to day mode" : "Switch to night mode"}>
            <IconButton
              onClick={toggleMode}
              sx={{ color: theme.textMuted, "&:hover": { color: theme.text } }}
              size="small"
            >
              {mode === "dark" ? <LightMode /> : <DarkMode />}
            </IconButton>
          </Tooltip>

          <Button
            variant="contained"
            size="small"
            startIcon={<Add />}
            onClick={onQuickCreateCampaign}
            sx={{
              background: theme.green,
              color: "#fff",
              textTransform: "none",
              fontWeight: 600,
              fontSize: "0.8125rem",
              fontFamily: theme.fontBody,
              boxShadow: "none",
              "&:hover": {
                background: "#2dc26a",
                boxShadow: `0 0 20px ${theme.greenGlow}`,
              },
            }}
          >
            New Campaign
          </Button>

          <Tooltip title="Notifications">
            <IconButton
              onClick={(e) => setNotifAnchor(e.currentTarget)}
              sx={{ color: theme.textMuted, "&:hover": { color: theme.text } }}
            >
              <Badge badgeContent={notifCount} color="error">
                <Notifications />
              </Badge>
            </IconButton>
          </Tooltip>

          <IconButton onClick={(e) => setAnchorEl(e.currentTarget)} sx={{ ml: 0.5 }}>
            <Avatar sx={{ width: 34, height: 34, bgcolor: theme.teal, fontSize: "0.8rem", fontFamily: theme.fontBody }}>
              A
            </Avatar>
          </IconButton>
        </Box>
      </Box>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
        slotProps={{
          paper: {
            sx: {
              mt: 1.5,
              minWidth: 200,
              borderRadius: 1.5,
              background: theme.bgCard,
              border: `1px solid ${theme.border}`,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <Box sx={{ px: 2, py: 1.5 }}>
          <Typography variant="subtitle2" fontWeight={600} sx={{ fontFamily: theme.fontBody, color: theme.text }}>
            Advertiser Account
          </Typography>
          <Typography variant="caption" sx={{ color: theme.mode === "dark" ? theme.mustard : theme.textMuted, fontFamily: theme.fontBody }}>
            advertiser@streetvisibility.com
          </Typography>
        </Box>
        <Divider sx={{ borderColor: theme.border }} />
        <MenuItem onClick={() => navigate("/dashboard/settings")} sx={{ fontFamily: theme.fontBody, color: theme.mode === "dark" ? theme.mustard : theme.text }}>
          <ListItemIcon><Person fontSize="small" sx={{ color: theme.mode === "dark" ? theme.mustard : theme.textMuted }} /></ListItemIcon>
          Profile
        </MenuItem>
        <MenuItem sx={{ fontFamily: theme.fontBody, color: theme.mode === "dark" ? theme.mustard : theme.text }}>
          <ListItemIcon><Settings fontSize="small" sx={{ color: theme.mode === "dark" ? theme.mustard : theme.textMuted }} /></ListItemIcon>
          Settings
        </MenuItem>
        <Divider sx={{ borderColor: theme.border }} />
        <MenuItem sx={{ fontFamily: theme.fontBody, color: theme.mode === "dark" ? theme.mustard : theme.text }}>
          <ListItemIcon><Logout fontSize="small" sx={{ color: theme.mode === "dark" ? theme.mustard : theme.textMuted }} /></ListItemIcon>
          Sign out
        </MenuItem>
      </Menu>

      <Menu
        anchorEl={notifAnchor}
        open={Boolean(notifAnchor)}
        onClose={() => setNotifAnchor(null)}
        slotProps={{
          paper: {
            sx: {
              mt: 1.5,
              minWidth: 320,
              borderRadius: 1.5,
              background: theme.bgCard,
              border: `1px solid ${theme.border}`,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <Box sx={{ px: 2, py: 1.5, borderBottom: `1px solid ${theme.border}` }}>
          <Typography variant="subtitle1" fontWeight={600} sx={{ fontFamily: theme.fontBody, color: theme.text }}>
            Notifications
          </Typography>
        </Box>
        <MenuItem sx={{ fontFamily: theme.fontBody }}>
          <Box>
            <Typography variant="body2" sx={{ color: theme.text }}>Campaign &quot;Summer Promo&quot; is now active</Typography>
            <Typography variant="caption" sx={{ color: theme.textMuted }}>2 hours ago</Typography>
          </Box>
        </MenuItem>
        <MenuItem sx={{ fontFamily: theme.fontBody }}>
          <Box>
            <Typography variant="body2" sx={{ color: theme.text }}>New driver joined your campaign</Typography>
            <Typography variant="caption" sx={{ color: theme.textMuted }}>5 hours ago</Typography>
          </Box>
        </MenuItem>
        <MenuItem sx={{ fontFamily: theme.fontBody }}>
          <Box>
            <Typography variant="body2" sx={{ color: theme.text }}>Invoice #INV-2024-012 ready for download</Typography>
            <Typography variant="caption" sx={{ color: theme.textMuted }}>1 day ago</Typography>
          </Box>
        </MenuItem>
      </Menu>
    </AppBar>
  );
}
