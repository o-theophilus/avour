<div class="bg">
	<div class="circle c1" />
	<div class="circle c2" />
</div>

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
		width: min(100%, var(--ms01));
		margin: auto;
		padding: var(--pad2);
		padding-bottom: var(--mobileBottom);
	}

	#profile_item_name {
		/* pointer-events: auto; */
		font-size: 2rem;
		margin-bottom: auto;
	}
	#profile_item_price {
		font-size: 2rem;
	}

	.bg {
		/* background-color: red; */

		width: min(100%, var(--ms01));
		margin: auto;

		position: absolute;

		inset: 0;
		pointer-events: none;

		z-index: -2;
	}
	.circle {
		position: absolute;

		background-color: var(--color3);
		width: var(--size);
		height: var(--size);

		border-radius: 50%;
	}
	.c1 {
		--size: min(40vh, 80vw);

		top: calc(50% - calc(var(--size) / 2));
		right: 0;
	}
	.c2 {
		--size: min(10vh, 20vw);

		top: calc(30% - calc(var(--size) / 2));
		left: 0;
	}
</style>
