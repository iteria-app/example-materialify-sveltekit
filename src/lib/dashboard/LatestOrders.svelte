<script>
	import { _ } from 'svelte-i18n';
	import { mediumAndDown, smallAndDown } from '$lib/stores/breakpoints';
	import { CardActions, Divider } from 'svelte-materialify';
	import { Button, Card, CardTitle, Chip } from 'svelte-materialify/dist';
	import { latestOrders } from './data';
</script>

<div class="wrapper" class:mobile={$smallAndDown} class:tablet={$mediumAndDown}>
	<Card style="min-height: 300px;">
		<CardTitle class="latest--orders--card-title">
			<div class="title">
				<span>{$_('app.dashboard.latestOrders')}</span>
				<div class="right">
					<Button
						depressed={true}
						style="background: transparent;padding: 1rem 0.4rem;"
						size="x-small"
					>
						<span>{$_('app.dashboard.last7Days')}</span>
						<span class="material-icons">arrow_drop_down</span>
					</Button>
				</div>
			</div>
		</CardTitle>
		<Divider />
		<div class="table-wrapper">
			<table>
				<tr>
					<th>{$_('app.dashboard.orderRef')}</th>
					<th>{$_('app.dashboard.customer')}</th>
					<th>{$_('app.dashboard.date')}</th>
					<th>{$_('app.dashboard.status')}</th>
				</tr>
				<tr class="border">
					<td colspan="4" />
				</tr>
				{#each $latestOrders as order}
					<tr>
						<td>{order.orderRef}</td>
						<td>{order.customer}</td>
						<td>{order.date}</td>
						<td>
							<Chip class="ma-2 primary-color margin-zero">{order.status}</Chip>
						</td>
					</tr>
					<tr class="border">
						<td colspan="4" />
					</tr>
				{/each}
			</table>
		</div>
		<CardActions>
			<div class="actions">
				<Button depressed={true}
					style="background: transparent;padding: 1rem 0.4rem;color: blue;"
					size="small"
					>
					View All
					<span class="material-icons">arrow_right</span>
				</Button>
			</div>
		</CardActions>
	</Card>
</div>

<style>
	.title {
		display: flex;
		justify-content: space-between;
		width: 100%;
	}
	.mobile :global(.latest--orders--card-title) {
		padding-right: 0.2rem;
	}
	.title > span:first-child {
		margin-top: 0.2rem;
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
	.actions {
		width: 100%;
		display: flex;
		justify-content: flex-end;
	}
</style>
