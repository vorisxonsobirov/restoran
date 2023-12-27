import React from 'react'
import "../main.css"
import iconFacebook from "../../assets/Vector (2).svg"
import iconInstagram from "../../assets/Vector.svg"

const Footer = () => {
  return (
    <>
    <div className="container">
       <footer className="footer">             
            <div className="container bg_shadow ">
              <p>Newsletter</p>
              <h1>Subscribe to Our Newsletter</h1>
              <div className="inp_select">
                <div className="inp_footer">
                    <form action="">
                        <input type="search" placeholder='Email Adress' />
                    </form>
                </div>
                
                <div className="btn_footer">
                <form action="">
                    <button>Subscribe</button>
                </form>
            </div>
            </div>
            </div>
            <div className="main_footer">
                <div className="img_link_footer">
                   <a href=""><img src={iconFacebook} alt="" /></a>
                   <a href=""><img src={iconInstagram} alt="" /></a>
                </div>
                 <div className="link_text_footer">
                     <a href="">2021 Voriskhon. All Rights reserved.</a>
                 </div>
            </div>
    </footer>
    </div>
    </>
  )
}

export default Footer
