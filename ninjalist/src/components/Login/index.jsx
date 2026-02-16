import "./Login.css"
import ImageNinjaLogin from "../../assets/imageninjalogin.png"
import {loginUser} from "../../services/authService.js"
import { useState } from "react";

function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();

        const data = {
            email,
            password
        };

        try {
            const response = await loginUser(data);

            localStorage.setItem("token", response.token);

            window.location.href = '/tasks'
        } catch (error) {
            alert("Invalid credentials");
        }

        console.log("Login:", data);
    }

    return (<>

        <div className="login-all">
            <form className="login-form" onSubmit={handleSubmit}>
                <div className="login-form-left">
                    <img className="login-image" src={ImageNinjaLogin} alt="Login Image" />
                    <p className="login-paragraph-to-register">You don't have an Account? 
                        <a 
                            className="login-link-to-register"
                            href="/register"> Register
                        </a>
                    </p>
                </div>

                <div className="divider-login"></div>

                <div className="login-form-right">
                    <h3 className="login-title">Login</h3>
                    <label className="login-label">Email</label>
                    <input 
                        className="login-input" 
                        type="email" 
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required />
                    <label className="login-label">Password</label>
                    <input 
                        className="login-input" 
                        type="password"  
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required />
                    <button className="login-button" type="submit">Login</button>
                </div>
            </form>
        </div>
    </>)
}

export default Login;