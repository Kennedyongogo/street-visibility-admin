import * as React from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { DashboardThemeProvider } from "./dashboard/DashboardThemeContext";
import DashboardLayout from "./dashboard/DashboardLayout";
import DashboardOverview from "./DashboardOverview";
import CampaignManagement from "./CampaignManagement";
import LiveTracking from "./LiveTracking";
import AnalyticsROI from "./AnalyticsROI";
import BillingPayments from "./BillingPayments";
import BrandSettings from "./BrandSettings";

export default function AdvertiserDashboard() {
  const navigate = useNavigate();

  const handleQuickCreateCampaign = () => {
    navigate("/dashboard/campaigns?create=1");
  };

  return (
    <DashboardThemeProvider>
    <DashboardLayout onQuickCreateCampaign={handleQuickCreateCampaign}>
      <Routes>
        <Route index element={<DashboardOverview />} />
        <Route path="campaigns" element={<CampaignManagement />} />
        <Route path="tracking" element={<LiveTracking />} />
        <Route path="analytics" element={<AnalyticsROI />} />
        <Route path="billing" element={<BillingPayments />} />
        <Route path="settings" element={<BrandSettings />} />
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </DashboardLayout>
    </DashboardThemeProvider>
  );
}
