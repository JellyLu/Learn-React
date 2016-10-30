const SwitchPairs = require("./switchPairs.jsx");
const PairList = require("./pairList.jsx");
const Router = require('react-router');
const Route = Router.Route;
const DefaultRoute = Router.DefaultRoute;

var routConfig = (
  <Route name="tool" path="/">
    <DefaultRoute name='switchPairs' handler={SwitchPairs} />
    <Route path="pairList" name="pairList" handler={PairList} />
  </Route>
);

module.exports = routConfig;
