import * as React from "react";
import InsightsIcon from "@mui/icons-material/Insights";
import MapIcon from "@mui/icons-material/Map";
import PaymentsIcon from "@mui/icons-material/Payments";
import ShieldIcon from "@mui/icons-material/Shield";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import BalanceIcon from "@mui/icons-material/Balance";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import GroupsIcon from "@mui/icons-material/Groups";
import PersonIcon from "@mui/icons-material/Person";
import BusinessIcon from "@mui/icons-material/Business";

export const navItems = [
  { label: "Features", id: "features" },
  // { label: "Testimonials", id: "testimonials" },
  { label: "About us", to: "/about" },
  { label: "How it works", to: "/how-it-works" },
];

export const features = [
  {
    icon: React.createElement(MapIcon),
    title: "Real-time tracking",
    desc: "Track vehicles and campaign activity as journeys happen.",
  },
  {
    icon: React.createElement(InsightsIcon),
    title: "Transparent reporting",
    desc: "Clear performance reporting and actionable campaign insights.",
  },
  {
    icon: React.createElement(PaymentsIcon),
    title: "Earnings dashboard",
    desc: "Drivers can monitor performance and earnings across campaigns.",
  },
  {
    icon: React.createElement(ShieldIcon),
    title: "Compliance & integrity",
    desc: "Campaign rules, proof uploads, and integrity checks built in.",
  },
];

export const steps = [
  {
    title: "Brand Placement",
    desc: "High-quality rear window stickers produced & installed.",
  },
  {
    title: "Driver Engagement",
    desc: "Drivers signed onto campaigns, earning monthly.",
  },
  {
    title: "On the Road",
    desc: "Ads move daily across Nairobi.",
  },
  {
    title: "Reporting & ROI",
    desc: "Photos, optional GPS tracking, and impact reports.",
  },
];

export const testimonials = [
  {
    quote:
      "The reporting made it easy to understand what our campaign achieved—no guesswork.",
    name: "Advertiser",
    role: "Brand team",
  },
  {
    quote:
      "I liked being able to track my progress and earnings while I just drive normally.",
    name: "Driver",
    role: "Campaign participant",
  },
];

export const values = [
  { key: "V", label: "Visionary" },
  { key: "I", label: "Impactful" },
  { key: "S", label: "Service-driven" },
  { key: "I2", label: "Innovative" },
  { key: "B", label: "Bold" },
  { key: "L", label: "Leading" },
  { key: "E", label: "Excellent" },
];

export const valueDescriptionsByLabel = {
  Visionary: "We think ahead and build for scale.",
  Impactful: "We focus on outcomes you can measure.",
  "Service-driven": "We support drivers and advertisers end-to-end.",
  Innovative: "We keep improving how visibility is tracked.",
  Bold: "We take confident steps to stand out.",
  Leading: "We set the bar for accountable outdoor ads.",
  Excellent: "We sweat details for a premium experience.",
};

export const heroChips = [
  {
    label: "Measurable • Data-driven • Scalable",
    icon: null,
  },
  {
    label: "Smart outdoor advertising",
    icon: React.createElement(AutoAwesomeIcon, { fontSize: "small" }),
  },
];

export const heroKpis = [
  { label: "Active vehicles", value: "18" },
  { label: "Km covered (7d)", value: "1,420" },
  { label: "Estimated impressions", value: "245k" },
  { label: "Days remaining", value: "12" },
];

export const heroCampaignSnapshot = {
  name: "Nairobi Retail Launch",
  city: "Nairobi",
  coverageLabel: "CBD • Westlands • Upper Hill",
  coverageProgress: 62, // percent
  photosVerified: 42,
  photosTarget: 60,
};

