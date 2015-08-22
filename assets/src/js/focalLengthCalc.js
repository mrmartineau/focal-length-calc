// Webpack related
var css = require('./style');

var Ractive = require('ractive');
var cropFactors = require('./cropFactors');

function focalLength() {
	window.ractive = new Ractive({
		el: '#container',
		template: '#template',

		data: {
			activeID: 10,
			focalLength: 35,
			factors: cropFactors
		},

		computed: {
			result: function() {
				return (this.get('focalLength') * this.get('activeCamera').cropFactor).toFixed(1);
			},

			activeCamera: function () {
				return this.get('factors')[this.get('activeID')];
			}
		}
	});

	ractive.observe('focalLength', function(newValue, oldValue, keypath) {
		// console.log(newValue, oldValue, keypath);
		history.pushState(null, null, '#/camera/'+ this.get('activeID') +'/lens/'+ newValue);
		localStorage.setItem('focalLength', newValue);
		debugger;
	});

	ractive.observe('activeID', function(newValue, oldValue, keypath) {
		// console.log(newValue, oldValue, keypath);
		history.pushState(null, null, '#/camera/'+ newValue +'/lens/'+ this.get('focalLength'));
		localStorage.setItem('activeCamera', newValue);
		debugger;
	});
}

module.exports = focalLength;
