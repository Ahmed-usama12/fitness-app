import Providers from "./components/providers";
import AppRouter from "./routes/app-router";

function App() {
	return (
		<Providers>
			<AppRouter />
		</Providers>
	);
}
export default App;
