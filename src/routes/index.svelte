<script>
	import Scene from './_scene.svelte';
	import PanelStatic from './_comp/panel.static.svelte';
	import PanelFloat from './_comp/panel.float.svelte';
	import Log from './_comp/log.svelte';
</script>

<div class="scene">
	<Scene />
	<PanelStatic />
	<PanelFloat />
	<Log />
</div>


<style>
	.scene{
		/* display: flex; */
	}
</style>