import { Navigate, Outlet } from "react-router-dom";
import { useAuthStatus } from "../hook/useAuthStatus";
import Spinner from "./Spinner";

const PrivateRoute = () => {
    const [loggedIn, setLoggedIn] = useAuthStatus()

    if(checkingStatus) {
        return <Spinner />
    }
    return (
        <div>
        
        </div>
    )
}

export default PrivateRoute
