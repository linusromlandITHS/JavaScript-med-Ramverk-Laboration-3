<script>
	import { inject } from 'vue';

	export default {
		data() {
			return {
				images: [
					{ url: 'assets/members/David.jpg', alt: 'david-sabel' },
					{ url: 'assets/members/Fredric.jpg', alt: 'fredric-ryding' },
					{ url: 'assets/members/Kenneth.jpg', alt: 'kenneth-wilhelmsson' },
					{ url: 'assets/members/Linus.jpg', alt: 'linus-romlánd' },
					{ url: 'assets/members/Nathi.jpg', alt: 'nathi-geigant' },
					{ url: 'assets/members/David.jpg', alt: 'olena-drozdova' },
					{ url: 'assets/members/David.jpg', alt: 'patryk-sroka' }
				]
			};
		},
		props: {
			title: {
				//Array of titles to display
				type: Array,
				required: true
			}
		},
		setup() {
			const selectedTitle = inject('selectedTitle');

			return {
				selectedTitle
			};
		}
	};
</script>

<template>
	<div class="tab-content" v-show="title == selectedTitle">
		<slot />
		<img v-for="image in images" :src="image.url" :alt="image" :key="image.id" />
	</div>
</template>

<style scoped>
	.tab-content {
		background-color: #f0efee;
		color: #333c3e;
		min-height: 400px;
		width: 648px;
		padding: 20px;
		border-radius: 8px;
		box-shadow: 0 3px 5px 5px rgba(0, 0, 0, 0.05);
	}
</style>
