const React = require('react');
const Reflux = require('reflux');
const Coder = require('./coder.jsx');

var CoderList = React.createClass({
  handleCoderClicked: function(e) {
    this.props.handleCoderClicked(e);
  },
  render: function() {
    console.log("coder List render");
    const {coders, handleCoderClicked} = this.props;
    var coderNodes = coders.map(function(coder) {
        return (<Coder key={coder.id} coder={coder} handleCoderClicked={handleCoderClicked}/>);
    });
    return (
      <div id="coderList">
        {coderNodes}
      </div>
    );
  }
});

module.exports = CoderList;
