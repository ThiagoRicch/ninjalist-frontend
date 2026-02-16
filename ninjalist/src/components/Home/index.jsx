import "./Home.css"
import NavBar from "../Navbar"
import ImageHome1 from "../../assets/imageninjahome1.png"
import ImageHome2 from "../../assets/imageninjahome2.png"
import ImageNinjaBlade from "../../assets/imageninjablade.png"
import ImageNinjaFace from "../../assets/imageninjaface.png"
import ImageNinjaKunai from "../../assets/imageninjakunai.svg"
import Linkedin from "../../assets/imagelinkedin.png"
import Github from "../../assets/imagegithub.png"
import Instagram from "../../assets/imageinstagram.png"

function Home() {
    return (<>

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous"></link>


        <NavBar />
        <div className="home-all">
            <div>
                <img className="home-image1" src={ImageHome1} alt="home-image1" />
                <img className="home-image2" src={ImageHome2} alt="home-image2" />
            </div>
            <h1 className="home-title">Welcome to NinjaList!</h1>
            <p className="home-description">Add your daily tasks here, take advantage of every feature, and organize your life the ninja way 🥷✨
                Stay focused, stay disciplined, and conquer your goals one task at a time 🎯📅</p>
            <div className="home-link-container">
                <a className="home-link-to-register" href="/register">Join Now</a>
            </div>

            <div className="card-container">
                <div className="card-home">
                    <img src={ImageNinjaBlade} className="image-card-home" alt="..."/>
                        <div className="card-body">
                            <p className="card-text">In a world full of distractions, NinjaList empowers you to cut through the noise and concentrate on what truly matters. Every task becomes a calculated move, every goal a mission waiting to be completed. Precision is not optional it’s your advantage.</p>
                        </div>
                </div>

                <div className="card-home">
                    <img src={ImageNinjaFace} className="image-card-home" alt="..."/>
                        <div className="card-body">
                            <p className="card-text">The ninja’s intense expression represents the mindset required to achieve greatness. Success is not accidental it is built through daily action, structured planning, and unwavering commitment. NinjaList helps you channel that inner warrior, transforming scattered ideas into clear missions and unfinished tasks into completed victories.</p>
                        </div>
                </div>

                <div className="card-home">
                    <img src={ImageNinjaKunai} className="image-card-home" alt="..."/>
                        <div className="card-body">
                            <p className="card-text">Each kunai symbolizes readiness for different challenges work, study, personal growth, and discipline. NinjaList helps you manage every area of your life with structure and intention, giving you the confidence to act decisively in any situation.</p>
                        </div>
                </div>
            </div>

            <footer className="home-footer bg-dark">
                <p className="home-footer-text">© 2024 NinjaList. All rights reserved.</p>
            </footer>

            <div className="home-sites">
                <a  className="home-site-link"
                    href="https://www.linkedin.com/in/thiagonogueira55th/">
                    <img className="home-site-image" src={Linkedin} alt="LinkedIn" />
                    NinjaList Owner

                </a>
                <a 
                    className="home-site-link"
                    href="https://github.com/ThiagoRicch/">
                    <img className="home-site-image" src={Github} alt="GitHub" />
                    NinjaList Owner

                </a>
                <a 
                    className="home-site-link"
                    href="https://www.instagram.com/55newth/">
                    <img className="home-site-image" src={Instagram} alt="Instagram" />
                    NinjaList Owner

                </a>
            </div>

        </div>
    </>)

}

export default Home;