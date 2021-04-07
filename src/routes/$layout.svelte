<script>
	import '../app.scss';
	import { onMount } from 'svelte';
	import breakpoints, { mediumAndDown } from '$lib/stores/breakpoints';
	import Navigation from '$lib/Navigation.svelte';
	import { MaterialAppMin } from 'svelte-materialify/dist';
	import { browser } from '$app/env';

	onMount(async () => {
		const module = await import('svelte-materialify/src/utils/breakpoints');
		breakpoints.set(module.default);
	});
</script>

<main>
	{#if browser}
		<MaterialAppMin>
			<Navigation />
			<div class="content" class:mobile={$mediumAndDown}>
				<slot />
			</div>
		</MaterialAppMin>
	{/if}
</main>

<style lang="scss">
	main {
		padding: 0;
		margin: 0 auto;
		height: 100%;
		max-height: 100vh;
		overflow-y: hidden;
	}

	.content {
		height: 100%;
		max-height: 100%;
		overflow-y: auto;
	}
	.content:not(.mobile) {
		margin-left: 256px;
	}
</style>
