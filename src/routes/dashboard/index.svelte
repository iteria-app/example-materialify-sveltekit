<script lang="ts">
	import LatestOrders from '$lib/dashboard/LatestOrders.svelte';

	import LatestProducts from '$lib/dashboard/LatestProducts.svelte';

	import LatestSales from '$lib/dashboard/LatestSales.svelte';
	import TopCards from '$lib/dashboard/TopCards.svelte';
	import TrafficByDevice from '$lib/dashboard/TrafficByDevice.svelte';
	import { mediumAndDown, smallAndDown } from '$lib/stores/breakpoints';
	import { Avatar, Card, CardActions, Container, ProgressLinear } from 'svelte-materialify';
</script>

<section class:tablet={$mediumAndDown} class:mobile={$smallAndDown}>
	<div class="top-cards">
		<TopCards />
	</div>
	<div class="other-cards">
		<div class="size-large">
			<LatestSales />
		</div>
		<div class="size-small">
			<TrafficByDevice />
		</div>
		<div class="size-small">
			<LatestProducts />
		</div>
		<div class="size-large">
			<LatestOrders />
		</div>
	</div>
</section>

<style lang="scss">
	section {
		background: #eee;
		padding: 2rem;
		min-height: 100%;
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}
	.mobile {
		padding: 2vw;
	}
	.top-cards {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 2rem;
		@media screen and (max-width: 400px) {
			display: flex;
			flex-direction: column;
		}
	}
	.other-cards {
		display: flex;
		flex-wrap: wrap;
		gap: 2rem;
	}
	.size-large {
		width: calc(65% - 1rem);
	}
	.size-small {
		width: calc(35% - 1rem);
	}

	.tablet .size-large {
		width: 100%;
	}

	.tablet .size-small {
		flex-basis: calc(50% - 1rem);
	}

	.mobile .size-small {
		flex-basis: 100%;
	}
</style>
