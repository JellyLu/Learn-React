var React = require('react');
var CoderList = require('./coderList.jsx');
var CoderForm = require('./coderForm.jsx');
var PairList = require('./pairList.jsx');
var data = require('./pairs.js');
var {switchPairs} = require('./switchPairHelper.jsx');

var SwitchPairs = React.createClass({
    getInitialState: function() {
        console.log("state-init");
        return {coders: [], pairs: []};
    },
    componentDidMount: function() {
        console.log("did mount");
        this.setState({coders: data.coders});
    },
    switchPair: function() {
        console.log("switchPair");
        this.setState({
            pairs: switchPairs(this.state.coders)
        });
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
        let name = checkbox.name;
        this.setState({
            coders: this.state.coders.map(function(coder) {
                if (coder.name === name) {
                    coder.isSelected = checkbox.checked;
                }
                return coder;
            })
        });

        this.forceUpdate();
    },
    render: function() {
        console.log("switchPairs: render");
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
