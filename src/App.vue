<template>

<div style="/*background-image: url(../assets/farm.jpg);background-size: cover;background-repeat: no-repeat;*/">

	<!-- Navbar  -->
	<Navbar />

	<router-view v-slot="{ Component }">
		<transition name="fade">
			<component :is="Component" style="background:white" />
		</transition>
	</router-view>
	</div>
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

<style>
	.scale-slide-enter-active,
	.scale-slide-leave-active {
		position: absolute;
		transition: all 0.85s ease;
	}

	.scale-slide-enter-from {
		left: -100%;
	}

	.scale-slide-enter-to {
		left: 0%;
	}

	.scale-slide-leave-from {
		transform: scale(1);
	}

	.scale-slide-leave-to {
		transform: scale(0.8);
	}

	.fade-enter-active,
	.fade-leave-active {
		transition: opacity 0.34s ease;
	}

	.fade-enter-from,
	.fade-leave-to {
		opacity: 0;
	}
</style>
