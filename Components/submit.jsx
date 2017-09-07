class Submit extends React.Component {
  constructor(props) {
    super(props);
    console.log(props, "submit props");
    this.state = {
      value: ''
    }
}

    render(){
    	return (
      		<div className="search-bar form-inline">
      			Click to see messages
        		<button className="btn hidden-sm-down" onClick={this.props.onClick}>
          			<span className="glyphicon glyphicon-search"></span>
        		</button>
      		</div>
    	);
    }
 }