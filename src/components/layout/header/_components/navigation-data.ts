import { Mail, Settings, UserCircle } from "lucide-react";

// Main navigation items
export const navigationItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Classes", href: "/classes" },
  { name: "Healthy", href: "/healthy" },
];

// User dropdown menu items
export const userMenuItems = [
  {
    name: "Profile",
    href: "/profile",
    icon: UserCircle,
  },
  {
    name: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

// Mobile user menu items (with Gmail)
export const mobileUserMenuItems = [
  {
    name: "Gmail",
    href: "/gmail",
    icon: Mail,
  },
  {
    name: "Profile",
    href: "/profile",
    icon: UserCircle,
  },
  {
    name: "Settings",
    href: "/settings",
    icon: Settings,
  },
];
