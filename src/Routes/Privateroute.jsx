import { useContext } from "react";
import { AuthContext } from "../providers/Authprovider";
import { Navigate, useLocation } from "react-router-dom";


const Privateroute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const loaction = useLocation();

if(loading){
    return <progress className="w-56 progress"></progress>
}

    if(user){
        return children;

    }
    return <Navigate to ='/login' state={{form : location}} replace></Navigate>
};

export default Privateroute;