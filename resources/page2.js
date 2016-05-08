var React = require('react');
var ReactDOM = require('react-dom');
var async = require('async');

var helloWorld = React.createClass({
	render: function () {
		return React.createElement("div", null, "Hello from Page 2");
	}
});

ReactDOM.render(React.createElement(helloWorld), document.getElementById('mountpoint'));

async.series([ function () { document.getElementById('mountpoint').innerHTML = 'foo'; } ]);