export const heroLiveFeed = [
  {
    id: "KDA 214Q",
    status: "On route",
    area: "Westlands",
    kmToday: 38,
    lastSeenSecondsAgo: 14,
    compliance: "Verified",
  },
  {
    id: "KCE 908M",
    status: "Stopped",
    area: "Upper Hill",
    kmToday: 21,
    lastSeenSecondsAgo: 46,
    compliance: "Pending photo",
  },
  {
    id: "KDB 771A",
    status: "On route",
    area: "CBD",
    kmToday: 44,
    lastSeenSecondsAgo: 9,
    compliance: "Verified",
  },
];

// Demo "map" markers (percent-based coordinates within the map card).
export const heroMapVehicles = [
  { id: "KDA 214Q", area: "Westlands", state: "active", x: 66, y: 36 },
  { id: "KDB 771A", area: "CBD", state: "active", x: 52, y: 58 },
  { id: "KCE 908M", area: "Upper Hill", state: "active", x: 46, y: 72 },
  { id: "KCA 113X", area: "South B", state: "inactive", x: 74, y: 72 },
  { id: "KDG 405P", area: "Kilimani", state: "inactive", x: 36, y: 44 },
  { id: "KCC 029R", area: "Ngara", state: "inactive", x: 40, y: 30 },
];

