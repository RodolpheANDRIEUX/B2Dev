<script>
	export let data;
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import './styles.css';
	import { onNavigate } from "$app/navigation";

	onNavigate(() => {
		if (!document.startViewTransition) return;

		return new Promise((fulfill) => {
			document.startViewTransition(() => new Promise(fulfill));
		});
	});

</script>

<div class="app">
	<Header {data}/>

	<main>
		<slot />
	</main>

	<Footer />
</div>

<style>
	.app {
		position: relative;
		display: flex;
		flex-direction: column;
	}

	.app::before {
		content: "";
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background-image: url("/src/lib/img/noise.png");
		background-size: 128px 128px;
		background-repeat: repeat;
		opacity: 0.06;
		z-index: -1;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 70px auto 0 auto;
		box-sizing: border-box;
		min-height: calc(100vh - 70px);
	}
</style>
