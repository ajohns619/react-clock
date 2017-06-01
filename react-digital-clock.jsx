class Clock extends React.Component {
  render() {
    return (
      <div><h1 className="clock">{this.props.time.toLocaleTimeString()}</h1></div>
    );
  }
}

class Page extends React.Component {
	constructor(props) {
		super(props);
			this.state = {numClocks: 1,  time: new Date()}
      this.addClocks = this.addClocks.bind(this);
	}

  componentDidMount() {
    this.timerID = setInterval(
      () => this.eachSecond(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  eachSecond() {
    this.setState({
      time: new Date()
    });
  }

  addClocks(event) {
    this.setState((prevState, props) => (
      {numClocks: (prevState.numClocks + 1)}))
  }

	render() {
		var allClocks = [];
		for (var i = 0; i < this.state.numClocks; i++){
			allClocks.push(<Clock key={i} time={this.state.time} />);
		}

		return (
			<div>{allClocks}<div className="button" onClick={this.addClocks}>More Clocks!</div></div>
		);
	}
}

ReactDOM.render(
  <Page />,
  document.getElementById('root')
);