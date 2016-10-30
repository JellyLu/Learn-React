const React = require("react");
const {Rounter, Route, Link} = require("react-router");
const SwitchPairs = require("./switchPairs.jsx");
const PairList = require("./pairList.jsx");

var App = React.createClass({
  render() {
    return (
      <div>
        <h1>App</h1> 
        {this.props.children}
      </div>
    );
  }
});


module.exports = App;
