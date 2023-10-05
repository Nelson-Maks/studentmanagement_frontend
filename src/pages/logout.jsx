import React from 'react'
import { useNavigate } from "react-router-dom"
import Dash from './Dash'
import { useState } from 'react'

export default function Logout() {
    const App = <Dash/>

    const navigate = useNavigate()
    const logoutUser = (e)=>{
        e.preventDefault()
        navigate('/login')

    } 
  return (
    <div className='logout'>
        <button onClick={logoutUser}>LOGOUT</button>
    </div>
  )
}
