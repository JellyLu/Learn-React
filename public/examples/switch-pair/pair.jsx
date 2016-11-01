var React = require('react');

var Pair = React.createClass({
  render: function() {
    let pair = this.props.pair;
    let coderOneName = pair.coderOne.name;
    let coderTwoName = pair.coderTwo === undefined ? "" : (" & " + pair.coderTwo.name);
    return (
      <div> {coderOneName}{coderTwoName} </div>
    );
  }
});

module.exports = Pair;
