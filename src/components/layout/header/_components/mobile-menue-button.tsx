import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import MobileAuth from "./mobile-auth";
import MobileUser from "./mobile-user";
import { navigationItems } from "./navigation-data";

interface MobileMenueButtonProps {
  isOpen: boolean;
  handleOpen: (open: boolean) => void;
}

export default function MobileMenueButton({
  isOpen,
  handleOpen,
}: MobileMenueButtonProps) {
  const token = true; // This should come from context or props

  return (
    <div className="md:hidden">
      <Sheet
        open={isOpen}
        onOpenChange={handleOpen}
      >
        <SheetTrigger asChild>
          <Button
            icon={false}
            variant="ghost"
            size="icon"
          >
            <Menu size={20} />
          </Button>
        </SheetTrigger>
        <SheetContent
          side="right"
          className="w-[300px] sm:w-[400px]"
        >
          <div className="flex flex-col space-y-6 mt-6 p-5">
            {/* Mobile Navigation */}
            <nav className="flex flex-col items-center space-y-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-lg font-medium text-gray-700 hover:text-orange-500 transition-colors duration-200"
                  onClick={() => handleOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Mobile Auth Buttons */}
            {!token ? (
              <MobileAuth />
            ) : (
              <MobileUser handleClose={() => handleOpen(false)} />
            )}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
