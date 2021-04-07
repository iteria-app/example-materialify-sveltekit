<script lang="ts">
	import { browser } from '$app/env';
	import { Button, NavigationDrawer, List, ListItem, Icon } from 'svelte-materialify';
	import breakpoints, { mediumAndDown } from './stores/breakpoints';
	import { drawerVisible } from './stores';

	function resize() {
		breakpoints.update((bps) => bps);
	}

	$: if (browser) {
		$mediumAndDown = window.matchMedia($breakpoints['md-and-down']).matches;
	}
</script>

<svelte:window on:resize={resize} />

<div class="drawer" class:visible={$drawerVisible} class:mobile={$mediumAndDown}>
	<NavigationDrawer class="theme--light">
		<List>
			<ListItem>
				<span slot="prepend">
					<!-- <Icon path={mdiViewDashboard} /> -->
				</span>
				Dashboard
			</ListItem>
			<ListItem>
				<span slot="prepend">
					<!-- <Icon path={mdiAccountBox} /> -->
				</span>
				Account
			</ListItem>
			<ListItem>
				<span slot="prepend">
					<!-- <Icon path={mdiGavel} /> -->
				</span>
				Admin
			</ListItem>
		</List>
		<span slot="append" class="pa-2">
			<Button block>Logout</Button>
		</span>
	</NavigationDrawer>
</div>

<style lang="scss">
	.drawer {
		position: fixed;
		top: var(--s-app-bar-height);
		left: 0;
		height: calc(100vh - var(--s-app-bar-height));
		transform: translateX(-100%);
		transition: transform 250ms;
	}
	.visible {
		transform: translateX(0);
	}
	.mobile {
		top: 0;
		height: 100vh;
	}
</style>
