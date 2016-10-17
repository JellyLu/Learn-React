var React = require('react');
var Pair = require('./pair.jsx')

var PairList = React.createClass({
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
    console.log("pair list render");
    var pairNodes = this.props.pairs.map(function(pair) {
      console.log("pair:" + pair);
      return (
          <Pair pair={pair} />
      );
    });
    var isHidden = (this.props.pairs.length === 0)
    return (
      <div hidden={isHidden}>
        <h1> New Pairs </h1>
        <div>{pairNodes}</div>
      </div>
    );
  }
});

module.exports = PairList;
