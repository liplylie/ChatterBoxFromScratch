class Submit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    }
}

    render(){
    	return (
      		<div className="search-bar form-inline">
      			Submit button should be here
      			<input
          			className="form-control"
          			type="text"
        		/>
        		<button className="btn hidden-sm-down">
          			<span className="glyphicon glyphicon-search"></span>
        		</button>
      		</div>
    	);
    }
 }