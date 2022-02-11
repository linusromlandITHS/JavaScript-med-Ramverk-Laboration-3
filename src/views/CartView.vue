<script>
	export default {
		name: 'Cart',
		data() {
			return {
				cartItems: []
			};
		},
		methods: {
			onClick() {
				this.$router.push({ path: '/checkout' });
			},

			getCart() {
				if (localStorage.petCart) {
					return JSON.parse(localStorage.petCart);
				}
			},

			async fetchData() {
				const request = await fetch('/database.json');
				const result = await request.json();

				return result.animals;
			}
		},

		async mounted() {
			const items = await this.fetchData();
			const cart = this.getCart();

			// Pick all keys from the cart and put into an array
			const itemIds = Object.keys(cart);
			// Replace every itemId with the full item-object from the database
			const cartItems = itemIds.map((itemID) => {
				// Search through the database for the item
				return items.find((a) => a.id === itemID);
			});
			this.cartItems = cartItems;
		}
	};
</script>

<template>
	<main>
		<h1>Din varukorg</h1>
		<div id="itemSection">
			<li v-for="cartItem in cartItems" :key="cartItem.id" class="productCard">
				{{ cartItem.name }} {{ cartItem.type }} {{ cartItem.type }}
			</li>
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

	.productCard {
		border: 1px solid;
		height: 80px;
		margin-top: 15px;
	}

	@media (max-width: 575.98px) {
		.container-sm {
			background-color: rgba(44, 44, 44, 0.5);
			border-radius: 5px;
			display: flex;
			justify-content: space-between;
			margin-top: 50px;
			margin-bottom: 15px;
			max-width: 90%;
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

		#itemSection {
			max-width: 55%;
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
	h2 {
		border: 2px;
	}
</style>
