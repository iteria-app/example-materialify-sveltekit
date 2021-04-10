<script lang="ts">
	import type { LocalesDictionary } from 'svelte-i18n/types/runtime/types';

	import '../app.scss';
	import { mediumAndDown } from '$lib/stores/breakpoints';
	import Navigation from '$lib/Navigation.svelte';
	import { MaterialAppMin } from 'svelte-materialify/dist';
	import { browser } from '$app/env';
	import { dictionary, locale } from 'svelte-i18n';
	import lang from '$lib/lang/index.json';
	import { page } from '$app/stores';
	import { drawerVisible } from '$lib/stores';

	dictionary.set(<LocalesDictionary>lang);
	locale.set('en');

	let path = '';
	let ready = false;
	let pageElement: HTMLElement;
	setTimeout(() => (ready = true), 2000);

	function pageChanged(currentPath) {
		if (ready && path !== currentPath) {
			// reset scroll positon
			$drawerVisible = false;
			pageElement.scrollTop = 0;
		}
		path = $page.path;
	}

	$: pageChanged($page.path);
</script>

<main>
	{#if browser}
		<MaterialAppMin>
			<Navigation />
			<div class="content" class:mobile={$mediumAndDown} bind:this={pageElement}>
				<slot />
			</div>
		</MaterialAppMin>
	{/if}
</main>

<style>
	main {
		padding: 0;
		margin: 0 auto;
		height: 100%;
		max-height: 100vh;
		overflow-y: hidden;
	}

	.content {
		height: calc(100vh - 3.6rem);
		max-height: 100%;
		overflow-y: auto;
	}
	.content:not(.mobile) {
		margin-left: 256px;
	}
</style>
