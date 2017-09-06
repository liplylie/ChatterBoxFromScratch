var MessageList = (props) => (
console.log(props, "ml props"),
  <div className="video-list">
  All Messages
    { props.messages.map(message => <MessageListEntry message={message}/>)}

  </div>
);