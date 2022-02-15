<template>
	<!-- Navbar  -->
	<Navbar />

	<main style="margin-top: 0px">
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
