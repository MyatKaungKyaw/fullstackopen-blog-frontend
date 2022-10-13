import Blog from './Blog'

const BlogList = ({ blogs, handleLikeClick, user, deleteBlog }) => (
    <div>
        {blogs.map(blog =>
            <Blog
                key={blog.id}
                blog={blog}
                handleLikeClick={handleLikeClick}
                user={user}
                deleteBlog={deleteBlog}
            />
        )}
    </div>
)

export default BlogList