<script lang="ts">
	import LatestOrders from '$lib/dashboard/LatestOrders.svelte';
	import LatestProducts from '$lib/dashboard/LatestProducts.svelte';
	import LatestSales from '$lib/dashboard/LatestSales.svelte';
	import TrafficByDevice from '$lib/dashboard/TrafficByDevice.svelte';
	import { mediumAndDown, smallAndDown } from '$lib/stores/breakpoints';
	import Budget from '$lib/dashboard/Budget.svelte';
	import TotalCustomers from '$lib/dashboard/TotalCustomers.svelte';
	import TasksProgress from '$lib/dashboard/TasksProgress.svelte';
	import TotalProfit from '$lib/dashboard/TotalProfit.svelte';
</script>

<svelte:head>
	<title>Dashboard</title>
</svelte:head>

<section class:tablet={$mediumAndDown} class:mobile={$smallAndDown}>
	<div class="cards">
		<div class="card">
			<Budget />
		</div>
		<div class="card">
			<TotalCustomers />
		</div>
		<div class="card">
			<TasksProgress />
		</div>
		<div class="card">
			<TotalProfit />
		</div>
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

<style>
	section {
		background: #eee;
		padding: 1.5rem;
		min-height: 100%;
		display: flex;
		flex-direction: column;
		gap: 1.2rem;
	}
	.mobile {
		padding: 2vw;
	}
	.cards {
		display: flex;
		gap: 1.5rem;
	}
	.card {
		flex-grow: 1;
	}
	.tablet .cards {
		flex-wrap: wrap;
	}
	.tablet .card {
		width: calc(50% - 0.75rem);
	}
	.mobile .card {
		width: 100%;
	}
	.other-cards {
		display: flex;
		flex-wrap: wrap;
		gap: 1.5rem;
	}
	.size-large {
		width: calc(65% - 0.75rem);
	}
	.size-small {
		width: calc(35% - 0.75rem);
	}

	.tablet .size-large {
		width: 100%;
	}

	.tablet .size-small {
		flex-basis: calc(50% - 0.75rem);
	}

	.mobile .size-small {
		flex-basis: 100%;
	}
</style>
