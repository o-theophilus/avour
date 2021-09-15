<script>
	let active = true;
</script>

<div id="splash_screen" class:active>
	<div class="logo">
		<img src="logo.png" alt="Avour" />
	</div>
	<br />
	<div id="loading">
		<div
			id="loading_bar"
			on:click={() => {
				active = false;
			}}
		>
			<div id="loading_fill" />
			<div id="loading_text">Loading</div>
		</div>
	</div>
</div>

<style>
	#splash_screen {
		--buttonHeight: 50px;
		--buttonWidth: 180px;

		display: none;

		position: absolute;
		inset: 0;

		height: 100vh;
		
		flex-direction: column;
		justify-content: center;
		align-items: center;

		background-color: var(--color1);
	}

	#splash_screen.active {
		display: flex;
	}

	.logo {
		display: flex;
		align-items: center;
		gap: 10px;
	}
	img {
		height: 80px;
	}

	:global(#loading) {
		display: block;
	}

	#loading_bar {
		position: relative;

		display: flex;
		justify-content: center;
		align-items: center;

		width: var(--buttonWidth);
		height: var(--buttonHeight);

		padding: 2px;
		border: 2px solid var(--color2);
		border-radius: var(--bRadius1);

		transition: all var(--animTime1) ease-in-out;
	}

	:global(#loading_bar) {
		cursor: unset;
		pointer-events: none;
	}

	#loading_fill {
		position: absolute;
		left: 0;

		height: 100%;
		background-color: var(--color3);

		border-radius: var(--bRadius1);
	}
	:global(#loading_fill) {
		width: 0;
	}

	#loading_text {
		position: absolute;
		color: var(--fcolor2);
		/* mix-blend-mode: unset; */
	}

	:global(#loading_btn) {
		display: none;
	}
</style>
