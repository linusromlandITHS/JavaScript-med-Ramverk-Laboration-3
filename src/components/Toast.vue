<script>
	export default {
		name: 'Toast',
		props: {
			title: {
				type: String,
				default: 'Notification'
			},
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
		},
		data() {
			return {
				isActive: false,
				timer: null
			};
		},
		methods: {
			show() {
				this.clearTimer();

				this.isActive = true;
				console.log(this.$props, this.duration);

				this.timer = setTimeout(() => {
					this.isActive = false;
				}, this.duration);
			},
			clearTimer() {
				clearTimeout(this.timer);
				this.timer = null;
			}
		}
	};
</script>

<template>
	<h1 v-if="isActive">{{ message }}</h1>
</template>

<style scoped></style>
