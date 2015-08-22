var webpack = require('webpack');

// https://github.com/petehunt/webpack-howto#6-feature-flags
// definePlugin takes raw strings and inserts them, so you can put strings of JS if you want.
var definePlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')),
  __PRERELEASE__: JSON.stringify(JSON.parse(process.env.BUILD_PRERELEASE || 'false'))
});
// if (__DEV__) {
//   console.warn('Extra logging');
// }
// // ...
// if (__PRERELEASE__) {
//   showSecretFeature();
// }

module.exports = {
	entry: "./index.js",

	output: {
		path: __dirname,
		filename: "assets/dist/js/bundle.js"
	},

	resolve: {
		// you can now require('file') instead of require('file.coffee')
		extensions: ['', '.js', '.json', '.scss']
	},

	module: {
		loaders: [
			{ test: /\.scss$/, loader: 'style!css!sass' }, // use ! to chain loaders
			{ test: /\.css$/, loader: 'style!css!autoprefixer?browsers=last 2 versions' },
			{test: /\.(png|jpg)$/, loader: 'url?limit=8192'} // inline base64 URLs for <=8k images, direct URLs for the rest
		]
	},

  plugins: [definePlugin]
};
