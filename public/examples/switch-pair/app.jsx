const React = require("react");
const {Rounter, Route, Link} = require("react-router");
const SwitchPairs = require("./switchPairs.jsx");
const PairList = require("./pairList.jsx");

var App = React.createClass({
  render() {
    return (
      <div>
        <h1>App</h1>
        <ul>
          <li><Link to="/switchPairs">SwitchPairs</Link></li>
          <li><Link to="/pairList">PairList</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
});


module.exports = App;
