var MessageList = (props) => (
console.log(props, "ml props"),
  <div className="video-list">
    { props.messages.map(message => <MessageListEntry message="message"/>)}

  </div>
);