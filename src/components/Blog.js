import blogs from "../services/blogs"
import Togglable from "./Togglable"

const Blog = ({ blog }) => {
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

  const likeClick = (e) => {
    console.log('likeclick')
  }

  return (
    <div style={blogStyle}>
      <p>{blog.title} {blog.author}</p>
      <Togglable >
        <>
          <div>{blog.url}</div>
          <div>
            <p>likes : {blog.likes}</p> 
            <button onClick={likeClick}>like</button>
            </div>
          <div>{blogs.user.name}</div>
        </>
      </Togglable>
    </div>
  )
}
export default Blog