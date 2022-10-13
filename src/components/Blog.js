import Togglable from "./Togglable"

const Blog = ({ blog, handleLikeClick, user, deleteBlog }) => {
  const likeClick = async (e) => {
    await handleLikeClick(blog)
  }

  const deleteClick = async (e) => {
    if (window.confirm(`Remove blog ${blog.title} by ${blog.author}`)) {
      await deleteBlog(blog.id)
    }
  }

  return (
    <div className='blog-style'>
      <p>{blog.title} {blog.author}</p>
      <Togglable text='view' cancelText='hide'>
        <>
          <a href={blog.url} target='_blank' rel="noreferrer" className='blog-url'>{blog.url}</a>
          <div>
            <p className='blog-like'>likes : {blog.likes} </p>
            <button onClick={likeClick} className='blog-like'>like</button>
          </div>
          {blog.user && <div>{blog.user.name}</div>}
          {blog.user && blog.user.username === user.username &&
            <button onClick={deleteClick} className="delete-button">remove</button>
          }
        </>
      </Togglable>
    </div>
  )
}
export default Blog