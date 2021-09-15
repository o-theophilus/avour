<div id="profile">
	<div class="block">
		<div id="profile_item_name">Item Name</div>

		<div id="profile_item_details">
			<div id="profile_item_price">Item Price</div>
			<div id="profile_item_desc">
				Item Description
				<br /> bls bla bla bls bla bla bls bla bla bls bla bla bls bla bla bls bla bla bls bla bla bls
				bla bla bls bla bla bls bla bla bls bla bla bls bla bla bls bla bla bls bla bla bls bla bla bls
				bla bla bls bla bla bls bla bla bls bla bla bls bla bla bls bla bla bls bla bla bls bla bla bls
				bla bla bls bla bla bls bla bla bls bla bla bls bla bla bls bla bla bls bla bla
			</div>
		</div>
	</div>
</div>

<style>
	#profile {
		position: absolute;
		inset: 0;
		pointer-events: none;
	}
	:global(#profile) {
		display: none;
	}

	.block {
		display: flex;
		flex-direction: column;

		height: 100%;
		width: min(100%, 800px);
		margin: auto;
		padding: var(--pad2);
		padding-bottom: 80px;
	}

	#profile_item_name {
		/* pointer-events: auto; */
		font-size: 2rem;
		margin-bottom: auto;
	}
	#profile_item_price {
		font-size: 2rem;
	}
</style>
