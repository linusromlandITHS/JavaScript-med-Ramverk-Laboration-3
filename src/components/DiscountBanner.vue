<script></script>

<template>
	<div class="marquee">
		<div class="marquee--inner">
			<span>
				<div class="orb">Välkommen!</div>
				<div class="orb">Welcome!</div>
				<div class="orb">Willkommen!</div>
				<div class="orb">¡Bienvenido!</div>
				<div class="orb">Bienvenue!</div>
				<div class="orb">Witaj!</div>
				<div class="orb">Hoş geldin!</div>
				<div class="orb">באַגריסן</div>
			</span>
			<span>
				<div class="orb">Använd kod magic för 25% rabatt på hela ditt köp</div>
			</span>
		</div>
	</div>
</template>

<style scoped>
	/* body {
		margin: 0;
		font-size: 42px;
		font-family: sans-serif;
		color: #333;
		overflow: hidden;
	} */

	.orb {
		/* width: 50px;
		height: 50px; */
		/* background: #999; */
		/* border-radius: 50px; */
		color: white;
		font-size: 12px;
		margin: 0 25px;
		float: left;
		transition: all 0.3s ease-out;
		/* display: inline-block; */
	}

	.orb:hover {
		/* transform: scale(1.2); */
		opacity: 0.5;
		cursor: default;
	}

	.marquee {
		height: 30px;
		background-color: #333c3e;
		/* width: 800px; */
		/* border: 2px solid #eee; */
		/* overflow: hidden; */
		/* box-sizing: border-box; */
		/* position: relative; */
		/* margin: auto; */
	}

	.marquee--inner {
		display: block;
		width: 200%;
		padding-top: 5px;
		padding-bottom: 5px;
		position: absolute;
		animation: marquee 20s linear infinite;
	}

	.marquee--inner:hover {
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
