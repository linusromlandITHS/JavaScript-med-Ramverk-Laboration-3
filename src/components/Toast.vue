<script>
	export default {
		name: 'Toast',
		props: {
			message: {
				type: String,
				required: true
			},
			type: {
				type: String,
				required: true,
				validator: function (value) {
					return ['success', 'error', 'warning', 'info'].indexOf(value) !== -1;
				}
			},
			position: {
				type: String,
				required: false,
				validator: function (value) {
					return ['top-left', 'top-right', 'bottom-left', 'bottom-right'].indexOf(value) !== -1;
				},
				default: 'top-right'
			},
			duration: {
				type: Number,
				required: false,
				validator: function (value) {
					return value > 0;
				},
				default: 3000
			}
		}
	};
</script>

<template>
	<h1>Toast</h1>
</template>

<style scoped></style>
