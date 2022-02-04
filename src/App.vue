<template>
<div style="padding:35px">
	<nav class="navbar navbar-expand-lg navbar-light bg-light">

				<RouterLink class="navbar-brand"  to="/">Hem</RouterLink>

				<RouterLink class="navbar-brand"  to="/about">Om</RouterLink>
	
				<RouterLink class="navbar-brand" to="/contact">Kontakt</RouterLink>
		
				<RouterLink class="navbar-brand" to="/djur">Djur-sidan...</RouterLink>
	
	</nav>
	Här nedan kommer main och RouterView:
	<main style="padding:35px; border:1px solid">
		<RouterView />
	</main>
  <hr />
Detta nedanför kanske inte ska ligga kvar?
	Main slut
  <hr />
	<HelloWorld msg="Hello Team!" />
	<hr />
	<CitiesList />
	<hr />
	<EndScreen />
</div>
</template>

<script>
	import CitiesList from './components/CitiesList.vue';
	import HelloWorld from './components/HelloWorld.vue';
	import EndScreen from './components/EndScreen.vue';

	export default {
		components: {
			CitiesList,
			HelloWorld,
			EndScreen
		}
	};
</script>
