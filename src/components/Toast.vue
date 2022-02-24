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
				}, 15000);
			},
			clearTimer() {
				clearTimeout(this.timer);
				this.timer = null;
			},
			close() {
				this.isActive = false;
				this.clearTimer();
			}
		}
	};
</script>

<template>
	<div
		id="toast"
		:class="`${
			isActive ? 'opacity-100' : 'opacity-0'
		} ${position} position-fixed bg-white text-black m-4 shadow rounded`"
		@click="close"
	>
		<p :class="`${type} m-0 p-2 pe-5 rounded-top`">{{ title }}</p>
		<p class="p-2 pe-5 m-0">{{ message }}</p>
	</div>
</template>

<style scoped>
	.error {
		background-color: red;
	}
	.info {
		background-color: blue;
	}
	.warning {
		background-color: yellow;
	}
	.success {
		background-color: green;
	}
	.top-left {
		top: 0;
		left: 0;
	}
	.top-right {
		top: 0;
		right: 0;
	}
	.bottom-left {
		bottom: 0;
		left: 0;
	}
	.bottom-right {
		bottom: 0;
		right: 0;
	}

	#toast {
		transition: scale, opacity 350ms ease-out;
	}

	#toast:hover {
		cursor: pointer;
		scale: 1.01;
	}
</style>
