<script>
	import Popup from '../components/Popup.vue';

	export default {
		name: 'Checkout',

		data() {
			return {
				cartItems: [],
				discountRate: '',
				totalAmount: 0,
				show: true,
				showTwo: true,
				showPopup: false,

				breedingObj: {
					id: '0d0c26f5-8066-4b6b-a6b1-2ac6c21b32b7',
					name: 'Avel',
					type: this.$store.state.nameNewCat,
					breed: 'SUPERKATT',
					sex: 'Female',
					categories: ['Däggdjur', 'Sällskapsdjur'],
					color: 'Svart/vit',
					temperament: 'Feg',
					age: 1,
					images: ['0d0c26f5-8066-4b6b-a6b1-2ac6c21b32be/0.jpg'],
					price: 500,
					description:
						'Tossan tillhör de försiktigas skara. Huskatt, blandraskatt eller bondkatt är de officiella benämningarna på alla de katter som saknar stamtavla, och alltså inte är registrerade i någon kattorganisation. Även om båda föräldrarna är registrerade raskatter så kallas avkomman huskatt om den inte registreras.'
				}
			};
		},

		methods: {
			deleteItem(itemId) {
				let itemToDelete = this.cartItems.find((item) => item.id === itemId);

				// Add toast message to indicate product was added to cart
				this.$root.showToast({
					title: 'Varukorgen',
					message: `${itemToDelete.name} har tagits bort från din varukorg.`,
					type: 'warning'
				});
				//deletes the index of that row
				//this.cartItems.splice(index, 1);
				this.cartItems = this.cartItems.filter((item) => item.id !== itemId);
				//calculates the new total price.
				this.totalAmount = this.cartItems.reduce((acc, item) => acc + item.price, 0);
				//this.localStorage.removeItem(index, 1);

				let lsCart = {};
				this.cartItems.forEach((item) => (lsCart[item.id] = item.name));
				localStorage.setItem('petCart', JSON.stringify(lsCart));
				// UPDATES NUMBER ON BUTTON BASED ON LS (generisk)
				this.$store.commit('updateNumInCartBasedOnLS');
			},

			getCart() {
				if (localStorage.petCart) {
					return JSON.parse(localStorage.petCart);
				}
			},
			getCart2() {
				if (localStorage.avel) {
					return JSON.parse(localStorage.avel);
				} else {
					return {};
				}
			},

			getCode() {
				if (localStorage.discountCode) {
					return JSON.parse(localStorage.discountCode);
				}
			},

			showMap() {
				this.show = false;
			},

			emptyStorage() {
				this.togglePopup();
				//Clear localStorage
				localStorage.clear();
				this.$store.commit('updateNumInCartBasedOnLS');
			},

			togglePopup() {
				// console.log('showPopup', this.showPopup);
				this.showPopup = !this.showPopup;
			},

			async fetchData() {
				const request = await fetch('/database.json');
				const result = await request.json();
				return [...result.animals, ...result.supperkatter];
			}
		},

		async mounted() {
			const items = await this.fetchData();
			const cart = await this.getCart();
			const code = this.getCode();
			// Pick all keys from the cart and put into an array
			const itemIds = cart ? Object.keys(cart) : [];
			// Replace every itemId with the full item-object from the database
			let cartItems = itemIds.map((itemID) => {
				// Search through the database for the item
				return items.find((a) => a.id === itemID);
			});

			this.cartItems = cartItems;

			if (this.$store.state.avelPris > 1) {
				this.cartItems.push(this.breedingObj);
			}

			this.totalAmount = this.cartItems.reduce((acc, item) => acc + item.price, 0);

			this.discountRate = code;

			const discountAmount = this.discountRate * this.totalAmount;

			this.discountedAmount = discountAmount.toFixed();

			// UPDATES NUMBER ON BUTTON BASED ON LS (generisk)
			this.$store.commit('updateNumInCartBasedOnLS');
		},
		components: { Popup }
	};
</script>

