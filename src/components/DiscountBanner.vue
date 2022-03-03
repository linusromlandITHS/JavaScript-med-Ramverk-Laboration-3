<script></script>

<template>
	<div class="banner">
		<div class="banner--inner">
			<span>
				<div class="text">Använd kod magic för 25% rabatt på hela ditt köp</div>
			</span>
		</div>
	</div>
</template>

<style scoped>
	.text {
		color: white;
		font-size: 12px;
		margin: 0 25px;
		float: left;
		transition: all 0.3s ease-out;
	}

	.text:hover {
		opacity: 0.5;
		cursor: default;
	}

	.banner {
		height: 30px;
		background-color: #333c3e;
	}

	.banner--inner {
		display: block;
		width: 100%;
		padding-top: 5px;
		padding-bottom: 5px;
		padding-left: 25%;
		position: absolute;
		animation: marquee 20s linear infinite;
	}

	.banner--inner:hover {
		animation-play-state: paused;
	}

	span {
		float: left;
		width: 50%;
	}

	@keyframes marquee {
		0% {
			left: 0;
		}
		100% {
			left: -100%;
		}
	}
</style>
