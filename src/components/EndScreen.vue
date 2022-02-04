<template>
	<div>
		<p>Ditt köp</p>
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
					<td>{{ task.pris }}</td>
				</tr>
			</tbody>
		</table>
		<button class="btn-primary">Hem</button>
	</div>
	=======
	<div>
		<p>Hej</p>
	</div>
</template>

<script>
	export default {
		name: 'EndScreen',
		data() {
			return {
				payments: [
					{
						köp: 1,
						varor: 'Kattavel',
						antal: '6',
						pris: '6 000 kr'
					},
					{
						köp: 2,
						varor: 'Hö',
						antal: '7',
						pris: '10 000 kr'
					},
					{
						köp: 3,
						varor: 'Höna',
						antal: '10',
						pris: '400 kr'
					}
				]
			};
		},
		mounted() {
			if (localStorage.tasks) {
				this.payments = JSON.parse(localStorage.tasks);
			}
		},
		watch: {
			payments: {
				handler(newSave) {
					localStorage.tasks = JSON.stringify(newSave);
				},
				deep: true
			}
		}
	};
</script>
