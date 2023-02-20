import { useContext, useEffect } from "react";
import { AuthContext } from "../security/AuthContext";

export default function Logout() {
    const {currentUser, setCurrentUser, setAuthenticated} = useContext(AuthContext);
   
    //run this function when the component is mounted
    useEffect(() => {
        //reset current user
        setCurrentUser(null);
        setAuthenticated(false);
    },[])
    
    console.log(`Reset ${currentUser}`);

    return (
        <div>
            You are logged out. Thank you for using my application.
        </div>
    )
}