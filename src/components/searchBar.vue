<script>
	export default {
		data() {
			return {
				search: null
			};
		},
		created() {
			fetch('/database.json')
				.then((response) => response.json())
				.then((djur) => {
					this.djur = djur;
					let d = djur.animals;
					this.full_pet_list = d;
					// Börja med att lista alla djur;
					this.current_pet_list = this.full_pet_list;
				});
		},
		computed: {
			result() {
				if (this.search) {
					return this.full_pet_list.filter((animals) => {
						return this.search
							.toLowerCase()
							.split(' ')
							.every((search) => animals.name.toLowerCase().includes(search));
					});
				} else {
					return this.animals;
				}
			}
		}
	};
</script>
<template>
	<input v-model="search" />
	<div v-for="animals of result" :key="animals.id" class="search_value">
		{{ animals.name }}
		{{ animals.price }}:-
	</div>
</template>
<style>
	.search_value {
		width: 190px;
		border-radius: 8px;
		margin-left: 43%;
		margin-top: 1%;
		background-color: #faac77;
	}
	#name {
		font-weight: bold;
		float: left;
	}
</style>
