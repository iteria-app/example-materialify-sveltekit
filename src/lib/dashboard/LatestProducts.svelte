<script>
	import { Button, Card, CardTitle, Divider, List, ListItem } from 'svelte-materialify';
</script>

<Card style="height: 100%;">
	<CardTitle>
		<div class="title">
			<span>Latest Products</span>
		</div>
	</CardTitle>
	<Divider />
	<List flat>
		{#each [1, 2, 3, 4, 5] as item}
			<ListItem ripple={{ opacity: 0 }}>
				<div class="item">
					<!-- <Avatar tile={true} size={44}> -->
					<img src="/images/products/product_{item}.png" alt="" class="avatar" />
					<div class="item-body">
						<div class="product-name">Dropbox</div>
						<span class="product-subtitle text-subtitle-2 grey-text text-darken-2">
							Updated 2 hours ago
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
</style>
