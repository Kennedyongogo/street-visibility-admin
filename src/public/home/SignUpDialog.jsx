import * as React from "react";
import {
  Button,
  CardContent,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import { SvCard } from "./ui";

export default function SignUpDialog({ open, onClose, defaultRole: _defaultRole }) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const role = "advertiser";
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  React.useEffect(() => {
    if (!open) {
      // Reset form and loading state when dialog closes
      setName("");
      setEmail("");
      setIsSubmitting(false);
    }
  }, [open]);

  const canSubmit = Boolean(email.trim()) && Boolean(name.trim()) && !isSubmitting;

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1500));
    // No backend wired yet — keep it interactive and “real” by confirming.
    // You can replace this with your API call later.
    // eslint-disable-next-line no-alert
    alert(
      `Thanks, ${name}! We’ll reach out at ${email} to continue your ${role} onboarding.`
    );
      onClose();
    } catch (error) {
      console.error("Sign up error:", error);
      // eslint-disable-next-line no-alert
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullScreen={fullScreen}
      PaperProps={{
        sx: {
          borderRadius: { xs: 0, sm: 4 },
          borderColor: "divider",
          backgroundImage:
            "radial-gradient(900px 400px at 0% 0%, rgba(29, 100, 105, 0.22), transparent 55%), radial-gradient(900px 400px at 100% 0%, rgba(38, 176, 96, 0.14), transparent 50%)",
        },
      }}
    >
      <DialogTitle sx={{ pr: 6 }}>
        Sign up
        <IconButton
          aria-label="Close"
          onClick={onClose}
          sx={{ position: "absolute", right: 12, top: 10 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent sx={{ pt: 1 }}>
        <Stack spacing={2.2} sx={{ mt: 1 }}>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Street Visibility connects brands with audiences through measurable,
            data-driven campaigns with tracking, analytics, and transparent reporting.
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                fullWidth
              />
            </Grid>
          </Grid>

          <SvCard
            sx={{
              borderRadius: 3,
              boxShadow: { xs: "0 10px 26px rgba(29, 100, 105, 0.10)", md: "0 14px 38px rgba(29, 100, 105, 0.10)" },
            }}
          >
            <CardContent>
              <Stack direction="row" spacing={1} alignItems="center">
                <RocketLaunchIcon color="primary" />
                <Typography variant="subtitle1" sx={{ fontWeight: 800 }}>
                  What happens next
                </Typography>
              </Stack>
              <Typography variant="body2" sx={{ color: "text.secondary", mt: 1 }}>
                You’ll receive a quick onboarding email with campaign planning and
                tracking options.
              </Typography>
            </CardContent>
          </SvCard>
        </Stack>
      </DialogContent>
      <DialogActions sx={{ px: 3, pb: 3 }}>
        <Button onClick={onClose} color="inherit" disabled={isSubmitting}>
          Cancel
        </Button>
        <Button
          onClick={handleSubmit}
          variant="contained"
          disabled={!canSubmit}
          startIcon={isSubmitting ? <CircularProgress size={16} color="inherit" /> : null}
        >
          {isSubmitting ? "Submitting..." : "Continue"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

