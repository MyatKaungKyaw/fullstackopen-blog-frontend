const CreateBlog = (props) => (
    <div>
        <h2>Create New</h2>
        <form onSubmit={props.handleSubmit}>
            <div>
                title:
                <input
                    type='text'
                    name='title'
                    value={props.title}
                    onChange={props.titleOnChange}
                />
            </div>
            <div>
                author:
                <input
                    type='text'
                    name='author'
                    value={props.author}
                    onChange={props.authorOnChange}
                />
            </div>
            <div>
                url:
                <input
                    type='text'
                    name='url'
                    value={props.url}
                    onChange={props.urlOnChange}
                />
            </div>
            <button type='submit'>create</button>
        </form>
    </div>
)

export default CreateBlog