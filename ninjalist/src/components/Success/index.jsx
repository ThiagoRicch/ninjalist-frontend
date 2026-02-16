import "./Success.css"
import ImageSuccess from "../../assets/imagesuccess.png"

function Success() {

    return (<>
        <div className="card-success">
            <img src={ImageSuccess} className="image-card-success" alt="..." />
            <div className="card-body-success">
                <p className="card-text-success">Your account has been created successfully. You can now log in using your credentials.</p>
            </div>
           <a className="success-link-to-login" href="/login">Ok</a>
        </div>
    </>)
}

export default Success