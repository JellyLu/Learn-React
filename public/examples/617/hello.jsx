var Hello = React.createClass({
  propTypes: {
     helloType: React.PropTypes.string
  },
  getInitialState: function() {
   console.log("getInitialState");
    return {
     state1: "default state1"
    };
  },
  getDefaultProps: function() {
     console.log("getDefaultProps");
    return {
     helloType: "default helloType"
    };
  },
  componentWillMount: function() {
      console.log("componentWillMount");
  },
  componentDidMount: function() {
    console.log("componentDidMount");
  },
  componentWillReceiveProps: function() {
    console.log("componentWillReceiveProps");
    this.setState({
         state2: "default state2"
    })
  },
  shouldComponentUpdate: function(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    return nextProps.helloType !== this.props.helloType;
  },
  componentWillUpdate: function(nextProps, nextState) {
    console.log("componentWillUpdate");
  },
  componentDidUpdate: function(nextProps, nextState) {
    console.log("componentDidUpdate");
  },
  componentWillUnmount: function(){
    console.log("componentWillUnmount");
  },
  render: function() {
    return (
      <div>
         <h1>
           Hello{this.props.name}
         </h1>
         <h2>
          <a href="../basic/index.html">Next Page</a>
         </h2>
      </div>
    );

  }
});

ReactDOM.render(
  <Hello name="World" />,
  document.getElementById('container')
);
