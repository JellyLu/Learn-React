var React = require('react');
var CoderList = require('./coderList.jsx');
var CoderForm = require('./coderForm.jsx');
var PairList = require('./pairList.jsx');
var data = require('./pairs.js');

var SwitchPairs = React.createClass({
  getInitialState: function() {
    console.log("state-init");
    return {
      coders: [],
      pairs: []
    };
  },
  componentWillMount: function() {
    console.log("will mount");
  },
  componentDidMount: function() {
      console.log("did mount");
      this.setState({coders: data.coders});
  },
  switchPair: function() {
    console.log("switchPair");
    let selectedCoders = this.state.coders.filter(function(coder) {
      return coder.isSelected;
    });
    console.log("selectedCoders:" + selectedCoders);
    var pairs = [];
    let len = selectedCoders.length;
    for(var i = 0; i < len;) {
        let pair;
        if (selectedCoders[i+1] === undefined) {
          pair = {
            coderOne: selectedCoders[i]
          };
          i++;
        } else {
          pair = {
           coderOne: selectedCoders[i],
           coderTwo: selectedCoders[i+1]
          };
          i += 2;
        }
        pairs.push(pair);
    }
    console.log("pairs:" + pairs);
    this.setState({
      pairs: pairs
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
    console.log("handleCoderSubmit");
  },
  handleCoderClicked: function(e) {
     e.preventDefault();
     var checkbox = e.target;
     let name = checkbox.name;
     this.setState ({
       coders: this.state.coders.map(function(coder){
          if (coder.name === name) {
            coder.isSelected = checkbox.checked;
          }
          return coder;
       })
     });

     this.forceUpdate();
  },
  shouldComponentUpdate: function(nextProps, nextState) {
    console.log("switchPairs: shouldComponentUpdate");
    return nextState.coders !== this.state.coders;
  },
  render: function() {
    console.log("switchPairs: render");
    return (
      <div>
        <h1> Coder List </h1>
        <CoderList coders={this.state.coders} handleCoderClicked={this.handleCoderClicked}/>
        <CoderForm onCoderSubmit={this.handleCoderSubmit}/>
        <div><button  onClick={this.switchPair}>Switch</button></div>
        <PairList pairs={this.state.pairs} />
      </div>
    );
  }
});

module.exports = SwitchPairs;
