const NotificationBar = ({ message, isErr }) => {
    if(message === null)  return null
    return (
        <div className={isErr ? 'err-notification-top-bar' : 'notification-top-bar'}>
            <p>{message}</p>
        </div>
    )
}

export default NotificationBar