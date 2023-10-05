import React, { useEffect, useState } from 'react'
import maleuser from '../images/maleuser.png'
import { useContext } from 'react'
import { UserContext } from '../../context/userContext'
import settings from '../images/settings.png'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'

export default function Settings() {
  const [image, setImage] = useState([])
  const [imageUrl, setImageUrl] = useState([maleuser])

  function handleChange(event){
    setImage([...event.target.files])
  }


  useEffect(()=>{
    if(image.length < 1) {
      return
    }

    let NewimageUrl = []
    image.forEach((img)=>{
      return NewimageUrl.push(URL.createObjectURL(img))
    })

    setImageUrl(NewimageUrl)
  }, [image])


  const {user} = useContext(UserContext)


  return (
    <section id='settings'>
      <div className='top_left'>
        <img width={30} src={settings} />
        <h3>Settings</h3>
      </div>

      <div className='middle'>
        <div className='left'>
          <h3>Upload Picture</h3>
          <img width={200} src={imageUrl} className='img'/>
          <input type='file' id='file' onChange={handleChange} accept='image/*'/>
          <label htmlFor='file'>Upload</label>
        </div>

        <div className='right'>
          <h3>Update Profile Information?</h3>
          <p>Want to make chnages to Your Profile Information?</p>
          <Link to={`/UpdateInfo/${user._id}`}>Update Here</Link>
        </div>

      </div>
    </section>
  )
}
