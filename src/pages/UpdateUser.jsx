import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
export default function UpdateUser() {
    const {id} = useParams()
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const navigate = useNavigate()

    useEffect(()=>{
        axios.get('http://localhost:8000/getUser/'+id).then((result)=>{
            console.log(result)
            setName(result.data.name)
            setEmail(result.data.email)
        }).catch(err =>{console.log(err)})
    }, [])

    const Update = (e)=>{
        e.preventDefault()
        axios.put('http://localhost:8000/UpdateInfo/'+id, {name, email}).then((result)=>{
            console.log(result)
            navigate('/dash')


        }).catch(err =>{console.log('Error due to ' + err)})
    }
  return (
    <div className='updateUpdate'>
      <form onSubmit={Update}>
        <h3>UPDATE YOUR PROFILE INFOMATION</h3>
        <div className='nameGroup'>
            <label>Name</label>
            <input type='text' value={name} onChange={(e)=> setName(e.target.value)}/>
        </div>

        <div className='emailGroup'>                            
            <label>Email</label>
            <input type='email' value={email} onChange={(e)=> setEmail(e.target.value)}/>
        </div>

        <button>Update</button>
        <small>Note: When You Update Profile Information changes will be seen on next login</small>
      </form>
    </div>
  )
}
