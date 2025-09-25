"use client";

import { useTheme } from "@/hooks/use-theme";
import { Switch } from "../ui/switch";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <div dir="ltr">
      <Switch
        checked={theme === "dark"}
        onCheckedChange={() => {
          if (theme === "dark") setTheme("light");
          if (theme === "light") setTheme("dark");
        }}
      />
    </div>
  );
}
