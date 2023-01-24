import { useAuth } from "../context/authContext";
import { Navigate } from "react-router-dom";


export function ProtectedRoute({ children }) {
    const { user, loading } = useAuth()

    if (loading) return <div>Cargando</div>

    if (!user) return <Navigate to="/loginBis" />

    return <>{children}</>
}