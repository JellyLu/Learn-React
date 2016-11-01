const Reflux = require('reflux');
const React = require('react');
const SwitchPairsActions = require('../actions/switchPairsActions.jsx');
const data = require('../data.js');

var SwitchPairsStore = Reflux.createStore({
    init() {
        this.state = this.initState();
        this.listenTo(SwitchPairsActions.clickedCoder, 'onClickedCoder');
    },
    initState: function() {
        return {coders: data.coders};
    },
    getInitialState: function() {
        return this.state;
    },
    onClickedCoder: function(checkbox, coders) {
        let name = checkbox.name;
        const newCoders = coders.map(function(coder) {
            if (coder.name === name) {
                coder.isSelected = !checkbox.checked;
            }
            return coder;
        });
      this.state.coders = newCoders;
      this.trigger(this.state.coders);
    }
});

module.exports = SwitchPairsStore;