// About page feature blocks
export const aboutFeatureBlocks = [
  {
    icon: React.createElement(LightbulbIcon, {
      sx: {
        fontSize: { xs: 16, sm: 20, md: 24 },
        color: "primary.main",
      },
    }),
    title: "INNOVATIVE ADVERTISEMENT PLATFORM",
    description: "This is an innovative and cost-effective advertisement platform which helps you to establish a dynamic identity for your brand. Our cutting-edge technology transforms ordinary vehicles into powerful mobile advertising units that move through the heart of cities and communities. Unlike static billboards or fleeting digital ads, our platform ensures your brand message reaches diverse communities at ground level, creating genuine connections with your target audience. The platform leverages real-time tracking, comprehensive analytics, and strategic route optimization to maximize your brand's exposure. It helps you to reach diverse communities and create a lasting impression on your direct and prospective customers, ensuring your advertising investment delivers measurable results and meaningful engagement.",
    iconBgColor: "rgba(29, 100, 105, 0.18)",
    ariaLabel: "Innovative advertisement platform feature",
  },
  {
    icon: React.createElement(BalanceIcon, {
      sx: {
        fontSize: { xs: 16, sm: 20, md: 24 },
        color: "primary.main",
      },
    }),
    title: "LOWEST CPI(COST PER IMPRESSION)",
    description: "Our campaign offers the lowest CPI compared to expensive conventional advertising mediums like TV ads, Hoarding, Metro, and Digital Media, guaranteeing outstanding ROI. Traditional advertising channels require massive budgets with uncertain returns, but our platform delivers exceptional value by maximizing impressions at a fraction of the cost. With transparent pricing and detailed performance metrics, you can track exactly how many people see your advertisement and calculate your true cost per impression. This cost-effectiveness allows businesses of all sizes to compete in the advertising space, from startups to established enterprises. By choosing our platform, you're investing in a proven method that delivers measurable results while maintaining budget efficiency, ensuring every dollar spent contributes directly to your brand's visibility and growth.",
    iconBgColor: "rgba(29, 100, 105, 0.08)",
    ariaLabel: "Lowest cost per impression feature",
  },
  {
    icon: React.createElement(DirectionsCarIcon, {
      sx: {
        fontSize: { xs: 16, sm: 20, md: 24 },
        color: "primary.main",
      },
    }),
    title: "HIGH VISIBILITY",
    description: "You are being offered a winning product advertisement with a very high visibility across various geographical areas. The most attractive product advertisement being displayed on the huge area of vehicle sides is not easy to ignore for the crowd of thousands. It forces everyone passing the vehicle to have a good look at it, as compared to easily ignored or avoided TV or Internet ads with the click of a remote button or mouse. The advertisement such displayed to your direct and prospective customers, leave a lasting impression on them and remain in their memory for a long time.",
    iconBgColor: "rgba(29, 100, 105, 0.18)",
    ariaLabel: "High visibility advertising feature",
  },
  {
    icon: React.createElement(MapIcon, {
      sx: {
        fontSize: { xs: 16, sm: 20, md: 24 },
        color: "primary.main",
      },
    }),
    title: "REACH FROM URBAN TO RURAL",
    description: "The Advertisement on Vehicles being offered by us has a wide reach across the nation. The commercial vehicles displaying your product advertisement travel thousands of miles in a day and cover a vast geographical area from rural to urban, such as cities, towns, states and even villages. Your advertisement on a vehicle passes slowly in front of thousands of eyes in a day, which gives your products and services a tremendous publicity and exposure across the country.",
    iconBgColor: "rgba(29, 100, 105, 0.08)",
    ariaLabel: "Urban to rural reach feature",
  },
  {
    icon: React.createElement(LocationOnIcon, {
      sx: {
        fontSize: { xs: 16, sm: 20, md: 24 },
        color: "primary.main",
      },
    }),
    title: "REALTIME TRACKING",
    description: "You can view, access and track the real time location of the vehicle displaying your advertisement. We install a GPS unit in all our vehicles, through which our clients can easily monitor the pointed locations on a map and can find out the area being covered by the vehicle. It helps to calculate the CPI (Cost per Impression) also whenever you want. In a way you can track the live performance of your ad campaign.",
    iconBgColor: "rgba(29, 100, 105, 0.18)",
    ariaLabel: "Real-time tracking feature",
  },
  {
    icon: React.createElement(AnalyticsIcon, {
      sx: {
        fontSize: { xs: 16, sm: 20, md: 24 },
        color: "primary.main",
      },
    }),
    title: "DATA RECORDING",
    description: "This is an exceptional feature which helps you to analyze and assess the overall performance of your vehicle ad campaign. We have got a data recording and analytics feature, so that you can review as to which route and geographical area is covered by a vehicle and what is the overall distance covered by all the vehicles involved in the advertisement. So, at the end of the month you can assess the precise number of covered impression during the moving vehicle ad campaign.",
    iconBgColor: "rgba(29, 100, 105, 0.08)",
    ariaLabel: "Data recording and analytics feature",
  },
  {
    icon: React.createElement(GroupsIcon, {
      sx: {
        fontSize: { xs: 16, sm: 20, md: 24 },
        color: "primary.main",
      },
    }),
    title: "SOCIAL IMPACT",
    description: "Our platform creates meaningful social impact by providing additional income opportunities for thousands of drivers and vehicle owners. By partnering with us, you're not just advertising your brand—you're supporting local communities and empowering individuals to earn extra income while they go about their daily routes. This creates a sustainable ecosystem where businesses grow their visibility while contributing to the economic well-being of drivers and their families.",
    iconBgColor: "rgba(29, 100, 105, 0.18)",
    ariaLabel: "Social impact feature",
  },
];

// Statistics data for About page
export const aboutStatistics = [
  {
    icon: React.createElement(PersonIcon, {
      sx: {
        fontSize: { xs: 40, md: 48 },
        color: "common.white",
      },
    }),
    value: "36",
    label: "Clients",
    ariaLabel: "36 clients",
  },
  {
    icon: React.createElement(DirectionsCarIcon, {
      sx: {
        fontSize: { xs: 40, md: 48 },
        color: "common.white",
      },
    }),
    value: "63000+",
    label: "Mobile Vehicle Sites",
    ariaLabel: "63000 plus mobile vehicle sites",
  },
  {
    icon: React.createElement(LocationOnIcon, {
      sx: {
        fontSize: { xs: 40, md: 48 },
        color: "common.white",
      },
    }),
    value: "100+",
    label: "Our Location",
    ariaLabel: "100 plus locations",
  },
  {
    icon: React.createElement(BusinessIcon, {
      sx: {
        fontSize: { xs: 40, md: 48 },
        color: "common.white",
      },
    }),
    value: "100+",
    label: "Team Members",
    ariaLabel: "100 plus team members",
  },
];

