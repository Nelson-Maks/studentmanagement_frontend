import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../../context/userContext'
import maleuser from '../images/whiteuser.png'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import message from '../images/message.png'

export default function Account() {
    const {user} = useContext(UserContext)

    const [image, setImage] = useState([maleuser])
    // const [imageUrl, setImageUrl] = useState([maleuser])



    function handleChange(event){
        setImage([...event.target.files])
        console.log(event)
        let reader = new FileReader();
        reader.readAsDataURL(event.target.files[0])

        reader.onload  = ()=>{
            console.log(reader.result);
            setImage(reader.result)
        } 

        reader.onerror  = error =>{
            console.log(error);
        } 

    }


    function uploadImage(){
        fetch('http://localhost:8000/uploadImage', {
            method: 'POST',
            crossDomain: true,
            cors:{
                origin: 'http://localhost:8000/uploadImage',
            },
            headers: {
                'content-type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({
                base64: image

            })

        }).then((res)=>res.json()).then((data)=>console.log(data))
    }


    // useEffect(()=>{
    //     if(image.length < 1) {
    //     return
    //     }

    //     let NewimageUrl = []
    //     image.forEach((img)=>{
    //     return NewimageUrl.push(URL.createObjectURL(img))
    //     })

    //     setImageUrl(NewimageUrl)
    // }, [image])

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

    return (
    <section id='account'>
        <div className='top'>
            {!!user && (<h3>{user.name}</h3>)}
            <h5>ACCOUNT</h5>
        </div>

        <div className='account-main'>
            <div className='left'>
                <div className='image-section'>
                    {image === "" || image == null ? "" : <img width={100} src={image} className='img'/>}
                    <input type='file' id='file' onChange={handleChange} accept='image/*'/>
                    <label htmlFor='file'>Choose</label>
                    <button onClick={uploadImage}>Upload</button>
                </div>

                <div className='Payment-status'>
                    <h3>Payment Status</h3>
                    <div className='Payment-status-child'>
                        <h3>- You Registered for</h3>
                        <h3>- Course will end on , <span className='date'>Jan 31st</span></h3>
                    </div>

                </div>
            </div>

            <div className='right'>
             

                <div className='settings-nav'>
                    <h3>My Settings</h3>
                    <Link to={`/UpdateInfo/${user.id}`}>Update Info</Link>
                </div>

                <div className='settings-download'>
                    <p>Here's a shortcut to download course materials 👇👇</p>
                    <button onClick={()=>downloadFile(PNG_URL)}>Download Course Material</button>
                </div>
            </div>
        </div>

        <div className='message-section'>
            <h3>Message <img src={message} alt="" width={30}/></h3>

            <div className='message-container'>
                <div className='group'><Link to='/systemgroupChat'>Access System Group Chat</Link></div>
                <div><Link to='/AdminMessage'>Access Admin Chat</Link></div>
            </div>

        </div>
    </section>
  )
}
