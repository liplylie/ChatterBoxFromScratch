class App extends React.Component {
  constructor(props){
    super(props);
    this.getMessage = this.getMessage.bind(this);
	}

    getMessage(){
    	console.log(this.props, "app props");
    }

    render(){
    	 return(
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Submit onClick={this.getMessage}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <MessageList/>
          </div>
          <div className="col-md-5">
            <MessageList/>
          </div>
        </div>
      </div>
    );
    }
}



