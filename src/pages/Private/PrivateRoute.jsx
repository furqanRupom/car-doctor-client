import { useContext } from "react";
import { CarContext } from "../../providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";

const  PrivateRoute = ({children}) => {
    const location = useLocation()
    const {user,loading} = useContext(CarContext)
    if(loading) return <progress className="progress w-full"></progress>
    if(user?.email){
        return children;
    }
    return <Navigate to="/login" replace={true} state={{from:location}}></Navigate>
};


export default PrivateRoute;