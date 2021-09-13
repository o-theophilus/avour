<script>
</script>

<div id="ui">
	<div id="fullscreen" class="btn">
		<img id="fullscreen_open" src="media/fullscreen_open.svg" alt="fullscreen_open" />
		<img id="fullscreen_close" src="media/fullscreen_close.svg" alt="fullscreen_close" />
	</div>

	<div id="profile_close" class="btn">
		<img src="media/profile_close.svg" alt="profile_close" />
	</div>
</div>

<style>
	#ui {
		display: none;
		position: absolute;
		inset: 0;

		pointer-events: none;
	}

	.btn {
		cursor: pointer;
		pointer-events: auto;
		display: inline-block;
	}

	#fullscreen {
		position: absolute;
		right: 0;
		padding: var(--pad);
	}
	#fullscreen_close,
	#profile_close {
		display: none;
	}

	#profile_close {
		position: absolute;
		/* right: 0; */
		padding: var(--pad);
	}
</style>
