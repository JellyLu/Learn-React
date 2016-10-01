var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        Hello world! I'm a commentbox
      </div>
    );
  }
});

ReactDOM.render(
<CommentBox  />,
document.getElementById('content')
);
