import { Navigate, Outlet } from "react-router-dom";
import { useAuthStatus } from "../hook/useAuthStatus";

const PrivateRoute = () => {
    const [loggedIn, setLoggedIn] = useAuthStatus()

    if(checkingS)
    return (
        <div>
        
        </div>
    )
}

export default PrivateRoute
