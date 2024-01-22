import React, { useEffect, useRef, useState } from 'react'
import "../main.css"

const Login = () => {
  const name = useRef()
  const mail = useRef()
  const password = useRef()


  const [showHome, setShowHome] = useState(false)
  const localSignUp = localStorage.getItem('signUp')
  useEffect(() => {
    if (localSignUp) {
      setShowHome(true)
    }
  })

  const handleClick = () => {
    console.log(name.current.value, mail.current.value, password.current.value);
    if (name.current.value && mail.current.value && password.current.value) {
      localStorage.setItem('name', name.current.value)
      localStorage.setItem('mail', mail.current.value)
      localStorage.setItem('password', password.current.value)
      localStorage.setItem('signUp', mail.current.value)
      alert("Успешное регистрация")
    }
  }
  return (
    <div className='Menu'>
      {showHome? window.location = '/' :
      <div className='container222'>
        <h1 className='h1_h1'>Login Pleace</h1>
        <div className='input_space'>
          <p>Enter your name</p>
          <input type="text" placeholder='Name' ref={name} />
        </div >
        
        <div className='input_space'>
          <p>Enter your Email</p>
          <input type="text" placeholder='Email' ref={mail} />
        </div>
        <div className='input_space'>
          <p>Enter your Name</p>
          <input type="password" placeholder='Name' ref={password} />
        </div>
        <button id='btn_sss' onClick={handleClick}>Sign Up</button>
      </div>}
    </div>
  )
}

export default Login