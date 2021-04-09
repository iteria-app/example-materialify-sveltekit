<script>
	import { _ } from 'svelte-i18n';
	import { Avatar, Card } from 'svelte-materialify';
	import { profit } from './data';
</script>

<Card style="min-height: 120px;">
	<div class="card-top">
		<div class="pl-4 pr-4 pt-3">
			<span class="text-subtitle-2 grey-text text-darken-2">{$_('app.dashboard.totalProfit')}</span>
			<br />
			<span class="text-h5 mb-2">{$profit.value}</span>
			<br />
		</div>
		<div class="icon">
			<Avatar size="50px" class="blue darken-3 white-text">
				<span class="material-icons">attach_money</span>
			</Avatar>
		</div>
	</div>
</Card>

<style>
	.card-top {
		display: flex;
		justify-content: space-between;
	}
	.card-top > .icon:last-child {
		margin-top: 1rem;
		margin-right: 1rem;
	}
</style>
