import React from 'react';
import ReactDOM from 'react-dom';
// import { Router, Route, Link } from 'react-router';

import App from './containers/App';

// TODO:
// - add react-router: https://github.com/reactjs/react-router
// - update results based on route
// - route /0/65 - /0 = activeFactorItem, /65 = focalLength
// - improve design and styling

ReactDOM.render(
	<App />,
	document.getElementById('root')
)
