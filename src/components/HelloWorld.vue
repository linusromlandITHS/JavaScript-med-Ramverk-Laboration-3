<template>
	<img alt="" src="/assets/fox.jpeg" />
	<p>{{ msg }}</p>
</template>

<script>
	export default {
		props: {
			msg: {
				required: true,
				type: String
			}
		}
	};
</script>

<style scoped>
	p {
		font-weight: bold;
	}
</style>
