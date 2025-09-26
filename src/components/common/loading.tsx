import { Loader2 } from "lucide-react";
import type React from "react";

export default function Loading({
  children,
  status,
}: {
  children: React.ReactNode;
  status: boolean;
}) {
  return (
    <>
      {status ? (
        <div className="mt-3 flex h-full w-full items-center justify-center">
          <Loader2 width={60} height={60} className="text-main animate-spin" />
        </div>
      ) : (
        children
      )}
    </>
  );
}