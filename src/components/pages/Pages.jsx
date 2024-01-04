import React from 'react'
import "../main.css"
import Data from '../../Data'

const Pages = () => {
  return (
  <>
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
              </div>
            </div>

          </div>
        )
      })}
    </div>
  </>
  )
}

export default Pages
