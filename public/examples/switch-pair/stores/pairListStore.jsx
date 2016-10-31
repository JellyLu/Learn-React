const Reflux = require('reflux');
const React = require('react');
const SwitchPairsActions = require('../actions/switchPairsActions.jsx');

var PairListStore = Reflux.createStore({
  init: function() {
    this.state = this.initState();
    this.listenTo(SwitchPairsActions.switchPair.completed, 'onSwitchPair');
  },
  getInitialState: function() {
    return this.state;
  },
  initState () {
    return {pairs: []};
  },
  onSwitchPair: function(newPairs) {
    this.state.pairs = newPairs;
    this.trigger(this.state.pairs);
  }
});

module.exports = PairListStore;
