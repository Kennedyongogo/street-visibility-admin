import * as React from "react";
import { Box } from "@mui/material";

import { navItems } from "./home/constants";
import HomeAppBar from "./home/HomeAppBar";
import SignUpDialog from "./home/SignUpDialog";
import RequestPricingDialog from "./home/RequestPricingDialog";

export default function PublicShell({ children, onGoToLogin }) {
  const [signUpOpen, setSignUpOpen] = React.useState(false);
  const [pricingOpen, setPricingOpen] = React.useState(false);
  const [signUpRole, setSignUpRole] = React.useState("advertiser");

  const openSignUp = React.useCallback((role) => {
    setSignUpRole(role ?? "advertiser");
    setSignUpOpen(true);
  }, []);

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
      <HomeAppBar navItems={navItems} onGoToLogin={onGoToLogin} onOpenSignUp={openSignUp} />

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

      <SignUpDialog open={signUpOpen} onClose={closeSignUp} defaultRole={signUpRole} />
      <RequestPricingDialog open={pricingOpen} onClose={closePricing} />
    </Box>
  );
}

