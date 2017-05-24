


class Clock extends React.Component {

	constructor(props) {
    super(props);
    this.state = {time: new Date()};
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

  render() {
    return (
      <div><h1 className="clock">{this.state.time.toLocaleTimeString()}</h1></div>
    );
  }
}

class Page extends React.Component {
	constructor(props) {
		super(props);
			this.state = {numClocks: 1};
      this.addClocks = this.addClocks.bind(this);
	}

  addClocks(event) {
    this.setState((prevState, props) => (
      {numClocks: (prevState.numClocks + 1)}))
  }

	render() {
		var allClocks = [];
		for (var i = 0; i < this.state.numClocks; i++){
			allClocks.push(<Clock key={i} />);
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