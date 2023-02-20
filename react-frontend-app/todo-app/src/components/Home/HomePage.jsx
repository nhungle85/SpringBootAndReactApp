import {Link, useNavigate} from "react-router-dom"
import { useAuth } from "../security/AuthContext";
import { useEffect } from "react";

export default function HomePage() {
   // const {username} = useParams();
    const {currentUser, isAuthenticated} = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        console.log(`use effect Home page, current user: ${currentUser}`);

        //redirect to login page when user not login already
        if (isAuthenticated === false) {
            navigate("/login");
        }
        
    }, []);

    return (
        <>  
            <div>Home Page {currentUser ? currentUser.username : ''}</div>
            <Link to='/todo'>Go to Todo List</Link> 
        </>

    )
}