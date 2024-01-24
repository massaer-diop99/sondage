import React from 'react'
import LoginSignup from '../LoginSignup/LoginSignup'
import { useNavigate } from 'react-router-dom'
import head from '../Assets/head.png'
import users from '../Assets/users.png'
import './Welcome.css'




export default function Welcome() {
    const navigate = useNavigate()
  return (
   <div className='blocs'>

    <div className='bloc1'>

       <h1>Hey, I'm a sample <br /> Sondage app</h1>
       <p>crate a count to b crate <br /> a form-sondage</p>
        <button onClick={()=> navigate('signe')}> Se connerter</button>
    </div>
    <div className='bloc2'>
         <img src={head} className='photos' alt="" />
   </div>
    
    </div>
  )
}
