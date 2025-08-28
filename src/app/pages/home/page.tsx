import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import { ChartRadialText } from "@/components/ui/radial-chart";

export default function Homepage() {
	return (
		<div className="bg-zinc-800 h-[60vh] space-y-5 px-5">
			<ChartRadialText total={6} current={3} />
			<Input placeholder="First Name" className="w-1/2" />
			<Input type="email" placeholder="email" className="w-1/2" />
			<PasswordInput placeholder="Password" className="w-1/2" />
		</div>
	);
}
