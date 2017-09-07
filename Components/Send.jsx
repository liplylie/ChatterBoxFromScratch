class Send extends React.Component {
  constructor(props) {
    super(props);
    console.log(props, "send props");
    this.textInput = this.textInput.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.text = '';
    this.state = {
      value: ''
    }
  }

  textInput(event) {
    console.log('Input is ' + event.target.value);
    this.text = event.target.value;
  }

  clickHandler() {
    var message = {
      username: "Jordan",
      text: this.text,
      roomname: 'lobby'
    };
    this.props.onClick(message);
  }

    render(){
    	return (
      		<div className="search-bar form-inline">
             
             <form>
               
                <input type="text" name="message" onChange={this.textInput}/>
              </form>

        		<button className="btn hidden-sm-down" onClick={this.clickHandler}>
          			<span className="glyphicon glyphicon-search"></span>
        		</button>
      		</div>
    	);
    }
 }