<template>
	<!-- Navbar  -->
	<Navbar />

	Här nedan kommer main och RouterView:
	<main>
		<RouterView />
	</main>
	Main slut

	<EndScreen />
</template>

<script>
	//Component Imports:
	import EndScreen from './components/EndScreen.vue';
	import Navbar from './components/Navbar.vue';

	export default {
		name: 'App',
		components: {
			EndScreen,
			Navbar
		}
	};
</script>
