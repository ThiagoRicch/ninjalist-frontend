import "./Register.css"
import ImageNinjaRegister from "../../assets/imageninjaregister.png"
import Success from "../Success"
import { useState } from "react";
import { registerUser } from "../../services/authService.js";

function Register() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [success, setSuccess] = useState(false)


    async function handleSubmit(e) {
        e.preventDefault();

        const data = {
            name,
            email,
            password
        };

        try {
            const response = await registerUser(data);
            console.log("Created user:", response);
        } catch (error) {
            console.error(error);
            alert("Error creating user");
            return;
        }

        setSuccess(true);
    }


    return (<>

        <div className="register-all">
            {success ? (
                    <Success />
                ) : (
            <form className="register-form" onSubmit={handleSubmit}>
                <div className="register-form-left">
                    <img className="register-image" src={ImageNinjaRegister} alt="register Image" />
                    <p className="register-paragraph-to-login">You already have an Account? 
                        <a 
                            className="register-link-to-login"
                            href="/login"> Login
                        </a>
                    </p>
                </div>

                <div className="divider-register"></div>

                <div className="register-form-right">
                    <h3 className="register-title">Register</h3>
                    <label className="register-label">Name</label>
                    <input 
                        className="register-input" 
                        type="text" 
                        placeholder="Enter name"
                        value={name}
                        onChange={(e) => setName(e.target.value)} 
                        required />
                    <label className="register-label">Email</label>
                    <input 
                        className="register-input" 
                        type="email" 
                        placeholder="Enter email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                        required />
                    <label className="register-label">Password</label>
                    <input 
                        className="register-input" 
                        type="password" 
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} 
                        required />
                    <button className="register-button" type="submit">Register</button>
                </div>
            </form>
                )}
        </div>

    </>)
}

export default Register;