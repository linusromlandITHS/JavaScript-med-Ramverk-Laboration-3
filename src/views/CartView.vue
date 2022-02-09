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
		<div id="totalCheckout">
			<div class="container-sm">
				<h6>
					Total summa
					<span id="inclVAT">inkl. moms </span>
				</h6>
				<p id="totalAmount">100:-</p>
			</div>
			<button @click="onClick" id="checkOut" type="button" class="btn btn-secondary">
				Gå vidare till kassan
			</button>
		</div>
	</main>
</template>

<style scoped>
	* {
		color: black;
	}
	li {
		list-style: none;
	}

	h1 {
		text-align: center;
		margin-bottom: 20px;
	}

	h6 {
		margin-top: 0.5rem;
	}

	main {
		background-color: aliceblue;
		border: 1px solid;
		margin: auto;
		max-width: 1024px;
		padding: 5%;
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
			display: flex;
			justify-content: space-between;
			margin: 10px 0 10px 0;
		}

		#checkOut {
			width: 95%;
		}

		#totalCheckout {
			background-color: beige;
			border: 1px solid;
			border-radius: 5px;
			margin-left: 65%;
			padding: 10px;
			width: 35%;
			text-align: center;
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
