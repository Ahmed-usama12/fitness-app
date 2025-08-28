"use client";
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import vector from "../../assets/images/Vector.svg";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
	[
		"inline-flex items-center font-semibold  font-[16px] justify-center  rounded-full transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 cursor-pointer aria-invalid:border-destructive",
		"font-rubik text-zinc-50  ",
	],
	{
		variants: {
			variant: {
				default: "bg-main shadow-xs hover:bg-main/90 ",
				secondary:
					"text-main shadow-xs hover:bg-main hover:text-zinc-50 border border-main",
				destructive:
					"bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
				outline:
					"border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",

				ghost:
					"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
				link: "text-primary underline-offset-4 hover:underline",
			},
			size: {
				default: "!h-full !w-full px-8 py-4 has-[>svg]:px-3",
				sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
				lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
				icon: "size-9",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	}
);

function Button({
	className,
	variant,
	size,
	icon = true,
	asChild = false,
	...props
}: React.ComponentProps<"button"> &
	VariantProps<typeof buttonVariants> & {
		asChild?: boolean;
		icon?: boolean;
	}) {
	const Comp = asChild ? Slot : "button";

	return (
		<div className={cn("relative w-fit h-12", className)}>
			<Comp
				data-slot="button"
				className={cn(buttonVariants({ variant, size, className }))}
				{...props}
			/>
			{icon && (
				<div className="bg-main size-9 absolute top-1/2 -right-5 -translate-y-1/2 border-[2px] border-zinc-50 rounded-full flex items-center justify-center">
					<img src={vector} className="w-4" />
				</div>
			)}
		</div>
	);
}

// eslint-disable-next-line
export { Button, buttonVariants };
