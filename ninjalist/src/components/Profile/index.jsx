import "./Profile.css"
import { useState, useEffect } from "react"
import { editProfile } from "../../services/authService"
import SuccessProfile from "../SuccessProfile"
import ImageNinjaProfile from "../../assets/imageninjaprofile.png"

function Profile() {

    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [success, setSuccess] = useState(false)

    useEffect(() => {

        const name = localStorage.getItem("userName")
        const email = localStorage.getItem("email")

        if (name) setUserName(name)
        if (email) setEmail(email)

    }, [])

    async function handleSubmit(e) {
        e.preventDefault();

        const data = {
            name: userName,
            email: email
        }

        try {

            const response = await editProfile(data)

            setUserName(response.name)
            setEmail(response.email)

            localStorage.setItem("userName", response.name)
            localStorage.setItem("email", response.email)
        }
        catch (error) {
            console.log("Error updating profile", error)
        }

        setSuccess(true)

    }



    return (<>
        <div className="profile-all">
            {success ? (
                <SuccessProfile />
            ) : (
                <form className="profile-form" onSubmit={handleSubmit}>
                    <div className="profile-form-left">
                        <img className="profile-image" src={ImageNinjaProfile} alt="profile Image" />
                    </div>

                    <div className="divider-profile"></div>

                    <div className="profile-form-right">
                        <h3 className="profile-title">Profile</h3>
                        <label className="profile-label">Name</label>
                        <input
                            className="profile-input"
                            type="text"
                            placeholder="Enter email"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            required />
                        <label className="profile-label">Email</label>
                        <input
                            className="profile-input"
                            type="email"
                            placeholder="Enter password"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required />
                        <button className="profile-button" type="submit">Update</button>
                    </div>
                </form>
            )}
        </div>

    </>)
}

export default Profile