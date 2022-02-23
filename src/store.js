// External dependencies:
import { createStore } from 'vuex';

//Mutations
const mutations = {
	increment(state) {
		state.counter += 1;
	},

	// 220218: Update number on button based on contents in localstorage
	// This single method replaces all previous attempts

	updateNumInCartBasedOnLS(state) {
		// Hämta tidigare innehåll i localStorage
		let cart;
		if (localStorage.getItem('petCart')) {
			cart = JSON.parse(localStorage.getItem('petCart'));
		} else {
			cart = {};
		}

		// ANTAL SAKER I KUNDVAGNEN EFTER ÄNDRING/uppdatering/omladdning/etc.
		state.numOfItemsInCart = Object.keys(cart).length;
	},
	incrementAvel(state) {
		state.avelPris += 500;
	}
};

//States
const state = {
	counter: 0,

	// 220218: Number of items in cart to display on button
	numOfItemsInCart: 0,
	// Avelpris
	avelPris: 0
};

// Creates and exports vuex
export default createStore({ mutations, state, strict: true });
