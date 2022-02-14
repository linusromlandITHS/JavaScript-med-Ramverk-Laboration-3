<script>
	import { inject } from 'vue';

	export default {
		props: ['title'],
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
	</div>
</template>

<style scoped>
	.tab-content {
		background-color: #f0efee;
		color: #333c3e;
		min-height: 400px;
		width: auto;
		padding: 20px;
		border-radius: 8px;
		box-shadow: 0 3px 5px 5px rgba(0, 0, 0, 0.05);
	}
</style>
