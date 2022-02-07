<template>
	<!-- Navbar  -->
	<Navbar />


	<main style="padding:35px; border:1px solid">
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
