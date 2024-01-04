import React from 'react'
// import "../main.css"
import "./navbar.css"
import logo from "../../assets/ззззззззззззззззз.png"
import line from "../../assets/Vector 5.png"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
   <>
        <div className="container">
        <nav className="navbar">
                <nav className="nav_logo">
                 <img src={logo} alt="" />
                </nav>
                <nav className="nav_link">
                    <ul>
                     <Link to="/"><li>Home</li> </Link>   
                     <Link to="/pages"><li>Pages</li></Link>
                     <Link to="/menu"><li>Contact Us</li></Link>
                     <Link to=""><li>Blog</li></Link>
                     <Link to=""><li>Landing</li></Link>
                    </ul>
                </nav>
                <nav className="nav_link">
                    <ul>
                        <li><a href="">Log in / registration</a></li>
                       <img src={line} alt="" />
                        <li><a href="">book table</a></li>
                    </ul>
                </nav>
            </nav>
        </div>
   </>
  )
}

export default Navbar
