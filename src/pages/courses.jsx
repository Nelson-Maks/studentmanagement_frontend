import React from 'react'
import coursesData from './coursesData'
import CoursesCard from './coursesCard'

export default function Courses() {
  let newCourseData = coursesData.map((course)=>{
   return <CoursesCard image={course.image} name={course.name} about={course.about}/>

  })
  return (
    <section id='courses'>
      <h3>Courses We Offer</h3>

      <div className='bottom'>
        {newCourseData}
      </div>

    </section>
  )
}
