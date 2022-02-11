<script>
	export default {
		name: 'EndScreen',
		data() {
			return {
				summa: 0,
				payments: [
					{
						köp: 1,
						varor: 'Kattavel',
						antal: '6',
						pris: 6000
					},
					{
						köp: 2,
						varor: 'Hö',
						antal: '7',
						pris: 10000
					},
					{
						köp: 3,
						varor: 'Höna',
						antal: '10',
						pris: 400
					}
				]
			};
		},
		methods: {
			deleteItem(index) {
				this.payments.splice(index, 1);
			}
		},
		mounted() {
			if (localStorage.payments) {
				this.payments = JSON.parse(localStorage.payments);
			}
		},
		watch: {
			payments: {
				handler(newSave) {
					localStorage.payments = JSON.stringify(newSave);
				},
				deep: true
			}
		},
		created() {
			this.helaPriset = this.payments.reduce((acc, item) => acc + item.pris, 0);
		}
	};
</script>

<template>
	<div class="container">
		<h2>Ditt köp</h2>
		<table class="table">
			<thead>
				<tr>
					<th scope="col">Köp</th>
					<th scope="col">Varor</th>
					<th scope="col">Antal</th>
					<th scope="col">Pris</th>
					<th scope="col">X</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(task, index) in payments" :key="index">
					<th scope="row">{{ task.köp }}</th>
					<td>{{ task.varor }}</td>
					<td>{{ task.antal }}</td>
					<td>{{ task.pris + ' kr' }}</td>
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
						<div class="btn btn-primary mb-3">
							<span class="ps-3">Betala 16400 kr</span> <span class="fas fa-arrow-right" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
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
