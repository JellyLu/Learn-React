var React = require('react');

var Pair = React.createClass({
  componentWillMount: function() {
    console.log("will mount");
  },
  componentDidMount: function() {
      console.log("did mount");
  },
  switchPair: function() {
    console.log("pair list");
  },
  render: function() {
    console.log("pair render");
    let pair = this.props.pair;
    let coderOneName = pair.coderOne.name;
    let coderTwoName = pair.coderTwo === undefined ? "" : (" & " + pair.coderTwo.name);
    return (
      <div> {coderOneName}{coderTwoName} </div>
    );
  }
});

module.exports = Pair;
