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
			}
		},
		data() {
			return {
				isActive: false,
				timer: null,
				barAnimation: null,
				timerStartTime: null,
				barWidth: 0,
				duration: 3000
			};
		},
		methods: {
			show() {
				this.clearTimer();
				this.isActive = true;
				this.timerStartTime = Date.now();
				this.timer = setTimeout(() => {
					this.close();
				}, this.duration);

				this.barAnimation = setInterval(() => {
					const value = ((this.duration - (Date.now() - this.timerStartTime)) / this.duration) * 100;
					this.barWidth = 100 - value;
					if (value < 0) clearInterval(this.barAnimation);
				}, 25);
			},
			clearTimer() {
				clearTimeout(this.timer);
				clearInterval(this.barAnimation);
				this.timerStartTime = null;
				this.timer = null;
				this.barAnimation = null;
				this.barWidth = 0;
			},
			close() {
				this.isActive = false;
				setTimeout(this.clearTimer, 250);
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
		<div id="bar" :class="type" :style="`width: ${barWidth > 100 ? 100 : barWidth}%; height: 5px;`" />
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

	#bar {
		transition: width 50ms linear;
	}
</style>
