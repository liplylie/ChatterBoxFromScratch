var MessageListEntry = (props) => (
  console.log(props, "mle props yoo"),
  <div className="video-list-entry media">
    <div className="media-body">
      <div className="video-list-entry-detail">Test message in Message list entry works</div>
    </div>
  </div>
); 

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: React.PropTypes.object.isRequired
};