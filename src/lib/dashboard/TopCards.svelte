<script>
	import { Avatar, Card, CardActions, ProgressLinear } from 'svelte-materialify';
	import { topCards } from './data';
</script>

{#each topCards as card}
	<Card outlined style="">
		<div class="card-top">
			<div class="pl-4 pr-4 pt-3">
				<span class="text-subtitle-2 grey-text text-darken-2">{card.name}</span>
				<br />
				<span class="text-h5 mb-2">{card.value}</span>
				<br />
			</div>
			<div class="icon">
				<Avatar size="50px" class={card.avatarClass}>
					<span class="material-icons">
						{card.icon}
					</span>
				</Avatar>
			</div>
		</div>
		<!-- <CardText /> -->
		<CardActions>
			{#if card.content}
				<div class="actions">
					<span class="text-subtitle-2">
						<span
							class="material-icons {card.content.icon === 'arrow_downward'
								? 'red-text'
								: 'green-text'}">{card.content.icon}</span
						>
						<span class="text-subtitle-2">{card.content.percent}</span>
					</span>
					<span class="text-caption font-weight-light" style="font-size: 0.85rem;">
						{card.content.text}
					</span>
				</div>
			{:else if typeof card.progress !== 'undefined'}
				<ProgressLinear value={card.progress} style="margin: 1rem 0 0 0;" />
			{/if}
		</CardActions>
	</Card>
{/each}

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
