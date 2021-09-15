<script>
	import '$lib/index.css';

	import Splash from './_splash.svelte';
	import Header from './_comp/header.svelte';
</script>

<Header />
<main>
	<slot />
</main>
<Splash />

<style>
	main {
		position: relative;
		height: calc(100vh - var(--headerHeight));
	}
</style>
