<script lang="ts">
	type InfoType = 'overview' | 'internal' | 'geology';
	import Stat from '../components/Stat.svelte';
	import type { Planet } from '$lib/types/planet';
	let infoType: InfoType = $state('overview');
	const { planet }: { planet: Planet } = $props();
</script>

<section>
	<button onclick={() => (infoType = 'overview')}>Overview</button>
	<button onclick={() => (infoType = 'internal')}>Structure</button>
	<button onclick={() => (infoType = 'geology')}>Surface</button>
	<img
		class="planet__img"
		src={planet.images[infoType]}
		alt={`A graphic of planet ${planet.name}, showing it's ${infoType}.`}
	/>
	<h1 class="text-center">{planet.name}</h1>
	<p class="planet__information">
		{planet[infoType].content}
	</p>
	<div class="source">
		<div>Source : &nbsp;</div>
		<a href={planet[infoType].source}>
			Wikipedia
			<img
				class="icon-source"
				src="./src/lib/assets/icon-source.svg"
				alt="Icon for an external link."
			/>
		</a>
	</div>
</section>

<section>
	<Stat title="Rotation Time" value={planet.rotation} />
	<Stat title="Revolution Time" value={planet.revolution} />
	<Stat title="Radius" value={planet.radius} />
	<Stat title="Average Temp." value={planet.temperature} />
</section>

<style>
	a {
		text-decoration: underline;
		text-underline-offset: 0.3rem;
		text-decoration-thickness: 0.2rem;
		font-weight: 900;
	}

	.planet__img {
		margin: calc(var(--spacing-base) * 4) auto calc(var(--spacing-base) * 4) auto;
		width: 111px;
		height: 111px;
	}

	.planet__information {
		text-align: center;
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

	.text-center {
		text-align: center;
	}
</style>
