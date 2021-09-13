<script>
	import '$lib/index.css';

	import Splash from './_splash.svelte';
	import Header from './_comp/header.svelte';
</script>

<main>
	<Header />
	<slot />
	<Splash />
</main>

<style>
	main {
		position: relative;
		height: 100vh;
	}
</style>
