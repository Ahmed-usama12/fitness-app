import { createContext, useEffect, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const isMobileContext = createContext({ isMobile: false });
export default function MobileProvider({ children }: { children: React.ReactNode }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const handleMobile = () => {
      if (window.innerWidth <= 768) setIsMobile(true);
      else setIsMobile(false);
    };
    window.addEventListener("resize", handleMobile);

    return () => {
      window.removeEventListener("resize", handleMobile);
    };
  }, []);
  return <isMobileContext.Provider value={{ isMobile }}>{children}</isMobileContext.Provider>;
}
