import {useParams, Link, useNavigate} from "react-router-dom"
import { AuthContext } from "../security/AuthContext";
import { useContext, useEffect } from "react";

export default function HomePage() {
   // const {username} = useParams();
    const {currentUser} = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        console.log(`use effect Home page, current user: ${currentUser}`);

        //redirect to login page when user not login already
        if (currentUser === null || currentUser.username === '') {
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