const Reflux = require('reflux');
const React = require('react');
const CoderListStore = require('./coderListStore.jsx');

var SwitchPairsStore = Reflux.createStore({
    init() {
        this.state = this.initState();
        Reflux.listenTo(CoderListStore, this.updateCoders);
    },
    initState: function() {
        return {coders: []};
    },
    getInitialState: function() {
        return this.state;
    },
    updateCoders: function(newCoders) {
        this.state.coders = newCoders;
        this.trigger(this.state.coders);
    }
});

module.exports = SwitchPairsStore;
