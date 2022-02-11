<script>
	export default {
		name: 'EndScreen',
		data() {
			return {
				summa: 0,
				cartItems: [],
				helaPriset: 0
			};
		},
		methods: {
			deleteItem(index) {
				this.cartItems.splice(index, 1);
				this.helaPriset = this.cartItems.reduce((acc, item) => acc + item.price, 0);
			},
			getCart() {
				if (localStorage.petCart) {
					return JSON.parse(localStorage.petCart);
				}
			},
			emptyStorage() {
				this.localStorage.clear();
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
		}
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
					<th scope="row">Att Betala</th>
					<td>{{ helaPriset + ' kr' }}</td>
					<td>{{ 'var av moms ' + helaPriset * 0.25 + ' kr' }}</td>
				</tr>
			</tbody>
		</table>
		<div class="container" id="table">
			<div class="card px-4">
				<p class="h8 py-3">Betalnings information:</p>
				<div class="row gx-3">
					<div class="col-12">
						<div class="d-flex flex-column">
							<p class="text mb-1">Namn och efternamn</p>
							<input class="form-control mb-3" type="text" placeholder="Name" value="Barry Allen" />
						</div>
					</div>
					<div class="col-12">
						<div class="d-flex flex-column">
							<p class="text mb-1">Kort nummer</p>
							<input class="form-control mb-3" type="text" placeholder="1234 5678 435678" />
						</div>
					</div>
					<div class="col-6">
						<div class="d-flex flex-column">
							<p class="text mb-1">Ut-datum</p>
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
	</div>
</template>

<style scoped>
	@media screen and (max-width: 600px) {
		* {
			font-size: 95%;
		}
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
