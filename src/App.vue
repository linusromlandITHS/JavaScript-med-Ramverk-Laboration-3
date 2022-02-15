<template>
	<!-- Navbar  -->
	<Navbar />

	<main style="margin-top: 0px">
		<main>
			<RouterView />
		</main>
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
