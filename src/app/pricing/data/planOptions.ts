export interface PlanOption {
  name: string;
  price: string;
  duration: string | null;
  features: string[];
}

const basicFeatures: string[] = [
  "Access to dashboard",
  "Add up to 2 businesses",
  "Add up to 2 products/services",
  "Add up to 2 Images",
  "Unlimited keywords",
  "Display service hours and prices",
  "Display address, contact and email",
  "Instant chat",
  "Reviews and ratings",
  "Profile visibility",
  "Instant notifications",
  "Display website and social network",
  "Quotes",
  "Bookmarks",
];

const standardFeatures: string[] = [
  ...basicFeatures,
  "Number of profile views",
  "Verified badge (purple)",
  "Accept & Sell appointment",
  "Latest offers",
];

const premiumFeatures: string[] = [
  ...standardFeatures,
  "24/7 service and support",
];

export const PlanOptions: PlanOption[] = [
  {
    name: "Basic",
    price: "Free",
    duration: null,
    features: basicFeatures,
  },
  {
    name: "Standard",
    price: "20,000",
    duration: "year",
    features: standardFeatures,
  },
  {
    name: "Premium",
    price: "30,000",
    duration: "year",
    features: premiumFeatures,
  },
];

interface PlanData {
  [key: string]: (string | boolean)[];
}

export const planData: PlanData = {
  "Access to dashboard": [true, true, true],
  "No. of business listings": ["2 businesses", "6 businesses", "10 businesses"],
  "No. of products/services": ["2", "6", "10"],
  "No. of Images": ["2", "4", "6"],
  Keywords: [true, true, true],
  "Display service hours & prices": [true, true, true],
  "Display address, email & contact": [true, true, true],
  "Instant chat": [true, true, true],
  "Reviews and ratings": [true, true, true],
  "Profile visibility": [true, true, true],
  "Instant notifications": [true, true, true],
  "Display website & social network": [true, true, true],
  Quotes: [true, true, true],
  Bookmarks: [true, true, true],
  "Profile views": [false, true, true],
  "Verified badge": [false, "Purple", "Gold"],
  "Latest offers": [false, true, true],
  "Accept & Sell appointment": [false, true, true],
  "24/7 support": [false, false, true],
};
