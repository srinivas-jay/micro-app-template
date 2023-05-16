import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import Wrapper from './index';

const headerLifecycles = singleSpaReact({
	React,
	ReactDOM,
	rootComponent: Wrapper
});

const { bootstrap, mount, unmount } = headerLifecycles;

export { bootstrap, mount, unmount };
