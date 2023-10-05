import { useState } from "react"
import axios from "axios"
import {toast} from 'react-hot-toast'
import { Link, useNavigate } from "react-router-dom"

export default function Login(){
    const navigate = useNavigate()
    const [data, setData] = useState({
        email: '',
        password: ''
    })
    const loginUser = async(e)=>{
        e.preventDefault()
        const {email, password} = data
        try {
            const {data} = await axios.post('/login', {
                email,
                password
            });

            if(data.error){
                toast.error(data.error)
            }else{
                setData({});
                navigate('/dash')
            }
            
        } catch (error) {
            console.log(error)
            
        }
    }
    return(
        <section id="login">
            <h1>STUDENT LOGIN</h1>
            <form onSubmit={loginUser}>
                <div className="input_group">
                    <label>Email</label>
                    <input type="email" placeholder="Email" value={data.email} onChange={(e)=>setData({...data, email:e.target.value})}/>
                </div>

                <div className="input_group">
                    <label>Password</label>
                    <input type="password" placeholder="Password" value={data.password} onChange={(e)=>setData({...data, password:e.target.value})}/>
                </div>

                <input type="submit" className="loginBtn"/>
                <Link to='/register'>Create New Account</Link>
            </form>

        </section>
    )
}