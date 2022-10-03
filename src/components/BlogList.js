import Blog from './Blog'

const BlogList = ({ blogs, name, handleLogOut}) => (
    <div>
        <h2>blogs</h2>
        <p>{name} logged in</p>
        <button onClick={handleLogOut}>logout</button>
        {blogs.map(blog =>
            <Blog key={blog.id} blog={blog} />
        )}
    </div>
)

export default BlogList