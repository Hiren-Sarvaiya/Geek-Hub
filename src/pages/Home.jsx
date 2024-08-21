import React, { useState, useEffect } from "react"
import "../assets/css/Home.css"

const Home = () => {
  const [blogsData, setBlogsData] = useState([])
  const [gridRows, setGridRows] = useState(null)

  useEffect(() => {
    fetch("https://66c47ea4b026f3cc6cef9574.mockapi.io/api/v1/blogsData")
      .then(res => { return res.json() })
      .then(data => { setBlogsData(data) })
  }, [])

  useEffect(() => {
    setGridRows(Math.ceil(blogsData.length / 3))
  }, [blogsData])

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
      <div style={{gridTemplateRows: `repeat(${gridRows}, 455px)`}} className="blogsContainer">
        {blogsData.map(blog => {
          return (
            <div className="blogCard">
              <img src={blog.image} />
              <div className="title">{blog.title}</div>
              <div className="desc">{blog.content}{blog.content}</div>
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