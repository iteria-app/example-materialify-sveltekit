<script lang="ts">
	import { Card, CardTitle, Divider } from 'svelte-materialify';
	import Chart from 'chart.js/dist/Chart.bundle.js';
	import { _ } from 'svelte-i18n';
	import { trafficByDevice } from './data';

	let colors = { indigo: '#3f51b5', red: '#e53935', orange: '#fb8c00', white: '#ffffff' };

	let canvas: HTMLCanvasElement;
	let chart;

	$: data = $trafficByDevice.data;
	$: devices = $trafficByDevice.devices;

	const options = {
		animation: false,
		cutoutPercentage: 80,
		layout: { padding: 0 },
		legend: {
			display: false
		},
		responsive: true
	};

	$: if (canvas && !chart) {
		chart = new Chart(canvas.getContext('2d'), {
			type: 'doughnut',
			data: data,
			options
		});
	}
</script>

<Card>
	<CardTitle>
		<div class="title">
			<span>{$_('app.dashboard.traficByDevice')}</span>
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
					<span class="text-body-1">{$_(device.title)}</span>
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
		font-weight: 500;
	}
</style>
