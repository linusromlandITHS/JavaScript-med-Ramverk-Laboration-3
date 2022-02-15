<script>
	import ProductCard from '../components/ProductCard.vue';

	export default {
		name: 'DjurView',
		data() {
			return {
				cities: null,
				djur: null,
				djurtabell: null
			};
		},
		async created() {
			const request = await fetch('/database.json');
			const response = await request.json();
			this.djur = response.animals;

			let d = response.animals;
			let htmlarr = ['<table class="table table-striped">'];
			for (let i = 0; i < d.length; i++) {
				console.log(d[i]);
				let post = d[i];
				htmlarr.push('<tr>');
				console.log(post);
				for (let j in post) {
					htmlarr.push('<td>' + post[j] + '</td>');
				}
				// htmlarr.push('<td><img src="assets/products/' + post['id'] + '/0.jpg" style="max-width:80px" /></td>');

				//assets/products/d55f55a1-b8ac-4c1b-9e3c-cb5fa46eca77/0.jpg

				htmlarr.push('</tr>');
			}
			htmlarr.push('</table>');
			this.djurtabell = htmlarr.join('');
		},
		components: { ProductCard }
	};
</script>

<template>

	<jumbotron class="jumbotron">
		<div>
asd rew rwe rasd rew rwe rasd rew rwe rasd rew rwe rasd rew rwe rasd rew rwe rasd rew rwe rasd rew rwe rasd rew rwe r
		</div>

<button type="button" class="btn btn-primary">
  Notifications <span class="badge badge-light">4</span>
</button>
 <span class="badge badge-success">4324</span>
<h1>Example heading <span class="badge badge-third">first</span></h1>
<h2>Example heading <span class="badge badge-secondary">New</span></h2>
<h3 class="badge bg-success">Example heading <span class="badge badge-secondary">New</span></h3>
<h4>Example heading <span class="badge badge-secondary">New</span></h4>
<h5>Example heading <span class="badge badge-secondary">New</span></h5>
<h6>Example heading <span class="badge badge-secondary">New</span></h6>
</jumbotron>

<container>CONTAINTER HÄR
</container>
<container class="container">CONTAINTER 2 HÄR
<span class="badge bg-success">Hästar</span>
<span class="badge bg-secondary">Katter</span>
<span class="badge bg-first">Hundar</span>
<span class="badge bg-success">Fiskar</span>

<span class="badgelike">H1ästar</span>
<span class="badgelike">Ka2tter</span>
<span class="badgelike">Hu3ndar</span>
<span class="badgelike">Fis4kar</span>



</container>

<!-- 
	<div style="background-color: white !important; padding: 12px; border: 1px solid">
		<hr />
		<h5>Vue-router-sidan DjurView här:</h5>
		<h6>Visar bara innehållet i databasen som en tabell</h6>

		<div v-html="djurtabell" style="padding: 12px; border: 1px solid" />

		<b> DJUR SLUTAR HÄR </b>
	</div> -->


	<!-- <ProductCard :data="this.djur[0]" /> -->




</template>


<style>
jumbotron{ 

	color:black;
	border:1px solid black;
}
container{ 

	height: 600px;
	width: 600px;

	margin:111px;
	padding:111px;
	color:black;
	border:1px solid red;
}

badge{ 
	font-size: 23px !important;
}


.badgelike{ 
	
	line-height:25px;
	font-size: 23px !important;
background-color: red  !important;
border:1px dashed yellow;
}

</style>
