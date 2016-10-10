var React = require('react');
var CommentBox = require('../public/examples/comment/commentBox.jsx');
// ReactDOM.render(
// <CommentBox url="/api/comments" />,
// document.getElementById('content')
// );

React.renderComponent(CommentBox({url: '/api/comments'}), document.getElementById('app'));
