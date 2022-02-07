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

<template>
	<!-- Navbar  -->
	<Navbar />

	<!-- <main style="padding: 35px; border: 1px solid"> -->
	<RouterView />
	<!-- </main> -->
</template>

<style></style>
