<script lang="ts">
	import { Card, CardTitle, Divider, Icon } from 'svelte-materialify';
	import Chart from 'chart.js/dist/Chart.bundle';

	let colors = { indigo: '#3f51b5', red: '#e53935', orange: '#fb8c00', white: '#ffffff' };

	let canvas: HTMLCanvasElement;

	const data = {
		datasets: [
			{
				data: [63, 15, 22],
				backgroundColor: [colors.indigo, colors.red, colors.orange],
				borderWidth: 8,
				borderColor: colors.white,
				hoverBorderColor: colors.white
			}
		],
		labels: ['Desktop', 'Tablet', 'Mobile']
	};

	const options = {
		animation: false,
		cutoutPercentage: 80,
		layout: { padding: 0 },
		legend: {
			display: false
		},
		responsive: true
	};

	const config = {
		type: 'doughnut',
		data: data,
		options
	};

	let chart;
	const devices = [
		{
			title: 'Desktop',
			value: 63,
			icon: 'laptop_mac',
			color: colors.indigo
		},
		{
			title: 'Tablet',
			value: 15,
			icon: 'tablet_mac',
			color: colors.red
		},
		{
			title: 'Mobile',
			value: 23,
			icon: 'phone_iphone',
			color: colors.orange
		}
	];

	$: if (canvas && !chart) {
		chart = new Chart(canvas.getContext('2d'), config);
		console.log(chart);
	}
</script>

<Card>
	<CardTitle>
		<div class="title">
			<span>Traffic By Device</span>
		</div>
	</CardTitle>
	<Divider />

	<div class="content">
		<div class="chart">
			<canvas id="myChart" width="400" height="400" bind:this={canvas} />
		</div>
		<div class="devices">
			{#each devices as device}
				<div class="device">
					<div>
						<span class="material-icons">{device.icon}</span>
					</div>
					<span class="text-body-1">{device.title}</span>
					<span class="text-h4" style="color: {device.color};">{device.value}%</span>
				</div>
			{/each}
		</div>
	</div>
</Card>

<style>
	.devices {
		display: flex;
		justify-content: center;
		width: 100%;
		margin-top: 2rem;
		gap: 1rem;
	}
	.content {
		padding: 2rem;
	}
	.chart {
		max-width: 320px;
		margin: 0 auto;
	}
	.device {
		text-align: center;
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
	}
	.device span:nth-child(1) {
		color: #888;
	}
	.device span:last-child {
		font-size: 1.7rem;
		font-weight: bold;
	}
</style>
