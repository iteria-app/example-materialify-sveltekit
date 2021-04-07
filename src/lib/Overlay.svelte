<script lang="ts">
	import { mediumAndDown } from './stores/breakpoints';
	import { drawerVisible } from './stores';
</script>

{#if $mediumAndDown && $drawerVisible}
	<div class="overlay" on:click={() => drawerVisible.set(false)} />
{/if}

<style lang="scss">
	.overlay {
		position: absolute;
		width: 100%;
		top: 0;
		left: 0;
		right: 0;
		height: 100%;
		z-index: 9;
		background: #00000055;
        cursor: pointer;
	}
</style>
