<script>
	export default {
		name: 'Slideshow',
		props: {
			images: {
				//Array of images to display
				type: Array,
				required: true
			}
		},
		data() {
			return {
				activeImageIndex: 0 // the index of the active image
			};
		},
		methods: {
			/**
			 * @author Linus Romland (hello@linusromland.com)
			 *
			 * @name changeImage
			 * @param {Event} event - The event of the button click
			 * @param {String} index - The index of the button clicked
			 */
			changeImage(event, index) {
				this.activeImageIndex = index;
				// Removed activeImg from all images
				document.querySelectorAll('.activeImage').forEach((node) => {
					node.classList.remove('activeImage');
				});
				//Set activeImg on clicked image
				event.currentTarget.classList.add('activeImage');
			}
		},
		computed: {
			// Returns the active image
			activeImage() {
				return `assets/products/${this.images[this.activeImageIndex]}`;
			}
		}
	};
</script>

<template>
	<section class="d-flex flex-column">
		<!-- The active image shown -->
		<img :src="activeImage" alt="Product image" />

		<!-- Only shows nav if more then one image is available. -->
		<nav v-if="images.length > 1" class="mw-100 d-flex horizontal-scrollable p-2 justify-content-center">
			<!-- Loops through all images and creates a button for each image. -->
			<button
				v-for="(image, index) in this.images"
				:key="index"
				class="btn col-1 thumb flex-grow-1"
				@click="changeImage($event, index)"
			>
				<img :src="`assets/products/${image}`" class="w-100 rounded" />
			</button>
		</nav>
	</section>
</template>

<style scoped>
	nav {
		overflow-x: scroll;
	}

	img {
		width: 100%;
		height: 250px;
		object-fit: contain;
	}

	button {
		height: 80px;
		outline: none;
		border: none;
	}

	button > img {
		height: 100%;
	}

	button:hover,
	button:focus {
		outline: none !important;
		border: none !important;
	}

	.thumb {
		max-width: 125px;
	}

	.activeImage {
		filter: brightness(50%);
	}

	/**Media Query for desktop */
	@media (min-width: 992px) {
		img {
			height: 500px;
		}
	}
</style>
