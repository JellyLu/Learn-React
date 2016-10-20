const ReactDOM = require('react-dom');
const React = require('react');
const {Router} = require("react-router");
const routes = require("./examples/switch-pair/config.jsx");

ReactDOM.render( <Router routes={routes} />, document.body);
