import React from 'react';
import Navbar from './components/navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Pages from './components/pages/Pages';
import Footer from './components/footer/Footer';


function App() {
 



  return (
    <div className="App">
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/pages' element={<Pages/>}></Route>
          
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
