<script lang="ts">
	import Customers from '$lib/customers/Customers.svelte';
	import { mediumAndDown, smallAndDown } from '$lib/stores/breakpoints';
	import { onMount } from 'svelte';
	import { Button, Card, CardActions, CardTitle, ProgressCircular } from 'svelte-materialify';
	import { CardText, Select } from 'svelte-materialify';
	import graphqlClient from '$lib/helpers/graphql';
	import allCustomers from './data';
	import { QUERY_CUSTOMERS } from './queries';

	let pendingRequest = false;
	let errorMessage;

	onMount(async () => {
		try {
			pendingRequest = true;
			const result = await graphqlClient.query(QUERY_CUSTOMERS);
			$allCustomers = result.data.customers;
			pendingRequest = false;
		} catch (error) {
			console.log(error.message);
			errorMessage = error.message;
		}
	});

	const items = [
		{ name: '5', value: 5 },
		{ name: '10', value: 10 },
		{ name: '20', value: 20 }
	];
	let rowPerPage = 10;
	let currentPage = 0;
	let allSelected = false;
	$: customers = $allCustomers
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
</script>

<svelte:head>
	<title>Customers</title>
</svelte:head>

<section class:tablet={$mediumAndDown} class:mobile={$smallAndDown}>
	{#if errorMessage}
		<Card>
			<div class="error-card">
				<label for="error">Error:</label>
				<em>{errorMessage}</em>
			</div>
		</Card>
	{/if}
	<Card>
		<CardText style="padding: 0;overflow-x: auto;">
			{#if pendingRequest}
				<div class="spinner">
					<ProgressCircular indeterminate size={40} />
				</div>
			{:else}
				<Customers {allSelected} {customers} />
			{/if}
		</CardText>
		<CardActions>
			<div class="actions">
				<div>
					<span>Rows per page:</span>
					<Select {items} bind:value={rowPerPage} class="select-rows-per-page" dense />
				</div>
				<div>
					<span>
						{currentPage * rowPerPage + 1}-{Math.min(
							$allCustomers.length,
							(currentPage + 1) * rowPerPage
						)} of
						{$allCustomers.length}
					</span>
					<Button icon={true} on:click={prevPage} disabled={currentPage === 0}>
						<span class="material-icons"> arrow_left </span>
					</Button>
					<Button
						icon={true}
						on:click={nextPage}
						disabled={currentPage === parseInt(`${($allCustomers.length - 1) / rowPerPage}`)}
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
	.spinner {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 60px;
	}
	.error-card {
		padding: 0.5rem;
		color: #dd0000;
	}
	.error-card label {
		font-weight: bold;
	}
</style>
