import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { buttonVariants } from "@/components/ui/button";
import { LogOut, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { userMenuItems } from "./navigation-data";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "@/components/common/theme-toggel";
import { useTranslations } from "use-intl";
import LanguageMenu from "@/components/common/language-menu";
import { cn } from "@/lib/utils";
import { useLoginContext } from "@/context/login-context";

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
export function UserDropdownMenu() {

  //context
  const { setToken, user, setUser } = useLoginContext();

  //navigate
  const navigate = useNavigate()

  //handle logout
  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken('null');
    localStorage.removeItem('user');
    setUser(null);
    setTimeout(() => {
      navigate('/auth/login');
    }, 1000)
  }

  //  Translations
  const t = useTranslations();

  return (
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
      <DropdownMenuContent
        className="w-56"
        align="end"
      >
        {!user ? (
          <>
            {/* Not A User */}
            <DropdownMenuLabel className="font-normal">
              <p className="text-sm font-medium">{t("welcome")}</p>
              <p className="text-xs text-muted-foreground">
                {t("login-or-register")}
              </p>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />

            <DropdownMenuItem asChild>
              <Link to="/auth/login" className="w-full">
                {t("login")}
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/auth/register" className="w-full">
                {t("register")}
              </Link>
            </DropdownMenuItem>
          </>
        ) : (<>
          {/* User information section */}
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">{user?.firstName}</p>
              <p className="text-xs leading-none text-muted-foreground">
                {user?.email}
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
        </>)}

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
        <DropdownMenuItem onClick={handleLogout} className="cursor-pointer ">
          <LogOut className="me-2 size-4" />
          <span>{t('logout')}</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
