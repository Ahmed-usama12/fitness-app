"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, User } from "lucide-react";
import logo from "../../../../public/fit 1.png";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "Classes", href: "#" },
    { name: "Healthy", href: "#" },
  ];

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
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-orange-500 dark:text-white dark:hover:text-orange-500  font-bold text-xl transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex gap-2 items-center space-x-4">
            <Button>LOGIN</Button>
            <Button variant={"secondary"}>SIGN UP</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet
              open={isOpen}
              onOpenChange={setIsOpen}
            >
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[300px] sm:w-[400px]"
              >
                <div className="flex flex-col space-y-6 mt-6">
                  {/* Mobile Navigation */}
                  <nav className="flex flex-col space-y-4">
                    {navigationItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="text-lg font-medium text-gray-700 hover:text-orange-500 transition-colors duration-200"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </a>
                    ))}
                  </nav>

                  {/* Mobile Auth Buttons */}
                  <div className="flex flex-col space-y-3 pt-6 border-t">
                    <Button
                      variant="outline"
                      className="border-orange-500 text-orange-500 hover:bg-orange-50 font-medium w-full bg-transparent"
                    >
                      LOGIN
                    </Button>
                    <Button className="bg-orange-500 hover:bg-orange-600 text-white font-medium w-full">
                      SIGN UP
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Simple Mobile User Icon (Alternative) */}
          <div className="md:hidden hidden">
            <Button
              variant="ghost"
              size="icon"
              className="bg-orange-500 hover:bg-orange-600 text-white rounded-full"
            >
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
