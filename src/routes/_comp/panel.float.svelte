<div id="panel_float">
	<div id="panel_float_name">Product full name</div>
	<div id="panel_float_price">Price</div>
</div>

<style>
	#panel_float {
		background-color: var(--color4);

		position: absolute;

		/* bottom: var(--pad); */
		top: var(--pad);
		right: var(--pad);

		padding: var(--pad);
		border-radius: var(--bRadius1);

		/* transition: opacity 0.3s ease-in-out; */

		pointer-events: auto;
	}
	:global(#panel_float) {
		display: none;
	}
</style>
