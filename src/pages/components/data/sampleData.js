export const sampleCampaigns = [
  {
    id: "c1",
    name: "Summer Promo 2024",
    package_type: "Gold",
    start_date: "2024-02-01",
    end_date: "2024-03-31",
    total_cars: 45,
    km_target: 15000,
    km_covered: 8420,
    impressions_estimate: 125000,
    budget: 45000,
    status: "Active",
  },
  {
    id: "c2",
    name: "Brand Awareness Q1",
    package_type: "Diamond",
    start_date: "2024-01-15",
    end_date: "2024-04-15",
    total_cars: 80,
    km_target: 30000,
    km_covered: 18500,
    impressions_estimate: 280000,
    budget: 95000,
    status: "Active",
  },
  {
    id: "c3",
    name: "Product Launch",
    package_type: "Silver",
    start_date: "2024-02-10",
    end_date: "2024-03-10",
    total_cars: 25,
    km_target: 5000,
    km_covered: 0,
    impressions_estimate: 42000,
    budget: 18000,
    status: "Pending",
  },
  {
    id: "c4",
    name: "Holiday Campaign",
    package_type: "Bronze",
    start_date: "2023-12-01",
    end_date: "2023-12-31",
    total_cars: 15,
    km_target: 3000,
    km_covered: 3000,
    impressions_estimate: 25000,
    budget: 8000,
    status: "Completed",
  },
];

export const dashboardStats = {
  activeCampaigns: 2,
  totalCarsRunning: 125,
  totalKmCovered: 26920,
  estimatedImpressions: 405000,
  spendThisMonth: 28500,
};

export const campaignPerformanceData = [
  { name: "Week 1", km: 4200, impressions: 52000 },
  { name: "Week 2", km: 5800, impressions: 71000 },
  { name: "Week 3", km: 6100, impressions: 75000 },
  { name: "Week 4", km: 4800, impressions: 59000 },
  { name: "Week 5", km: 6020, impressions: 74000 },
];

export const activityFeed = [
  { id: 1, text: "Campaign 'Summer Promo' reached 50% of KM target", time: "2h ago", type: "milestone" },
  { id: 2, text: "3 new drivers joined 'Brand Awareness Q1'", time: "5h ago", type: "driver" },
  { id: 3, text: "Invoice #INV-2024-012 ready for download", time: "1d ago", type: "billing" },
  { id: 4, text: "Campaign 'Product Launch' approved - starts Feb 10", time: "2d ago", type: "campaign" },
  { id: 5, text: "Weekly performance report generated", time: "3d ago", type: "report" },
];

export const mapMarkers = [
  { id: "v1", lat: -1.2921, lng: 36.8219, campaign_id: "c1", distance_today: 45 },
  { id: "v2", lat: -1.2856, lng: 36.8173, campaign_id: "c1", distance_today: 62 },
  { id: "v3", lat: -1.2987, lng: 36.8145, campaign_id: "c2", distance_today: 38 },
  { id: "v4", lat: -1.2789, lng: 36.8291, campaign_id: "c2", distance_today: 71 },
  { id: "v5", lat: -1.3012, lng: 36.8089, campaign_id: "c1", distance_today: 52 },
];

export const packageTypes = [
  { id: "bronze", name: "Bronze", cars: 15, kmTarget: 3000, price: 8000, color: "#CD7F32" },
  { id: "silver", name: "Silver", cars: 25, kmTarget: 5000, price: 18000, color: "#C0C0C0" },
  { id: "gold", name: "Gold", cars: 45, kmTarget: 15000, price: 45000, color: "#FFD700" },
  { id: "diamond", name: "Diamond", cars: 80, kmTarget: 30000, price: 95000, color: "#B9F2FF" },
];
