import { buttonVariants } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuShortcut,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useContext, useEffect } from "react";
import { LanguageContext } from "../providers/components/use-intel-provider";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
export default function LanguageMenu() {
	// locale state
	const { locale, setLocale } = useContext(LanguageContext);

	// languages
	const languages = {
		en: "English",
		ar: "العربية",
	};

	// set locale storage by locale
	useEffect(() => {
		localStorage.setItem("locale", locale);
	}, [locale]);
	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				{/* language menu trigger */}
				<div className={cn(buttonVariants({ variant: "ghost" }), "text-main")}>
					{languages[locale]}
				</div>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56" align="start">
				<DropdownMenuGroup>
					{/* arabic item */}
					<DropdownMenuItem
						onClick={() => {
							setLocale("ar");
						}}
					>
						{languages.ar}

						{/* check the selected language */}
						{locale === "ar" && (
							<DropdownMenuShortcut>
								<Check />
							</DropdownMenuShortcut>
						)}
					</DropdownMenuItem>

					{/* English option */}
					<DropdownMenuItem
						onClick={() => {
							setLocale("en");
						}}
					>
						{languages.en}

						{/* check selected language */}
						{locale === "en" && (
							<DropdownMenuShortcut>
								<Check />
							</DropdownMenuShortcut>
						)}
					</DropdownMenuItem>
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
