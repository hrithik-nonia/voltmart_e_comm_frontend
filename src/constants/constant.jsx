import {
  Truck,
  Headset,
  ShieldCheck,
  LayoutDashboard,
  Package,
  FileText,
  Grid,
  Users,
  LineChart,
  Settings,
} from "lucide-react";

export const Perks = [
  {
    title: "Free Shipping over ₹999",
    description: "Orders delivered via hyper-speed node",
    icon: Truck,
    badgeStyle: "bg-blue-950/80 border-blue-800/60 text-blue-400",
  },
  {
    title: "24/7 Expert Tech Support",
    description: "Direct engineer diagnostics on live call",
    icon: Headset,
    badgeStyle: "bg-cyan-950/80 border-cyan-800/60 text-cyan-400",
  },
  {
    title: "Easy 10-Day Returns",
    description: "Hassle-free instant refund & doorstep pickup",
    icon: ShieldCheck,
    badgeStyle: "bg-amber-950/80 border-amber-800/60 text-amber-500",
  },
];

export const MenuItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
    link: "/adminDashboard",
  },
  {
    id: "products",
    label: "Products",
    icon: Package,
    link: "/adminProductPage",
  },
  {
    id: "orders",
    label: "Orders",
    icon: FileText,
    link: "/adminOrderPage",
  },
  {
    id: "categories",
    label: "Categories",
    icon: Grid,
    link: "/adminCategoriePage",
  },
  {
    id: "customers",
    label: "Customers",
    icon: Users,
    link: "/adminCustomersPage",
  },
  {
    id: "analytics",
    label: "Analytics",
    icon: LineChart,
    link: "/adminAnalyticsPage",
  },
  {
    id: "settings",
    label: "System Settings",
    icon: Settings,
    link: "/adminSettingPage",
  },
];
