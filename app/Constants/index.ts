import { LayoutDashboard, Settings, SquareTerminal } from "lucide-react";

export const MENUS = [
  {
    title: "Sales",
    url: "/dashboard/sales",
    isMain: true,
    icon: LayoutDashboard,
    items: [
      {
        title: "Sales Quotation",
        url: "/dashboard/sales/quotation",
      },
      {
        title: "Sales Order",
        url: "/dashboard/sales/order",
      },
      {
        title: "Delivery",
        url: "#",
      },
      {
        title: "A/R Invoice",
        url: "#",
      },
    ],
  },
  {
    title: "Purchase",
    url: "#",
    icon: Settings,
    isActive: true,
    items: [
      {
        title: "Purchase Quotation",
        url: "/dashboard/purchase/quotation",
      },
      {
        title: "Purchase Order",
        url: "/dashboard/purchase/order",
      },
    ],
  },
];
export const Company = {
  name: "Supernova Solutions",
  shortName: "SNS",
};

export const UserInfo = {
  name: "Kashif Younus",
  email: "kashif@example.com",
  avatar: "https://images.unsplash.com/photo-1684369176170-463e84248b70?q=50",
};
