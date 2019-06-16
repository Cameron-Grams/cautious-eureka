import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'BASE TEMPLATE',
        second: 'Elizabeth'
	}
});

export default app;
