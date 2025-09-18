import * as React from "react";

import { cn } from "@/lib/utils";
import { Eye, EyeOff, Lock } from "lucide-react";

function PasswordInput({ className, ...props }: React.ComponentProps<"input">) {
	const [visible, setVisible] = React.useState(false);
	return (
		<div className={cn("w-full h-12 relative", className)}>
			<input
				type={visible ? "text" : "password"}
				data-slot="input"
				className={cn(
					"file:text-foreground text-black dark:text-white placeholder:capitalize placeholder:text-zinc-300 selection:bg-transparent selection:text-primary-foreground dark:bg-input/30 border-input flex h-full w-full min-w-0 rounded-[20px] border bg-transparent pl-11 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium caret-main disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus:shadow-[0px_0px_5px_0px_var(--main-color)]",
					"focus-visible:border-main",
					"aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
				)}
				{...props}
			/>
			<Lock
				className="text-zinc-300 absolute top-1/2 left-4 -translate-y-1/2"
				width={20}
				height={20}
				strokeWidth={1}
			/>
			<div
				className="text-zinc-300 absolute  top-1/2 right-1 h-10 flex items-center justify-center rounded-lg -translate-y-1/2 cursor-pointer w-12 hover:bg-zinc-700"
				onClick={() => setVisible(!visible)}
			>
				{!visible ? <Eye strokeWidth={1} /> : <EyeOff strokeWidth={1} />}
			</div>
		</div>
	);
}

export { PasswordInput };
