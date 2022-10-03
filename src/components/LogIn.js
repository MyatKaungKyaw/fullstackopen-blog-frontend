const LogIn = (props) => {
    return (
        <div>
            <h2>log in to application</h2>
            <form onSubmit={props.handleSubmit}>
                <div>
                    username
                    <input
                        type='text'
                        name='username'
                        value={props.username}
                        onChange={(({ target }) => props.usernameOnChange(target))}
                    />
                </div>
                <div>
                    password
                    <input
                        type='password'
                        name='password'
                        value={props.password}
                        onChange={(({ target }) => props.passwordOnChange(target))}
                    />
                </div>
                <button type='submit'>LogIn</button>
            </form>
        </div>
    )
}

export default LogIn