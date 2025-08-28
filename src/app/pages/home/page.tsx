import { ThemeToggle } from "@/components/common/theme-toggel";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import { ChartRadialText } from "@/components/ui/radial-chart";

export default function Homepage() {
	return (
		<div className="bg-zinc-200 dark:bg-zinc-800 py-10 space-y-5 px-5 font-baloo">
			<h1 className="text-2xl font-semibold">Fitness App</h1>
			<ChartRadialText total={6} current={2} />

			<ThemeToggle />
			<Input placeholder="First Name" className="w-1/2" />
			<Input type="email" placeholder="email" className="w-1/2" />
			<PasswordInput placeholder="Password" className="w-1/2" />
			<Button className="w-56">Button</Button>

			<Button variant={"secondary"} className="w-1/2">
				Button
			</Button>
			<Button icon={false} className="w-3/4">
				Button
			</Button>
			<Button icon={false} variant={"secondary"} className="w-3/4">
				Button
			</Button>
		</div>
	);
}
