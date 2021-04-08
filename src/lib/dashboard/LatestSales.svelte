<script lang="ts">
	import { mediumAndDown } from '$lib/stores/breakpoints';
	import { Button, Card, CardTitle, Divider } from 'svelte-materialify';
	import Chart from 'chart.js/dist/Chart.bundle.js';

	let canvas: HTMLCanvasElement;
	let chart;
	let colors = {
		indigo: '#3f51b5',
		red: '#e53935',
		orange: '#fb8c00',
		white: '#ffffff',
		grey: '#888'
	};

	const data = {
		datasets: [
			{
				backgroundColor: colors.indigo,
				data: [18, 5, 19, 27, 29, 19, 20],
				label: 'This year'
			},
			{
				backgroundColor: '#dadada',
				data: [11, 20, 12, 29, 30, 25, 13],
				label: 'Last year'
			}
		],
		labels: ['1 Aug', '2 Aug', '3 Aug', '4 Aug', '5 Aug', '6 Aug']
	};

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
	<Card outlined style="height: 100%;">
		<CardTitle>
			<div class="title">
				<span>Latest Sales</span>
				<div class="right">
					<Button depressed={true} style="background: transparent">
						<span>Last 7 Days</span>
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
	.content {
		padding: 1rem;
	}
</style>
