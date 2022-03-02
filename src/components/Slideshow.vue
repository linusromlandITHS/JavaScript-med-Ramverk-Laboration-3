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
				//Updates the active image index
				this.activeImageIndex = index;

				// Remove the active class from all buttons
				document.querySelectorAll('.activeImage').forEach((element) => element.classList.remove('activeImage'));
				//Adds the active class to the button that was clicked
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
		<img :src="activeImage" alt="Active Image" class="w-100" />

		<!-- Only shows image selector if more then one image is available. -->
		<div v-if="images.length > 1" class="mw-100 d-flex imgSelector p-1 justify-content-center">
			<!-- Loops through all images and creates a button for each image. -->
			<button
				v-for="(image, index) in this.images"
				:key="index"
				class="btn col-1 thumb flex-grow-1"
				@click="changeImage($event, index)"
			>
				<img :src="`assets/products/${image}`" class="w-100 rounded" alt="Image Selector" />
			</button>
		</div>
	</section>
</template>

<style scoped>
	img {
		width: 100%;
		height: 25rem;
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
		max-width: 120px;
	}

	.activeImage {
		filter: brightness(50%);
	}
</style>
