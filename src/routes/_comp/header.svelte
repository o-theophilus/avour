<header>
	<div class="title">Adore</div>

	<div id="profile_close" class="btn">
		<img src="adore.app/media/profile_close.svg" alt="profile_close" />
	</div>

	<div id="fullscreen" class="btn">
		<img id="fullscreen_open" src="adore.app/media/fullscreen_open.svg" alt="fullscreen_open" />
		<img id="fullscreen_close" src="adore.app/media/fullscreen_close.svg" alt="fullscreen_close" />
	</div>
</header>

<style>
	header {
		background-color: var(--color1);
		height: 70px;
		padding: 0 var(--pad);

		display: flex;
		/* justify-content: center; */
		align-items: center;
	}
	.title {
		color: var(--fcolor2);
		font-size: 2em;

		margin-right: auto;
	}

	/* .btn {
		cursor: pointer;
		pointer-events: auto;
		display: inline-block;
	} */

	#fullscreen {
		/* position: absolute; */
		/* right: 0; */
		/* padding: var(--pad); */
	}

	#fullscreen_close {
		display: none;
	}

	#profile_close {
		/* position: absolute; */
		/* right: 0; */
		/* padding: var(--pad); */
	}

	:global(#profile_close) {
		display: none;
	}
</style>
