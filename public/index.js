var ReactDOM = require('react-dom');
var CommentBox = require('./examples/comment/commentbox.jsx');

ReactDOM.render( <
  CommentBox url = "/api/comments" / > ,
  document.getElementById('content')
);
