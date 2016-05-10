import React from 'react';

const CropFactorList = React.createClass({
	getInitialState() {
		return {
			cropFactor: this.props.activeCropFactorItem
		}
	},

	handleChange(event) {
		this.props.handleFactorChange(event.target.value);
	},

	render() {
		const cropFactorItems = this.props.factors.map(function(factor, index) {
			return <option key={index} value={index}>{factor.name}</option>
		});

		let desc = this.props.factors[this.props.activeCropFactorItem].description;

		return (
			<div className="cropFactors">

				<label>Crop Factors</label>
				<br/>
				<select
					onChange={this.handleChange}
					value={this.props.activeCropFactorItem}
				>
					{cropFactorItems}
				</select>
				<div>{desc}</div>
			</div>
		);
	}
});

export default CropFactorList;
