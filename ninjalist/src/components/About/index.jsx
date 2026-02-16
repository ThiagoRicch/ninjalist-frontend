import "./About.css";
import Navbar from "../Navbar";
import ImageNinjaRunning from "../../assets/imageninjarunning.png";
import ImageNinjaRunning2 from "../../assets/imageninjarunning2.png";
import ImageNinjaRunning3 from "../../assets/imageninjarunning3.png";
import ImageNinjaRunning4 from "../../assets/imageninjarunning4.png";
import ImageNinjaRunning5 from "../../assets/imageninjarunning5.png";

function About() {
    return (<>
        <Navbar />
        <div className="about-container">
            <h1 className="about-title">About NinjaList</h1>
            <p className="about-description">NinjaList is a personal project built with React and Vite, created with the purpose of strengthening my development skills and improving my proficiency in modern web technologies.

                This project was designed as a practical way to deepen my understanding of component-based architecture, state management, routing, and front-end structure. By building it from scratch, I focused on writing clean code, organizing reusable components, and applying best practices in interface development.

                NinjaList is a simple task management application featuring a basic CRUD system (Create, Read, Update, Delete). Despite its simplicity in functionality, the goal was to combine logic with an engaging and visually striking interface. The project emphasizes user experience, responsive layout, and a thematic design inspired by ninja discipline and precision.

                More than just a task manager, NinjaList represents continuous learning, consistency, and the commitment to evolving as a developer. It reflects my dedication to improving problem-solving skills, mastering modern tools like React + Vite, and building projects that combine functionality with strong visual identity.</p>
            
            <div className="ninja-running-images">
                <img className="ninja-image-about" src={ImageNinjaRunning} alt="Ninja Running 1" />
                <img className="ninja-image-about" src={ImageNinjaRunning2} alt="Ninja Running 2" />
                <img className="ninja-image-about" src={ImageNinjaRunning3} alt="Ninja Running 3" />
                <img className="ninja-image-about" src={ImageNinjaRunning4} alt="Ninja Running 4" />
                <img className="ninja-image-about" src={ImageNinjaRunning5} alt="Ninja Running 5" />
            </div>
        </div>
    </>
    )
}

export default About;