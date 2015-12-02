var restful = require('node-restful');

module.exports = function  (app, route) {
	// setup the controller for REST API
	var rest = restful.model(
		'movie',
		app.models.movie
	).methods(['get', 'put', 'post', 'delete']);

	//register This endpoint with the application
	rest.register(app, route);

	//return the middleware
	return function  (req, res, next) {
		next();
	}
};