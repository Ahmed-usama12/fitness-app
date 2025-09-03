import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

import logo from "@/assets/images/fit 1.png";
import { UserDropdownMenu } from "./_components/user-dropdown-menu";
import { Link } from "react-router-dom";
import MobileMenueButton from "./_components/mobile-menue-button";
import { navigationItems } from "./_components/navigation-data";
import { useTranslations } from "use-intl";

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
      className={`w-full text-black sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200/50 dark:bg-gray-900/80 dark:border-gray-700/50"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto px-4 py-2 md:py-10 sm:px-6 lg:px-[80px]">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div>
            <img
              src={logo}
              className={"w-[87px] h-[55px]"}
              alt={t("logo")}
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-700 hover:text-orange-500 dark:text-white dark:hover:text-orange-500 font-bold text-xl transition-colors duration-200"
              >
                {t(item.name)}
              </Link>
            ))}
          </nav>

          {/* Desktop Authentication Section */}
          {!token ? (
            <div className="hidden md:flex gap-2 items-center space-x-4">
              <Button>{t("login")}</Button>
              <Button variant={"secondary"}>{t("signup")}</Button>
            </div>
          ) : (
            <UserDropdownMenu
              userEmail="john.doe@example.com"
              userName="John Doe"
            />
          )}

          {/* Mobile Menu Button */}
          <MobileMenueButton
            isOpen={isOpen}
            handleOpen={setIsOpen}
          />
        </div>
      </div>
    </header>
  );
}
