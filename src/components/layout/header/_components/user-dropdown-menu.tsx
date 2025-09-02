"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import { Link } from "react-router-dom";
import { userMenuItems } from "./navigation-data";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "@/components/common/theme-toggel";
import { useTranslations } from "use-intl";
import LanguageMenu from "@/components/common/language-menu";

/**
 * Props interface for UserDropdownMenu component
 */
interface UserDropdownMenuProps {
  userEmail?: string;
  userName?: string;
}

/**
 * User dropdown menu component for authenticated users
 * Provides access to user profile, settings, and theme toggle
 */
export function UserDropdownMenu({
  userEmail = "user@example.com",
  userName = "John Doe",
}: UserDropdownMenuProps) {
  //  Translations
  const t = useTranslations();

  return (
    <DropdownMenu>
      {/* Trigger button with user icon */}
      <DropdownMenuTrigger className="hidden md:flex">
        <Button
          icon={false}
          size="icon"
          variant="default"
          className="size-[47px]"
        >
          <User className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>

      {/* Dropdown content */}
      <DropdownMenuContent
        className="w-56"
        align="end"
      >
        {/* User information section */}
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{userName}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {userEmail}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />

        {/* Navigation menu items */}
        {userMenuItems.map((item) => {
          const IconComponent = item.icon;
          return (
            <DropdownMenuItem
              key={item.name}
              asChild
            >
              <Link
                to={item.href}
                className="flex items-center w-full"
              >
                <IconComponent className="mr-2 h-4 w-4" />
                <span>{t(item.name)}</span>
              </Link>
            </DropdownMenuItem>
          );
        })}

        {/* Theme toggle section */}
        <Separator className="my-2" />
        <DropdownMenuItem>
          <ThemeToggle />
        </DropdownMenuItem>

        {/* language toggle section */}
        <Separator className="my-2" />
        <DropdownMenuItem>
          <LanguageMenu />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
