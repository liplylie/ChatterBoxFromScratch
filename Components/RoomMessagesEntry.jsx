var RoomMessagesEntry = (props) => {


	var textInput = function(event){
	    console.log('Input is ' + event.target.innerHTML) 
	  }


  console.log(props, "RoomMessagesEntry props yoo");
  return (
  <div className="video-list-entry media">
    <div className="media-body">
      <div className="video-list-entry-detail"><span className= "room" onClick={textInput.bind(this)} >{props.room}</span> </div>
    </div>
  </div>
); 
  

	
}
