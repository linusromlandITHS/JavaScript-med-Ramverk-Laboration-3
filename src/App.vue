<template>
	<div
		id="topdiv"
		style="backdrop-filter: blur(16px) saturate(180%); -webkit-backdrop-filter: blur(16px) saturate(180%)"
	>
		<!-- height: 70vh;
			background-color: #e7f9fb;
			position: relative; -->

		<!-- Navbar  -->
		<Navbar />
		<router-view v-slot="{ Component }">
			<transition name="fade">
				<component :is="Component" style="background: white" />
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
		transition: opacity 0.12s ease;
	}

	.fade-enter-from,
	.fade-leave-to {
		opacity: 0;
	}
	/* #topdiv {
		height: 40vh;
		background-color: #73c6ef;
		position: relative;
	}

	#topdiv::before {
		content: '';
		width: 100%;
		height: 158px;
		position: absolute;
		bottom: -0.3%;
		left: 0;
		background-size: auto;
		background-repeat: repeat no-repeat;
		background-position: 47vw bottom;
		background-image: url("data:image/svg+xml;utf8,<svg viewBox='0 0 1200  134' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M0 98L50 92C100 86 200 74 300 50C400 26 500 -10 600 2C700 14 800 74 900 98C1000 122 1100 110 1150 104L1200 98V134H1150C1100 134 1000 134 900 134C800 134 700 134 600 134C500 134 400 134 300 134C200 134 100 134 50 134H0V98Z' fill='%23209031'/></svg>");
	} */
</style>
