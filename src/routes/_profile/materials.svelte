<div class="block" id="mat_block">
	<div class="mat" id="mat_1" />
	<div class="mat" id="mat_2" />
	<div class="mat" id="mat_3" />
	<div class="mat" id="mat_4" />
	<div class="mat" id="mat_5" />
	<div class="mat" id="mat_6" />
	<div class="mat" id="mat_7" />
	<div class="mat" id="mat_8" />
	<div class="mat" id="mat_9" />
	<div class="mat" id="mat_10" />
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
	:global(#mat_1) {
		display: none;
	}
	:global(#mat_2) {
		display: none;
	}
	:global(#mat_3) {
		display: none;
	}
	:global(#mat_4) {
		display: none;
	}
	:global(#mat_5) {
		display: none;
	}
	:global(#mat_6) {
		display: none;
	}
	:global(#mat_7) {
		display: none;
	}
	:global(#mat_8) {
		display: none;
	}
	:global(#mat_9) {
		display: none;
	}
	:global(#mat_10) {
		display: none;
	}
</style>
