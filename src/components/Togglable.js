import { useState, useImperativeHandle, forwardRef } from 'react'

const Togglable = forwardRef ((props,ref) => {
    const [visible, setVisible] = useState(false)

    const show = (e) => {
        setVisible(true)
    }

    const hide = (e) => {
        setVisible(false)
    }

    useImperativeHandle(ref,() => {
        return {hide}
    })

    return (
        <div>
            {!visible && <button onClick={show}>{props.text}</button>}
            {visible && <div>
                {props.children}
                <button onClick={hide}>cancel</button>
            </div>}
        </div>
    )
})

export default Togglable