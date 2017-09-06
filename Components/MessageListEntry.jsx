var MessageListEntry = (props) => (
  console.log(props, "mle props yoo"),
  <div className="video-list-entry media">
    <div className="media-body">
      <div className="video-list-entry-detail"><span className="username" >{props.message.username}</span> {_.escape(props.message.text)}</div>
    </div>
  </div>
); 

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
