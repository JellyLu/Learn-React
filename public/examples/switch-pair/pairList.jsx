const React = require('react');
const Reflux = require('reflux');
const Pair = require('./pair.jsx');
const PairListStore = require('./stores/pairListStore.jsx');


var PairList = React.createClass({
  mixins:[Reflux.connect(PairListStore)],
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
    const pairs = this.state.pairs.length !== undefined ? this.state.pairs : [];
    var pairNodes = pairs.map(function(pair) {
      console.log("pair:" + pair);
      return (
          <Pair key={pair.id} pair={pair} />
      );
    });
    var isHidden = (this.state.pairs.length === 0)
    return (
      <h1> New Pairs </h1>
      <div hidden={isHidden}>
        <div>{pairNodes}</div>
      </div>
    );
  }
});

module.exports = PairList;
