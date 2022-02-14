<template>
	<!-- Navbar  -->
	<Navbar />


	<!-- <main style="padding: 35px; margin-top: 0px; padding-top: 0px"> -->

	<main>
		<RouterView />
	</main>
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
