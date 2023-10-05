import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import Dash from './pages/Dash'
import AdminRegister from './pages/AdminRegister'
import AdminLogin from './pages/AdminLogin'
import AdminDash from './pages/AdminDash'
import UpdateUser from './pages/UpdateUser'
import CreateUser from './pages/CreateUser'
import Account from './pages/Account'
import Groupchatentry from './pages/Groupchatentry'
import RegisterMore from './pages/RegisterMore'
import AdminMessageEntry from './pages/AdminMessageEntry'





export default function Mainbody() {
  return (
    <main>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/dash" element={<Dash/>}/>

          <Route path="/admin-register" element={<AdminRegister/>}/>
          <Route path="/admin-login" element={<AdminLogin/>}/>
          <Route path="/admin-dash" element={<AdminDash/>}/>

          <Route path='/UpdateInfo/:id' element={<UpdateUser/>}/>
          <Route path='/create' element={<CreateUser/>}/>
          <Route path='/account' element={<Account/>}/>

          <Route path='/systemgroupChat' element={<Groupchatentry/>}/>
          <Route path='/AdminMessage' element={<AdminMessageEntry/>} />
          <Route path='/register-course' element={<RegisterMore/>}/>

        </Routes>
    </main>
  )
}
