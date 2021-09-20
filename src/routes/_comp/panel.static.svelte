<script>
	import { fade } from 'svelte/transition';
</script>

<div id="panel_static" transition:fade>
	<div id="panel_static_name">Item Name</div>
	<div id="panel_static_price">Item Price</div>
	<div class="block">
		<div id="panel_static_goto_details" class="btn">View</div>
		<div class="btn">Add Cart</div>
	</div>
</div>

<style>
	#panel_static {
		--width: 300px;
		background-color: var(--color4);

		position: absolute;
		bottom: var(--mobileBottom);
		left: calc(50% - calc(var(--width) / 2));

		padding: var(--pad);
		border-radius: var(--bRadius1);

		transition: opacity 0.3s ease-in-out;

		width: var(--width);

		pointer-events: auto;
	}

	:global(#panel_static) {
		display: none;
	}

	.block {
		display: flex;
		margin-top: var(--pad);
		gap: var(--pad);
	}
	.block div {
		width: 100%;
	}
</style>
