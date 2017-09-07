class App extends React.Component {
  constructor(props){
    super(props);
    console.log(props, "app props")
 	this.onClickEvent = this.onClickEvent.bind(this)

    this.state = {
      selected: "",
      messages: [],
   	}
   	this.onClickEvent = this.onClickEvent.bind(this);
   	this.renderByRoom = this.renderByRoom.bind(this);
    this.send = this.send.bind(this)
  }

  onClickEvent(){
  	var context = this;
  	$.ajax({
    // This is the url you should use to communicate with the parse API server.
      url: "http://parse.la.hackreactor.com/chatterbox/classes/messages",
      type: 'GET',
      data: 'order=-createdAt',
      headers: {
        'X-Parse-Application-Id': '676a1e781a66c09718a32a0221ea3a23a9080272',
      'X-Parse-REST-API-Key': '848f43ff2d1f6d372a9779c6be185d11f18cc183',
      },
      contentType: 'application/json',
      success: function (data) {
        console.log('chatterbox: Message sent');
        //console.log(, "data i")
        console.log(data.results, "data in search api");
        context.setState({
        	messages: data.results
        })
      },
      
      error: function (data) {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('chatterbox: Failed to send message', data);
      }
    });
  }

  send(text){
    var context = this;
    console.log(text, "this is the test bro")

    // POST the message to the server
    $.ajax({
      url: "http://parse.la.hackreactor.com/chatterbox/classes/messages",
      type: 'POST',
      data: JSON.stringify(text),
      success: function (data) {
        console.log(data, "send data")
        context.setState({
          messages: data.results
        })
      },
      error: function (error) {
        console.error('chatterbox: Failed to send message', error);
      }
    });
  }


  renderByRoom(){
  	var context = this;
  	$.ajax({
    // This is the url you should use to communicate with the parse API server.
      url: "http://parse.la.hackreactor.com/chatterbox/classes/messages",
      type: 'GET',
      data: 'order=-createdAt',
      headers: {
        'X-Parse-Application-Id': '676a1e781a66c09718a32a0221ea3a23a9080272',
      'X-Parse-REST-API-Key': '848f43ff2d1f6d372a9779c6be185d11f18cc183',
      },
      contentType: 'application/json',
      success: function (data) {
        console.log('chatterbox: Message sent');
        //console.log(, "data i")
        console.log(data.results, "data in search api");
        var messageArr = [];
        for ( var i = 0; i < data.results.length; i ++) {
          // string for username and test
          var userName = data.results[i].username;
          var text = data.results[i].text;
          var time = data.results[i].updatedAt;
          messageArr.push([userName,text,time]);
        }
        context.setState({
        	messages: messageArr
        })
      },
      
      error: function (data) {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('chatterbox: Failed to send message', data);
      }
    });  	
  }
  

    render(){
    	 return(
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Submit  onClick={this.onClickEvent}/>
            <Send  onClick={this.send}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <RoomMessages messages={this.state.messages} onClick={this.renderByRoom}/>
          </div>
          <div className="col-md-5">
            <MessageList messages={this.state.messages}/>
          </div>
        </div>
      </div>
    );
    }
}



