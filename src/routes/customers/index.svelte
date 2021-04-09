<script lang="ts">
	import Customers from '$lib/customers/Customers.svelte';
	import { mediumAndDown, smallAndDown } from '$lib/stores/breakpoints';
	import { Avatar, Button, Card, CardActions } from 'svelte-materialify';
	import { CardText, Checkbox, Select } from 'svelte-materialify';
	import data from './data';

	const items = [
		{ name: '5', value: 5 },
		{ name: '10', value: 10 },
		{ name: '20', value: 20 }
	];
	let rowPerPage = 10;
	let currentPage = 0;
	let selected = [];
	let allSelected = false;
	$: customers = data
		.slice(currentPage * rowPerPage, (currentPage + 1) * rowPerPage)
		.map((c) => ({ ...c, selected: false }));

	function nextPage() {
		let before = currentPage;
		currentPage = Math.min(customers.length / rowPerPage, currentPage + 1);
		if (before !== currentPage) {
			allSelected = false;
		}
	}
	function prevPage() {
		let before = currentPage;
		currentPage = Math.max(0, currentPage - 1);
		if (before !== currentPage) {
			allSelected = false;
		}
	}

	$: console.log(selected);
</script>

<section class:tablet={$mediumAndDown} class:mobile={$smallAndDown}>
	<Card>
		<CardText style="padding: 0;overflow-x: auto;">
			<Customers {allSelected} {customers} />
		</CardText>
		<CardActions>
			<div class="actions">
				<div>
					<span>Rows per page:</span>
					<Select {items} bind:value={rowPerPage} class="select-rows-per-page" dense />
				</div>
				<div>
					<span
						>{currentPage * rowPerPage + 1}-{Math.min(data.length, (currentPage + 1) * rowPerPage)} of
						{data.length}</span
					>
					<Button icon={true} on:click={prevPage} disabled={currentPage === 0}>
						<span class="material-icons"> arrow_left </span>
					</Button>
					<Button
						icon={true}
						on:click={nextPage}
						disabled={currentPage === parseInt(`${(data.length - 1) / rowPerPage}`)}
					>
						<span class="material-icons"> arrow_right </span>
					</Button>
				</div>
			</div>
		</CardActions>
	</Card>
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
	.actions {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-end;
		align-items: center;
		gap: 1rem;
	}
	.actions > * {
		min-width: max-content;
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}
	:global(.select-rows-per-page) {
		width: 3.5rem;
		transform: translateY(0.3rem);
	}
	:global(.select-rows-per-page *::before) {
		content: unset;
		border-bottom: none;
	}
</style>
