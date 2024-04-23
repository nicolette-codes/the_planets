<script lang="ts">
	let menuBtn: HTMLButtonElement;
	let navigation: HTMLUListElement;

	const handleNavClick = () => {
		const isNavMenuOpen = menuBtn.getAttribute('aria-expanded') === 'true';
		if (isNavMenuOpen) {
			closeMenu();
		} else {
			openMenu();
		}
	};

	function openMenu() {
		menuBtn.setAttribute('aria-expanded', 'true');
		navigation.setAttribute('data-state', 'opened');
	}
	function closeMenu() {
		menuBtn.setAttribute('aria-expanded', 'false');
		navigation.setAttribute('data-state', 'closed');
	}
</script>

<header>
	<div class="header__title">The Planets</div>
	<nav class="site-nav">
		<button
			onclick={handleNavClick}
			class="menu-toggle"
			aria-controls="navigation"
			aria-expanded="false"
			bind:this={menuBtn}
		>
			<span class="visually-hidden">Navigation Menu</span>
			<div class="hamburger" aria-hidden="true"></div>
		</button>
		<ul bind:this={navigation} data-state="closed" class="navigation" id="navigation">
			<li>
				<a href="/">
					<div class="dot color-mercury"></div>
					Mercury
				</a>
				&rsaquo;
			</li>
			<li>
				<a href="/venus">
					<div class="dot color-venus"></div>
					Venus
				</a>
				&rsaquo;
			</li>
			<li>
				<a href="/earth">
					<div class="dot color-earth"></div>
					Earth
				</a>
				&rsaquo;
			</li>
			<li>
				<a href="/mars">
					<div class="dot color-mars"></div>
					Mars
				</a>
				&rsaquo;
			</li>
			<li>
				<a href="/jupiter">
					<div class="dot color-jupiter"></div>
					Jupiter
				</a>
				&rsaquo;
			</li>
			<li>
				<a href="/saturn"
					><div class="dot color-saturn"></div>
					Saturn
				</a>
				&rsaquo;
			</li>
			<li>
				<a href="/uranus"
					><div class="dot color-uranus"></div>
					Uranus</a
				>&rsaquo;
			</li>
			<li>
				<a href="/neptune"
					><div class="dot color-neptune"></div>
					Neptune</a
				>&rsaquo;
			</li>
		</ul>
	</nav>
</header>

<style>
	header {
		position: relative;
		text-transform: uppercase;
	}

	header::after {
		content: '';
		clear: both;
		display: block;
	}

	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.header__title {
		float: left;
		font-size: 2.8rem;
		padding: var(--spacing-base);
		font-family: var(--font-special);
	}

	.navigation {
		position: absolute;
		left: var(--spacing-base);
		right: var(--spacing-base);
		top: 100%;
		list-style: none;
	}

	.navigation[data-state='closed'] {
		display: none;
	}

	.site-nav li {
		display: flex;
		justify-content: space-between;
		border-bottom: 0.1rem solid var(--color-sperator);
		padding: 3rem var(--spacing-base);
		font-weight: 700;
		font-size: 2rem;
	}

	.site-nav li:last-child {
		border-bottom: none;
	}

	.site-nav a {
		display: flex;
		justify-content: center;
		align-items: center;
		text-decoration: none;
	}

	.site-nav li:hover,
	.site-nav li:focus {
		background: var(--color-highlight);
		cursor: pointer;
	}

	.menu-toggle {
		padding: var(--spacing-base);
		background: transparent;
		border: 0;
		position: absolute;
		top: 1.6rem;
		right: 1.5rem;
		cursor: pointer;
	}

	.menu-toggle:focus-visible {
		outline: 0.4rem solid var(--color-highlight);
	}

	.hamburger,
	.hamburger::before,
	.hamburger::after {
		content: '';
		display: block;
		background: var(--font-color-base);
		height: 3px;
		width: 1.75em;
		border-radius: 3px;
	}

	.hamburger::before {
		transform: translateY(-6px);
	}

	.hamburger::after {
		transform: translateY(3px);
	}

	.visually-hidden {
		clip: rect(0 0 0 0);
		clip-path: inset(50%);
		height: 1px;
		overflow: hidden;
		position: absolute;
		white-space: nowrap;
		width: 1px;
	}

	.dot {
		float: left;
		margin-right: calc(var(--spacing-base) * 2);
		height: 2rem;
		width: 2rem;
		display: block;
		border-radius: 50%;
	}

	@media screen and (min-width: 768px) {
		header {
			background-color: red;
		}
	}
</style>
