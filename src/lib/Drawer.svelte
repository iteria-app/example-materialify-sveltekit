<script lang="ts">
	import { browser } from '$app/env';
	import {
		Button,
		NavigationDrawer,
		List,
		ListItem,
		Icon,
		Avatar,
		Divider
	} from 'svelte-materialify';
	import breakpoints, { mediumAndDown, smallAndDown } from './stores/breakpoints';
	import { drawerVisible } from './stores';
	import UserInfoDrawer from './UserInfoDrawer.svelte';
	import { mdiViewDashboard } from '@mdi/js';
	import { BarChartIcon, UsersIcon } from 'svelte-feather-icons';

	function resize() {
		breakpoints.update((bps) => bps);
	}

	$: if (browser) {
		$mediumAndDown = window.matchMedia($breakpoints['md-and-down']).matches;
		$smallAndDown = window.matchMedia($breakpoints['sm-and-down']).matches;
	}
</script>

<svelte:window on:resize={resize} />

<div class="drawer" class:visible={!$mediumAndDown || $drawerVisible} class:mobile={$mediumAndDown}>
	<NavigationDrawer class="theme--light">
		<UserInfoDrawer />
		<Divider />
		<List style="padding: 1rem;">
			<ListItem>
				<span slot="prepend">
					<BarChartIcon size="20" />
				</span>
				Dashboard
			</ListItem>
			<ListItem>
				<span slot="prepend">
					<UsersIcon size="20" />
				</span>
				Customers
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
	[slot='prepend'] {
		margin-right: 0.6rem;
		transform: translateY(2px);
	}
</style>
