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
      <Togglable text='view' cancelText='hide'>
        <>
          <a href={blog.url} target='_blank'  rel="noreferrer" className='blog-url'>{blog.url}</a>
          <div>
            <p className='blog-like'>likes : {blog.likes} </p>
            <button onClick={likeClick} className='blog-like'>like</button>
          </div>
          {blog.user && <div>{blog.user.name}</div>}
        </>
      </Togglable>
    </div>
  )
}
export default Blog