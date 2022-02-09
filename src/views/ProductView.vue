<script>
	import Slideshow from '../components/Slideshow.vue';
	import Button from '../components/Button.vue';

	export default {
		name: 'ProductView',
		components: {
			Slideshow,
			Button
		},
		data() {
			return {
				product: {} //Object containg all data for product
			};
		},
		methods: {
			/**
			 * @author Linus Romland (hello@linusromland.com)
			 *
			 * @name fetchProduct
			 * @description Fetches product data from database.json
			 * @param {string} id - The id of the product to fetch
			 * @returns {Promise} - A promise that resolves to the product data
			 */
			async fetchProduct() {
				//Fetch product data from database
				const request = await fetch(`/database.json`);
				const response = await request.json();

				//If failed request, redirect to home page
				if (!response) this.$router.push('/');

				//Finds the product that matches the param id
				this.product = response.animals.find((product) => product.id === this.$route.params.id);

				//If product is not found, redirect to home page
				if (!this.product) this.$router.push('/');

				//Updates title of document to product name
				document.title = `${this.product.name} | Red Mountain Ranch`;
			},
			test() {
				console.log('test');
			}
		},
		computed: {
			images() {
				console.log(this.product);
				return this.product.images.map((image) => `../../assets/products/${image}`);
			}
		},
		created() {
			this.fetchProduct();
		}
	};
</script>

<template>
	<div class="col-sm-10">
		<div id="slideshow">
			<Slideshow :images="images" :autoPlay="false" />
		</div>

		<h1 class="text-black fs-1">{{ product.name }}</h1>
		<ul class="list-group">
			<li class="list-group-item"><span class="fw-bold">Ras:</span> {{ product.breed }}</li>
			<li class="list-group-item"><span class="fw-bold">Ålder:</span> {{ product.age }}</li>
			<li class="list-group-item"><span class="fw-bold">Färg:</span> {{ product.color }}</li>
			<li class="list-group-item">
				<span class="fw-bold">Kön:</span> {{ product.sex == 'Male' ? 'Hane' : 'Hona' }}
			</li>
			<li class="list-group-item"><span class="fw-bold">Temperament:</span> {{ product.temperament }}</li>
		</ul>
		<p class="text-black">
			Bosse är en myskatt som gärna ligger nära om hon känner sig bekväm. Viktigt att hon får massa kärlek och
			lugn och ro för att känna sig trygg. Då är hon världens gosigaste katt som gärna blir kliad på magen. Drar
			sig gärna undan när det blir för stökigt och högljutt. Leker gärna 5-10min med en boll eller ett snöre.
		</p>
		<p class="text-black fs-2">SEK{{ product.price }}:-</p>
		<Button :alternative="false" :disabled="false" @clicked="test">PRIMARY</Button>
	</div>
</template>
<style>
	.text-black {
		font-family: 'Noto Serif', serif;
	}
	#slideshow {
		height: 300px;
		width: 100%;
	}
</style>
