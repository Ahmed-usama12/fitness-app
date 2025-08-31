import { Mail, Settings, UserCircle } from "lucide-react";

/**
 * Main navigation items for the header
 * Each item has a translation key that matches the i18n messages
 */
export const navigationItems = [
  { name: "home", href: "/" },
  { name: "about", href: "/about" },
  { name: "classes", href: "/classes" },
  { name: "healthy", href: "/healthy" },
];

/**
 * User dropdown menu items for desktop view
 * Contains profile and settings options
 */
export const userMenuItems = [
  {
    name: "profile",
    href: "/profile",
    icon: UserCircle,
  },
  {
    name: "settings",
    href: "/settings",
    icon: Settings,
  },
];

/**
 * Mobile user menu items (includes Gmail option)
 * Extended menu for mobile users with additional options
 */

export const mobileUserMenuItems = [
  {
    name: "gmail",
    href: "/gmail",
    icon: Mail,
  },
  {
    name: "profile",
    href: "/profile",
    icon: UserCircle,
  },
  {
    name: "settings",
    href: "/settings",
    icon: Settings,
  },
];
