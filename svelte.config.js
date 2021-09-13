import vercel from '@sveltejs/adapter-vercel';

const config = {
	kit: {
		target: '#svelte',
		adapter: vercel()
	}
};

export default config;
