const Reflux = require('reflux');
const React = require('react');
const SwitchPairsActions = require('../actions/switchPairsActions.jsx');
const data = require('../data.js');

var SwitchPairsStore = Reflux.createStore({
    init() {
        this.state = this.initState();
        this.listenTo(SwitchPairsActions.clickedCoder, 'onClickedCoder');
        this.listenTo(SwitchPairsActions.clickedAddCoder, 'onClickedAddCoder');
    },
    initState: function() {
        return {coders: data.coders};
    },
    getInitialState: function() {
        return this.state;
    },
    onClickedCoder: function(checkbox, coders) {
        let name = checkbox.name;
        this.state.coders = coders.map(function(coder) {
            if (coder.name === name) {
                coder.isSelected = !checkbox.checked;
            }
            return coder;
        });
        this.trigger(this.state.coders);
    },
    onClickedAddCoder: function(name) {
        var coder = {
            name: name,
            isSelected: false,
            id: Date.now()
        };
        this.state.coders = this.state.coders.concat([coder]);
        this.trigger(this.state);
    }
});

module.exports = SwitchPairsStore;
