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

interface UserDropdownMenuProps {
  userEmail?: string;
  userName?: string;
}

export function UserDropdownMenu({
  userEmail = "user@example.com",
  userName = "John Doe",
}: UserDropdownMenuProps) {
  return (
    <DropdownMenu>
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
      <DropdownMenuContent
        className="w-56"
        align="end"
      >
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{userName}sss</p>
            <p className="text-xs leading-none text-muted-foreground">
              {userEmail}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
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
                <span>{item.name}</span>
              </Link>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
