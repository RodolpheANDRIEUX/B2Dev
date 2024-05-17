<script>
	import { User } from '$lib/store.js';
	import { page } from '$app/stores';

	console.log('user is ' +  $User);
</script>

<header>
	<div id="logo">
		<a href="/">
			<img src='/src/lib/img/logoTxtInline.png' alt="Uber Bagarre" />
		</a>
	</div>

	<nav >
		<ul>
			{#if $User != null}
				<li aria-current={$page.url.pathname === '/profile' ? 'page' : undefined}>
					<a href="/profile">profile</a>
				</li>
			{:else}
				<li id="register" aria-current={$page.url.pathname === '/register' ? 'page' : undefined}>
					<a href="/register">Register</a>
				</li>
				<li aria-current={$page.url.pathname === '/login' ? 'page' : undefined}>
					<a href="/login">Login</a>
				</li>
			{/if}
		</ul>
	</nav>
</header>

<style>
	header {
		position: fixed;
		z-index: 10;
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: var(--color-theme-3);
		height: 70px;
		view-transition-name: header;
	}

	#logo a {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
	}

	#logo img {
		margin-left: 3vw;
		height: 2.2em;
		object-fit: contain;
	}

	nav {
		display: flex;
		justify-content: center;
		transition: background-color .3s linear;
		view-transition-name: navbar;
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

	#register {
		background-color: var(--color-theme-1);
	}

	nav a {
		display: flex;
		height: 100%;
		width: 100%;
		align-items: center;
		justify-content: center;
		color: var(--color-text);
		font-weight: 550;
		font-size: .9rem;
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
