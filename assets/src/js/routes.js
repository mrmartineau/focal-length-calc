var Router = require('director').Router;

module.exports = function routes() {
	// Route: #/camera/:camera/lens/:lens
	var cameraAndLens = function (camera,lens) {
		console.log("cameraAndLens", camera, lens);

		var lensValue = lens.replace('mm', '');

		// if (ractive !== undefined) {
			ractive.set('focalLength', lensValue);
			ractive.set('activeID', camera);
		// }
		debugger;

	};

	var allroutes = function() {
		var route = window.location.hash.slice(2);
		console.log(route);
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
}
