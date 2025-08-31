import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts";

import { type ChartConfig, ChartContainer } from "@/components/ui/chart";

export const description = "A radial chart with text";

const chartData = [
	{ browser: "safari", visitors: 200, fill: "var(--main-color)" },
];

const chartConfig = {
	visitors: {
		label: "Visitors",
	},
	safari: {
		label: "Safari",
		color: "var(--chart-2)",
	},
} satisfies ChartConfig;

export function ChartRadialText({
	total,
	current,
}: {
	total: number;
	current: number;
}) {
	const percentage = (current / total) * 360 - 90;
	return (
		<ChartContainer
			config={chartConfig}
			className="aspect-square max-h-16 max-w-16"
		>
			<RadialBarChart
				data={chartData}
				startAngle={90}
				endAngle={-percentage}
				innerRadius={30}
				outerRadius={33}
			>
				<RadialBar dataKey="visitors" background cornerRadius={0} />
				<PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
					<Label
						content={({ viewBox }) => {
							if (viewBox && "cx" in viewBox && "cy" in viewBox) {
								return (
									<text
										x={viewBox.cx}
										y={viewBox.cy}
										textAnchor="middle"
										dominantBaseline="middle"
									>
										<tspan
											x={viewBox.cx}
											y={viewBox.cy}
											className=" fill-zinc-50 font-baloo text-2xl font-medium"
										>
											{`${current}/${total}`}
										</tspan>
									</text>
								);
							}
						}}
					/>
				</PolarRadiusAxis>
			</RadialBarChart>
		</ChartContainer>
	);
}
