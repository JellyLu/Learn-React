var ReactDOM = require('react-dom');
var SwitchPairs = require('./examples/switch-pair/switchPairs.jsx');
var coder = {name: "Yangjie", isSelected: true, id: "293"}

ReactDOM.render(
   <SwitchPairs  />,
  document.getElementById('content')
);
