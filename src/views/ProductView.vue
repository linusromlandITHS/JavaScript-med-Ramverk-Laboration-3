<script>
	import vue3slideshow from 'vue3-slideshow';

	export default {
		name: 'ProductView',
		components: {
			vue3slideshow
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
			}
		},
		computed: {
			images() {
				return this.product.images.map((image) => `../../assets/products/${image}`);
			}
		},
		created() {
			this.fetchProduct();
		}
	};
</script>

<template>
	<!-- This is a very very temporary showing of data!!! -->
	<h1>{{ product.name }}</h1>
	<vue3slideshow :images="images" :autoPlay="true" :interval="500" />
</template>

<style></style>
