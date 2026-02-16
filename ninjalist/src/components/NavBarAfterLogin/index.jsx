import "./NavBarAfterLogin.css"
import ImageNinjaNavBar from "../../assets/imageninjanavbar.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Photo from "../Photo";
import { useState, useEffect } from "react"
import { logout } from "../../services/authService";


function NavBarAfterLogin() {

    const [userName, setUserName] = useState("");

        useEffect(() => {
            const name = localStorage.getItem("userName");
            if (name) {
                setUserName(name);
            }
        }, []);

    return (
        <>
        
         <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous"></link>


        <nav className="navbar navbar-dark bg-dark fixed-top">
            <div className="navbar-after-login-container">
                <a href="/tasks" className="navbar-after-login-home-link">
                    <img className="navbar-after-login-image" src={ImageNinjaNavBar} alt="navbar Image" />
                    <h1 className="navbar-after-login-title">NinjaList</h1>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">NinjaList</h5>
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <Photo/>
                        <h6 className="username-photo">
                            {userName}
                        </h6>
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="tasks">Home</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    More
                                </a>
                                <ul className="dropdown-menu dropdown-menu-dark">
                                    <li><a className="dropdown-item" href="/profile">Profile</a></li>
                                    <li>
                                        <hr className="dropdown-divider"/>
                                    </li>
                                   <li><a className="dropdown-item" onClick={logout}>Logout</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>



        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"></script>


   </>)
}
export default NavBarAfterLogin;