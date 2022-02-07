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
		<button class="btn-primary">Betala</button>
	</div>
</template>

<style>
	table {
		padding: 30px;
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
		color: white;
	}
</style>
