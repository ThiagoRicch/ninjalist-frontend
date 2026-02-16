import "./Photo.css";
import { useRef, useState, useEffect } from "react";
import DefaultProfile from "../../assets/imagedefaultuser.png";
import ImagePenEdit from "../../assets/imagepenedit.png";
import { uploadProfilePhoto, getProfile } from "../../services/authService.js";

function Photo() {
    const [image, setImage] = useState(null);
    const fileInputRef = useRef(null);

    useEffect(() => {
        async function loadProfile() {
            try {
                const token = localStorage.getItem("token");
                if (!token) return;

                const data = await getProfile();

                if (data.photoUrl) {
                    setImage(`http://localhost:8080${data.photoUrl}?t=${Date.now()}`);
                }
            } catch (err) {
                console.error("Error load photo:", err);
            }
        }

        loadProfile();
    }, []);

    const handleClick = () => {
        fileInputRef.current.click();
    };

    const handleChange = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        try {
            const data = await uploadProfilePhoto(file);

            if (data.photoUrl) {
                setImage(`http://localhost:8080${data.photoUrl}?t=${Date.now()}`);
            }
        } catch (err) {
            console.error("Error upload photo:", err);
        }
    };

    return (
        <div className="profile-container">
            <img
                src={image || DefaultProfile}
                alt="Profile"
                className="profile-image"
            />

            <button
                type="button"
                className="edit-button"
                onClick={handleClick}
            >
                <img
                    src={ImagePenEdit}
                    alt="Edit"
                    className="edit-image"
                />
            </button>

            <input
                type="file"
                ref={fileInputRef}
                onChange={handleChange}
                style={{ display: "none" }}
                accept="image/*"
            />
        </div>
    );
}

export default Photo;
