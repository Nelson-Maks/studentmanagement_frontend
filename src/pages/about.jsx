import React from 'react'
import img1 from '../images/aboutimg.png'

export default function About() {
  return (
    <section id="about_us">
      <div className="left">
        <h4>ABOUT US</h4>
        <h3>We specialize in computer/ ICT training and solutions such as software development, website development, Digital Marketing, Content Management System, Computer Engineering, Ecommerce website development, Graphics Design, Branding, Product Design, Computer Networking Service, etc that are of high demanded for in various sectors of ICT industries. We are highly noted for our excellent experience and methodology of rendering our various services to clients across the country.</h3>
        <p>"I am who I am today because of the choices I made yesterday." — Eleanor Roosevelt, First Lady of the U.S</p>
      </div>

      <div className="right">
        <img src={img1} width='500px'/>

      </div>
    </section>
  )
}
