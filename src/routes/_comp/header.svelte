<script>
	import SVG from '$lib/svg.svelte';
</script>

<header>
	<div class="block">
		<div class="logo">
			<img src="logo.png" alt="Avour" />
		</div>

		<div id="fullscreen">
			<div id="fullscreen_open" class="fullscreen">
				<SVG type="fullscreen_open" size="40" />
			</div>
			<div id="fullscreen_close" class="fullscreen">
				<SVG type="fullscreen_close" size="40" />
			</div>
		</div>
	</div>
</header>

<style>
	header {
		background-color: var(--color1);
	}
	.block {
		display: flex;
		gap: 20px;
		align-items: center;

		height: 70px;
		width: min(var(--ms01), 100%);

		margin: auto;
		padding: 0 var(--pad);
	}
	.logo {
		display: flex;
		align-items: center;
		gap: 10px;

		margin-right: auto;
	}
	img {
		height: 50px;
	}

	.fullscreen {
		cursor: pointer;
		fill: var(--color2);
	}

	:global(#fullscreen) {
		display: unset;
	}

	:global(#fullscreen_open) {
		display: unset;
	}

	:global(#fullscreen_close) {
		display: none;
	}
</style>
