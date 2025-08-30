import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
export default function ReactQueryProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	// Create a client
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: { staleTime: 60 * 1000 },
		},
	});

	return (
		<QueryClientProvider client={queryClient}>
			{children}

			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
}
