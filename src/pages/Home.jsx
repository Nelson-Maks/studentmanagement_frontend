import { Link } from "react-router-dom";
import adminImg from '../images/admin.png'
import studentImg from '../images/student.png'
import image1 from '../images/codeprof.png'
import About from "./about";
import img1 from '../images/aboutimg.png'
import Blog from "./Blog";
import Courses from "./courses";
import Contact from "./contact";
import Career from "./career";
import menu from '../images/menu.png'
import close from '../images/close.png'

import { useRef } from "react";


export default function Home(){
    const navref = useRef();
    const showNavbar = () => {
        navref.current.classList.toggle("responsive_nav")
    }
    return(
        <section id="home">
            <section className="top">
                <nav ref={navref}>
                    <a href="#about_us">About us</a>
                    <a href="#blog">Blog</a>
                    <a href="#career">Career</a>
                    <a href="#auth">Register</a>
                    <a href="#courses">Courses</a>
                    <a href="#contact_us">Contact us</a>
                </nav>

                <div className='right'>
                    <img src={image1} width='50px'/>
                    <h2>CODEPROF ACADEMY</h2>
                </div>
                
                <button className="nav-btn nav-close-btn" onClick={showNavbar}><img src={close} width={30}/></button>
                <button className="nav-btn"onClick={showNavbar}><img src={menu} width={30}/></button>
            </section>

            <About/>

            <Career/>

            <Blog/>

            <section id="auth">
                <div className="admin">
                    <img src={adminImg} width='60px'/>
                    
                    <button><Link to='/admin-login'>Login as Admin</Link></button>
                </div>

                <div className="student">
                    <img src={studentImg} width='60px'/>
                    <button><Link to='/login'>Login as Student</Link></button>
                </div>
            </section>

            <Courses/>

            <Contact/>
        </section>
    )
}