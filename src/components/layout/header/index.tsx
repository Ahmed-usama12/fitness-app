import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

import logo from "../../../../public/fit 1.png";
import { UserDropdownMenu } from "./_components/user-dropdown-menu";
import { Link } from "react-router-dom";
import MobileMenueButton from "./_components/mobile-menue-button";
import { navigationItems } from "./_components/navigation-data";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const token = true;

  // Close menu when screen size grows larger than md breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        // md breakpoint is 768px
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    // Cleanup listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="w-full text-black sticky top-0 z-50">
      <div className="mx-auto px-4 py-2 md:py-10 sm:px-6 lg:px-[80px]">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div>
            <img
              src={logo}
              className={"w-[87px] h-[55px]"}
              alt="logo"
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
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Auth Buttons */}
          {!token ? (
            <div className="hidden md:flex gap-2 items-center space-x-4">
              <Button>LOGIN</Button>
              <Button variant={"secondary"}>SIGN UP</Button>
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
