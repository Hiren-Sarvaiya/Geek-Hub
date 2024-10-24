import React, { useState, useEffect } from "react"
import "../assets/css/Home.css"

const Home = () => {
  const [blogsData, setBlogsData] = useState([])

  useEffect(() => {
    fetch("https://66c47ea4b026f3cc6cef9574.mockapi.io/api/v1/blogsData")
      .then(res => { return res.json() })
      .then(data => { setBlogsData(data) })
  }, [])

  const getFullDate = (dateString) => {
    const dateObj = new Date(dateString)

    const year = dateObj.getFullYear().toString()
    const month = dateObj.toLocaleString("default", { month: "long" })
    const date = dateObj.getDate().toString()

    return `${date} ${month}, ${year}`
  }

  return (
    <main>
      <h1>Blogs</h1>
      <div className="blogsContainer">
        {blogsData.map(blog => {
          return (
            <div key={blog.id} className="blogCard">
              <img src={blog.image} />
              <div className="title">{blog.title}</div>
              <div className="desc">{blog.content}</div>
              <div className="cardFooter flex justify-between">
                <div className="date">{getFullDate(blog.creationDate)}</div>
                <div className="author">{blog.author}</div>
              </div>
            </div>
          )
        })}
      </div>
    </main>
  )
}

export default Home