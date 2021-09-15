<script>
	$: log = false;
</script>

{#if log}
	<div id="log">Log</div>
{/if}
<input bind:checked={log} type="checkbox" />

<style>
	#log {
		pointer-events: none;

		background-color: rgba(255, 255, 255, 0.345);

		position: absolute;
		bottom: var(--pad);
		left: var(--pad);
		right: var(--pad);

		padding: var(--pad);

		font-size: 0.7rem;
	}

	input {
		position: absolute;
		top: 80px;
		right: var(--pad);
	}
</style>
