import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
	history: createWebHashHistory(),
	routes: [
		{
			// Home Route
			name: 'Home',
			component: () => import('./views/HomeView.vue'),
			path: '/'
		},
		{
			// About Route
			name: 'About',
			component: () => import('./views/AboutView.vue'),
			path: '/about'
		},
		{
			// About Route
			name: 'Contact',
			component: () => import('./views/ContactView.vue'),
			path: '/contact'
		},
		{
			// Product Route
			name: 'Product',
			component: () => import('./views/ProductView.vue'),
			path: '/product/:id'
		},
		{
			// Cart Route
			name: 'Cart',
			component: () => import('./views/CartView.vue'),
			path: '/cart'
		},
		{
			// Checkout Route
			name: 'Checkout',
			component: () => import('./components/EndScreen.vue'),
			path: '/checkout'
		},
		{
			// Products Route?
			name: 'Petlisting',
			component: () => import('./views/PetListingView.vue'),
			path: '/petlisting'
		},
		{
			// TEMP AVEL
			name: 'Avel',
			component: () => import('./components/avelPage.vue'),
			path: '/avel'
		}
	]
});

router.beforeEach((to, from, next) => {
	//Before each route, updates the title of page to match name attribute of route
	document.title = `${String(to.name)} | Red Mountain Ranch`;

	//Scroll to top of page
	window.scrollTo(0, 0);

	next();
});

//Exports vue-router
export default router;
