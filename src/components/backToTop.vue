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
		<button @click="scrollToTop">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="150"
				height="50"
				fill="currentColor"
				class="bi bi-arrow-up"
				viewBox="0 0 16 16"
			>
				<path
					fill-rule="evenodd"
					d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
				/>
			</svg>
		</button>
	</div>
</template>
<style>
	.scroll-to-top {
		padding: 30px 0;
		position: absolute;
		right: 0;
		border-radius: 8px;
		margin-right: 10px;
	}
	.scroll-to-top button {
		border: none;
		background: transparent;
		cursor: pointer;
	}
</style>
