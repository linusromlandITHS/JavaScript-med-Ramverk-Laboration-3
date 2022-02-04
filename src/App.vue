<template>
	<nav>
		<ul>
			<li>
				<RouterLink to="/">Hem</RouterLink>
			</li>
			<li>
				<RouterLink to="/about">Om</RouterLink>
			</li>
			<li>
				<RouterLink to="/contact">Kontakt</RouterLink>
			</li>

			<li>
				<RouterLink to="/djur">Djur-sidan...</RouterLink>
			</li>
		</ul>
	</nav>
	Här nedan kommer main och RouterView:
	<main>
		<RouterView />
	</main>
	Main slut

	<EndScreen />
</template>

<script>
	import EndScreen from './components/EndScreen.vue';

	export default {
		components: {
			EndScreen
		}
	};
</script>
