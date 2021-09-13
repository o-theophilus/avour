<script>
	import '$lib/index.css';

	import Splash from './_splash.svelte';
</script>

<main>
	<header>Adore</header>
	<slot />
	<Splash />
</main>

<style>
	main {
		position: relative;
		height: 100vh;
	}

	header {
		background-color: white;
		height: 70px;
	}
</style>
