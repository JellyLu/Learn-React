const Reflux = require('reflux');
const React = require('react');
const SwitchPairsActions = require('../actions/switchPairsActions.jsx');

var PairListStore = Reflux.createStore({
  init: function() {
    this.listenTo(SwitchPairsActions.switchPair.completed, 'onSwitchPair');
  },
  getInitialState: function() {
    return {pairs: []};
  },
  onSwitchPair: function(newPairs) {
    console.log("pairListStore: " + newPairs);
    this.setState({pairs: newPairs});
    console.log("pairListStore: " + this.state.pairs);
    this.trigger(this.state.pairs);
  }
});

module.exports = PairListStore;
