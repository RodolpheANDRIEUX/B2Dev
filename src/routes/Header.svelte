<script>
	import Menu from "./menu.svelte";
	import { page } from '$app/stores';
	export let data;
</script>

<header>
	<Menu />

	<div id="logo">
		<a href="/">
			<img src='/src/lib/img/logoLight.png' alt="EV3NT" />
		</a>
	</div>

	{#if data.id}
		<nav>
			<ul>
				<li aria-current={$page.url.pathname === '/profile' ? 'page' : undefined}>
					<a href="/profile">profile</a>
				</li>
			</ul>
		</nav>
	{/if}
</header>

<style>
	header {
		position: fixed;
		z-index: 10;
		width: 100%;
		height: 60px;
		display: flex;
		justify-content: start;
		align-items: center;
		background: var(--color-theme-3);
		view-transition-name: header;
	}

	#logo {
		display: flex;
		align-items: center;
		height: 100%;
		margin-left: 3vw;
		justify-content: start;
	}

	nav {
		display: flex;
		align-items: center;
		margin-left: auto;
		justify-content: flex-end;
		transition: background-color .3s linear;
		view-transition-name: navbar;
	}

	#logo img {
		height: 2.2em;
		object-fit: contain;
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0 20px 0 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		gap: 20px;
	}

	li {
		display: flex;
		position: relative;
		height: 70%;
		width: 6rem;
		justify-content: center;
		align-items: center;
		background: var(--color-bg-0);
		border-radius: 1rem;
		transition: .3s;
	}

	nav a {
		display: flex;
		height: 100%;
		width: 100%;
		align-items: center;
		justify-content: center;
		color: var(--color-text);
		font-weight: 550;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	nav li:hover {
		transform: scale(1.05);
	}

	nav li:active {
		transition: 10ms;
		transform: scale(.95);
	}
</style>
