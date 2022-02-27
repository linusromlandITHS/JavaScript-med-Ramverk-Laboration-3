<script>
	import AvelPage from '../components/avelPage.vue';
	import Popup from '../components/Popup.vue';

	export default {
		name: 'EndScreen',
		data() {
			return {
				summa: 0,
				cartItems: [],
				helaPriset: 0,
				show: true,
				showTwo: true,
				showPopup: false
			};
		},
		created() {
			// UPPDATERAR ANTAL VAROR I KORGEN UTIFRÅN LS (generisk)
			this.$store.commit('updateNumInCartBasedOnLS');
		},
		methods: {
			deleteItem(index) {
				//deletes the index of that row
				this.cartItems.splice(index, 1);
				//calculates the new total price.
				this.helaPriset = this.cartItems.reduce((acc, item) => acc + item.price, 0);
				//this.localStorage.removeItem(index, 1);
				// UPPDATERAR ANTAL VAROR I KORGEN UTIFRÅN LS (generisk)
				this.$store.commit('updateNumInCartBasedOnLS');
			},
			getCart() {
				if (localStorage.petCart) {
					return JSON.parse(localStorage.petCart);
				}
			},
			showMap() {
				this.show = false;
			},
			emptyStorage() {
				this.togglePopup();
				// this.localStorage.clear();
			},
			togglePopup() {
				// console.log('showPopup', this.showPopup);
				this.showPopup = !this.showPopup;
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
			this.helaPriset = this.cartItems.reduce((acc, item) => acc + item.price, 0);
			console.log(cartItems);
		},
		components: { AvelPage, Popup }
	};
</script>

<template>
	<div class="container">
		<h2>Ditt köp</h2>
		<table class="table">
			<thead>
				<tr>
					<th scope="col">Namn</th>
					<th scope="col">Djur</th>
					<th scope="col">Ras</th>
					<th scope="col">Pris</th>
					<th scope="col">X</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(task, index) in cartItems" :key="index">
					<th scope="row">{{ task.name }}</th>
					<td>{{ task.type }}</td>
					<td>{{ task.breed }}</td>
					<td>{{ task.price + ' kr' }}</td>
					<td @click="deleteItem"><span class="fa fa-trash">X</span></td>
				</tr>
				<tr>
					<th scope="row">Att betala</th>
					<td>
						{{ helaPriset + ' kr' }} <br />
						<span> {{ 'Varav moms ' + helaPriset * 0.25 + ' kr' }} </span>
					</td>
					<td />
					<td />
					<td />
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
							<span class="ps-3">{{ 'Betala ' + helaPriset + ' kr' }}</span>
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
	<AvelPage />
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
	main {
		padding: 20px;
	}
	.table {
		padding: 30px;
		background-color: #c9c9bd;
		border: 4px;
		border-color: #faac77;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	}
	#table {
		color: black;
		padding: 15px;
		background-color: #c9c9bd;
		border: 4px;
		border-color: #faac77;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
		margin-bottom: 20px;
	}
	#tableTwo {
		color: black;
		padding: 15px;
		background-color: #c9c9bd;
		border: 4px;
		border-color: #faac77;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	}
	span {
		font-size: 90%;
	}
	div {
		border: 4px;
		border-color: #faac77;
	}
	h2 {
		border: 4px;
		border-color: #faac77;
		padding: 30px;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #faac77;
	}
	span {
		cursor: pointer;
	}
	span:hover {
		color: black;
	}
</style>
