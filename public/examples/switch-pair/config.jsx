const SwitchPairs = require("./switchPairs.jsx");
const PairList = require("./pairList.jsx");
const Router = require('react-router');
const Route = Router.Route;

var routConfig = (
  <Route name="switchPairs" path="/" handler={SwitchPairs}>
    <Route path="pairList" name="pairList" handler={PairList} />
  </Route>
);

module.exports = routConfig;
