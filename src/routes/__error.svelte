<script context="module">
	export function load({ error, status }) {
		return {
			props: {
				status,
				error
			}
		};
	}
</script>

<script>
	export let status;
	export let error;
</script>

<h1>{status} {error.name}</h1>
<p>{error.message}</p>
<br />
<br />
<video loop autoplay muted>
	<source src="/site/404.mp4" type="video/mp4" />
</video>
<br />
<br />
Back to <a href="/">Home</a>
