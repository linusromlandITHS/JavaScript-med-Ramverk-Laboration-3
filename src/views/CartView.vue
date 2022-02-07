<script>
	export default {
		name: 'Cart',

		methods: {
			onClick() {
				this.$router.push({ path: '/checkout' });
			}
		}
	};
</script>

<template>
	<main>
		<h1>Din varukorg</h1>
		<div id="itemSection">
			<li>Added item*</li>
			<li>Added item*</li>
			<li>Added item*</li>
		</div>
		<div class="container-sm">
			<h4>
				Total summa
				<span id="inclVAT">inkl. moms </span>
			</h4>
			<p id="totalAmount">"Total amount"</p>
		</div>
		<button @click="onClick" id="checkOut" type="button" class="btn btn-secondary">Gå vidare till kassan</button>
	</main>
</template>

<style>
	li {
		list-style: none;
	}

	h1 {
		margin-bottom: 20px;
		padding-left: 25%;
		padding-right: 25%;
	}

	h4 {
		margin-top: 0.5rem;
	}

	main {
		margin: 2%;
	}
	@media (max-width: 575.98px) {
		.container-sm {
			background-color: rgba(44, 44, 44, 0.5);
			border-radius: 5px;
			display: flex;
			justify-content: space-between;
			margin: 20px 0 20px 0;
		}

		#checkOut {
			width: 100%;
		}
	}

	@media (min-width: 576px) {
		.container-sm {
			display: block;
			background-color: beige;
		}
	}

	#inclVAT {
		display: block;
		font-size: small;
	}

	#itemSection {
		color: black;
	}

	#totalAmount {
		margin-top: 1rem;
	}
</style>
