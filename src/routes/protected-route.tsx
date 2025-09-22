import { Navigate } from "react-router-dom";

export default function ProtectedRoute({
	children,
}: {
	children: React.ReactNode;
}) {
	const token = localStorage.getItem('token')

	if (token) return children;
	else return <Navigate to={"/auth/login"} replace />;
}
