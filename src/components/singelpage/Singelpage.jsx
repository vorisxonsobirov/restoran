import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import axios from "axios";
import '../main.css'
import { useCart } from 'react-use-cart'

import Data from '../../people/Data'

const Singelpage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null)

  const { addItem } = useCart()

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        // Assuming Data is a function that returns a Promise
        const response = await Data(); // Make sure Data is correctly implemented as an asynchronous function
        setProduct(response.data)
      }
      catch (error) {
        console.error("ошибка при выполнении запроса", error);
      }
    }
    fetchProduct();

  }, [id])

  if (!product) {
    return (
      <div className="wrap">
        <div className="loading">
          <div className="bounceball"></div>
          <div className="text">NOW LOADING</div>
        </div>
      </div>
    );
  }

  return (
    <div className='SinglePage'>
      <section id="container" className="">
        <div id="product-img">
          <img src={product.img} alt="Nike Roshe Run - Mint Green" title="Nike Roshe Run - Mint Green" className="fade-in " />
        </div>

        <div id="product-info" className="clearfix-auto">
          <div id="product-spec" className="wrapper">
            <h1>{product.name}</h1>
            <h3 className="sale">{product.price}</h3>
          </div>

          <div id="ratings">
            <span className="review-rating">
              <span className="user-review ninety"></span>
            </span>
          </div>

          <h4 className="clearfix">Description</h4>
          <p>
            With a highly breathable upper and casual silhouette, the Nike Roshe Run is definitely a perfect model for summer. For Spring/Summer 2013, a fresh Mint Green colorway's version of this 'yet classic' pair is now available to order.
          </p>

          <button onClick={() => addItem({ id: product.id, img: product.img, name: product.name, price: product.price })} className="button clearfix-auto">
            Add to cart
          </button>
        </div>
      </section>
    </div>
  )
}

export default Singelpage
