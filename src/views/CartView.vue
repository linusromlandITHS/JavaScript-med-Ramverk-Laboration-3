<script>
	export default {
		name: 'Cart',

		data() {
			return {
				cartItems: [],
				discount: '',
				discountedAmount: '',
				display: true,
				imgUrl: 'assets/products/',
				show: false,
				totalAmount: 0
			};
		},

		methods: {
			removeItem(itemId) {
				let itemToDelete = this.cartItems.find((item) => item.id === itemId);

				// Add toast message to indicate product was added to cart
				this.$root.showToast({
					title: 'Varukorgen',
					message: `${itemToDelete.name} har tagits bort från din varukorg.`,
					type: 'warning'
				});

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

				this.checkCode();
			},

			onClick() {
				this.$router.push({ path: '/checkout' });
			},

			getCart() {
				if (localStorage.petCart) {
					return JSON.parse(localStorage.petCart);
				} else {
					return {};
				}
			},

			getCode() {
				if (localStorage.discountCode) {
					return JSON.parse(localStorage.discountCode);
				}
			},

			async fetchData() {
				const request = await fetch('/database.json');
				const result = await request.json();

				return result.animals;
			},

			addDiscount() {
				this.show = true;
			},

			checkCode() {
				if (this.discountRate) {
					this.discountedAmount = this.totalAmount * this.discountRate;
				}
			},

			watchProduct(itemId) {
				const route = this.cartItems.find((item) => item.id === itemId);

				this.$router.push({ path: '/product/' + route.id });
			},

			getDiscount() {
				const discountCode = this.$store.state.discountCode;

				const discountRate = discountCode[this.discount];

				if (discountRate) {
					const discountAmount = discountRate * this.totalAmount;

					this.discountedAmount = discountAmount.toFixed();

					localStorage.setItem('discountCode', JSON.stringify(discountRate));
				} else {
					alert('Wrong code, bro!');
				}
				this.show = false;
			}
		},

		async mounted() {
			const items = await this.fetchData();
			const cart = this.getCart();
			const code = this.getCode();

			// Pick all keys from the cart and put into an array
			const itemIds = Object.keys(cart);
			// Replace every itemId with the full item-object from the database
			const cartItems = itemIds.map((itemID) => {
				// Search through the database for the item
				return items.find((a) => a.id === itemID);
			});
			this.cartItems = cartItems;

			this.totalAmount = this.cartItems.reduce((acc, item) => acc + item.price, 0);

			this.discountRate = code;

			this.checkCode();

			// UPPDATERAR ANTAL VAROR I KORGEN UTIFRÅN LS (generisk)
			this.$store.commit('updateNumInCartBasedOnLS');
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
					<li
						@click="watchProduct(cartItem.id)"
						v-for="cartItem in cartItems"
						:key="cartItem.id"
						class="productCard"
					>
						<!-- Gets the first image from image array -->
						<img id="itemPicture" :src="this.imgUrl + cartItem.images[0]" />
						<div id="productText">
							<p id="itemName">{{ cartItem.name }}</p>
							<p>{{ cartItem.type }}</p>
						</div>
						<p id="price">{{ cartItem.price.toLocaleString() + ' kr' }}</p>
						<p id="removeItem" @click="removeItem(cartItem.id)"><i class="bi bi-x" /></p>
					</li>
				</ol>
			</div>
			<div id="totalCheckout">
				<p id="amount">Värde: {{ this.totalAmount.toLocaleString() + ' kr' }}</p>
				<a v-if="!discountedAmount" id="addDiscount" @click="addDiscount">Lägg till rabattkod</a>
				<p id="discountText" v-if="discountedAmount">
					Rabatt: {{ discount }} -{{ this.totalAmount - discountedAmount + ' kr' }}
				</p>
				<input @keyup.enter="getDiscount" v-if="show" type="text" v-model="discount" />
				<div class="container-sm">
					<h6>
						Total summa
						<span id="inclVAT">inkl. moms </span>
					</h6>
					<p v-if="!discountedAmount" id="totalAmount">{{ this.totalAmount.toLocaleString() + ' kr' }}</p>
					<p v-if="discountedAmount" id="totalAmount">{{ this.discountedAmount.toLocaleString() + ' kr' }}</p>
				</div>
				<button @click="onClick" id="checkOut" type="button" class="btn btn-primary">Till kassan</button>
			</div>
		</body>
	</main>
</template>

<style scoped>
	* {
		color: black;
	}

	body {
		padding-bottom: 15px;
	}

	ol {
		padding: 0;
		margin: 0;
	}

	h1 {
		border-bottom: 0.5px solid #f0efee;
		margin-bottom: 15px;
		padding-bottom: 15px;
		text-align: center;
	}

	h6 {
		margin-top: 1rem;
	}

	main {
		background-color: #ffffff;
		box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.3);
		border-radius: 5px;
		margin: auto;
		max-width: 1024px;
		padding: 3%;
	}

	.productCard {
		background-color: #f0efee;
		border-top: 2px solid #ffffff;
		cursor: pointer;
		display: flex;
		height: 80px;
		margin-top: 3px;
	}

	.bi-x {
		color: #ff0000;
		font-size: 25px;
		margin-right: 5px;
	}

	/* | ------------------------ Max-width ----------------------------- | */

	@media (max-width: 575.98px) {
		.container-sm {
			background-color: #f0efee;
			border-radius: 5px;
			display: flex;
			justify-content: space-between;
			margin-top: 10px;
			margin-bottom: 15px;
			max-width: 90%;
		}

		#addDiscount {
			padding: 5% 2% 0 5%;
		}

		#amount,
		#discountText {
			padding-left: 5%;
		}

		#checkOut {
			width: 100%;
		}

		#totalCheckout {
			background-color: #ffffff;
			border-top: 0.5px solid #f0efee;
			padding-top: 15px;
		}
	}
	/* | ---------------------- XX -- XX --------------------------- | */

	@media (min-width: 576px) and (max-width: 1024px) {
		main {
			margin: 3%;
		}
		.container-sm {
			flex-direction: column;
			margin-bottom: 5px;
		}
	}

	@media (min-width: 1024.2px) {
		.container-sm {
			margin: 20px 0 45px 0;
		}
	}

	@media (min-width: 320px) and (max-width: 424px) {
		#addDiscount,
		#amount {
			padding: 0;
		}
		#totalCheckout {
			text-align: center;
		}
	}

	/* | ------------------------ Min-width ----------------------------- | */

	@media (min-width: 576px) {
		body {
			display: flex;
			border-bottom: 0.5px solid #f0efee;
			background-color: #ffffff !important;
		}
		.container-sm {
			display: flex;
			justify-content: space-between;
		}

		#checkOut {
			width: 95%;
		}

		#itemSection {
			width: 100%;
		}

		#totalCheckout {
			background-color: #f0efee;
			border-radius: 5px;
			margin-left: 10%;
			max-height: 300px;
			padding: 25px 10px 10px 10px;
			width: 50%;
			text-align: center;
		}
	}

	/* | ---------------------- XX -- XX --------------------------- | */

	#addDiscount {
		cursor: pointer;
	}

	#discountText {
		font-family: 'Noto Mono', monospace;
		margin-bottom: 0;
	}

	#inclVAT {
		display: block;
		font-size: small;
	}

	#itemName {
		font-weight: bold;
		margin: 10px 0 8px 0;
	}

	#itemPicture {
		height: 90%;
		margin: 5px 0 0px 5px;
		width: 96px;
	}

	#price {
		display: flex;
		padding-left: 20%;
		padding-right: 5%;
		margin: auto;
	}

	#productText {
		margin-left: 5%;
		width: 10%;
	}

	#removeItem {
		cursor: pointer;
		height: 15px;
	}

	#totalAmount {
		margin-top: 1rem;
	}
</style>
