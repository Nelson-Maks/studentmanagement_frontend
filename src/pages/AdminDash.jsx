import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { UserContext } from '../../context/userContext'
import Logout from './AdminLogout'
import image1 from '../images/codeprof.png'
import Settings from './Settings'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from "react-router-dom"

export default function AdminDash() {
  const {user} = useContext(UserContext)
  const [users, setUsers] = useState([])
  const [search, setSearch] = useState('')
  const navigate = useNavigate()


  useEffect(()=>{
    axios.get('/create')
    .then(result => setUsers(result.data))
    .catch(err => {console.log(err);})
  }, [])

  const handleDelete = (id)=>{
    axios.delete('http://localhost:8000/deleteUser/'+id)
    .then(res => {
      console.log(res)
      window.location.reload()
    
    })
    .catch(err => console.log(err))
  }

  function logout(){
    localStorage.removeItem(user)
    navigate('/login')

  }

  let search_one = search.toLowerCase()

  return (
    <section id='admin-dash'>
      <div className='top'>
        {!!user && (<h4>Welcome Admin {user.name}</h4>)}
      </div>

      <div className='bottom'>
        <div className='left'>
          <h3>Registered Students</h3>
          
          <div className='action-box'>
            <Link to='/create'>Add +</Link>
            <input type="text" placeholder='Search Student.....' onChange={(e)=>{
              setSearch(e.target.value)
            }}/>
          </div>

          <table className='table'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Course</th>
                <th className='emailheader'>Email</th>
                <th className='action'>Action</th>
              </tr>
            </thead>

            <tbody>
              
              {users.filter((user)=>{
                return search_one === '' ? user : user.name.toLowerCase().includes(search)

              }).map((user) => {
                  return <tr key={user.id}>
                    <td className='user_name'>{user.name}</td>
                    <td>{user.course}</td>
                    <td className='user_email'>{user.email}</td>
                    <td className='user_action'><button onClick={(e)=> handleDelete(user._id)}>Delete</button></td>
                  </tr>
                })
              }

            </tbody>
          </table>
        </div>

        <div className='right'>
          <div className='message'>
            <h3>Messages</h3>
            <Link to='/AdminMessage'>Go to Messages</Link>
            <p onClick={() => logout()} className='logout'>Log out</p>
          </div>
        </div>
      </div>

      {/* <Settings/>       */}
    </section>

  )
}