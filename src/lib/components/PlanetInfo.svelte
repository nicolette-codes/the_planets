<script lang="ts">
	let { name, content, source } = $props();
</script>

<h1>{name}</h1>
<p class="planet__information">
	{content}
</p>
<div class="source">
	<div>Source : &nbsp;</div>
	<a href={source}>
		Wikipedia
		<img
			class="icon-source"
			src="./src/lib/assets/icon-source.svg"
			alt="Icon for an external link."
		/>
	</a>
</div>

<style>
	a {
		text-decoration: underline;
		text-underline-offset: 0.3rem;
		text-decoration-thickness: 0.2rem;
		font-weight: 900;
	}

	.planet__information {
		padding: calc(var(--spacing-base) * 1.5);
		line-height: 2.2rem;
	}

	.source {
		margin: calc(var(--spacing-base) * 2) 0;
		display: flex;
		align-items: center;
		justify-content: center;
		opacity: 0.5;
	}

	.icon-source {
		float: right;
		margin-left: 0.5rem;
		height: 1.5rem;
	}

	@media screen and (min-width: 768px) {
		h1 {
			padding-left: 2.4rem;
		}

		.source {
			padding-left: 2.4rem;
			justify-content: flex-start;
		}
	}
</style>
