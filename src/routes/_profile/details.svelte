<div id="profile_item_details">
	<div id="profile_item_name">Item Name</div>
	<div id="profile_item_price">Item Price</div>
	<div id="profile_item_desc">
		Item Description
		<br /> Product description goes here
	</div>
</div>

<style>
	#profile_item_details {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;

		height: 30%;

		padding: var(--pad);

		pointer-events: auto;

	}

	@media screen and (min-width: 800px) {
		#profile_item_details {
			padding: var(--pad2);
		}
	}


	#profile_item_name {
		font-size: 2rem;
	}
	#profile_item_price {
		font-size: 2rem;
	}
</style>
