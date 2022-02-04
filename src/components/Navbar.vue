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
</template>

<script>
	export default {
		name: 'Navbar'
	};
</script>
