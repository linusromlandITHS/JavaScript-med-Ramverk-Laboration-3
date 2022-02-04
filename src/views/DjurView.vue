<template>
	<div style="background-color: white !important; padding: 12px; border: 1px solid">
		<hr />
		<h5>Vue-router-sidan DjurView här:</h5>
		<h6>Visar bara innehållet i databasen som en tabell</h6>

		<div v-html="djurtabell" style="padding: 12px; border: 1px solid" />

		<b> DJUR SLUTAR HÄR </b>
	</div>
</template>

<script>
	export default {
		name: 'DjurView',
		data() {
			return {
				cities: null,
				djur: null,
				djurtabell: null
			};
		},
		created() {
			fetch('/database.json')
				.then((response) => response.json())
				.then((djur) => {
					console.log(djur);
					this.djur = djur;
					let d = djur.djursamling;
					let htmlarr = ['<table class="table table-striped">'];
					for (let i = 0; i < d.length; i++) {
						console.log(d[i]);
						let post = d[i];
						htmlarr.push('<tr>');
						console.log(post);
						for (let j in post) {
							htmlarr.push('<td>' + post[j] + '</td>');
						}
						htmlarr.push('</tr>');
					}
					htmlarr.push('</table>');
					this.djurtabell = htmlarr.join('');
				});
		}
	};
</script>
