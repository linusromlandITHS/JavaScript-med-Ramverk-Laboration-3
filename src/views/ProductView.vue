<script>
	import Slideshow from '../components/Slideshow.vue';
	import Button from '../components/Button.vue';
	import ProductCard from '../components/ProductCard.vue';

	export default {
		name: 'ProductView',
		components: {
			Slideshow,
			Button,
			ProductCard
		},
		data() {
			return {
				product: {}, //Object containg all data for product
				recommendedProducts: [] //Array of recommended products
			};
		},
		methods: {
			/**
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

				//Find 3 products that are similar to the product
				this.recommendedProducts = response.animals
					.filter((product) => product.id !== this.$route.params.id && product.type == this.product.type)
					.slice(0, 3);

				//If product is not found, redirect to home page
				if (!this.product) this.$router.push('/');

				//Updates title of document to product name
				document.title = `${this.product.name} | Red Mountain Ranch`;
			},
			/**
			 * @name addToCart
			 * @description Add a new product to the cart
			 * @returns {null} - No return value
			 */
			addToCart() {
				//Declares cart variable with either empty array or existing cart
				let cart = localStorage.getItem('petCart') ? JSON.parse(localStorage.getItem('petCart')) : {};

				//Check if product already exists in cart
				const alreadyInCart = cart[this.product.id] ? true : false;

				//Add product to cart
				cart[this.product.id] = this.product.name;

				//Save cart to local storage
				localStorage.setItem('petCart', JSON.stringify(cart));

				// Updates the cart count in the navbar (Created by Kenneth)
				this.$store.commit('updateNumInCartBasedOnLS');

				if (alreadyInCart) {
					// Add toast message to indicate product was already in cart
					this.$root.showToast({
						title: 'Varukorgen',
						message: `${this.product.name} fanns redan i din varukorg!`,
						type: 'info'
					});
				} else {
					// Add toast message to indicate product was added to cart
					this.$root.showToast({
						title: 'Varukorgen',
						message: `${this.product.name} har lagts till i din varukorg.`,
						type: 'success'
					});
				}
			}
		},
		computed: {
			images() {
				if (!this.product.images) return [];
				//This edits the image array and adds the correct path to the image.
				return this.product.images.map((image) => `../../assets/products/${image}`);
			}
		},
		created() {
			//Fetches product data
			this.fetchProduct();
		},
		//This is needed to make the component update when the route changes to same component.
		beforeRouteUpdate() {
			//Fetches product data
			this.fetchProduct();
		}
	};
</script>

<template>
	<div class="d-flex flex-md-row flex-column justify-content-around p-4">
		<div class="col-12 col-md-8 d-flex flex-column">
			<!-- Slideshow Component that displays the images of the product -->
			<Slideshow :images="images" />

			<!-- Product Information -->
			<h1 class="monospace text-black fs-1">{{ product.name }}</h1>
			<div class="d-flex flex-column flex-md-row">
				<ul class="list-group col-md-4 col-12 me-4 mb-2">
					<li class="list-group-item"><span class="fw-bold">Ras:</span> {{ product.breed }}</li>
					<li class="list-group-item"><span class="fw-bold">Ålder:</span> {{ product.age }}</li>
					<li class="list-group-item"><span class="fw-bold">Färg:</span> {{ product.color }}</li>
					<li class="list-group-item">
						<span class="fw-bold">Kön:</span> {{ product.sex == 'Male' ? 'Hane' : 'Hona' }}
					</li>
					<li class="list-group-item"><span class="fw-bold">Temperament:</span> {{ product.temperament }}</li>
				</ul>
				<p class="serif text-black col-md-6 col-12">
					{{ product.description }}
				</p>
			</div>
			<div class="align-self-center">
				<p class="monospace text-black text-center fs-2">SEK{{ product.price }}:-</p>
				<Button :alternative="false" :disabled="false" @clicked="addToCart">LÄGG I VARUKORG</Button>
			</div>
		</div>

		<!-- Recommended Products -->
		<div class="col-12 col-md-2 d-flex align-items-center flex-column my-2">
			<h2 class="text-black">Andra djur:</h2>
			<div class="m-2" v-for="recommendedProduct in recommendedProducts" :key="recommendedProduct.id">
				<!-- Product Card Component that displays recommended products -->
				<ProductCard
					:p_id="recommendedProduct.id"
					:p_name="recommendedProduct.name"
					:p_images_arr="recommendedProduct.images"
					:p_temperament="recommendedProduct.temperament"
					:p_price="recommendedProduct.price"
					:p_type="recommendedProduct.type"
					:p_one_picture="recommendedProduct.images[0]"
					:p_description="recommendedProduct.description"
					:background="true"
				/>
			</div>
		</div>
	</div>
</template>
<style>
	/** Serif Font (Noto Serif) */
	.serif {
		font-family: 'Noto Serif', serif;
	}

	/** Monospace Font (Noto Mono) */
	.monospace {
		font-family: 'Noto Mono', monospace;
	}

	/** Sets slideshow height */
	#slideshow {
		height: 300px;
	}

	/**Media Query for desktop */
	@media (min-width: 992px) {
		#slideshow {
			height: 800px;
		}
	}
</style>
