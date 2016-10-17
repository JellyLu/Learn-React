var React = require('react');
var CoderForm = React.createClass({
    getInitialState: function() {
        return {name: ''};
    },
    handleNameChange: function(e) {
        this.setState({name: e.target.value});
    },
    handleSubmit: function(e) {
        console.log("handleSubmit");
        e.preventDefault();
        var name = this.state.name.trim();
        if (!name) {
            return;
        }
        this.props.onCoderSubmit(name);
        this.setState({name: ''});
    },
    render: function() {
        return (
            <form id="CoderForm" onSubmit={this.handleSubmit}>
                <input type="text" placeholder="New coder's name" value={this.state.name} onChange={this.handleNameChange}/>
                <input type="submit" value="Add"/>
            </form>
        );
    }
});

module.exports = CoderForm;
