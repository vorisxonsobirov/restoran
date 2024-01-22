import React, { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Pages from './components/pages/Pages';
import Footer from './components/footer/Footer';
import { CartProvider } from 'react-use-cart';
import Cart from './components/cart/Cart';
import Menu from './components/menu/Menu';
import Blog from './components/blog/Blog';
import Login from './components/login/Login';

function App() {
  return (  
    <CartProvider>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/pages' element={<Pages />} />
          <Route path='/card' element={<Cart />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/login' element={<Login/>}></Route>
        </Routes>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
