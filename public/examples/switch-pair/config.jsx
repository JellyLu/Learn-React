const {Router, Route, Link} = require("react-router");
const SwitchPairs = require("./switchPairs.jsx");
const PairList = require("./pairList.jsx");
const App = require("./app.jsx");

const routConfig = [{
  path: "/",
  component: App,
  childRoutes: [
    {path: "switchPairs", component: SwitchPairs},
    {path: "pairList", component: PairList}
  ]
}];

module.exports = routConfig;
