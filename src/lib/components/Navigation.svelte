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
		<ul bind:this={navigation} data-state="open" class="navigation" id="navigation">
			<li>
				<a href="/">
					<span class="dot color-mercury" aria-hidden="true"></span>
					Mercury
					<span class="icon-caret" aria-hidden="true">&rsaquo;</span>
				</a>
			</li>
			<li>
				<a href="/venus">
					<span class="dot color-venus" aria-hidden="true"></span>
					Venus
					<span class="icon-caret" aria-hidden="true">&rsaquo;</span>
				</a>
			</li>
			<li>
				<a href="/earth">
					<span class="dot color-earth" aria-hidden="true"></span>
					Earth
					<span class="icon-caret" aria-hidden="true">&rsaquo;</span>
				</a>
			</li>
			<li>
				<a href="/mars">
					<span class="dot color-mars" aria-hidden="true"></span>
					Mars
					<span class="icon-caret" aria-hidden="true">&rsaquo;</span>
				</a>
			</li>
			<li>
				<a href="/jupiter">
					<span class="dot color-jupiter" aria-hidden="true"></span>
					Jupiter
					<span class="icon-caret" aria-hidden="true">&rsaquo;</span>
				</a>
			</li>
			<li>
				<a href="/saturn">
					<span class="dot color-saturn" aria-hidden="true"></span>
					Saturn
					<span class="icon-caret" aria-hidden="true">&rsaquo;</span>
				</a>
			</li>
			<li>
				<a href="/uranus">
					<span class="dot color-uranus" aria-hidden="true"></span>
					Uranus
					<span class="icon-caret" aria-hidden="true">&rsaquo;</span>
				</a>
			</li>
			<li>
				<a href="/neptune">
					<span class="dot color-neptune" aria-hidden="true"></span>
					Neptune
					<span class="icon-caret" aria-hidden="true">&rsaquo;</span>
				</a>
			</li>
		</ul>
	</nav>
</header>

<style>
	header {
		position: relative;
		text-transform: uppercase;
		border-bottom: 0.1rem solid var(--color-sperator);
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
		background-color: var(--bg-color);
		background-image: url('/src/lib/assets/background-stars.svg');
		position: absolute;
		left: 0;
		right: 0;
		top: 100%;
		list-style: none;
		z-index: 999;
	}

	.navigation[data-state='closed'] {
		display: none;
	}

	.site-nav li {
		border-bottom: 0.1rem solid var(--color-sperator);
		font-weight: 700;
		font-size: 2rem;
	}

	.site-nav a {
		padding: 3rem var(--spacing-base);
		display: grid;
		grid-template-columns: 4rem 1fr 1rem;
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

	.icon-caret {
		float: right;
	}

	@media screen and (min-width: 768px) {
		header {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}

		.menu-toggle {
			display: none;
		}

		nav {
			display: block;
			float: right;
			justify-content: initial;
			align-items: initial;
		}

		.site-nav li {
			font-size: 1.3rem;
			border-bottom: 0.4rem solid transparent;
			border-top: 0.4rem solid transparent;
		}

		.site-nav li:hover,
		.site-nav li:focus {
			background-color: initial;
			border-top: 0.4rem solid transparent;
			border-bottom: 0.4rem solid var(--color-highlight);
		}

		.navigation {
			display: flex;
			position: static;
			list-style: none;
		}

		.navigation a > span {
			display: none;
		}
	}

	@media screen and (min-width: 1080px) {
		header {
			display: block;
		}

		.site-nav {
			border-top: 0.4rem solid transparent;
			border-bottom: 0.4rem solid transparent;
		}

		.site-nav li:hover,
		.site-nav li:focus {
			background-color: initial;
			border-top: 0.4rem solid var(--color-highlight);
			border-bottom: 0.4rem solid transparent;
		}
	}
</style>
