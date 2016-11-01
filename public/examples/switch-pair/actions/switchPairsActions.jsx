const Reflux = require('reflux');
const {switchPairs} = require('../switchPairHelper.jsx');

var SwitchPairsActions = Reflux.createActions({
  switchPair: {asyncResult: true},
  clickedCoder: {asyncResult: true}
});

SwitchPairsActions.switchPair.listen(function(coders) {
  var newPairs = switchPairs(coders);
  if (newPairs.length === 0) {
     this.failed();
  } else {
     this.completed(newPairs);
  }
});

SwitchPairsActions.clickedCoder.listen(function(checkbox, coders) {
    let name = checkbox.name;
    const newCoders = coders.map(function(coder) {
        if (coder.name === name) {
            coder.isSelected = !checkbox.checked;
        }
        return coder;
    });
    console.log("coder list actions:" + newCoders);
    if(newCoders.length === 0) {
      this.failed();
    } else {
      this.completed(newCoders);
    }
});


module.exports = SwitchPairsActions;
