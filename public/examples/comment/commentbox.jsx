var React = require('react');
var CommentList = require('./commentList.jsx');
var CommentForm = require('./commentForm.jsx');

var CommentBox = React.createClass({
  displayName: 'CommentBox',
  loadCommentsFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  getInitialState: function() {
  console.log("state-init");
    return {
      data: [{id: 0, author: "default", text: "Default"}]
    };
  },
  componentWillMount: function() {
    console.log("will mount");
    this.loadCommentsFromServer();
  },
  componentDidMount: function() {
      console.log("did mount");
  },
  handleCommentSubmit: function(comment) {
    var comments = this.state.data;
    comment.id = Date.now();
    var newComments = comments.concat([comment]);
    this.setState({data: newComments});
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'POST',
      data: comment,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
        this.setState({data: comments})
      }.bind(this)
    });
    console.log("handleCommentSubmit");
  },
  render: function() {
    console.log("render");
    return (
      <div id="commentBox">
        <CommentList data={this.state.data}/>
        <CommentForm onCommentSubmit={this.handleCommentSubmit}/>
      </div>
    );
  }
});

module.exports = CommentBox;
