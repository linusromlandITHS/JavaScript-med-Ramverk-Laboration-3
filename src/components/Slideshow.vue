<script>
	export default {
		name: 'Slideshow',
		props: {
			images: {
				type: Array,
				required: true
			}
		},
		data() {
			return {
				currentImage: 0
			};
		},
		computed: {
			currentImageSrc() {
				return this.images[this.currentImage];
			}
		}
	};
</script>

<template>
	<div id="slideshow" class="w-100 h-100">
		<img :src="currentImageSrc" class="w-75" />
		<div class="h-25">
			<img v-for="(image, index) in images" :key="index" :src="image" />
		</div>
	</div>
</template>
