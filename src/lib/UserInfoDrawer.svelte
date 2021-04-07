<script lang="ts">
	import { Avatar } from 'svelte-materialify';
</script>

<div class="userinfo">
	<Avatar size="62px" class="red white-text">
		<img src="/images/avatar_6.png" alt="" />
	</Avatar>
	<span class="font-weight-bold">Katarina Smith</span>
	<span class="text-subtitle-2 grey-text text-darken-2">Senior Developer</span>
</div>

<style lang="scss">
	.userinfo {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 1.6rem;
		gap: 0.1rem;
	}
</style>
