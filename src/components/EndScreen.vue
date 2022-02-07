<template>
	<div>
		<h2>Ditt köp</h2>
		<table class="table">
			<thead>
				<tr>
					<th scope="col">Köp</th>
					<th scope="col">Varor</th>
					<th scope="col">Antal</th>
					<th scope="col">Pris</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(task, index) in payments" :key="index">
					<th scope="row">{{ task.köp }}</th>
					<td>{{ task.varor }}</td>
					<td>{{ task.antal }}</td>
					<td>{{ task.pris + ' kr' }}</td>
				</tr>
				<tr>
					<th scope="row">Att Betala</th>
					<td>{{ helaPriset + ' kr' }}</td>
					<td>{{ 'varav moms ' + helaPriset * 0.25 + ' kr' }}</td>
				</tr>
			</tbody>
		</table>
		<button class="btn-primary">Betala</button>
	</div>
</template>

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

<style>
	table {
		padding: 30px;
	}
	h2 {
		padding: 30px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
