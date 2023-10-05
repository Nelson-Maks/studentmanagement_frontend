import { useState } from "react"
import axios from 'axios'
import {toast} from 'react-hot-toast'
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
export default function AdminRegister(){
    const navigate = useNavigate()
    const [data, setData] = useState({
        name: '',
        email: '',
        password: ''
    })

    const registerUser = async (e)=>{
        e.preventDefault()
        const {name, email, password} = data
        try {
            const {data} = await axios.post('https://studentmanagement-4gdu.onrender.com/admin-register', {
                name, email, password
            })

            if(data.error){
                toast.error(data.error)
            }else{
                setData({})
                toast.success('Registration successful. welcome!')
                navigate('/admin-login')
            }
        } catch (error) {
            console.log(error)
            
        }
    }
    return(
        <section id="register">
            <h1>ADMIN REGISTER</h1>
            <form onSubmit={registerUser}>
                <div className="input_group">
                <label>Name</label>
                <input type="text" placeholder="Name" value={data.name} onChange={(e)=>setData({...data, name:e.target.value})}/>
                </div>

                <div className="input_group">
                <label>Email</label>
                <input type="email" placeholder="Email" value={data.email} onChange={(e)=>setData({...data, email:e.target.value})}/>
                </div>

                <div className="input_group">
                <label>Password</label>
                <input type="password" placeholder="Password" value={data.password} onChange={(e)=>setData({...data, password:e.target.value})}/>
                </div>

                <input type="submit" className="registerBtn"/>
                <span>Already have an account?</span><Link to='/admin-login'>Login Instead</Link>

            </form>

        </section>
    )
}