<script>
	import { provide, ref } from 'vue';
	export default {
		setup(props, { slots }) {
			const tabTitles = ref(slots.default().map((tab) => tab.props.title));
			const selectedTitle = ref(tabTitles.value[0]);

			provide('selectedTitle', selectedTitle);
			return {
				tabTitles,
				selectedTitle
			};
		}
	};
</script>

<template>
	<div class="tabs">
		<ul class="tabs__header">
			<li
				v-for="title in tabTitles"
				:key="title"
				:class="{ selected: title == selectedTitle }"
				@click="selectedTitle = title"
			>
				{{ title }}
			</li>
		</ul>
		<slot />
	</div>
</template>

<style scoped>
	.tabs {
		max-width: 400px;
		margin: 0 auto;
	}

	.tabs__header {
		margin-bottom: 10px;
		list-style: none;
		padding: 0;
		display: flex;
		align-items: center;
	}

	.tabs__header li {
		/* width: auto; */
		text-align: center;
		padding: 10px 20px;
		margin-right: 10px;
		background-color: #606b6f;
		border-radius: 8px;
		cursor: pointer;
		transition: 0.3s all ease-out;
	}

	.tabs__header li:hover {
		background-color: #7c898d;
	}

	.tabs__header li.selected {
		background-color: #faac77;
		color: #333c3e;
	}
</style>
