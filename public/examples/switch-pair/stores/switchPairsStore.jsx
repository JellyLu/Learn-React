const Reflux = require('reflux');
const React = require('react');
const SwitchPairsActions = require('../actions/switchPairsActions.jsx');
const data = require('../data.js');

var SwitchPairsStore = Reflux.createStore({
    init() {
        this.state = this.initState();
        this.listenTo(SwitchPairsActions.clickedCoder.completed, 'onClickedCoder');
    },
    initState: function() {
        return {coders: data.coders};
    },
    getInitialState: function() {
        return this.state;
    },
    onClickedCoder: function(newCoders) {
      this.state.coders = newCoders;
      this.trigger(this.state.coders);
    }
});

module.exports = SwitchPairsStore;
