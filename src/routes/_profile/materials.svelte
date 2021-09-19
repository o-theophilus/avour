<div class="block">
	<div class="mat" id="mat_01" />
	<div class="mat" />
	<div class="mat" />
	<div class="mat" />
</div>

<style>
	.block {
		position: relative;

		display: flex;
		flex-direction: column;
		gap: 15px;

		width: fit-content;
		top: 20px;
	}

	.mat {
		--size: 50px;

		width: var(--size);
		height: var(--size);

		background-color: var(--color3);

		border: 3px solid var(--color1);
		border-radius: 50%;

		pointer-events: auto;
		cursor: pointer;
	}
</style>
