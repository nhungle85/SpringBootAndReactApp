import { useAuth } from "../security/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import './Header.css'

export default function Header() {
    const {currentUser, isAuthenticated, handleLogout} = useAuth();
    const navigate = useNavigate();

    function doLogout() {
        handleLogout();
        navigate('/logout')
    }
    return (
        <header className="border-bottom border-light border-5 mb-5 p-2 header">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <nav className="navbar navbar-expand-lg">
                            <div className="collapse navbar-collapse">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link className="nav-link" to='/welcome'>Home</Link>
                                    </li>
                                    {
                                        isAuthenticated &&
                                            <li className="nav-item">
                                                <Link className="nav-link" to='/todo'>Todos</Link>
                                            </li>
                                       
                                    }
                                </ul>
                            </div>
                        </nav>
                   
                    </div>
                    <div className="col-6">
                        {
                            isAuthenticated ? (
                                <div>
                                 <Link to='/logout' onClick={doLogout} className="nav-link">Log out</Link> 
                                </div>
                            ) : (
                                <Link to='/login' className="nav-link">Log in</Link>
                            )
                        }
                    </div>
                </div>
            </div>
        </header>
  );
}
