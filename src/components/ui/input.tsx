import * as React from "react";

import { cn } from "@/lib/utils";
import { Mail, Pen, User } from "lucide-react";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <div className={cn("relative h-12 w-full", className)}>
      <input
        type={type}
        data-slot="input"
        className={cn(
          "file:text-foreground selection:text-primary-foreground dark:bg-input/30 border-input caret-main flex h-full w-full min-w-0 rounded-[20px] border bg-transparent py-2 pr-4 pl-11 text-base text-zinc-100 transition-[color,box-shadow] outline-none selection:bg-transparent file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-300 placeholder:capitalize focus:shadow-[0px_0px_5px_0px_var(--main-color)] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "focus-visible:border-main",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        )}
        {...props}
      />
      <div className="absolute top-1/2 left-4 h-fit w-fit -translate-y-1/2 text-zinc-300">
        {type === "email" ? (
          <Mail strokeWidth={1} width={20} height={20} />
        ) : type === "message" ? (
          <Pen strokeWidth={1} width={20} height={20} />
        ) : (
          <User strokeWidth={1} width={20} height={20} />
        )}
      </div>
    </div>
  );
}

export { Input };
