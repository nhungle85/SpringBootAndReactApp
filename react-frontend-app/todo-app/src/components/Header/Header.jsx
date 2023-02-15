import { Nav } from "react-bootstrap";
import { AuthContext } from "../security/AuthContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

export default function Header() {
    const {currentUser} = useContext(AuthContext);
    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                <Nav activeKey="/welcome" >
                    <Nav.Item>
                        <Nav.Link href="/welcome">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/todo">Todos</Nav.Link>
                    </Nav.Item> 
                    </Nav>
                </div>
                <div className="col-6">
                    {
                        currentUser ? (
                            <Link to='/logout' className="nav-link">Log out</Link>
                        ) : (
                            <Link to='/login' className="nav-link">Log in</Link>
                        )
                    }
                
                </div>
            </div>
            
        </div>
  );
}
