import * as React from "react";
import { Box } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

import { navItems } from "./home/constants";
import HomeAppBar from "./home/HomeAppBar";
import SignUpDialog from "./home/SignUpDialog";
import RequestPricingDialog from "./home/RequestPricingDialog";

export default function PublicShell({ children, onGoToLogin }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [pricingOpen, setPricingOpen] = React.useState(false);
  const [signUpOpen, setSignUpOpen] = React.useState(false);

  const openSignUp = React.useCallback(() => {
    navigate("/register");
  }, [navigate]);

  React.useEffect(() => {
    if (location.state?.openSignUpDialog) {
      setSignUpOpen(true);
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location.state?.openSignUpDialog, location.pathname, navigate]);

  const closeSignUp = React.useCallback(() => setSignUpOpen(false), []);

  const openPricing = React.useCallback(() => {
    setPricingOpen(true);
  }, []);

  const closePricing = React.useCallback(() => setPricingOpen(false), []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100dvh",
        width: "100%",
      }}
    >
      <HomeAppBar navItems={navItems} onGoToLogin={() => setSignUpOpen(true)} onOpenSignUp={openSignUp} />

      <Box
        component="main"
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          minHeight: 0,
          width: "100%",
        }}
      >
        {typeof children === "function" ? children({ openSignUp, openPricing }) : children}
      </Box>

      <SignUpDialog open={signUpOpen} onClose={closeSignUp} defaultRole="advertiser" />
      <RequestPricingDialog open={pricingOpen} onClose={closePricing} />
    </Box>
  );
}

