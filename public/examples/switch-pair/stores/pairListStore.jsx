const Reflux = require('reflux');
const React = require('react');
const SwitchPairsActions = require('../actions/switchPairsActions.jsx');
const {switchPairs} = require('../switchPairHelper.jsx');

var PairListStore = Reflux.createStore({
  init: function() {
    this.state = this.initState();
    this.listenTo(SwitchPairsActions.switchPair, 'onSwitchPair');
  },
  getInitialState: function() {
    return this.state;
  },
  initState () {
    return {pairs: []};
  },
  onSwitchPair: function(coders) {
    var newPairs = switchPairs(coders);
    this.state.pairs = newPairs;
    this.trigger(this.state.pairs);
  }
});

module.exports = PairListStore;
