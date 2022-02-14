<script>
	//Component Imports:
	import Button from '../components/Button.vue';
	import TabsWrapper from '../components/TabsWrapper.vue';
	import Tab from '../components/Tab.vue';

	export default {
		name: 'HomeView',
		components: {
			Button,
			TabsWrapper,
			Tab
		},
		methods: {
			onClick() {
				this.$router.push({ path: '/petlisting' });
			},
			onClickAvel() {
				this.$router.push({ path: '/avel' });
			}
		}
	};
</script>

<template>
	<h1 style="display: none">Red Mountain Ranch</h1>
	<div id="dogDiv">
		<img src="/assets/välkommen.png" alt="" id="title" />
		<img src="/assets/logo.png" alt="" id="animationLogo" />
		<H2 style="margin-top: 60px">Välkommen</H2>
		<p id="kortInfo">Här är Sveriges främsta websida för kattavel och husdjurs handel.</p>
	</div>
	<section id="mainInfo">
		<div class="info">
			<div class="underTitel"><h3>Nytt husdjur?</h3></div>
			<div class="innerDiv">
				<p>
					Hos oss kan du för en rimlig peng köpa hem en ny familjemedlem. Finns både små och stora djur för
					alla typer av djurälskare.
				</p>
				<Button class="btn btn-secondary" @click="onClick">Handla</Button>
			</div>
		</div>
		<div class="info">
			<div class="underTitel"><h3>Avla din katt?</h3></div>
			<div class="innerDiv">
				<p>
					Vill du avla din katt med en av våra superkatter? Här kan du hitta en partner till din katt av allra
					högsta kalitét.
				</p>
				<Button class="btn btn-secondary" @click="onClickAvel">Avla</Button>
			</div>
		</div>
	</section>
	<TabsWrapper>
		<Tab title="David">Davids sida</Tab>
		<Tab title="Fredric">Fredrics sida</Tab>
		<Tab title="Kenneth">Kenneths sida</Tab>
		<Tab title="Linus">Linus sida</Tab>
		<Tab title="Nathi">Nathis sida</Tab>
		<Tab title="Olena">Olenas sida</Tab>
		<Tab title="Patryk">Patryks sida</Tab>
	</TabsWrapper>
</template>

<style>
	h2,
	h3 {
		color: #333c3e;
	}
	#kortInfo {
		color: #333c3e;
	}
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
		.info {
			width: 200px;
		}
		#title {
			width: 340px;
		}
	}
	.info {
		background-color: #faac77;
		height: 400px;
		width: 350px;
		margin: 20px;
		border-radius: 30px;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	}
	.innerDiv {
		padding: 7%;
	}
	.underTitel {
		display: flex;
		justify-content: center;
		align-items: center;
		align-self: center;
		background-color: white;
		color: #333c3e;
		margin: 3%;
		height: 60px;
		border-radius: 30px;
	}

	.underTitel > h3 {
		margin: 0;
	}
</style>
