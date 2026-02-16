import "./SuccessProfile.css"
import ImageSuccessProfile from "../../assets/imagesuccessprofile.png"

function SuccessProfile() {

    return (<>
        <div className="card-success-profile">
            <img src={ImageSuccessProfile} className="image-card-success-profile" alt="..." />
            <div className="card-body-success-profile">
                <p className="card-text-success-profile">Your account has been updated successfully.</p>
            </div>
           <a className="success-link-to-task" href="/tasks">Ok</a>
        </div>
    </>)
}

export default SuccessProfile