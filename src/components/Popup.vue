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
		}
	};
</script>
<template>
	<div v-if="showPopup" class="modal">
		<div class="modal-content">
			<img class="close-popup" src="assets/close.svg" @click="togglePopup()" />
			<h1>TACK FÖR DIN KÖP!</h1>
			<img class="animation" src="assets/lazy_dog.gif" />
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
	.modal {
		display: block; /* Hidden by default */
		position: fixed; /* Stay in place */
		z-index: 999; /* Sit on top */
		left: 0;
		top: 0;
		width: 100%; /* Full width */
		height: 100%; /* Full height */
		overflow: auto; /* Enable scroll if needed */
		background-color: rgb(0, 0, 0); /* Fallback color */
		background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
	}

	/* Modal Content/Box */
	.modal-content {
		background-color: #fefefe;
		margin: 15% auto; /* 15% from the top and centered */
		padding: 20px;
		border: 1px solid #888;
		width: 80%; /* Could be more or less, depending on screen size */
	}
</style>
