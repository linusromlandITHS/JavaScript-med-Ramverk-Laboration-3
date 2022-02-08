<template>
	<!-- Navbar  -->
	<Navbar />

	<main style="padding: 35px; padding-top: 0px; border: 1px solid;border-top: none;margin-top:0px">
		<RouterView />
	</main>
	<hr />



	<EndScreen />
</template>

<script>
	//Component Imports:
	import Navbar from './components/Navbar.vue';

	export default {
		name: 'App',
		components: {
			Navbar
		}
	};
</script>
