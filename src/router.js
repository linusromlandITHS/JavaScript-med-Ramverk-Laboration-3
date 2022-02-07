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
			name: 'Contact',
			component: () => import('./views/ContactView.vue'),
			path: '/contact'
		},
		{
			// Products Route?
			name: 'Animal',
			component: () => import('./views/AnimalView.vue'),
			path: '/animal'
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
		}
		,
		{
			// Products Route?
			name: 'TestPetlisting',
			component: () => import('./views/TestPetListing.vue'),
			path: '/testpetlisting'
		}

	]
});

router.beforeEach((to, from, next) =>
{
	//Before each route, updates the title of page to match name attribute of route
	document.title = `${String(to.name)} | Red Mountain Ranch`;
	next();
});

//Exports vue-router
export default router;
