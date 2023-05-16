import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import { PageTheme, ThemeToggler } from '@inscriptors/ui-themes';
import { ContainerLayout, HorizontalLayout } from '@inscriptors/ui-kit';
import App from '../src';

const Page = () => {
	const [isDarkMode, setDarkMode] = useState(false);
	const toggleTheme = () => setDarkMode(!isDarkMode);
	const theme = isDarkMode ? 'DocVaultDark' : 'DocVaultLight';
	return (
		<PageTheme themeName={theme}>
			<ContainerLayout>
				<HorizontalLayout paddingY={4} justifyContent="right">
					<ThemeToggler onToggle={toggleTheme} />
				</HorizontalLayout>
				<App />
			</ContainerLayout>
		</PageTheme>
	);
};

const headerLifecycles = singleSpaReact({
	React,
	ReactDOM,
	rootComponent: Page
});

const { bootstrap } = headerLifecycles;
const { mount } = headerLifecycles;
const { unmount } = headerLifecycles;

export { bootstrap, mount, unmount };
