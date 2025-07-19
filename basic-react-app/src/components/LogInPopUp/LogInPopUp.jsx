import React, { useState } from 'react'
import './LogInPopUp.css'
import { assets } from '../../assets/assets'

const LogInPopUp = ({setShowLogin}) => {

    const[currentState,setCurrentState]=useState("log in")
  return (
    <div className='login-popup' >
      <form  className="login-popup-containter">
        <div className="login-popup-title">
            <h2>{currentState}</h2>
            <img onClick={()=>setShowLogin(false) } src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
          {currentState=== "log in"? <></> : <input type='text' placeholder='Your name' required />}
          < input type="email" placeholder='Your email' required />
          < input type="Password" placeholder='Your password' require />
        </div>
        <button>{currentState === "Sign up" ?"Create account":"log in" }</button>
        <div className="login-popup-condition">
          <input type="Checkbox" required />
         <p> By continuing , I agree to the term and privacy policy of the company. </p>
        </div>
        {currentState=== "log in"
        ?<p> Create a new account ? <span onClick={()=>setCurrentState("Sign up")} > Click  here </span></p>
        :<p>Already have an account ? <span onClick={()=>setCurrentState("Log in") }> login here</span></p> 
        }
      </form>
    </div>
  )
}

export default LogInPopUp
