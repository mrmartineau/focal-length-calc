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
			return <option key={index} value={index}>{factor.name} - {factor.description}</option>
		});

		return (
			<div>
				<h2>Crop Factors</h2>
				<select
					onChange={this.handleChange}
					value={this.props.activeCropFactorItem}
				>
					{cropFactorItems}
				</select>
			</div>
		);
	}
});

export default CropFactorList;