<template>
	<div class="container">
		<h1 class="card px-4">Ditt köp</h1>
		<table class="table">
			<thead>
				<tr>
					<th id="name" class="heading" scope="col">Namn</th>
					<th class="heading" scope="col">Djur</th>
					<th class="heading" scope="col">Ras</th>
					<th class="heading" scope="col">Pris</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(task, index) in cartItems" :key="index">
					<th scope="row">{{ task.name }}</th>
					<td>{{ task.type }}</td>
					<td>{{ task.breed }}</td>
					<td>{{ task.price.toLocaleString() + ' kr' }}</td>
					<td @click="deleteItem(task.id)"><i class="bi bi-x" /></td>
				</tr>
				<tr>
					<th id="pay" scope="row">Att betala</th>
					<td v-if="!discountRate">
						{{ totalAmount + ' kr' }} <br />
						<span> {{ 'Varav moms ' + totalAmount * 0.25 + ' kr' }} </span>
					</td>
					<td v-if="discountRate">
						{{ totalAmount * discountRate + ' kr' }} (<span id="discount"
							>Rabatt: -{{ this.totalAmount - this.discountedAmount }} kr</span
						>) <br />
						<span> {{ 'Varav moms ' + totalAmount * discountRate * 0.25 + ' kr' }} </span>
					</td>
				</tr>
			</tbody>
		</table>
		<div class="container" id="table">
			<div class="card px-4">
				<p class="h8 py-3">Betalningsinformation:</p>
				<div class="row gx-3">
					<div class="col-12">
						<div class="d-flex flex-column">
							<p class="text mb-1">För- och efternamn</p>
							<input
								class="form-control mb-3"
								type="text"
								placeholder="Name"
								value="Ninni af Glidefjäll"
							/>
						</div>
					</div>
					<div class="col-12">
						<div class="d-flex flex-column">
							<p class="text mb-1">Kortnummer</p>
							<input class="form-control mb-3" type="text" placeholder="1234 5678 435678" />
						</div>
					</div>
					<div class="col-6">
						<div class="d-flex flex-column">
							<p class="text mb-1">Utgångsdatum</p>
							<input class="form-control mb-3" type="text" placeholder="MM/YYYY" />
						</div>
					</div>
					<div class="col-6">
						<div class="d-flex flex-column">
							<p class="text mb-1">CVV/CVC</p>
							<input class="form-control mb-3 pt-2" type="password" placeholder="***" />
						</div>
					</div>
					<div class="col-12">
						<div @click="emptyStorage" class="btn btn-primary mb-3">
							<span class="ps-3">{{ 'Betala ' + totalAmount + ' kr' }}</span>
							<span class="fas fa-arrow-right" />
						</div>
					</div>
				</div>
			</div>
		</div>
		<template v-if="show === true">
			<div class="container" id="tableTwo">
				<div class="card px-4">
					<p class="h8 py-3">Hemkörning:</p>
					<div class="row gx-3">
						<div class="col-12">
							<div class="d-flex flex-column">
								<p class="text mb-1">Adress</p>
								<input
									class="form-control mb-3"
									type="text"
									placeholder="Name"
									value="Vandrandepinne gatan 50"
								/>
							</div>
						</div>
						<div class="col-12">
							<div class="d-flex flex-column">
								<p class="text mb-1">Postnummer och ort</p>
								<input class="form-control mb-3" type="text" placeholder="414 76 Göteborg" />
							</div>
						</div>
						<div class="col-6">
							<div class="d-flex flex-column">
								<p class="text mb-1">Telefonnummer</p>
								<input class="form-control mb-3" type="text" placeholder="070*******" />
							</div>
						</div>
						<iframe src="http://maps.google.com/maps?q=57.708870,11.974560&z=16&output=embed" />
					</div>
				</div>
			</div>
		</template>
	</div>
	<Popup :showPopup="showPopup" :togglePopup="togglePopup" />
</template>

<style scoped>
	@media screen and (max-width: 600px) {
		* {
			font-size: 95%;
		}
		main {
			padding: 20px;
		}
	}

	* {
		color: black;
		font-family: 'Roboto Mono', monospace;
	}

	main {
		padding: 20px;
	}

	.table {
		background-color: #ffffff;
		box-shadow: 2px 10px 28px rgba(51, 60, 62, 0.12);
		margin-bottom: 30px;
		border-radius: 0 0 8px 8px;
		padding: 0;
	}

	#table {
		background-color: #ffffff;
		border: 4px;
		border-color: #faac77;
		box-shadow: 2px 10px 28px rgba(51, 60, 62, 0.12);
		margin-bottom: 30px;
		border-radius: 8px;
		padding: 0;
	}

	#tableTwo {
		background-color: #ffffff;
		border: 4px;
		border-color: #faac77;
		box-shadow: 2px 10px 28px rgba(51, 60, 62, 0.12);
		margin-bottom: 30px;
		border-radius: 8px;
		padding: 0 0 15px 0;
	}

	#discount {
		color: #ff0000;
	}

	.bi-x {
		color: #ff0000;
		cursor: pointer;
		font-size: 25px;
		margin-right: 5px;
	}

	.heading {
		padding: 0.5rem 0.5rem;
		font-weight: bold;
	}

	#name {
		padding-left: 1.5rem;
	}

	#pay {
		font-weight: bold;
	}

	th {
		padding-left: 1.5rem;
		font-weight: lighter;
	}

	span {
		font-size: 90%;
	}

	div {
		border: 4px;
		border-color: #faac77;
	}

	h1 {
		border: 4px;
		/* border-bottom: 0.5px solid #f0efee; */
		border-radius: 8px 08px 0 0;
		padding: 25px;
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 3% 0 0 0;
	}

	span {
		cursor: pointer;
	}

	span:hover {
		color: black;
	}
</style>
