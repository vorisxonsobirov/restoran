import React from 'react'
import heroImg from "../../assets/Hero img.png"
import knifes from "../../assets/savernake-knives-f4jl2ezowuM-unsplash 2.png"
import imageKevin from "../../assets/Image.png"
import handKevin from "../../assets/Kevin Luo.png"
import video from "../../assets/Polygon 2.png"
import egg from "../../assets/ronise-daluz-LgTyii0GDKQ-unsplash 1.png"
import { Link, Route, Routes } from 'react-router-dom'
// import Menu from '../menu/Menu'

const Home = () => {
    return (
        <>
            <div className="container">
                <div className="main_holder">
                    <div className="text_main_holder">
                        <a href="">Chase the new Flavour</a>
                        <h1>The key to Fine Dining</h1>
                        <p>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
                        
                    <button className='menu_buton'> <Link to={"/pages"} >Menu</Link></button> 
                       
                            
                    </div>
                    <div className="main_holder_img">
                        <img src={heroImg} alt="" />
                    </div>
                </div>



                <section className="bg_img_knife">
                    <div className="text_bg_knife">
                        <h1>About Us</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
                        <form action="">
                            <button>Know More</button>
                        </form>
                    </div>
                    <div className="text_bg_knife">
                      <img src={knifes} alt="" />
                    </div>
                    <div className="text_bg_knife_s">
                        <h1>Our History</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
                        <form action="">
                            <button>Know More</button>
                        </form>
                    </div>
                </section>



                <section className="inp_sectoin">
        <div className="container bg_shadow">
          <p>Reservations</p>
          <h1>Book A Table</h1>
          <div className="inp_select">
            <div className="inp_section_">
               <select name="" id="">
                   <option value="">1 person</option>
                   <option value="">2 person</option>
                   <option value="">3 person</option>
                   <option value="">4 person</option>
               </select>
            </div>
            <div className="inp_section_ inputsection_none">
                <select name="" id="">
                    <option value="">12/05/2021</option>
                    <option value="">12/05/2021</option>
                    <option value="">12/05/2021</option>
                    <option value="">12/05/2021</option>     
                </select>
            </div>
            <div className="inp_section_ inputsection_none">
                <select name="" id="">
                    <option value="">11:00 AM</option>
                    <option value="">12:00 AM</option>
                    <option value="">13:00 AM</option>
                    <option value="">14:00 AM</option>
                </select>
            </div>
            </div>
            <div className="btn_inp">
            <form action="">
                <button>Book Now</button>
            </form>
        </div>
        </div>
                </section>
                


                <section className="bg_img_cup container">
                <div className="h1_cup"><h1>Bar Menu</h1></div>
                <div className="h1_cup"><h1>Food Menu</h1></div>   
                <div className="h1_cup"><h1>Desserts Menu</h1></div>   
                </section>




                <section className="cook_people">
        <div className="container">
            <div className="main_cook">
        <div className="img_cook">
            <img src={imageKevin} alt="" />
        </div>
        <div className="bio_cook">
            <p>Chef’s Word</p>
            <h1>What we believe in</h1> 
            <h4> auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisscelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabisemper sit nunc. </h4>
            <a href="">Kevin Luo</a>
            <h4>Chef & Founder</h4>
            
            <img src={handKevin} alt="" />
        </div>
    </div>
    </div>
    </section>

    <section className="bg_video">
        <div className="btn_video">
        <form action="">
            <img src={video} alt="" />
        </form>
    </div>
    </section>



    <section className="egg">
        <div className="container">
                <div className="main_holder">   
                    <div className="main_holder_img">
                        <img src={egg} alt="" />
                    </div>
                    <div className="text_main_holder">
                        <a href="">Awards & recognition</a>
                        <h1>Our Laurels</h1>
                        <p>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
                        <form action="">
                            <button>Explore Menu</button>
                        </form>
                    </div>
                </div>
            </div>
    </section>



            </div>
        </>
    )
}

export default Home
