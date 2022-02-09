<script>
	import playIcon from '../../assets/play.svg';
	import pauseIcon from '../../assets/pause.svg';

	export default {
		name: 'Slideshow',
		props: {
			images: {
				type: Array,
				required: true
			},
			autoPlay: {
				type: Boolean,
				default: true
			},
			interval: {
				type: Number,
				default: 5000
			},
			bgColor: {
				type: String,
				default: '#000'
			}
		},
		data() {
			return {
				currentIndex: 0,
				timer: null,
				isPlaying: this.autoPlay
			};
		},
		computed: {
			currentImage() {
				return this.images[this.currentIndex];
			},
			pausePlayIcon() {
				return this.isPlaying ? pauseIcon : playIcon;
			}
		},
		methods: {
			startTimer() {
				this.timer = setInterval(() => {
					this.next();
				}, this.interval);
			},
			stopTimer() {
				clearInterval(this.timer);
				this.timer = null;
			},
			next() {
				this.currentIndex = (this.currentIndex + 1) % this.images.length;
			},
			previous() {
				this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
			},
			playPause() {
				if (this.timer) {
					this.stopTimer();
					this.isPlaying = false;
				} else {
					setTimeout(() => {
						this.next();
						this.startTimer();
					}, 1000);
					this.isPlaying = true;
				}
			}
		},
		created() {
			if (this.autoPlay) this.startTimer();
			console.log(this.currentImage);
		}
	};
</script>

<template>
	<div class="slideshow" :style="{ backgroundImage: `url(${currentImage})`, backgroundColor: bgColor }">
		<div id="buttons" v-if="images.length > 1">
			<button @click="next"><img src="../../assets/leftArrow.svg" /></button>
			<button @click="playPause"><img :src="pausePlayIcon" /></button>
			<button @click="previous"><img src="../../assets/rightArrow.svg" /></button>
		</div>
	</div>
</template>

<style scoped>
	.slideshow {
		width: 100%;
		height: 100%;
		background-repeat: no-repeat;
		background-position: center;
		background-size: contain;
		display: block;
	}

	#buttons {
		display: flex;
		opacity: 0;
		height: 100%;
		justify-content: space-between;
		align-items: center;
		transition: opacity 175ms ease-in-out;
	}

	.slideshow:hover #buttons {
		opacity: 1;
	}

	button {
		background: none;
		outline: none;
		border: none;
		padding: 0;
		margin: 0;
		cursor: pointer;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 250px;
		transition: background-color 175ms ease-in-out;
	}

	button:hover {
		background-color: rgba(100, 100, 100, 0.9);
	}

	img {
		width: 50px;
		height: 50px;
	}
</style>
