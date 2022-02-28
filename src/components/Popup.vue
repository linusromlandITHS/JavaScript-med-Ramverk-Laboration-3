<script>
	export default {
		name: 'Popup',
		props: {
			showPopup: {
				type: Boolean,
				default: false
			},
			togglePopup: {
				type: Function,
				default: () => console.log('clicked default toggle')
			}
		},
		methods: {
			homePage() {
				this.$router.push({ path: '/' });
			},
			breedingPage() {
				this.$router.push({ path: '/avel' });
			}
		}
	};
</script>
<template>
	<div v-if="showPopup" class="modal">
		<div class="modal-content">
			<img class="close-popup" src="assets/close.svg" @click="togglePopup()" />
			<h1>TACK FÖR DITT KÖP!</h1>
			<img class="animation" src="assets/lazy_dog.gif" />
			<div class="button-container">
				<button @click="homePage" class="btn btn-primary btn">Hemsida</button>
				<button @click="breedingPage" class="btn btn-primary btn">Avla</button>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.close-popup {
		height: 15px;
		width: 15px;
	}
	.animation {
		display: block;
		margin: 0 auto;
	}
	h1 {
		color: black;
		text-align: center;
	}
	img {
		height: 400px;
		width: 500px;
	}
	button {
		position: relative;
		bottom: 0;
		right: 0;
		width: 100px;
	}
	.button-container {
		display: flex;
		justify-content: space-around;
	}
	.modal {
		display: block;
		position: fixed;
		z-index: 999; /* Sit on top */
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		overflow: auto; /* Enable scroll if needed */
		background-color: rgb(0, 0, 0);
		background-color: rgba(0, 0, 0, 0.4);
	}

	/* Modal Content/Box */
	.modal-content {
		background-color: #fefefe;
		margin: 15% auto; /* 15% from the top and centered */
		padding: 20px;
		border: 1px solid #888;
		width: 80%;
	}

	@media (min-width: 320px) and (max-width: 375px) {
		img {
			height: 300px;
			width: 227px;
		}
		button {
			position: relative;
			bottom: 0;
			right: 0;
			width: 100px;
		}
	}
	@media (min-width: 376px) and (max-width: 425px) {
		img {
			height: 300px;
			width: 260px;
		}
	}
	@media (min-width: 426px) and (max-width: 768px) {
		img {
			height: 400px;
			width: 500px;
		}
	}
</style>
