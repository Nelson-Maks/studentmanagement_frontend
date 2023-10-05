import React from 'react'
import { useState } from "react"
import axios from 'axios'
import {toast} from 'react-hot-toast'
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"

export default function RegisterMore() {



    const navigate = useNavigate()
    const [data, setData] = useState({
        course: '',
    })

    const registerCourse = async (e)=>{
        e.preventDefault()
        const {course} = data
        try {
            const {data} = await axios.post('https://studentmanagement-4gdu.onrender.com/register-course', {
                course
            })

            if(data.error){
                toast.error(data.error)
            }else{
                setData({})
                toast.success('Course Registration successful')
                navigate('/dash')
            }
        } catch (error) {
            console.log('error due to ' + error)
            
        }
    }


  return (
    <div className='regMore'>
      <form action="" onSubmit={registerCourse}>
        <div className="input_group">
            <label>Register Course</label>
            <input type="text" placeholder="Enter Course......" value={data.course} onChange={(e)=>setData({...data, course:e.target.value})}/>
        </div>

        <input type="submit" className="registerBtn"/>

      </form>
    </div>
  )
}
