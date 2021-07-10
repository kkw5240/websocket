import './ChatMsgList.css'


function ChatMsgList(props) {

    const messages = props.messages;
    const messageItems = messages.map(({sender, message}) =>
        <li>{sender} : {message}</li>
    );

    return (
        <ul> 
            {messageItems}
        </ul>
    );
}

export default ChatMsgList;