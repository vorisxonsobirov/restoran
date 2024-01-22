import React from 'react'
import "../main.css"
import "../cart/style.css"
import Data from '../../people/Data'
import { useCart } from 'react-use-cart'




const Pages = () => {
  const { addItem } = useCart()
  return (
    <>
    <div className="father">
            <div className='main_holder'>
        {Data?.map((value, index) => {
          return (
            <div className="card" key={index}>
                
              <div className="card-image">
                <img src={value.image[0]} alt="" />
              </div>

              <div className='card-content'>
                <div className='card-title'>
                  <h3>{value.title}</h3>
                </div>
                <div className='card-text'>
                  <p>{value.price}</p>
                  <div className="btn">
                    <button className='more'>More</button>
                      <button className='add'  onClick={() => addItem({ id: value.id, img: value.image[0], title: value.title, price: value.price })} >Add</button>
                  </div>

                </div>
              </div>

            </div>
          )
        })}
      </div>
    </div>

    </>
  )
}

export default Pages
