<div class="bg">
	<div class="block">
		<div class="circle c1" />
		<!-- <div class="circle c2" /> -->
	</div>
</div>

<style>
	.bg {
		position: absolute;
		inset: 0;
		z-index: -2;

		background-color: var(--color5);

		/* width: min(100%, var(--ms01)); */
		margin: auto;

		pointer-events: none;
	}

	.bg .block {
		position: relative;
		background-color: white;
		/* display: flex;
		flex-direction: column; */

		height: 100%;
		width: min(100%, var(--ms01));
		margin: auto;
		/* padding: var(--pad2);
		padding-bottom: var(--mobileBottom); */
		overflow: hidden;
	}

	.circle {
		position: absolute;

		background-color: var(--color3);
		width: var(--size);
		height: var(--size);

		border-radius: 50%;
	}
	.c1 {
		--size: min(800px, 80vh);

		top: -20%;
		left: 40%;
	}
	/* .c2 {
		--size: 5vw;

		top: 100px;
		left: 50px;
	} */
</style>
