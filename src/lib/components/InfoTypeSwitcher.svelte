<script lang="ts">
	type InfoType = 'overview' | 'internal' | 'geology';
	let { infoType, infoChange }: { infoType: InfoType; infoChange: Function } = $props();
</script>

<div class="switcher">
	<button
		class:active={infoType === 'overview'}
		class="switch"
		onclick={() => infoChange('overview')}
	>
		<span class="showAboveMobile" aria-hidden="true">01</span>
		Overview
	</button>
	<button
		class:active={infoType === 'internal'}
		class="switch"
		onclick={() => infoChange('internal')}
	>
		<span class="showAboveMobile" aria-hidden="true">02</span>
		<span class="showAboveMobile" aria-hidden="true">Internal</span>
		Structure
	</button>
	<button
		class:active={infoType === 'geology'}
		class="switch"
		onclick={() => infoChange('geology')}
	>
		<span class="showAboveMobile" aria-hidden="true">03</span>
		Surface
		<span class="showAboveMobile" aria-hidden="true">Geology</span>
	</button>
</div>

<style>
	.switcher {
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 0.1rem solid var(--color-sperator);
	}

	.switch {
		cursor: pointer;
		text-transform: uppercase;
		padding: calc(var(--spacing-base) * 2);
		border: 0;
		background: transparent;
		color: var(--font-color-base);
		font-weight: 900;
		border-bottom: 0.4rem solid transparent;
	}

	.showAboveMobile {
		display: none;
	}

	.active {
		border-bottom: 0.4rem solid var(--color-highlight);
	}

	@media screen and (min-width: 768px) {
		.showAboveMobile {
			display: initial;
		}
		.switcher {
			width: 100%;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: center;
			gap: var(--spacing-base);
			border-bottom: 0;
		}

		.switch {
			text-align: left;
			width: 80%;
			border: 0.1rem solid var(--color-sperator);
			padding: var(--spacing-base);
		}

		.active {
			background-color: var(--color-highlight);
			border: 0.1rem solid transparent;
		}
	}
</style>
