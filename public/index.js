const ReactDOM = require('react-dom');
const routes = require("./examples/switch-pair/config.jsx");

var Router = require('react-router');

Router.run(routes, function (Handler) {
  ReactDOM.render(<Handler />, document.body);
});
