import { userContext } from "@/components/providers/user-provider";
import React, { useContext } from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({
	children,
}: {
	children: React.ReactNode;
}) {
	const { token } = useContext(userContext);

	if (token) return children;
	else return <Navigate to={"/auth/login"} />;
}
