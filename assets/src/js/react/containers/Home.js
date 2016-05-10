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
		var inlineStyles = {
			'marginTop': '50px'
		};

		return (
			<div>
				<header className="header">
					<div className="header-inner l-container">
						<h1 className="header-title p-name" itemprop="headline">Lens focal length calculator</h1>
						<div className="header-copy">
							<p>Have you ever wondered if a 35mm lens is on a micro 4/3 camera, what is the new focal length? This calculates the equivalent focal length and magnification of your lenses.</p>
						</div>
					</div>
				</header>

				<div className="l-container" style={inlineStyles}>
					<FocalLengthInput
						handleFocalLengthChange={this.handleFocalLengthChange}
						focalLength={this.state.focalLength}
					/>
					<CropFactorList
						handleFactorChange={this.handleFactorChange}
						factors={cropFactors}
						activeCropFactorItem={this.state.activeCropFactorItem}
					/>
					<Result
						factors={cropFactors}
						activeCropFactorItem={this.state.activeCropFactorItem}
						focalLength={this.state.focalLength}
					/>
				</div>
			</div>
		);
	}
});

export default Home;
