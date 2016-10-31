const Reflux = require('reflux');
const React = require('react');
const CoderListActions = require('../actions/coderListActions.jsx');
const data = require('../data.js');

var CoderListStore = Reflux.createStore({
    init(){
      this.state = this.initState();
      this.trigger(this.state.coders);
      this.listenTo(CoderListActions.clickedCoder, 'onClickedCoder');
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


module.exports = CoderListStore;
