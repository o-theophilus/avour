<script>
	import BG from './bg.svelte';
	import Close from './close_btn.svelte';
	import Details from './details.svelte';
	import Materials from './materials.svelte';
</script>

<BG />

<div id="profile">
	<div class="block">
		<Close />
		<Materials />
		<Details />
	</div>
</div>

<style>
	#profile {
		position: absolute;
		inset: 0;
		pointer-events: none;
		height: 100%;
	}
	:global(#profile) {
		display: none;
	}

	.block {
		position: relative;

		display: flex;
		flex-direction: column;

		height: 100%;
		width: min(100%, var(--ms01));
		margin: auto;

		padding: var(--pad);
	}

	@media screen and (min-width: 800px) {
		.block {
			padding: var(--pad2);
		}
	}
</style>
