import { useState} from "react"
import {useNavigate} from "react-router-dom"
import {useAuth } from "../security/AuthContext";

const defaultFormFields = {
    username: '',
    password: ''
}

export default function LoginForm() {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {username, password} = formFields;

    const {setCurrentUser, setAuthenticated} = useAuth();

    const [showSuccessMsg, setShowSuccessMsg] = useState(false);
    const [showErrorMsg, setShowErrorMsg] = useState(false);
    const navigate = useNavigate();

    function handleChange(event) {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value});
    }

    function handleLogin() {
        if(username === 'Nhung' && password === '123') {
            setShowSuccessMsg(true);
            setShowErrorMsg(false);
            setCurrentUser({username: username, password: password});
            setAuthenticated(true);
            navigate(`/welcome`);
        } else {
            setShowErrorMsg(true);
            setShowSuccessMsg(false);
            setAuthenticated(false);
        }
    }

    return(
       
       <div className="LoginForm">
        
        {showSuccessMsg && <div className="susscessfulMsg">Authenticated</div>}
        {showErrorMsg && <div className="errorMsg">Authenticated Fail. Please check your credentials and try again.</div>}
        <form onSubmit={() => {}}>
            <div className="form-group row">
                <label htmlFor="username" className="col-sm-2 col-form-label">Username: </label>
                <div className="col-sm-10">
                    <input id="username" className="form-control" required type="text" name="username" value={username} onChange={handleChange}></input>
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="password" className="col-sm-2 col-form-label">Password: </label>
                <div className="col-sm-10">
                    <input id="password" required className="form-control" type="password" name="password" value={password} onChange={handleChange}></input>
                </div>
            </div>
            <button className="btn btn-primary" type="button" name="loginBtn" onClick={handleLogin}>Login</button>
           
        </form>
        </div>
    )
}