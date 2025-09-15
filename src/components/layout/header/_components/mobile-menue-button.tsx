import {buttonVariants } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import MobileAuth from "./mobile-auth";
import MobileUser from "./mobile-user";
import { navigationItems } from "./navigation-data";
import { useTranslations } from "use-intl";
import { ThemeToggle } from "@/components/common/theme-toggel";
import LanguageMenu from "@/components/common/language-menu";
import { cn } from "@/lib/utils";

/**
 * Props interface for MobileMenueButton component
 */
interface MobileMenueButtonProps {
  isOpen: boolean;
  handleOpen: (open: boolean) => void;
}

/**
 * Mobile menu button component with slide-out navigation
 * Provides mobile-specific navigation and authentication options
 */
export default function MobileMenueButton({
  isOpen,
  handleOpen,
}: MobileMenueButtonProps) {
  //  Translations
  const t = useTranslations();

  // TODO: Replace with actual authentication token from context/props
  const token = true;

  return (
    <div className="md:hidden">
      <Sheet
        open={isOpen}
        onOpenChange={handleOpen}
      >
        {/* Mobile menu trigger button */}
        <SheetTrigger asChild>
          <div
           className={cn(buttonVariants({variant:"ghost",size:"icon"}))}
          >
            <Menu
              size={20}
              className="text-black dark:text-white"
            />
          </div>
        </SheetTrigger>

        {/* Mobile menu content */}
        <SheetContent
          side="right"
          className="w-[300px] sm:w-[400px] bg-white dark:bg-gray-950"
        >
          <div className="flex flex-col space-y-6 mt-6 p-5">
            {/* Mobile Navigation Links */}
            <nav className="flex flex-col items-center space-y-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-lg font-medium text-gray-700 dark:text-white hover:text-orange-500 transition-colors duration-200"
                  onClick={() => handleOpen(false)}
                >
                  {t(item.name)}
                </Link>
              ))}
            </nav>

            {/* Mobile Authentication Section */}
            {!token ? (
              <MobileAuth />
            ) : (
              <MobileUser handleClose={() => handleOpen(false)} />
            )}

            <div className="flex flex-col items-start">
              <div className="ps-8">
                <ThemeToggle />
              </div>
              <LanguageMenu />
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
