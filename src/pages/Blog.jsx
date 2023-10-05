import React from 'react'
import BlogCard from './BlogCard'
import BlogData from './BlogData'

export default function Blog() {
    let NewBolgData = BlogData.map((blog)=>{
        return(
            <BlogCard image={blog.image} content={blog.content} about={blog.about} href={blog.href}/>
        )

    })
  return (
    <section id='blog'>
        <h2>Our Blog</h2>

        <div className='blogSection'>
            {NewBolgData}
        </div>
    </section>
  )
}
