import * as React from "react";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import HomeIcon from "@mui/icons-material/Home";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log error to error reporting service (e.g., Sentry, LogRocket)
    console.error("Error caught by boundary:", error, errorInfo);
    this.setState({
      error,
      errorInfo,
    });
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
  };

  handleGoHome = () => {
    window.location.href = "/";
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      return (
        <Box
          sx={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: "background.default",
            py: 4,
          }}
        >
          <Container maxWidth="sm">
            <Stack spacing={3} alignItems="center" textAlign="center">
              <ErrorOutlineIcon
                sx={{
                  fontSize: 64,
                  color: "error.main",
                  opacity: 0.8,
                }}
              />
              <Typography variant="h4" sx={{ fontWeight: 700 }}>
                Something went wrong
              </Typography>
              <Typography variant="body1" sx={{ color: "text.secondary" }}>
                We encountered an unexpected error. Please try refreshing the page or return to the home page.
              </Typography>
              {process.env.NODE_ENV === "development" && this.state.error && (
                <Box
                  sx={{
                    mt: 2,
                    p: 2,
                    bgcolor: "error.light",
                    borderRadius: 2,
                    width: "100%",
                    textAlign: "left",
                  }}
                >
                  <Typography variant="caption" component="pre" sx={{ fontFamily: "monospace", fontSize: "0.75rem" }}>
                    {this.state.error.toString()}
                    {this.state.errorInfo?.componentStack}
                  </Typography>
                </Box>
              )}
              <Stack direction="row" spacing={2}>
                <Button variant="outlined" onClick={this.handleReset}>
                  Try Again
                </Button>
                <Button variant="contained" startIcon={<HomeIcon />} onClick={this.handleGoHome}>
                  Go Home
                </Button>
              </Stack>
            </Stack>
          </Container>
        </Box>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
