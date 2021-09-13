<script>
	let active = true;
</script>

<div id="splash_screen" class:active>
	<div class="title">Adore</div>
	<br />
	<div id="loading">
		<div id="loading_bar">
			<div id="loading_fill" />
		</div>
		<br />

		<h3>Loading <span id="loading_text">0</span>%</h3>
	</div>

	<div
		class="btn"
		id="loading_btn"
		on:click={() => {
			active = false;
		}}
	>
		Enter Shop
	</div>
</div>

<style>
	#splash_screen {
		display: none;

		position: absolute;
		inset: 0;

		flex-direction: column;
		justify-content: center;
		align-items: center;

		background-color: var(--color1);
	}

	#splash_screen.active {
		display: flex;
	}

	.title{
		/* text-align: center; */
		color: var(--fcolor2);
		font-size: 3em;

	}

	#loading {
		width: 50%;
	}

	#loading_bar {
		display: flex;
		justify-content: center;

		width: 100%;
		padding: 2px;

		border: 2px solid var(--color2);

		border-radius: var(--bRadius2);
	}
	#loading_fill {
		height: 10px;
		background-color: var(--color3);

		border-radius: var(--bRadius2);
	}

	h3 {
		text-align: center;
		color: var(--fcolor2);
	}
</style>
