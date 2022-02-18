<script>
	export default {
		name: 'Cart',

		data() {
			return {
				cartItems: [],
				imgUrl: 'assets/products/',
				totalAmount: ''
			};
		},

		methods: {
			removeItem(itemId) {
				// Remove the current item by ID
				this.cartItems = this.cartItems.filter((item) => item.id !== itemId);
				//calculates the new total price. (Made by David Sabel)
				this.totalAmount = this.cartItems.reduce((acc, item) => acc + item.price, 0);

				// Update localstorage with the new data
				let lsCart = {};
				this.cartItems.forEach((item) => (lsCart[item.id] = item.name));
				localStorage.setItem('petCart', JSON.stringify(lsCart));


			// UPPDATERAR ANTAL VAROR I KORGEN UTIFRÅN LS (generisk)
			this.$store.commit('updateNumInCartBasedOnLS');

			},

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

			this.totalAmount = this.cartItems.reduce((acc, item) => acc + item.price, 0);
		}
	};
</script>

<template>
	<main>
		<header>
			<h1>Din varukorg</h1>
		</header>
		<body>
			<div id="itemSection">
				<ol>
					<li v-for="cartItem in cartItems" :key="cartItem.id" class="productCard">
						<!-- Gets the first image from image array -->
						<img id="itemPicture" :src="this.imgUrl + cartItem.images[0]" />
						<div id="productText">
							<h6>{{ cartItem.name }}</h6>
							<p>{{ cartItem.type }}</p>
						</div>
						<p id="price">{{ cartItem.price + ' kr' }}</p>
						<p id="removeItem" @click="removeItem(cartItem.id)"><i class="bi bi-x" /></p>
					</li>
				</ol>
			</div>
			<div id="totalCheckout">
				<div class="container-sm">
					<h6>
						Total summa
						<span id="inclVAT">inkl. moms </span>
					</h6>
					<p id="totalAmount">{{ this.totalAmount + ' kr' }}</p>
				</div>
				<button @click="onClick" id="checkOut" type="button" class="btn btn-primary">
					Gå vidare till kassan
				</button>
			</div>
		</body>
	</main>
</template>

<style scoped>
	* {
		color: black;
	}

	body {
		background-color: #ffffff;
	}

	li {
		list-style: none;
	}

	ol {
		padding: 0;
	}

	h1 {
		text-align: center;
		margin-bottom: 50px;
	}

	h6 {
		margin-top: 1rem;
	}

	main {
		background-color: #ffffff;
		/* border: 1px solid; */
		box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.3);
		border-radius: 5px;
		margin: auto;
		max-width: 1024px;
		padding: 3%;
	}

	.productCard {
		background-color: #f0efee;
		/* border: 1px solid; */
		display: flex;
		height: 80px;
		margin-top: 15px;
	}

	.bi-x {
		color: #ff0000;
		font-size: 25px;
		margin-right: 10px;
	}

	/* | ------------------------ Max-width ----------------------------- | */

	@media (max-width: 575.98px) {
		.container-sm {
			background-color: #f0efee;
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
	/* | ---------------------- XX -- XX --------------------------- | */

	@media (min-width: 576px) and (max-width: 1023.8px) {
		main {
			margin: 3%;
		}
		.container-sm {
			flex-direction: column;
			margin-bottom: 20px;
		}
	}

	@media (min-width: 1024px) {
		.container-sm {
			margin: 20px 0 75px 0;
		}
	}

	/* | ------------------------ Min-width ----------------------------- | */

	@media (min-width: 576px) {
		body {
			display: flex;
		}
		.container-sm {
			display: flex;
			justify-content: space-between;
		}

		#checkOut {
			width: 95%;
		}

		#itemSection {
			width: 75%;
		}

		#totalCheckout {
			background-color: #f0efee;
			/* border: 1px solid; */
			border-radius: 5px;
			margin-left: 15%;
			max-height: 220px;
			padding: 10px;
			width: 35%;
			text-align: center;
		}
	}

	/* | ---------------------- XX -- XX --------------------------- | */

	#inclVAT {
		display: block;
		font-size: small;
	}

	#itemPicture {
		height: 90%;
		margin: 5px 0 0px 5px;
		width: 96px;
	}

	#price {
		display: flex;
		padding-left: 25%;
		padding-right: 10%;
		margin: auto;
	}

	#productText {
		margin-left: 5%;
		width: 10%;
	}

	#totalAmount {
		margin-top: 1rem;
	}
</style>
