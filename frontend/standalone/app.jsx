import { registerApplication, start } from 'single-spa';

registerApplication(
	'@inscriptors/chatbot',
	() => import('./standaloneWrapper'),
	(location) => location.pathname.startsWith('/')
);

start();
