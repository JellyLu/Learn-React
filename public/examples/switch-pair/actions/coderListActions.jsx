const Reflux = require('reflux');
var CoderListActions = Reflux.createActions([
  'clickedCoder'
]);

CoderListActions.clickedCoder.listen(function(checkbox, coders) {
    let name = checkbox.name;
    const newCoders = coders.map(function(coder) {
        if (coder.name === name) {
            coder.isSelected = checkbox.checked;
        }
        console.log("coder:" + coder.name + " " + coder.isSelected);
        return coder;
    });

    return newCoders;
});


module.exports = CoderListActions;
