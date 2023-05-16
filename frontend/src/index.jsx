import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import singleSpaReact from 'single-spa-react';
import { BrowserRouter } from 'react-router-dom';
import MicroApp from './microApp';

const Wrapper = ({ needRouter, ...props }) => {
	if (needRouter) {
		return (
			<BrowserRouter>
				<MicroApp {...props} />
			</BrowserRouter>
		);
	} else {
		return <MicroApp {...props} />;
	}
};

Wrapper.propTypes = {
	needRouter: PropTypes.bool
};

const headerLifecycles = singleSpaReact({
	React,
	ReactDOM,
	rootComponent: Wrapper
});

const { bootstrap } = headerLifecycles;

const { mount } = headerLifecycles;

const { unmount } = headerLifecycles;

export { bootstrap, mount, unmount };

export default Wrapper;
