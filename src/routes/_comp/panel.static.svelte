<div id="panel_static">
	<div id="panel_static_name">Product full name</div>
	<div id="panel_static_price">Price</div>
	<button id="details" class="btn">More</button>
	<button class="btn">Add Cart</button>
</div>

<style>
	#panel_static {
		background-color: white;

		position: absolute;
		bottom: var(--pad);
		left: var(--pad);

		padding: var(--pad);
		border-radius: var(--bRadius1);

		transition: opacity 0.3s ease-in-out;

		pointer-events: auto;
	}
</style>
