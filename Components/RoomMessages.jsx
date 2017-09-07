var RoomMessages = (props) => {
	console.log(props, "ml hjhjhj x props");
	var roomBox = [];
	for (let  i = 0; i < props.messages.length; i++){
		roomBox.push(props.messages[i].roomname);
	};
	var uniqBox = [];
	

	console.log(roomBox, "uniqbox");
	for (let  i = 0; i < roomBox.length; i++){
		if ( uniqBox.indexOf(roomBox[i]) === -1 && roomBox[i] !== undefined){
		uniqBox.push(roomBox[i]);	
		}
	};

	console.log(uniqBox, "roombox");
	return (
	  <div className="video-list">
	  Rooms
	    { uniqBox.map(room => <RoomMessagesEntry room={room} onClick={props.onClick}/>)}

	  </div>

		)
	
}