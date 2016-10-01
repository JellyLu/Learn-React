var CommentBox = React.createClass({
  displayName: 'CommentBox',
  render: function() {
    return (
      React.createElement('div', {className: "commentBox"},
        "Hello world! I'm a comment box"
      )
    );
  }
});

ReactDOM.render(
React.createElement(CommentBox, null),
document.getElementById('content')
);
