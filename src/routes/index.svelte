<script lang="ts">
	import { onMount } from 'svelte';
	import { Button } from 'svelte-materialify/dist';
	import { goto } from '$app/navigation';

	onMount(() => {
		goto('/dashboard');
	});
</script>

<section>
	<div class="content" />
</section>

<style>
	section {
		height: 100%;
		padding: 1rem;
	}
</style>
