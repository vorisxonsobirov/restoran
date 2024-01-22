import React from 'react'
import "../cart/style.css"
import call from "../../assets/call (2).png"
import email from "../../assets/email.png"
import lokation from "../../assets/Group 10 (1).png"
import brand from "../../assets/welcome.png"

const Menu = () => {
  return (
    <>
       <div className="section6">
        <div className="contact">
            <a href="">CONTACT US</a>
            <p>Speak To Us</p>
            <span>У вас возникли вопросы или жалобы мы рядом </span>
            <div className="dflex_cont">
                <img src={call} alt="" />
                <div>
                    <p>My Number</p>
                    <a href="">+998 77 260-78-07</a>
                </div>
            </div>
            <div className="dflex_cont">
                <img src={email} alt="" />
                <div>
                    <p>Email Address</p>
                    <a href="">vorisxon.me@gmail.com</a>
                </div>
            </div>
            <div className="dflex_cont">
                <img src={lokation} alt="" />
                <div>
                    <p>Location</p>
                    <a href="">Namangan Akhsikent-2 </a>
                </div>
            </div>
        </div>
        <div className="contact_img">
          <img src={brand} alt="" />
        </div>
      </div>
    </>
  )
}

export default Menu
