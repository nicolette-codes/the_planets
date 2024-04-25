<script lang="ts">
	const { title, value } = $props();
</script>

<div class="stat">
	<div class="stat__title">{title}</div>
	<div class="stat_value">{value}</div>
</div>

<style>
	.stat {
		margin-inline: auto;
		width: 90%;
		border: 1px solid var(--color-sperator);
		display: flex;
		align-items: center;
		justify-content: space-between;
		text-transform: uppercase;
	}

	.stat:not(:last-child) {
		margin-bottom: var(--spacing-base);
	}

	.stat__title {
		padding: var(--spacing-base);
		font-size: 1rem;
		font-weight: 900;
		opacity: 0.5;
	}

	.stat_value {
		padding: var(--spacing-base);
		font-size: 2rem;
		font-family: var(--font-special);
	}
</style>
