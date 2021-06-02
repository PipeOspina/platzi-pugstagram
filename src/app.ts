import App from './containers/App.svelte';
import 'svelte';

const app = new App({
    target: document.querySelector('main')
});

export default app;
