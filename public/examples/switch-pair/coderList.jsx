const React = require('react');
const Reflux = require('reflux');
const Coder = require('./coder.jsx');
const CoderListStore = require('./stores/coderListStore.jsx');

var CoderList = React.createClass({
  mixins:[Reflux.connect(CoderListStore)],
  handleCoderClicked: function(e) {
    this.props.handleCoderClicked(e);
  },
  render: function() {
      console.log("coder List render");
      const {handleCoderClicked} = this.props;
      var coderNodes = this.props.coders.map(function(coder) {
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
