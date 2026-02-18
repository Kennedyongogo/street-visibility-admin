import * as React from "react";
import {
  Box,
  Button,
  Container,
  Link,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import regImage from "../assets/reg1.png";

const apiUrl = import.meta.env.VITE_API_URL || "/api";

export default function RegistrationPage() {
  const navigate = useNavigate();
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const passwordsMatch = password === confirmPassword;
  const canSubmit =
    Boolean(name.trim()) &&
    Boolean(email.trim()) &&
    Boolean(password) &&
    passwordsMatch &&
    !isSubmitting;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!canSubmit) return;

    setError("");
    setIsSubmitting(true);

    try {
      const res = await fetch(`${apiUrl}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name: name.trim(),
          email: email.trim(),
          phone: phone.trim() || undefined,
          password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data?.message || "Registration failed. Please try again.");
        return;
      }

      // Store token if returned
      if (data?.data?.token) {
        localStorage.setItem("token", data.data.token);
      }
      navigate("/", { replace: true });
    } catch (err) {
      setError("Something went wrong. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box
      sx={{
        height: "100vh",
        maxHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        background: "linear-gradient(180deg, #B4C7CB 0%, #9AB3B8 40%, #7A9DA3 70%, #5C7D81 100%)",
        overflow: "hidden",
      }}
    >
      <Box
        component="main"
        sx={{
          flex: 1,
          minHeight: 0,
          display: "flex",
          alignItems: "center",
          py: 2,
          px: 2,
        }}
      >
        <Container maxWidth="lg" sx={{ height: "100%", py: 0 }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: 3,
              alignItems: "stretch",
              height: "100%",
              minHeight: { md: 420 },
            }}
          >
            {/* Brand section – image fills left, text overlays */}
            <Box
              sx={{
                display: { xs: "none", md: "block" },
                position: "relative",
                minHeight: 0,
                flex: 1,
                overflow: "hidden",
                borderRadius: 1,
              }}
            >
              <Box
                component="img"
                alt=""
                src={regImage}
                sx={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to bottom, rgba(29, 100, 105, 0.35), rgba(10, 46, 45, 0.75))",
                  pointerEvents: "none",
                }}
              />
              <Box
                sx={{
                  position: "relative",
                  zIndex: 1,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  p: 3,
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    color: "white",
                    fontWeight: 300,
                    letterSpacing: "-0.02em",
                    textTransform: "uppercase",
                    lineHeight: 1.15,
                    textShadow: "0 1px 3px rgba(0,0,0,0.3)",
                  }}
                >
                  Reach
                  <br />
                  Audiences
                </Typography>
                <Typography
                  sx={{
                    mt: 2,
                    color: "rgba(255,255,255,0.95)",
                    maxWidth: 340,
                    fontSize: "1rem",
                    textShadow: "0 1px 2px rgba(0,0,0,0.2)",
                  }}
                >
                  Street Visibility connects brands with audiences through measurable,
                  data-driven campaigns with tracking, analytics, and transparent reporting.
                </Typography>
              </Box>
            </Box>

            {/* Registration form */}
            <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-end" }, alignItems: "center" }}>
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 3, md: 4 },
                  maxWidth: 400,
                  width: "100%",
                  border: 1,
                  borderColor: "divider",
                }}
              >
                <Typography variant="h5" fontWeight={600} gutterBottom>
                  Create Account
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  Sign up as an advertiser.
                </Typography>

                <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <TextField
                    label="Full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    fullWidth
                    required
                    placeholder="Enter your full name"
                    sx={{ "& .MuiOutlinedInput-root": { borderRadius: 0 } }}
                  />
                  <TextField
                    label="Email Address"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    fullWidth
                    required
                    placeholder="you@example.com"
                    sx={{ "& .MuiOutlinedInput-root": { borderRadius: 0 } }}
                  />
                  <TextField
                    label="Phone Number"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    fullWidth
                    required
                    placeholder="+254 700 000 000"
                    sx={{ "& .MuiOutlinedInput-root": { borderRadius: 0 } }}
                  />
                  <TextField
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    fullWidth
                    required
                    placeholder="••••••••"
                    sx={{ "& .MuiOutlinedInput-root": { borderRadius: 0 } }}
                  />
                  <TextField
                    label="Confirm Password"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    fullWidth
                    required
                    placeholder="••••••••"
                    helperText={
                      confirmPassword && !passwordsMatch ? "Passwords do not match" : error || undefined
                    }
                    error={Boolean(confirmPassword && !passwordsMatch) || Boolean(error)}
                    sx={{ "& .MuiOutlinedInput-root": { borderRadius: 0 } }}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    disabled={!canSubmit}
                    sx={{
                      py: 1.25,
                      textTransform: "uppercase",
                      letterSpacing: 2,
                      fontWeight: 600,
                      borderRadius: 0,
                    }}
                  >
                    {isSubmitting ? "Signing up…" : "Sign Up"}
                  </Button>
                </Box>

                <Typography sx={{ mt: 2, textAlign: "center", fontSize: "0.875rem", color: "text.secondary" }}>
                  Already have an account?{" "}
                  <Link component="button" variant="button" onClick={() => navigate("/", { state: { openSignUpDialog: true } })} sx={{ fontWeight: 600 }}>
                    Log in
                  </Link>
                </Typography>
              </Paper>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box
        component="footer"
        sx={{
          py: 1.5,
          flexShrink: 0,
          textAlign: "center",
        }}
      >
        <Typography
          variant="caption"
          sx={{
            color: "primary.main",
            letterSpacing: 2,
            fontWeight: 600,
            textTransform: "uppercase",
          }}
        >
          Street Visibility
        </Typography>
      </Box>
    </Box>
  );
}
