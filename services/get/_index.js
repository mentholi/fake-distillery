var expressListRoutes  = require('express-list-routes');

module.exports = {
	path: '/',
	render: function(req, res) {

    // Hack to get registrered routes
    var routes = [];
    expressServer._router.stack.forEach(function(r){
      if (r.route && r.route.path && r.route.path.indexOf('/api/') == 0) {
        var new_route = '<a href="' + r.route.path + '">' + r.route.path + '</a><br/>';
        if (routes.indexOf(new_route) == -1) {
          routes.push(new_route);
        }
      }
    });

		var html = '<h1>Fake Distillery</h1>';
		html += '<p>See <a href="http://giosg.github.io/giosg_docs/">documentation</a>';
		html += ' or <a href="https://github.com">source</a> for available endpoints</p>';
    html += '<br />';

    html += '<h3>Endpoints:</h3>';
    for (var i = routes.length - 1; i >= 0; i--) {
      html += routes[i];
    };

		res.send(200, html);
	}
};
