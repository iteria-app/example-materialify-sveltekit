<script>
	import { mediumAndDown, smallAndDown } from '$lib/stores/breakpoints';
	import { Divider } from 'svelte-materialify';
	import { Button, Card, CardTitle, Chip } from 'svelte-materialify/dist';
</script>

<div class="wrapper" class:mobile={$smallAndDown} class:tablet={$mediumAndDown}>
	<Card outlined style="min-height: 300px;">
		<CardTitle class="latest--orders--card-title">
			<div class="title">
				<span>Latest Orders</span>
				<div class="right">
					<Button depressed={true} style="background: transparent">
						<span>Last 7 Days</span>
						<span class="material-icons">arrow_drop_down</span>
					</Button>
				</div>
			</div>
		</CardTitle>
		<Divider />
		<div class="table-wrapper">
			<table>
				<tr>
					<th>Order Ref</th>
					<th>Customer</th>
					<th>Date</th>
					<th>Status</th>
				</tr>
				<tr class="border">
					<td colspan="4" />
				</tr>
				{#each [1, 2, 3, 4, 5, 6] as i}
					<tr>
						<td>CDD1049</td>
						<td>Ekaterina Tankova</td>
						<td>12/04/2019</td>
						<td>
							<Chip class="ma-2 primary-color margin-zero">Primary</Chip>
						</td>
					</tr>
					<tr class="border">
						<td colspan="4" />
					</tr>
				{/each}
			</table>
		</div>
	</Card>
</div>

<style>
	.title {
		display: flex;
		justify-content: space-between;
		width: 100%;
	}
	.mobile :global(.latest--orders--card-title) {
		padding-right: 0;
	}
	table {
		width: 100%;
		height: 100%;
		min-width: 500px;
	}
	.table-wrapper {
		max-width: 100%;
		overflow-x: auto;
	}
	table {
		padding: 1rem;
	}
	table th {
		text-align: left;
	}
	:global(.margin-zero) {
		margin: 4rem;
		margin-left: 0 !important;
	}
	table .border {
		left: 0;
		position: absolute;
		width: 100%;
		height: 1px;
		background: var(--theme-dividers);
	}
</style>
