<script>
	//Component Imports:
	import EndScreen from '../components/EndScreen.vue';

	export default {
		name: 'HomeView',
		components: {
			EndScreen
		}
	};
</script>

<template>
	<h1>Hem</h1>
	<div id="dogDiv">
		<img src="/assets/välkommen.png" alt="" id="title" />
		<img src="/assets/logo.png" alt="" id="animationLogo" />
	</div>
	<EndScreen />
</template>

<style>
	#dogDiv {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
	#title {
		height: 150px;
		width: 450px;
		object-fit: scale-down;
	}
	#animationLogo {
		display: flex;
		align-items: center;
		justify-content: center;
		animation: gelatine 0.5s infinite;
	}
	@keyframes gelatine {
		from,
		to {
			transform: scale(1, 1);
		}
		25% {
			transform: scale(0.9, 1.1);
		}
		50% {
			transform: scale(1.1, 0.9);
		}
		75% {
			transform: scale(0.95, 1.05);
		}
	}
</style>
