<script>
	export default {
		name: 'ProductCard'
	};
</script>
<template>
	<div class="card">
		<div class="image">
			<picture>
				<source srcset="" media="(max-width: 480px)" />
				<source srcset="" media="(max-width: 768px)" />
				<source srcset="" media="(max-width: 1500px)" />
				<img src="" alt="brutus" />
			</picture>
		</div>
		<div class="title">Brutus</div>
		<div class="text">Brutus är helt galen, söker du en vakthund så är Brutus hunden för dig.</div>
		<div class="price">100 000:-</div>
	</div>
	<button type="button" class="cart-button">Lägg i kundvagn</button>
</template>

<style>
	.card {
		width: 200px;
		height: 250px;
		background-color: #f0efee;
		padding: 5px;
		border-radius: 8px;
	}

	.image {
		width: 190px;
		height: 137.1px;
		background: #cfc6c6;
		margin-bottom: 5px;
		border-radius: 8px;
	}

	.title {
		width: 190px;
		height: 17.14px;
		font-family: Roboto Mono;
		font-style: normal;
		font-weight: normal;
		font-size: 14px;
		line-height: 18px;
		text-align: center;
		text-transform: uppercase;
		color: #000000;
		margin-bottom: 5px;
	}

	.text {
		width: 190px;
		height: 50.4px;

		font-family: Noto Serif;
		font-style: normal;
		font-weight: 200;
		font-size: 10px;
		line-height: 12px;

		color: #000000;
		margin-bottom: 5px;
	}

	.price {
		width: 190px;
		height: 14.11px;
		font-family: Roboto Mono;
		font-style: normal;
		font-weight: normal;
		font-size: 14px;
		line-height: 18px;
		text-align: center;
		color: #000000;
		margin-bottom: 5px;
	}

	.cart-button {
		width: 200px;
		height: 42px;

		background: #faac77;
		border-radius: 8px;
		margin-top: 5px;

		font-family: Roboto Mono;
		font-style: normal;
		font-weight: normal;
		font-size: 9px;
		line-height: 12px;
		text-align: center;
		text-transform: uppercase;

		color: #f0efee;
		border: none;
	}
</style>
