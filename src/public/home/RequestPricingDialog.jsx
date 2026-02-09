import * as React from "react";
import {
  Box,
  Button,
  CardContent,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import { SvCard } from "./ui";

const ADVERTISING_PACKAGES = [
  {
    name: "Diamond",
    value: "diamond",
    description: "600–750 cars | 75 days, 4.5M – 5.6M km coverage",
  },
  {
    name: "Gold",
    value: "gold",
    description: "250–400 cars | 45 days, 1.1M – 1.8M km coverage",
  },
  {
    name: "Silver",
    value: "silver",
    description: "100–175 cars | 30 days, 300,000–525,000 km coverage",
  },
  {
    name: "Bronze",
    value: "bronze",
    description: "10–50 cars, 30,000–150,000km coverage",
  },
];

export default function RequestPricingDialog({ open, onClose }) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [selectedPackage, setSelectedPackage] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  React.useEffect(() => {
    if (!open) {
      // Reset form and loading state when dialog closes
      setName("");
      setEmail("");
      setSelectedPackage("");
      setIsSubmitting(false);
    }
  }, [open]);

  const canSubmit = Boolean(email.trim()) && Boolean(name.trim()) && Boolean(selectedPackage) && !isSubmitting;

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const selectedPkg = ADVERTISING_PACKAGES.find((pkg) => pkg.value === selectedPackage);
      
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // eslint-disable-next-line no-alert
      alert(
        `Thanks, ${name}! We've received your pricing request for the ${selectedPkg?.name} package. We'll reach out at ${email} with detailed pricing information.`
      );
      onClose();
    } catch (error) {
      console.error("Request pricing error:", error);
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
        Request Pricing
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
            Get detailed pricing information for our advertising packages. Select a package below and we'll send you a customized quote.
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
            <Grid item xs={12}>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <TextField
                  select
                  label="Advertising Package"
                  value={selectedPackage}
                  onChange={(e) => setSelectedPackage(e.target.value)}
                  sx={{ width: { xs: "100%", sm: "auto" }, minWidth: { sm: 300 } }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  SelectProps={{
                    displayEmpty: true,
                  }}
                >
                  <MenuItem value="" disabled>
                    Select a package
                  </MenuItem>
                  {ADVERTISING_PACKAGES.map((pkg) => (
                    <MenuItem key={pkg.value} value={pkg.value}>
                      {pkg.name}
                    </MenuItem>
                  ))}
                </TextField>
              </Box>
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
                You'll receive a detailed pricing quote via email with campaign planning options and next steps.
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
          {isSubmitting ? "Submitting..." : "Request Quote"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
