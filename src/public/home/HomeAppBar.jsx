import * as React from "react";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Stack,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { scrollToId, useElevatedAppBar } from "./ui";
import { useLocation, useNavigate } from "react-router-dom";
import headerLogo from "../../assets/image6.png";
import "../../App.css";

function HomeAppBarImpl({ navItems, onGoToLogin, onOpenSignUp }) {
  const elevated = useElevatedAppBar();
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const brandColor = elevated ? "common.white" : "primary.main";
  const navColor = elevated ? "#D4AF37" : "text.secondary";

  const handleDrawerToggle = React.useCallback(() => {
    setMobileOpen((prev) => !prev);
  }, []);

  const handleDrawerClose = React.useCallback(() => {
    setMobileOpen(false);
  }, []);

  const onNavClick = React.useCallback(
    (item) => {
      if (item?.to) {
        navigate(item.to);
        return;
      }

      if (item?.id) {
        if (location.pathname !== "/") {
          navigate("/");
          // allow route to render before scrolling
          window.setTimeout(() => scrollToId(item.id), 60);
          return;
        }

        scrollToId(item.id);
      }
    },
    [navigate, location.pathname]
  );

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        borderBottom: elevated ? "1px solid" : "1px solid",
        borderColor: elevated ? "divider" : "transparent",
        backgroundColor: elevated ? "rgba(60, 65, 70, 0.75)" : "transparent",
        backdropFilter: elevated ? "blur(10px)" : "none",
        transition: "background-color 160ms ease, border-color 160ms ease",
      }}
    >
      <Toolbar sx={{ gap: 1.5 }}>
        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          role="link"
          tabIndex={0}
          onClick={() => navigate("/")}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              navigate("/");
            }
          }}
          sx={{ cursor: "pointer" }}
        >
          <Box
            component="img"
            src={headerLogo}
            alt="Street Visibility logo"
            className="logo"
            sx={{
              width: 34,
              height: 34,
              objectFit: "contain",
              backgroundColor: "transparent",
              flexShrink: 0,
              display: "block",
            }}
          />
          <Typography
            sx={{
              fontWeight: 900,
              letterSpacing: -0.3,
              fontFamily:
                '"Montserrat", "Poppins", "Inter", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
              color: brandColor,
              transition: "color 160ms ease",
              fontSize: { xs: "0.875rem", sm: "1rem" },
              display: { xs: "none", sm: "block" },
            }}
          >
            Street Visibility Limited
          </Typography>
          <Typography
            sx={{
              fontWeight: 900,
              letterSpacing: -0.3,
              fontFamily:
                '"Montserrat", "Poppins", "Inter", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
              color: brandColor,
              transition: "color 160ms ease",
              fontSize: "0.875rem",
              display: { xs: "block", sm: "none" },
            }}
          >
            SVL
          </Typography>
        </Stack>

        <Box sx={{ flex: 1 }} />

        <Stack
          direction="row"
          spacing={0.5}
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          {navItems.map((item) => (
            <Button
              key={item.to ?? item.id ?? item.label}
              color="inherit"
              onClick={() => onNavClick(item)}
              sx={{ color: navColor, transition: "color 160ms ease" }}
            >
              {item.label}
            </Button>
          ))}
        </Stack>

        <Stack direction="row" spacing={{ xs: 0.5, sm: 1 }} alignItems="center">
          <Button
            color="inherit"
            onClick={() => onGoToLogin?.()}
            sx={{
              color: navColor,
              display: { xs: "none", sm: "inline-flex" },
              transition: "color 160ms ease",
            }}
          >
            Log in
          </Button>
          <Button
            variant="contained"
            color="info"
            onClick={() => onOpenSignUp("advertiser")}
            sx={{
              bgcolor: "info.main",
              "&:hover": { bgcolor: "primary.main" },
              fontSize: { xs: "0.75rem", sm: "0.875rem" },
              px: { xs: 1.5, sm: 2 },
              whiteSpace: "nowrap",
            }}
          >
            <Box component="span" sx={{ display: { xs: "none", sm: "inline" } }}>
              Sign up as Advertiser
            </Box>
            <Box component="span" sx={{ display: { xs: "inline", sm: "none" } }}>
              Sign up
            </Box>
          </Button>
          <IconButton
            color="inherit"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{
              display: { xs: "flex", md: "none" },
              color: brandColor,
            }}
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </Stack>
      </Toolbar>

      {/* Mobile drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerClose}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            width: { xs: "280px", sm: "320px" },
            boxSizing: "border-box",
            pt: 2,
            px: 2,
            backgroundColor: elevated ? "rgba(60, 65, 70, 0.95)" : "rgba(255, 255, 255, 0.98)",
            backdropFilter: "blur(20px)",
          },
        }}
      >
        <Stack spacing={1}>
          {navItems.map((item) => (
            <Button
              key={item.to ?? item.id ?? item.label}
              fullWidth
              color="inherit"
              onClick={() => {
                onNavClick(item);
                handleDrawerClose();
              }}
              sx={{
                justifyContent: "flex-start",
                color: navColor,
                py: 1.5,
                px: 2,
                transition: "color 160ms ease",
                "&:hover": {
                  backgroundColor: elevated ? "rgba(212, 175, 55, 0.12)" : "rgba(212, 175, 55, 0.08)",
                },
              }}
            >
              {item.label}
            </Button>
          ))}
          <Box sx={{ pt: 1, borderTop: "1px solid", borderColor: "divider", mt: 1 }}>
            <Button
              fullWidth
              color="inherit"
              onClick={() => {
                onGoToLogin?.();
                handleDrawerClose();
              }}
              sx={{
                justifyContent: "flex-start",
                color: navColor,
                py: 1.5,
                px: 2,
                mb: 1,
                transition: "color 160ms ease",
                "&:hover": {
                  backgroundColor: elevated ? "rgba(212, 175, 55, 0.12)" : "rgba(212, 175, 55, 0.08)",
                },
              }}
            >
              Log in
            </Button>
            <Button
              fullWidth
              variant="contained"
              color="info"
              onClick={() => {
                onOpenSignUp("advertiser");
                handleDrawerClose();
              }}
              sx={{
                bgcolor: "info.main",
                "&:hover": { bgcolor: "primary.main" },
                py: 1.5,
              }}
            >
              Sign up as Advertiser
            </Button>
          </Box>
        </Stack>
      </Drawer>
    </AppBar>
  );
}

const HomeAppBar = React.memo(HomeAppBarImpl);
export default HomeAppBar;

