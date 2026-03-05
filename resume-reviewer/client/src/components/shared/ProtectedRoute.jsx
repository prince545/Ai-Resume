import { useUser } from "@clerk/clerk-react";
import { Navigate, Outlet } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";

export default function ProtectedRoute() {
    const { isLoaded, isSignedIn } = useUser();

    if (!isLoaded) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <LoadingSpinner />
            </div>
        );
    }

    if (!isSignedIn) {
        return <Navigate to="/" replace />;
    }

    return <Outlet />;
}
