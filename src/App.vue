<template>


	<!-- Navbar  -->
	<Navbar />

>>>>>>> 3428365c4e419a428ce435092829e3f9d0ba1f10
	Här nedan kommer main och RouterView:
	<main style="padding:35px; border:1px solid">
		<RouterView />
	</main>
  <hr />
Detta nedanför kanske inte ska ligga kvar?
	Main slut

  
	<EndScreen />
</div>
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
