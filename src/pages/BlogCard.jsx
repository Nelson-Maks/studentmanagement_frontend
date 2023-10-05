import React from 'react'

export default function BlogCard(props) {
  return (
    <div className='Blogcard'>
        <img src={props.image} width='40px'/>
        <h3>{props.content}</h3>
        <h5>{props.about}</h5>
        <button><a href={props.href}>Read More</a></button>
    </div>
  )
}
