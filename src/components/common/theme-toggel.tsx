"use client";

import { useTheme } from "@/hooks/use-theme";
import { Switch } from "../ui/switch";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <Switch
      checked={theme === "dark" ? true : false}
      onCheckedChange={() => {
        if (theme === "dark") setTheme("light");
        if (theme === "light") setTheme("dark");
      }}
    />
  );
}
