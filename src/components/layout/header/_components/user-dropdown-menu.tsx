import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button, buttonVariants } from "@/components/ui/button";
import { LogOut, User } from "lucide-react";
import { Link } from "react-router-dom";
import { userMenuItems } from "./navigation-data";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "@/components/common/theme-toggel";
import { useTranslations } from "use-intl";
import LanguageMenu from "@/components/common/language-menu";
import { cn } from "@/lib/utils";
import { useLoginContext } from "@/context/login-context";
import { useLogout } from "@/hooks/use-logout";

export function UserDropdownMenu() {
  //context
  const { user } = useLoginContext();

  //  Translations
  const t = useTranslations();

  //Logout
  const { mutate: logout } = useLogout();

  return (
    <>
      {!user ? (
        <div className="flex items-center gap-6">
          {/*Login*/}
          <Link to="/auth/login" className="flex">
            <Button>LOGIN</Button>
          </Link>

          {/*Register*/}
          <Link to="/auth/register" className="flex">
            <Button variant="secondary">SIGNUP</Button>
          </Link>
        </div>
      ) : (
        <DropdownMenu>
          {/* Trigger button with user icon */}
          <DropdownMenuTrigger className="hidden md:flex">
            <div
              className={cn(buttonVariants({ variant: "default", size: "icon" }), "size-[47px]")}
            >
              <User className="h-5 w-5" />
            </div>
          </DropdownMenuTrigger>

          {/* Dropdown content */}
          <DropdownMenuContent className="w-56" align="end">
            {/* User information section */}
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm leading-none font-medium">{user?.firstName}</p>
                <p className="text-muted-foreground text-xs leading-none">{user?.email}</p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />

            {/* Navigation menu items */}
            {userMenuItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <DropdownMenuItem key={item.name} asChild>
                  <Link to={item.href} className="flex w-full items-center">
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

            {/*logout*/}
            <Separator className="my-2" />
            <DropdownMenuItem onClick={() => logout()} className="cursor-pointer">
              <LogOut className="me-2 size-4" />
              <span>{t("logout")}</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </>
  );
}
