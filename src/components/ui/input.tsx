import * as React from "react";

import { cn } from "@/lib/utils";
import { Lock, Mail, User } from "lucide-react";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <div className={cn("w-full h-12 relative", className)}>
      <input
        type={type}
        data-slot="input"
        className={cn(
          "file:text-foreground  text-zinc-100 placeholder:capitalize placeholder:text-zinc-300 selection:bg-transparent selection:text-primary-foreground dark:bg-input/30 border-input flex h-full w-full min-w-0 rounded-[20px] border bg-transparent ps-11 pe-4 py-2 text-base transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium caret-main disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus:shadow-[0px_0px_5px_0px_var(--main-color)]",
          "focus-visible:border-main",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
        )}
        {...props}
      />
      <div className="text-zinc-300  w-fit h-fit  absolute top-1/2 start-4 -translate-y-1/2">
        {type === "email" ? (
          <Mail
            strokeWidth={1}
            width={20}
            height={20}
          />
        ) : type === "password" ? (
          <Lock
            strokeWidth={1}
            width={20}
            height={20}
          />
        ) : (
          <User
            strokeWidth={1}
            width={20}
            height={20}
          />
        )}
      </div>
    </div>
  );
}

export { Input };
