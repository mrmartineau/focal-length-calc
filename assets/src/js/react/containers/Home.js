import React from 'react';
import cropFactors from '../../cropFactors';
import CropFactorList from '../components/cropFactorList';
import FocalLengthInput from '../components/focalLengthInput';
import Result from '../components/result';

const Home = React.createClass({
	getInitialState() {
		return {
			focalLength: '35',
			activeCropFactorItem: '10'
		}
	},

	handleFactorChange(val) {
		this.setState({
			activeCropFactorItem: val
		});
	},

	handleFocalLengthChange(val) {
		this.setState({
			focalLength: val
		});
	},

	render() {
		return (
			<div>
				<h1>Lens focal length calculator</h1>
				<p>Have you ever wondered if a 35mm lens is on a micro 4/3 camera, what is the new focal length? This calculates the equivalent focal length and magnification of your lenses.</p>
				<CropFactorList
					handleFactorChange={this.handleFactorChange}
					factors={cropFactors}
					activeCropFactorItem={this.state.activeCropFactorItem}
				/>
				<FocalLengthInput
					handleFocalLengthChange={this.handleFocalLengthChange}
					focalLength={this.state.focalLength}
				/>
				<Result
					factors={cropFactors}
					activeCropFactorItem={this.state.activeCropFactorItem}
					focalLength={this.state.focalLength}
				/>
			</div>
		);
	}
});

export default Home;
