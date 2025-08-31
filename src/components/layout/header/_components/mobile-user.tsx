import { ThemeToggle } from "@/components/common/theme-toggel";
import { Separator } from "@/components/ui/separator";
import { User } from "lucide-react";
import { Link } from "react-router-dom";
import { mobileUserMenuItems } from "./navigation-data";

interface MobileUserProps {
  handleClose: () => void;
}

export default function MobileUser({ handleClose }: MobileUserProps) {
  return (
    <div className="flex flex-col w-full px-5 space-y-3 pt-6 border-t">
      <div className="flex items-center space-x-3 p-3 bg-gray-900 rounded-lg">
        <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
          <User className="h-5 w-5 text-white" />
        </div>
        <div className="flex-1">
          <p className="text-sm font-medium">John Doe</p>
          <p className="text-xs text-gray-500">john.doe@example.com</p>
        </div>
      </div>
      <div className="flex flex-col space-y-1">
        {mobileUserMenuItems.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div key={item.name}>
              <Link
                to={item.href}
                className="flex items-center w-full px-3 py-2 text-sm font-medium text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-md transition-colors duration-200"
                onClick={() => handleClose()}
              >
                <IconComponent className="mr-3 h-4 w-4" />
                {item.name}
              </Link>
              {index < mobileUserMenuItems.length - 1 && (
                <Separator orientation="horizontal" />
              )}
            </div>
          );
        })}
        <Separator
          orientation="horizontal"
          className="mb-2"
        />

        <div className="ps-4">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
