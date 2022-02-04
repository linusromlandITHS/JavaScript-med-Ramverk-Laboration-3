<template>


	<!-- Navbar  -->
	<Navbar />


	<main style="padding:35px; border:1px solid">
		<RouterView />
	</main>
  <hr />
Detta nedanför kanske inte ska ligga kvar?
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
