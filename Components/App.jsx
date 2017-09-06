class App extends React.Component {
  constructor(props){
    super(props);
    console.log(props, "app props")
 	this.componentDidMount = this.componentDidMount.bind(this)

    this.state = {
      selected: "",
      messages: [],
   	}
  }

  componentDidMount(){
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
        // var messageArr = [];
        // for ( var i = 0; i < data.results.length; i ++) {
        //   // string for username and test
        //   var userName = data.results[i].username;
        //   var text = data.results[i].text;
        //   var time = data.results[i].updatedAt;
        //   messageArr.push([userName,text,time]);
        //   //this.state.messages.push([userName, text, time])
        // }
        // console.log(messageArr, "messAr")
        // console.log(<App/>, "app")
        // // make set State
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
  


	



    render(){
    	 return(
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Submit  onClick={this.componentDidMount}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <MessageList messages={this.state.messages}/>
          </div>
          <div className="col-md-5">
            <MessageList/>
          </div>
        </div>
      </div>
    );
    }
}



