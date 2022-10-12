import Blog from './Blog'

const BlogList = ({ blogs, handleLikeClick }) => (
    <div>
        {blogs.map(blog =>
            <Blog key={blog.id} blog={blog} handleLikeClick={handleLikeClick}/>
        )}
    </div>
)

export default BlogList