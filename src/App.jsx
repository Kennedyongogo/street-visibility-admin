import { Box, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import * as React from "react";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import theme from "./theme";
import Home from "./public/home";
import HeroSplash from "./public/heroSplash";
import HowItWorksPage from "./public/pages/HowItWorksPage";
// import ContactPage from "./public/pages/ContactPage";
import AboutPage from "./public/pages/AboutPage";
import NotFound from "./public/pages/NotFound";
import ErrorBoundary from "./components/ErrorBoundary";

const AppRoutes = () => {
  const location = useLocation();
  const [entered, setEntered] = React.useState(false);

  // Show splash screen only for home page, not for NotFound or other pages
  React.useEffect(() => {
    if (location.pathname === "/") {
      // For home page, wait for splash screen entry
    } else {
      // For other pages (including NotFound), skip splash screen
      setEntered(true);
    }
  }, [location.pathname]);

  if (!entered && location.pathname === "/") {
    return (
      <Box sx={{ flex: 1, minHeight: "100dvh", width: "100%", display: "flex", flexDirection: "column" }}>
        <HeroSplash onEnter={() => setEntered(true)} />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        minHeight: 0,
        width: "100%",
      }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/about" element={<AboutPage />} />
        {/* <Route path="/contact" element={<ContactPage />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Box>
  );
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ErrorBoundary>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </ErrorBoundary>
    </ThemeProvider>
  );
};

export default App;