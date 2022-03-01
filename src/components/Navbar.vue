<script>
	import Button from './Button.vue';
	export default {
		name: 'Navbar',
		components: {
			Button
		},
		data() {
			return {
				logo: '../public/logo.png'
				//,
				//num_on_button:0
			};
		},
		watch: {
			$route() {
				//When the route changes, sets the navbar to closed
				if (document.getElementById('checkbox').checked) document.getElementById('checkbox').checked = false;
			}
		}
	};
</script>

<template>
	<nav>
		<div class="navbar">
			<div class="container nav-container">
				<input class="checkbox" type="checkbox" id="checkbox" />
				<div class="hamburger-lines">
					<span class="line line1" />
					<span class="line line2" />
					<span class="line line3" />
				</div>
				<div class="logo">
					<img alt="" src="{{ logo }}" height="50px" />
					<RouterLink to="/cart">
						<Button id="cartButton"
							>Varukorgen <i class="bi bi-cart" />
							<span class="badge span_number_of_items_in_cart">{{
								$store.state.numOfItemsInCart
							}}</span></Button
						>
					</RouterLink>
				</div>
				<div class="menu-items">
					<li><RouterLink to="/">Hem</RouterLink></li>
					<li><RouterLink to="/petlisting">Våra djur</RouterLink></li>
					<li><RouterLink to="/contact">Kontakt</RouterLink></li>
					<li><RouterLink to="/about">Om oss</RouterLink></li>
				</div>
			</div>
		</div>
	</nav>
</template>

<style scoped>
	@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		z-index: 12;
	}

	body {
		font-family: 'Poppins', sans-serif;
	}

	.span_number_of_items_in_cart {
		text-align: center;
		background-color: #0e2431;

		margin-left: 15px;
		padding: 8px;
		padding-right: 9px;
		padding-top: 5px;
		padding-bottom: 4px;
	}

	.container {
		max-width: 1050px;
		width: 90%;
		margin: auto;
	}

	.navbar {
		width: 100%;
		box-shadow: 0 1px 4px rgb(146 161 176 / 1%);
		background-color: #606b6f;
	}

	.nav-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 62px;
	}

	.navbar .menu-items {
		display: flex;
		position: relative;
		z-index: 2;
	}

	.navbar .nav-container li {
		list-style: none;
	}

	.navbar .nav-container a {
		text-decoration: none;
		color: #0e2431;
		font-weight: 500;
		font-size: 1.2rem;
		padding: 0.7rem;
	}

	.navbar .nav-container a:hover {
		font-weight: bolder;
	}

	.nav-container {
		display: block;
		position: relative;
		height: 60px;
	}

	.nav-container .checkbox {
		position: absolute;
		display: block;
		height: 32px;
		width: 32px;
		top: 20px;
		left: 20px;
		z-index: 3;
		opacity: 0;
		cursor: pointer;
	}

	.nav-container .hamburger-lines {
		display: block;
		height: 26px;
		width: 32px;
		position: absolute;
		top: 17px;
		left: 20px;
		z-index: 2;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.nav-container .hamburger-lines .line {
		display: block;
		height: 4px;
		width: 100%;
		border-radius: 10px;
		background: #0e2431;
	}

	.nav-container .hamburger-lines .line1 {
		transform-origin: 0% 0%;
		transition: transform 0.4s ease-in-out;
	}

	.nav-container .hamburger-lines .line2 {
		transition: transform 0.2s ease-in-out;
	}

	.nav-container .hamburger-lines .line3 {
		transform-origin: 0% 100%;
		transition: transform 0.4s ease-in-out;
	}

	.navbar .menu-items {
		padding-top: 120px;
		background-color: rgba(250, 172, 119, 0.8);
		height: 100vh;
		width: 100%;
		transform: translate(-150%);
		display: flex;
		flex-direction: column;
		margin-left: -40px;
		padding-left: 50px;
		transition: transform 0.5s ease-in-out;
		text-align: center;
		position: sticky;
	}

	.navbar .menu-items li {
		margin-bottom: 1.2rem;
		font-size: 2.5rem;
		font-weight: 500;
	}

	.logo {
		position: absolute;
		top: 5px;
		right: 15px;
		font-size: 1.2rem;
		color: #0e2431;
	}

	/* Changed max-width according to feedback - the badge will be further to the right */
	#cartButton {
		padding-right: 0px;
		max-width: 167px;
	}

	.nav-container input[type='checkbox']:checked ~ .menu-items {
		transform: translateX(0);
	}

	.nav-container input[type='checkbox']:checked ~ .hamburger-lines .line1 {
		transform: rotate(45deg);
	}

	.nav-container input[type='checkbox']:checked ~ .hamburger-lines .line2 {
		transform: scaleY(0);
	}

	.nav-container input[type='checkbox']:checked ~ .hamburger-lines .line3 {
		transform: rotate(-45deg);
	}

	.nav-container input[type='checkbox']:checked ~ .logo {
		display: none;
	}

	@media screen and (min-width: 992px) {
		.navbar .menu-items {
			text-align: left;
		}
	}
</style>
