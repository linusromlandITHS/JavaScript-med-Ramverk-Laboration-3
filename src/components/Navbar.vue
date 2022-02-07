<script>
	export default {
		name: 'Navbar'
	};
</script>

<template>
	<nav>
		<ul>
			<li>
				<RouterLink to="/">Hem</RouterLink>
			</li>
			<li>
				<RouterLink to="/about">Om</RouterLink>
			</li>
			<li>
				<RouterLink to="/djur">Djur-sidan...</RouterLink>
			</li>
		</ul>
	</nav>
	<RouterLink to="/cart">
		<button id="myCart" type="button" class="btn btn-primary">Varukorg</button>
	</RouterLink>
</template>

<style></style>
