import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

import logo from "@/assets/images/fit 1.png";
import { UserDropdownMenu } from "./_components/user-dropdown-menu";
import { NavLink } from "react-router-dom";
import MobileMenueButton from "./_components/mobile-menue-button";
import { navigationItems } from "./_components/navigation-data";
import { useTranslations } from "use-intl";
import { cn } from "@/lib/utils";

/**
 * Header component that provides navigation and authentication UI
 * Features responsive design with mobile menu and desktop navigation
 */

export function Header() {
  // States
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  //  Translations
  const t = useTranslations();

  // TODO: Replace with actual authentication token from context/props
  const token = true;

  //Effects
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 10);
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        // md breakpoint is 768px
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Cleanup listeners on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full text-black transition-all duration-300 ${
        isScrolled
          ? "border-b border-gray-200/50 bg-zinc-50/30 shadow-sm backdrop-blur-2xl dark:border-gray-700/50 dark:bg-zinc-800/60"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto px-4 py-2 sm:px-6 md:py-10 lg:px-[80px]">
        <div className="flex h-16 items-center justify-between">
          {/* Logo Section */}
          <div>
            <img src={logo} className={"h-[55px] w-[87px]"} alt={t("logo")} />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-8 md:flex">
            {navigationItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  cn(
                    "text-xl font-bold transition-colors duration-200",
                    isActive ? "text-main" : "hover:!text-main text-gray-700 dark:text-white",
                  )
                }
              >
                {t(item.name)}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Authentication Section */}
          {!token ? (
            <div className="hidden items-center gap-3 space-x-4 md:flex">
              <Button>{t("login")}</Button>
              <Button variant={"secondary"}>{t("signup")}</Button>
            </div>
          ) : (
            <UserDropdownMenu />
          )}

          {/* Mobile Menu Button */}
          <MobileMenueButton isOpen={isOpen} handleOpen={setIsOpen} />
        </div>
      </div>
    </header>
  );
}
