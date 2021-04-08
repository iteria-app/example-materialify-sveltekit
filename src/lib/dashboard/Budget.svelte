<script>
	import { Avatar, Card, CardActions } from 'svelte-materialify';
</script>

<Card outlined style="min-height: 120px;">
	<div class="card-top">
		<div class="pl-4 pr-4 pt-3">
			<span class="text-subtitle-2 grey-text text-darken-2">BUDGET</span>
			<br />
			<span class="text-h5 mb-2">$24,000</span>
			<br />
		</div>
		<div class="icon">
			<Avatar size="50px" class="red darken-1 white-text">
				<span class="material-icons">money</span>
			</Avatar>
		</div>
	</div>
	<CardActions>
		<div class="actions">
			<span class="text-subtitle-2">
				<span class="material-icons red-text">arrow_downward</span>
				<span class="text-subtitle-2">12%</span>
			</span>
			<span class="text-caption font-weight-light" style="font-size: 0.85rem;margin-top:0.2rem;">
				Since last month
			</span>
		</div>
	</CardActions>
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
	.actions {
		display: flex;
		align-items: center;
		gap: 0.6rem;
		width: 100%;
	}
	.actions > span {
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
	}
</style>
