import Providers from "./components/providers";
import LoginContextProvider from "./context/login-context";
import AppRouter from "./routes/app-router";

function App() {
	return (
		<Providers>
			<LoginContextProvider>
				<AppRouter />
			</LoginContextProvider>
		</Providers>
	);
}
export default App;
