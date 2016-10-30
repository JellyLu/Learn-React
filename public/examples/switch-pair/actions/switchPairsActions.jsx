const Reflux = require('reflux');
const {switchPairs} = require('../switchPairHelper.jsx');

var SwitchPairsActions = Reflux.createActions({
  switchPair: {asyncResult: true}
});

SwitchPairsActions.switchPair.listen(function(coders) {
  var newPairs = switchPairs(coders);
  if (newPairs.length === 0) {
     this.failed;
  } else {
     this.completed;
  }
});


module.exports = SwitchPairsActions;
