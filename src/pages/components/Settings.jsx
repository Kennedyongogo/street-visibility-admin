import * as React from "react";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Switch,
  FormControlLabel,
  InputAdornment,
  IconButton,
  Alert,
} from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Person, DarkMode, Business, Lock, Visibility, VisibilityOff } from "@mui/icons-material";
import { useDashboardTheme } from "./dashboard/DashboardThemeContext";

const PASSWORD_RULES = [
  "At least 8 characters",
  "At least one uppercase letter",
  "At least one lowercase letter",
  "At least one number",
  "At least one special character (!@#$%^&*)",
];

function validatePassword(password) {
  const hasMinLength = password.length >= 8;
  const hasUpper = /[A-Z]/.test(password);
  const hasLower = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  return { hasMinLength, hasUpper, hasLower, hasNumber, hasSpecial };
}

function allRulesMet(password) {
  const v = validatePassword(password);
  return v.hasMinLength && v.hasUpper && v.hasLower && v.hasNumber && v.hasSpecial;
}

export default function Settings() {
  const { theme, mode, setMode } = useDashboardTheme();
  const navigate = useNavigate();
  const [profile, setProfile] = React.useState({
    name: "Admin User",
    email: "admin@company.com",
  });
  const [passwordForm, setPasswordForm] = React.useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [showPasswords, setShowPasswords] = React.useState({ current: false, new: false, confirm: false });
  const [passwordError, setPasswordError] = React.useState("");
  const [passwordSuccess, setPasswordSuccess] = React.useState(false);

  const newPasswordValidation = validatePassword(passwordForm.newPassword);
  const rulesChecklist = [
    { label: PASSWORD_RULES[0], met: newPasswordValidation.hasMinLength },
    { label: PASSWORD_RULES[1], met: newPasswordValidation.hasUpper },
    { label: PASSWORD_RULES[2], met: newPasswordValidation.hasLower },
    { label: PASSWORD_RULES[3], met: newPasswordValidation.hasNumber },
    { label: PASSWORD_RULES[4], met: newPasswordValidation.hasSpecial },
  ];

  const handleChangePassword = () => {
    setPasswordError("");
    setPasswordSuccess(false);
    if (!passwordForm.currentPassword) {
      setPasswordError("Enter your current password.");
      return;
    }
    if (!passwordForm.newPassword) {
      setPasswordError("Enter a new password.");
      return;
    }
    if (!allRulesMet(passwordForm.newPassword)) {
      setPasswordError("New password does not meet all requirements.");
      return;
    }
    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      setPasswordError("New password and confirmation do not match.");
      return;
    }
    // TODO: call API to update password
    setPasswordSuccess(true);
    setPasswordForm({ currentPassword: "", newPassword: "", confirmPassword: "" });
  };

  const toggleShowPassword = (field) => {
    setShowPasswords((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const inputLabelProps = { sx: { color: theme.mode === "dark" ? theme.mustard : undefined } };
  const inputProps = (field) => ({
    style: { color: theme.text },
    endAdornment: (
      <InputAdornment position="end">
        <IconButton
          size="small"
          onClick={() => toggleShowPassword(field)}
          aria-label={showPasswords[field] ? "Hide password" : "Show password"}
        >
          {showPasswords[field] ? <VisibilityOff /> : <Visibility />}
        </IconButton>
      </InputAdornment>
    ),
  });

  return (
    <Box>
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
        <Typography variant="h5" fontWeight={700} sx={{ mb: 3, color: theme.text }}>
          Settings
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
            border: `1px solid ${theme.border}`,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
            <Person sx={{ color: theme.teal }} />
            <Typography variant="h6" fontWeight={600} sx={{ color: theme.text }}>
              Account
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2, maxWidth: 400 }}>
            <TextField
              label="Name"
              value={profile.name}
              onChange={(e) => setProfile((p) => ({ ...p, name: e.target.value }))}
              size="small"
              fullWidth
              InputLabelProps={{ sx: { color: theme.mode === "dark" ? theme.mustard : undefined } }}
              inputProps={{ style: { color: theme.text } }}
            />
            <TextField
              label="Email"
              type="email"
              value={profile.email}
              onChange={(e) => setProfile((p) => ({ ...p, email: e.target.value }))}
              size="small"
              fullWidth
              InputLabelProps={{ sx: { color: theme.mode === "dark" ? theme.mustard : undefined } }}
              inputProps={{ style: { color: theme.text } }}
            />
            <Button
              variant="contained"
              size="small"
              sx={{
                alignSelf: "flex-start",
                background: `linear-gradient(135deg, ${theme.teal} 0%, #154a4e 100%)`,
                "&:hover": { background: `linear-gradient(135deg, #257a80 0%, ${theme.teal} 100%)` },
              }}
            >
              Save
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
            border: `1px solid ${theme.border}`,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
            <Lock sx={{ color: theme.teal }} />
            <Typography variant="h6" fontWeight={600} sx={{ color: theme.text }}>
              Change Password
            </Typography>
          </Box>
          <Typography variant="body2" sx={{ color: theme.mode === "dark" ? theme.mustard : theme.textMuted, mb: 2 }}>
            Your password should:
          </Typography>
          <Box component="ul" sx={{ m: 0, pl: 2.5, mb: 2, "& li": { color: theme.mode === "dark" ? theme.mustard : theme.textMuted, fontSize: "0.875rem", py: 0.25 } }}>
            {rulesChecklist.map((r) => (
              <li key={r.label} style={{ opacity: r.met ? 0.8 : 1 }}>
                {r.met ? "✓ " : "○ "}{r.label}
              </li>
            ))}
          </Box>
          {passwordError && (
            <Alert severity="error" onClose={() => setPasswordError("")} sx={{ mb: 2 }}>
              {passwordError}
            </Alert>
          )}
          {passwordSuccess && (
            <Alert severity="success" onClose={() => setPasswordSuccess(false)} sx={{ mb: 2 }}>
              Password updated successfully.
            </Alert>
          )}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2, maxWidth: 400 }}>
            <TextField
              label="Current password"
              type={showPasswords.current ? "text" : "password"}
              value={passwordForm.currentPassword}
              onChange={(e) => setPasswordForm((p) => ({ ...p, currentPassword: e.target.value }))}
              size="small"
              fullWidth
              InputLabelProps={inputLabelProps}
              InputProps={inputProps("current")}
            />
            <TextField
              label="New password"
              type={showPasswords.new ? "text" : "password"}
              value={passwordForm.newPassword}
              onChange={(e) => setPasswordForm((p) => ({ ...p, newPassword: e.target.value }))}
              size="small"
              fullWidth
              InputLabelProps={inputLabelProps}
              InputProps={inputProps("new")}
            />
            <TextField
              label="Confirm new password"
              type={showPasswords.confirm ? "text" : "password"}
              value={passwordForm.confirmPassword}
              onChange={(e) => setPasswordForm((p) => ({ ...p, confirmPassword: e.target.value }))}
              size="small"
              fullWidth
              InputLabelProps={inputLabelProps}
              InputProps={inputProps("confirm")}
            />
            <Button
              variant="contained"
              onClick={handleChangePassword}
              sx={{
                alignSelf: "flex-start",
                background: `linear-gradient(135deg, ${theme.teal} 0%, #154a4e 100%)`,
                "&:hover": { background: `linear-gradient(135deg, #257a80 0%, ${theme.teal} 100%)` },
              }}
            >
              Update password
            </Button>
          </Box>
        </Paper>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        <Paper
          elevation={0}
          sx={{
            p: 2.5,
            mb: 3,
            borderRadius: 2,
            background: theme.bgCard,
            border: `1px solid ${theme.border}`,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
            <DarkMode sx={{ color: theme.teal }} />
            <Typography variant="h6" fontWeight={600} sx={{ color: theme.text }}>
              Appearance
            </Typography>
          </Box>
          <FormControlLabel
            control={
              <Switch
                checked={mode === "dark"}
                onChange={(e) => setMode(e.target.checked ? "dark" : "light")}
                sx={{
                  "& .MuiSwitch-switchBase.Mui-checked": { color: theme.teal },
                  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": { backgroundColor: theme.teal },
                }}
              />
            }
            label={mode === "dark" ? "Dark mode" : "Light mode"}
            sx={{ "& .MuiFormControlLabel-label": { color: theme.mode === "dark" ? theme.mustard : theme.text } }}
          />
        </Paper>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}>
        <Paper
          elevation={0}
          sx={{
            p: 2.5,
            borderRadius: 2,
            background: theme.bgCard,
            border: `1px solid ${theme.border}`,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Business sx={{ color: theme.teal }} />
              <Box>
                <Typography variant="h6" fontWeight={600} sx={{ color: theme.text }}>
                  Brand Settings
                </Typography>
                <Typography variant="body2" sx={{ color: theme.mode === "dark" ? theme.mustard : theme.textMuted }}>
                  Company profile, assets, and team
                </Typography>
              </Box>
            </Box>
            <Button
              variant="outlined"
              onClick={() => navigate("/dashboard/brand")}
              sx={{
                borderColor: theme.teal,
                color: theme.teal,
                "&:hover": { borderColor: "#154a4e", background: `${theme.teal}12` },
              }}
            >
              Open
            </Button>
          </Box>
        </Paper>
      </motion.div>
    </Box>
  );
}
