const sveltePreprocess = require('svelte-preprocess');
const static = require('@sveltejs/adapter-static');
const pkg = require('./package.json');
const { replaceCodePlugin } = require("vite-plugin-replace");

/** @type {import('@sveltejs/kit').Config} */
module.exports = {
	preprocess: sveltePreprocess(),
	kit: {
		adapter: static(),
		target: '#svelte',
		vite: {
			ssr: {
				noExternal: Object.keys(pkg.dependencies || {})
			},
			plugins: [
				replaceCodePlugin({
					replacements: [
						{
							from: "process.env.NODE_ENV",
							to: JSON.stringify(process.env.NODE_ENV),
						}
					],
				})
			]
		}
	}
};
