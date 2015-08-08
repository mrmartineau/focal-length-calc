var Ractive = require('ractive');

var ractive = new Ractive({
	el: '#container',
	template: '#template',

	// Here, we're passing in some initial data
	data: {
		factor: '',

		factors: [
			{
				name: '1/3" security cameras',
				height: 4.29,
				cropFactor: 7.21,
				checked: false
			},
			{
				name: '1/2.5" (many superzoom and point-and-shoot cameras)',
				height: 4.29,
				cropFactor: 5.6,
				checked: false
			},
			{
				name: '1/2.3" (compacts and superzooms like Canon Powershot SX series)',
				height: 4.62,
				cropFactor: 5.2,
				checked: false
			},
			{
				name: '1/1.8" (high-end compacts like Canon Powershot G1 - G7)',
				height: 5.32,
				cropFactor: 4.5,
				checked: false
			},
			{
				name: '1/1.7" (high-end compacts like Canon Powershot G9 - G16)',
				height: 5.7,
				cropFactor: 4.2,
				checked: false
			},
			{
				name: '2/3" (Fujifilm X10, Fujifilm X20, Sony F828, Sony F717)',
				height: 6.6,
				cropFactor: 3.6,
				checked: false
			},
			{
				name: '1" (Nikon 1/CX / Sony RX100-series / Sony RX10)',
				height: 8.8,
				cropFactor: 2.7,
				checked: false
			},
			{
				name: 'Four Thirds, Micro Four Thirds (used by Olympus and Panasonic for DSLR and MILC respectively)',
				height: 13,
				cropFactor: 2,
				checked: false
			},
			{
				name: 'Sigma Foveon X3 (old sensor pre Merrill cameras)',
				height: 13.8,
				cropFactor: 1.7,
				checked: false
			},
			{
				name: 'Canon APS-C',
				height: 14.8,
				cropFactor: 1.6,
				checked: false
			},
			{
				name: 'General APS-C (Sigma Foveon X3, Fujifilm X-mount, Nikon DX, Pentax K, Ricoh GXR, & Ricoh GR, Samsung NX, Sony α DT & E-Mount (NEX))',
				height: 15.6,
				cropFactor: 1.5,
				checked: false
			},
			{
				name: 'APS-H (Canon, Leica M8)',
				height: 18.6,
				cropFactor: 1.3,
				checked: false
			},
			{
				name: '35mm full frame (Canon EF, Leica M9, Nikon FX, Sony α, FE-Mount, Sony RX1)',
				height: 24,
				cropFactor: 1,
				checked: true
			},
			{
				name: 'Medium format (Hasselblad, Leaf, Phase One, Pentax 645D)',
				height: 33,
				cropFactor: 0.79,
				checked: false
			},
			{
				name: 'Medium format (Hasselblad, Leaf, Phase One)',
				height: 40.4,
				cropFactor: 0.64,
				checked: false
			}
		],
		focalLength: 35
	},

	computed: {
		result: function() {
			return (this.get('focalLength') * this.get('factor')).toFixed(1);
		}
	}
});
