import React, { useState, useEffect } from 'react'
import { useContext } from 'react'
import { UserContext } from '../../context/userContext'
// import Logout from './logout'
import image1 from '../images/codeprof.png'
import { Link, Navigate } from 'react-router-dom'
import Profile from './Profile'
import Settings from './Settings'
import BarChat from '../components/BarChat'
import {UserData} from '../components/Data'
import LineChart from '../components/LineChart'
import PieChart from '../components/PieChart'
import download from '../images/download.png'
import downloadDemo from '../images/downloaddemo.png'
import roboAccount from '../images/roboAccount.png'
import registerRobo from '../images/registerRobo.png'
import { useNavigate } from "react-router-dom"
import axios from 'axios'



export default function Dash() {
  const navigate = useNavigate()
  const {user} = useContext(UserContext)
  const [users, setUsers] = useState([])

  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.month),
    datasets: [{
      label: "progress",
      data: UserData.map((data) => data.progress),
      backgroundColor: [
        "rgba(75, 192,192,1)",
        "#50AF95",
        "#f3ba2f",
        "#2a71d0"
      ],
      borderColor: "black",
      borderWidth: 2,

    }]
  })

  const PNG_URL = 'finalproject.pdf'

  const downloadFile = (url)=>{
      const filename = url.split('/').pop()
      const atag = document.createElement('a')
      atag.href = url
      atag.setAttribute('download', filename)
      document.body.appendChild(atag)
      atag.click()
      atag.remove()
  }

  function logout(){
    localStorage.removeItem(user.id)
    navigate('/login')
  }

  // useEffect(()=>{
  //   axios.get('/create')
  //   .then(result => setUsers(result.data))
  //   .catch(err => {console.log(err);})
  // }, [])

  return (
    <section id='dash'>
        <div className='top'>
          {!!user && (<h3>Welcome {user.name}!</h3>)}
          <h4>DashBoard</h4>
        </div>


        <div className="main">
          <div className="left">
            <div className="overview">
              <BarChat cahrtData={userData}/>
              {/* <LineChart cahrtData={userData}/> */}
              {/* <PieChart cahrtData={userData}/> */}
              <h3>OVERVIEW</h3>
            </div>

            {/* <div className="registered">
              <h3>REGISTERED</h3>
              {users.map((user)=>{
                return <h3>{user.course}</h3>
              })}
            </div> */}
          </div>

          <div className="middle">
            <p>Hi, i'm Robo, Your account wil contain features like, download shortcut, group system chat application, Admin meassages, Updating your profile information and many more</p>
            <img src={roboAccount} alt="" />
            <Link to='/account'>Access Your Account</Link>
            <p onClick={() => logout()} className='logout'>Log out</p>

          </div>

          <div className="right">
            <div className="download">
              <h3>DOWNLOAD COURSE MATERIAL</h3>
              <img src={downloadDemo} alt="" />
              <button onClick={()=>downloadFile(PNG_URL)}>DOWNLOAD <img src={download} alt="" width={10}/></button>
            </div>

            <div className="register-more">
              <h3>Register for more courses!</h3>
              <img src={registerRobo} alt="" width={200}/>
              <Link to='/register-course'>Register</Link>
              <p>Go hard or Go home - Robo</p>

            </div>
          </div>
          
        </div>
    </section>

  )
}
