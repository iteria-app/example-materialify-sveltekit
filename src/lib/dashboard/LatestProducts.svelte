<script>
	import { _ } from 'svelte-i18n';
	import {
		Button,
		Card,
		CardActions,
		CardTitle,
		Divider,
		List,
		ListItem
	} from 'svelte-materialify';
	import { latestProducts } from './data';
</script>

<Card style="height: 100%;">
	<CardTitle>
		<div class="title">
			<span>{$_('app.dashboard.latestProducts')}</span>
		</div>
	</CardTitle>
	<Divider />
	<List flat>
		{#each $latestProducts as product}
			<ListItem ripple={{ opacity: 0 }}>
				<div class="item">
					<img src={product.logo} alt="" class="avatar" />
					<div class="item-body">
						<div class="product-name">{product.name}</div>
						<span class="product-subtitle text-subtitle-2 grey-text text-darken-2">
							{$_('app.dashboard.updated')}
							{product.updated}
							{$_('app.dashboard.ago')}
						</span>
					</div>
					<div class="item-action">
						<Button icon={true}>
							<span class="material-icons">more_vert</span>
						</Button>
					</div>
				</div>
			</ListItem>
			<Divider />
		{/each}
	</List>

	<CardActions>
		<div class="actions">
			<Button
				depressed={true}
				style="background: transparent;padding: 1rem 0.4rem;color: blue;"
				size="small"
			>
				View All
				<span class="material-icons">arrow_right</span>
			</Button>
		</div>
	</CardActions>
</Card>

<style>
	.avatar {
		max-height: 40px;
		border-radius: 0.2rem;
	}
	.item {
		display: flex;
		gap: 1rem;
	}
	.item-body {
		width: 100%;
		display: flex;
		flex-direction: column;
	}
	.item-action {
		display: flex;
		align-items: center;
	}
	.actions {
		bottom: 10rem;
		height: 200%;
		width: 100%;
		display: flex;
		justify-content: flex-end;
		transform: translateY(calc(5vw / 10));
	}
</style>
