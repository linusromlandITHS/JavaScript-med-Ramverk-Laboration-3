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
				<RouterLink to="/djur">Sida för att se innehållet i DB...</RouterLink>
			</li>
			<li>
				<RouterLink to="/testpetlisting">Temp. version av listningssidan</RouterLink>
			</li>

		</ul>
	</nav>
	<RouterLink to="/cart">
		<button id="myCart" type="button" class="btn btn-primary">Varukorg</button>
	</RouterLink>
</template>

<script>
	export default {
		name: 'Navbar'
	};
</script>
