<script lang="ts">
	import { Avatar, Card, CardActions, Container, ProgressLinear } from 'svelte-materialify';

	const cards = [
		{
			name: 'BUDGET',
			icon: 'money',
			value: '$24,000',
			avatarClass: 'red darken-1 white-text',
			content: {
				icon: 'arrow_downward',
				value: '$',
				percent: '12%',
				text: 'Since last month'
			}
		},
		{
			name: 'TOTAL CUSTOMERS',
			icon: 'analytics',
			value: '1,600',
			avatarClass: 'green white-text',
			content: {
				icon: 'arrow_upward',
				percent: '12%',
				text: 'Since last month'
			}
		},
		{
			name: 'TASKS PROGRESS',
			icon: 'group',
			value: '75.5%',
			avatarClass: 'orange white-text',
			progress: 20
		},
		{
			name: 'TOTAL PROFIT',
			icon: 'attach_money',
			value: '$23,200',
			avatarClass: 'blue darken-3 white-text'
		}
	];
</script>

<section>
	<div class="top-cards">
		{#each cards as card}
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
	</div>
</section>

<style lang="scss">
	section {
		background: #eee;
		padding: 2rem;
		height: 100%;
	}
	.top-cards {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
		gap: 2rem;
		@media screen and (max-width: 400px) {
			display: flex;
			flex-direction: column;
		}
	}
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
