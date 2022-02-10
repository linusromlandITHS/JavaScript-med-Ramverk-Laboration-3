<script>
	import Button from './Button.vue';

	export default {
		name: 'ProductCard',
		components: {
			Button
		},
		props: {
			data: {
				type: Object,
				required: true
			}
		},
		created() {
			console.log(this.data);
		},

		methods: {
			onClick() {
				this.$router.push({ path: '/product/:id' });
			}
		}
	};
</script>
<template>
	<div @click="onClick" class="card">
		<div class="image">
			<!-- <picture>
				<source srcset="" media="(max-width: 480px)" />
				<source srcset="" media="(max-width: 768px)" />
				<source srcset="" media="(max-width: 1500px)" />
				<img src="" alt="brutus" />
			</picture> -->
		</div>
		<div class="title">{{ data.name }}</div>
		<div class="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia, reprehenderit.</div>
		<div class="price">100 000:-</div>
	</div>
	<Button>bajs</Button>
</template>

<style>
	.card {
		width: 200px;
		height: 250px;
		background-color: #f0efee;
		padding: 5px;
		border-radius: 8px;

		cursor: pointer;
	}

	.image {
		width: 190px;
		height: 137.1px;
		background: #cfc6c6;
		margin-bottom: 5px;
		border-radius: 8px;
	}

	.title {
		width: 190px;
		height: 17.14px;
		font-family: Roboto Mono;
		font-style: normal;
		font-weight: normal;
		font-size: 14px;
		line-height: 18px;
		text-align: center;
		text-transform: uppercase;
		color: #000000;
		margin-bottom: 5px;
	}

	.text {
		width: 190px;
		height: 50.4px;

		font-family: Noto Serif;
		font-style: normal;
		font-weight: 200;
		font-size: 10px;
		line-height: 12px;

		color: #000000;
		margin-bottom: 5px;
	}

	.price {
		width: 190px;
		height: 14.11px;
		font-family: Roboto Mono;
		font-style: normal;
		font-weight: normal;
		font-size: 14px;
		line-height: 18px;
		text-align: center;
		color: #000000;
		margin-bottom: 5px;
	}

	.cart-button {
		width: 200px;
		height: 42px;

		background: #faac77;
		border-radius: 8px;
		margin-top: 5px;

		font-family: Roboto Mono;
		font-style: normal;
		font-weight: normal;
		font-size: 9px;
		line-height: 12px;
		text-align: center;
		text-transform: uppercase;

		color: #f0efee;
		border: none;
	}
</style>
