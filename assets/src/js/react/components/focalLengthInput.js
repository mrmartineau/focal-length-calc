import React from 'react';

const FocalLengthInput = React.createClass({
	getInitialState() {
		return {
			focalLength: this.props.focalLength
		}
	},

	handleChange(event) {
		this.props.handleFocalLengthChange(event.target.value);
	},

	render() {
		return (
			<div className="focalLengthInput">
				<label>Focal length of your lens?</label>
				<input
					type="text"
					className="form-input"
					value={this.props.focalLength}
					onChange={this.handleChange}
				/>
			</div>
		);
	},

});

export default FocalLengthInput;
