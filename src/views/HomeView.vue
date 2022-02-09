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
	<h1 style="display: none">Hem</h1>
	<div id="dogDiv">
		<img src="/assets/välkommen.png" alt="" id="title" />
		<img src="/assets/logo.png" alt="" id="animationLogo" />
		<H2 style="margin-top: 60px">Välkommen</H2>
	</div>
	<section id="mainInfo">
		<div class="info">
			<div class="underTitel"><h3>Grej 1</h3></div>
			<div class="innerDiv">
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis quam nesciunt unde dolores ut hic
					facere molestias quas esse, sequi incidunt, suscipit adipisci dol
				</p>
			</div>
		</div>
		<div class="info">
			<div class="underTitel"><h3>Grej 2</h3></div>
			<div class="innerDiv">
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis quam nesciunt unde dolores ut hic
					facere molestias quas esse, sequi incidunt, suscipit adipisci dol
				</p>
			</div>
		</div>
	</section>
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
	#mainInfo {
		display: flex;
		justify-content: center;
		flex-direction: row;
		align-items: center;
	}
	@media screen and (max-width: 600px) {
		#mainInfo {
			flex-direction: column;
		}
	}
	.info {
		background-color: #faac77;
		height: 400px;
		width: 350px;
		margin: 20px;
		border-radius: 30px;
	}
	.innerDiv {
		padding: 7%;
	}
	.underTitel {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: white;
		color: black;
		margin: 3%;
		height: 60px;
		border-radius: 30px;
	}
</style>
