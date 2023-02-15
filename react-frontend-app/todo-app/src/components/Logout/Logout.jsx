import { useContext, useEffect } from "react";
import { AuthContext } from "../security/AuthContext";

export default function Logout() {
    const {currentUser, setCurrentUser} = useContext(AuthContext);
   
    useEffect(() => {
        //reset current user
        setCurrentUser(null);
    })
    
    console.log(`Reset ${currentUser}`);

    return (
        <div>
            You are logged out. Thank you for using my application.
        </div>
    )
}