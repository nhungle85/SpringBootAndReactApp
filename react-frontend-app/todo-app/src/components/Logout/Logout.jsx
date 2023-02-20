import {useEffect } from "react";
import {useAuth } from "../security/AuthContext";

export default function Logout() {
    const {handleLogout} = useAuth();
   
    //run this function when the component is mounted
    useEffect(() => {
        handleLogout();
    },[])
    
    return (
        <div>
            You are logged out. Thank you for using my application.
        </div>
    )
}