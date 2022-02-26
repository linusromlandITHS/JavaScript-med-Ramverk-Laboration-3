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
				isActive: false, //If the toast should be visible
				timer: null, //The timer for the toast
				barAnimation: null, //The animation for the toast
				timerStartTime: null, //The time the toast was started
				barWidth: 0, //The width of the toast bar
				duration: 3000 //The duration of the toast
			};
		},
		methods: {
			/**
			 * @name show
			 * @description Shows the toast
			 */
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
			/**
			 * @name clearTimer
			 * @description Clears all timers and resets variables
			 */
			clearTimer() {
				clearTimeout(this.timer);
				clearInterval(this.barAnimation);
				this.timerStartTime = null;
				this.timer = null;
				this.barAnimation = null;
				this.barWidth = 0;
			},
			/**
			 * @name close
			 * @description Closes the toast and resets it.
			 */
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
		<p :class="`${type} m-0 p-2 pe-5 rounded-top text-white font-set`">{{ title }}</p>
		<p class="p-2 pe-5 m-0 font-set">{{ message }}</p>
		<div id="bar" :class="type" :style="`width: ${barWidth > 100 ? 100 : barWidth}%; height: 5px;`" />
	</div>
</template>

<style scoped>
	.error {
		background-color: #e23636;
	}
	.info {
		background-color: #4a90e2;
	}
	.warning {
		background-color: #edb95e;
	}
	.success {
		background-color: #82dd55;
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
		z-index: 1000;
	}

	.font-set {
		font-family: 'Noto Mono', monospace;
	}

	#toast:hover {
		cursor: pointer;
		scale: 1.01;
	}

	#bar {
		transition: width 50ms linear;
	}
</style>
