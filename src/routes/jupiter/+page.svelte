<script lang="ts">
	import PlanetLayout from '$lib/components/PlanetLayout.svelte';
	import type { Planet } from '$lib/types/planet';
	import json from '$lib/data/data.json';
	const planets: Planet[] = json;
</script>

<PlanetLayout planet={planets[4]} />
