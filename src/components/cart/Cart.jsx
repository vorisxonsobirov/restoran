import React from 'react'
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart'
import './style.css'
// import Data from "../../people/Data"


const Cart = () => {
  const formatPrice = (price) =>{
    return price.toLocaleString("ru-RU")
  }
  const {
    isEmpty,
    totalItems,
    totalUniqueItems,
    items,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart
  } = useCart()

  if (isEmpty) {
    return (
      <div className="Menu">
        <div className="card">
          <div className="card-header">
            ERROR!
          </div>
          <div className="card-body">
            <h5 className="card-title">Korzina bush</h5>
            <p className="card-text">menu ga qayting va ovqat tanlang</p>
            <Link to={'/menu'}>
              <a href="#" className="btn btn-warning">В меню</a>
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <section className='py-4 Menu'>
      <div className='row justify-content-center'>
        <div className="col-12">
          <h5>Cart ({totalUniqueItems}) Total items: ({totalItems})</h5>
          <table className='table table-light table-hover m-0'>
            <tbody>
              {items.map((value, index) => {
                return (
                  <tr className='main_holder1' key={index}>
                    <td>
                      <img src={value.img} style={{ height: '6rem' }} alt="" />
                    </td>
                    <td> {value.title}</td>
                    <td>{formatPrice(value.price) }-ming  Sum</td>
                    <td>Soni: ({value.quantity})</td>
                    
                     <td className="d_fle">
                      <button className='btn btn-info ms-2' onClick={() => updateItemQuantity(value.id, value.quantity - 1)}>-</button>
                      <button className='btn btn-info ms-2' onClick={() => updateItemQuantity(value.id, value.quantity + 1)}>+</button>
                      <button className='btn btn-danger ms-2' onClick={() => removeItem(value.id)}>xamma sini olib tashlash</button>
                    </td>
                  
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className='col-auto ms-auto'>
          <h2>Jami Summa: { formatPrice(cartTotal) } Sum</h2>
        </div>
        <div className="col-auto">
          <button className='btn btn-danger' onClick={() => emptyCart()}>
            Olib tashlash
          </button>
          <button className='btn btn-primary m-2'>
            Xammasini olish
          </button>
        </div>
      </div>
    </section>
  )
}

export default Cart
