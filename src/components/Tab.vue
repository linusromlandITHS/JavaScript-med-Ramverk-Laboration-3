<script>
	import { inject } from 'vue';

	export default {
		props: {
			title: {
				//Array of titles to display
				type: String,
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
	</div>
</template>

<style scoped>
	.tab-content {
		background-color: #f0efee;
		color: #333c3e;
		min-height: 400px;
		max-width: 74%;
		margin-left: auto;
		margin-right: auto;
		/* width: 1000px; */
		padding: 20px;
		border-radius: 8px;

		/* box-shadow: 0 3px 5px 5px rgba(0, 0, 0, 0.05); */
	}
</style>
