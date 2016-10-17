var React = require('react');
var Coder = require('./coder.jsx');

var CoderList = React.createClass({
  handleCoderClicked: function(e) {
    this.props.handleCoderClicked(e);
  },
  render: function() {
      console.log("render");
      const {handleCoderClicked} = this.props;
      var coderNodes = this.props.coders.map(function(coder) {
      console.log(coder);
      return (
          <Coder key={coder.id} coder={coder} handleCoderClicked={handleCoderClicked}/>
      );
    });
    return (
      <div id="coderList">
        {coderNodes}
      </div>
    );
  }
});

module.exports = CoderList;
