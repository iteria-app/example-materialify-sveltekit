<script lang="ts">
	import { Avatar, Checkbox } from 'svelte-materialify';
	import { date } from 'svelte-i18n';

	export let allSelected = false;
	export let customers = [];

	function selectAll() {
		if (allSelected) {
			customers = customers.map((c) => ({ ...c, selected: true }));
		} else {
			customers = customers.map((c) => ({ ...c, selected: false }));
		}
	}
</script>

<table>
	<tr>
		<th>
			<Checkbox bind:checked={allSelected} on:change={selectAll} />
		</th>
		<th />
		<th>
			<span class="heading">Name</span>
		</th>
		<th>
			<span class="heading">Email</span>
		</th>
		<th>
			<span class="heading">Location</span>
		</th>
		<th>
			<span class="heading">Phone</span>
		</th>
		<th>
			<span class="heading">Registration Date</span>
		</th>
	</tr>
	{#each customers as customer, index}
		<tr>
			<td>
				<Checkbox
					bind:checked={customers[index].selected}
					on:change={() => {
						if (!customers[index].selected) allSelected = false;
					}}
				/>
			</td>
			<td>
				<Avatar size={40}>
					<img src={customer.avatarUrl} alt="" />
				</Avatar>
			</td>
			<td>
				<span class="name">{customer.name}</span>
			</td>
			<td>
				<span>{customer.email}</span>
			</td>
			<td>
				<span>
					{customer.address.street},
					{customer.address.city},
					{customer.address.state},
					{customer.address.country}
				</span>
			</td>
			<td>
				<span>{customer.phone}</span>
			</td>
			<td>
				{#if customer.createdAt}
					<span>{$date(new Date(customer.createdAt))}</span>
				{/if}
			</td>
		</tr>
	{/each}
</table>

<style>
	table {
		width: 100%;
		border-collapse: collapse;
		min-width: max-content;
	}
	table tr {
		border-bottom: 1px solid rgba(224, 224, 224, 1);
		min-width: max-content;
	}
	table tr th {
		text-align: left;
		padding: 2rem 1rem 0.5rem 1rem;
		min-width: max-content;
	}
	table tr td {
		padding: 0.5rem 1rem;
		min-width: max-content;
	}
	table tr .heading {
		font-weight: 700;
	}
	table tr > *:first-child {
		width: 1rem;
	}

	table tr > *:nth-child(2) {
		width: 1rem;
	}

	table tr:not(:first-child) {
		height: 3rem;
	}
	table tr:not(:first-child):hover {
		background-color: rgba(0, 0, 0, 0.04);
	}
</style>
