const React = require('react');
const Reflux = require('reflux');
var Router = require('react-router');
const {Navigation, State} = require("react-router");
const CoderList = require('./coderList.jsx');
const CoderForm = require('./coderForm.jsx');
const SwitchPairsActions = require('./actions/switchPairsActions.jsx');
const SwitchPairsStore = require('./stores/switchPairsStore.jsx');

var SwitchPairs = React.createClass({
    mixins: [
      Navigation,
      Reflux.connect(SwitchPairsStore)
    ],
    switchPair: function() {
        SwitchPairsActions.switchPair(this.state.coders);
        this.transitionTo('pairList');
    },
    handleCoderSubmit: function(name) {
        var coder = {
            name: name,
            isSelected: false,
            id: Date.now
        };
        var newCoders = this.state.coders.concat([coder]);
        this.setState({coders: newCoders});
    },
    handleCoderClicked: function(e) {
      e.preventDefault();
      var checkbox = e.target;
      SwitchPairsActions.clickedCoder(checkbox, this.state.coders);
    },
    render: function() {
        console.log("switchPairs render");
        return (
            <div>
                <h1>
                    Coder List
                </h1>
                <CoderList coders={this.state.coders} handleCoderClicked={this.handleCoderClicked}/>
                <CoderForm onCoderSubmit={this.handleCoderSubmit}/>
                <div>
                    <button onClick={this.switchPair}>Switch</button>
                </div>
            </div>
        );
    }
});

module.exports = SwitchPairs;
