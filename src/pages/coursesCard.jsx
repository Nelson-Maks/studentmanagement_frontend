import React from 'react'

export default function CoursesCard(props) {
  return (
    <div className='course_card'>
        <img src={props.image} width='40px'/>
        <h4>{props.name}</h4>
        <p>{props.about}</p>
    </div>
  )
}
