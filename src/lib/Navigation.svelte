<script lang="ts">
	import { mdiBell, mdiClose, mdiLogout, mdiMenu } from '@mdi/js';
	import { AppBar, Button, Icon } from 'svelte-materialify';
	import Drawer from './Drawer.svelte';
	import Logo from './Logo.svelte';
	import Overlay from './Overlay.svelte';
	import { drawerVisible } from './stores';
	import { mediumAndDown } from './stores/breakpoints';
</script>

<Overlay />
<AppBar flat={true} class="primary-color" style="z-index: 10;">
	<div class="appbar">
		<div class="left">
			<a href="/">
				<Logo />
			</a>
		</div>
		<div class="right">
			{#if $mediumAndDown}
				<Button icon class="white-text" on:click={() => drawerVisible.set(true)}>
					<Icon path={$drawerVisible ? mdiClose : mdiMenu} />
				</Button>
			{:else}
				<Button icon class="white-text">
					<Icon path={mdiBell} />
				</Button>

				<Button icon class="white-text">
					<Icon path={mdiLogout} />
				</Button>
			{/if}
		</div>
	</div>
	<Overlay />
	<div class="drawer">
		<Drawer />
	</div>
</AppBar>

<style lang="scss">
	.appbar {
		display: flex;
		justify-content: space-between;
		width: 100%;
	}
	.drawer {
		z-index: 13;
	}
	.left,
	.right {
		width: max-content;
		display: flex;
		align-items: center;
	}
	.right {
		justify-content: center;
		gap: 1rem;
		padding-right: 1rem;
	}
</style>
