var React = require('react');

var Coder = React.createClass({
  handleCoderClickedOne: function(e) {
    this.props.handleCoderClicked(e);
  },
  render: function() {
    console.log("coder: render");
    const {coder, handleCoderClicked} = this.props;
    return (
      <div className="coder">
          <input className="coderCheckbox" onChange={handleCoderClicked} checked={coder.isSelected} type="checkbox" name={coder.name} value={coder.name}/>
          <span className="coderName">{coder.name}</span>
      </div>
    );
  }
});

module.exports = Coder;
