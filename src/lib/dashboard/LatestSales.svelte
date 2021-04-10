<script lang="ts">
	import { mediumAndDown } from '$lib/stores/breakpoints';
	import { Button, Card, CardTitle, Divider } from 'svelte-materialify';
	import Chart from 'chart.js/dist/Chart.bundle.js';
	import { _ } from 'svelte-i18n';
	import { latestSales } from './data';

	let canvas: HTMLCanvasElement;
	let chart;

	$: data = $latestSales;

	const options = {
		animation: false,
		cornerRadius: 20,
		layout: { padding: 0 },
		legend: { display: false },
		maintainAspectRatio: false,
		responsive: true,
		scales: {
			xAxes: [
				{
					barThickness: 12,
					maxBarThickness: 10,
					barPercentage: 0.5,
					categoryPercentage: 0.5,
					ticks: {},
					gridLines: {
						display: false,
						drawBorder: false
					}
				}
			],
			yAxes: [
				{
					ticks: {
						beginAtZero: true,
						min: 0
					},
					gridLines: {
						borderDash: [2],
						borderDashOffset: [2],
						color: '#ddd',
						drawBorder: false,
						zeroLineBorderDash: [2],
						zeroLineBorderDashOffset: [2],
						zeroLineColor: '#ddd'
					}
				}
			]
		}
	};

	$: if (canvas && !chart) {
		chart = new Chart(canvas.getContext('2d'), {
			type: 'bar',
			data,
			options
		});
	}
</script>

<div class="wrapper" class:tablet={$mediumAndDown}>
	<Card style="height: 100%;">
		<CardTitle>
			<div class="title">
				<span>{$_('app.dashboard.latestSales')}</span>
				<div class="right">
					<Button
						depressed={true}
						style="background: transparent;padding: 1rem 0.4rem;"
						size="x-small"
					>
						<span>{$_('app.dashboard.last7Days')}</span>
						<span class="material-icons">arrow_drop_down</span>
					</Button>
				</div>
			</div>
		</CardTitle>
		<Divider />
		<div class="content">
			<canvas id="myChart" width="400" height="400" bind:this={canvas} />
		</div>
	</Card>
</div>

<style>
	.wrapper {
		height: 100%;
	}
	.title {
		display: flex;
		justify-content: space-between;
		width: 100%;
	}
	.title > span:first-child {
		margin-top: 0.2rem;
	}
	.content {
		padding: 1rem;
	}
</style>
