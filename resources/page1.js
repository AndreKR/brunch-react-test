var AnotherModule = require('./another.js');
var React = require('react');
var ReactDOM = require('react-dom');

var helloWorld = React.createClass({
	render: function () {
		return React.createElement("div", null, "Hello from Page 1");
	}
});

ReactDOM.render(React.createElement(helloWorld), document.getElementById('mountpoint'));
AnotherModule();
