<script lang="ts">
	import Stat from '../components/Stat.svelte';
	import type { Planet } from '$lib/types/planet';
	const { planet }: { planet: Planet } = $props();
</script>

<h1>{planet.name}</h1>
<Stat title="Rotation Time" value={planet.rotation} />
<Stat title="Revolution Time" value={planet.revolution} />
<Stat title="Radius" value={planet.radius} />
<Stat title="Average Temp." value={planet.temperature} />
