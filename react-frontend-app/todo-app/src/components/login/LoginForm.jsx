import { useState } from "react"
import {useNavigate} from "react-router-dom"

export default function LoginForm() {
    const [username, setUsername] = useState("Nhung");
    const [pwd, setPwd] = useState("");
    const [showSuccessMsg, setShowSuccessMsg] = useState(false);
    const [showErrorMsg, setShowErrorMsg] = useState(false);
    const navigate = useNavigate();

    function handleUsernameChange(event) {
        setUsername(event.target.value);
    }

    function handlePasswordChange(event) {
       // console.log(event.target.value)
        setPwd(event.target.value);
    }

    function handleLogin() {
        if(username === 'Nhung' && pwd === '123') {
            setShowSuccessMsg(true);
            setShowErrorMsg(false);
            navigate(`/welcome/${username}`);
        } else {
            setShowErrorMsg(true);
            setShowSuccessMsg(false);
        }
    }

    return(
       
       <div className="LoginForm">
        
        {showSuccessMsg && <div className="susscessfulMsg">Authenticated</div>}
        {showErrorMsg && <div className="errorMsg">Authenticated Fail. Please check your credentials and try again.</div>}
        <div>
            <label >Username: </label>
            <input type="text" name="username" value={username} onChange={handleUsernameChange}></input>
        </div>
        <div>
            <label >Password: </label>
            <input type="password" name="pwd" value={pwd} onChange={handlePasswordChange}></input>
        </div>
        <button type="button" name="loginBtn" onClick={handleLogin}>Login</button>
        </div>
        
    )
}