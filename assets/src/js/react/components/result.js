import React from 'react';

const Result = React.createClass({
	getInitialState() {
		return {
			focalLength: this.props.focalLength
		}
	},

	calcFocalLength() {
		return (this.props.focalLength * this.props.factors[this.props.activeCropFactorItem].cropFactor).toFixed(1)
	},

	render() {
		return (
			<div className="result">
				<h3>with that lens on your camera, it is equivalent to a</h3>
				<div className="result">
					{this.calcFocalLength()}mm lens
				</div>
			</div>
		);
	}
});

// this.get('focalLength') * this.get('activeCamera').cropFactor).toFixed(1)
export default Result;
