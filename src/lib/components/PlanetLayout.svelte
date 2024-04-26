<script lang="ts">
	import InfoTypeSwitcher from './InfoTypeSwitcher.svelte';
	import PlanetInfo from './PlanetInfo.svelte';
	import Stat from '../components/Stat.svelte';

	type InfoType = 'overview' | 'internal' | 'geology';
	let infoType: InfoType = $state('overview');

	function changeInfoType(type: InfoType): void {
		infoType = type;
	}

	import type { Planet } from '$lib/types/planet';
	const { planet }: { planet: Planet } = $props();
</script>

<main class="planetPage">
	<section class="switcherContainer">
		<InfoTypeSwitcher {infoType} infoChange={changeInfoType} />
	</section>
	<img
		class="planet__img"
		src={planet.images[infoType]}
		alt={`A graphic of planet ${planet.name}, showing it's ${infoType}.`}
	/>
	<section class="planetInfo">
		<PlanetInfo
			name={planet.name}
			content={planet[infoType].content}
			source={planet[infoType].source}
		/>
	</section>
	<section class="stats">
		<Stat title="Rotation Time" value={planet.rotation} />
		<Stat title="Revolution Time" value={planet.revolution} />
		<Stat title="Radius" value={planet.radius} />
		<Stat title="Average Temp." value={planet.temperature} />
	</section>
</main>

<style>
	.planet__img {
		margin: calc(var(--spacing-base) * 4) auto calc(var(--spacing-base) * 4) auto;
		width: 111px;
		height: 111px;
	}

	.planetInfo {
		text-align: center;
	}

	.stats {
		margin-top: calc(var(--spacing-base) * 2);
	}

	@media screen and (min-width: 768px) {
		.planetPage {
			padding: var(--spacing-base);
			display: grid;
			grid-template-columns: 1fr 1fr;
			grid-template-rows: 1fr 1fr auto;
		}

		.planet__img {
			grid-column: 1 / 3;
			grid-row: 1 / 1;
			width: 184px;
			height: 184px;
		}

		.switcherContainer {
			grid-column: 2 / 3;
			grid-row: 2 / 3;
		}

		.planetInfo {
			text-align: left;
			grid-column: 1 / 2;
			grid-row: 2 / 3;
		}

		.stats {
			grid-column: 1 / 3;
			grid-row: 3 / 4;
			display: flex;
			gap: var(--spacing-base);
		}
	}

	@media screen and (min-width: 1080px) {
		.planetPage {
			padding: calc(var(--spacing-base) * 6);
		}
		.planet__img {
			grid-column: 1 / 2;
			grid-row: 1 / 3;
			width: 290px;
			height: 290px;
		}

		.switcherContainer {
			grid-column: 2 / 3;
			grid-row: 2 / 3;
		}

		.planetInfo {
			text-align: left;
			grid-column: 2 / 3;
			grid-row: 1 / 2;
		}
	}
</style>
