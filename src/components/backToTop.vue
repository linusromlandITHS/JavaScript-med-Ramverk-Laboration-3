<script>
	export default {
		name: 'App',
		methods: {
			scrollToTop() {
				let currentScroll = document.documentElement.scrollTop,
					int = setInterval(frame, 6);

				function frame() {
					if (0 > currentScroll) clearInterval(int);
					else {
						currentScroll = currentScroll - 12;
						document.documentElement.scrollTop = currentScroll;
					}
				}
			}
		}
	};
</script>
<template>
	<div class="scroll-to-top">
		<button @click="scrollToTop">Scroll to top</button>
	</div>
</template>
<style>
	.scroll-to-top {
		padding: 30px 0;
		position: absolute;
		right: 0;
	}
	.scroll-to-top button {
		border: none;
		background: transparent;
		cursor: pointer;
	}
</style>
