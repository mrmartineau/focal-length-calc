var Router = require('director').Router;

module.exports = function routes() {
	document.addEventListener('DOMContentLoaded', function(e) {

		// Route: #/camera/:camera/lens/:lens
		var cameraAndLens = function (camera,lens) {
			console.log("cameraAndLens", camera, lens);

			var lensValue = lens.replace('mm', '');

			ractive.set('focalLength', lensValue);
			ractive.set('activeID', camera);

		};

		var allroutes = function() {
			var route = window.location.hash.slice(1);
			console.log(window.location.hash, route);
		};

		// define the routing table.
		var routes = {
			'/camera/:camera/lens/:lens': cameraAndLens
		};

		// instantiate the router.
		var router = Router(routes);

		// a global configuration setting.
		router.configure({
			on: allroutes
		});

		router.init();

	});

}
