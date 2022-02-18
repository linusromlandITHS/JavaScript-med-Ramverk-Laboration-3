// External dependencies:
import { createStore } from 'vuex';

//Mutations
const mutations = {
	increment(state)
	{
		state.counter += 1;
	},



	// 220218: Update number on button based on contents in localstorage
	// This single method replaces all previous attempts...
	updateNumInCartBasedOnLS(state)
	{

		// 1 Hämta tidigare innehåll i localStorage (en array)
		let cart;
		if (localStorage.getItem('petCart'))
		{
			cart = JSON.parse(localStorage.getItem('petCart'));

			//	alert("Det fanns ngt i ls");
		} else
		{
			//alert("ls var tomt.");
			cart = {}; //sessionStorage.getItem('petCart');
		}
		//alert(Object.keys(cart).length);
		// HÄR - Uppdatera
		// ANTAL SAKER I KUNDVAGNEN EFTER ÄNDRING
		state.numOfItemsInCart = Object.keys(cart).length;

	},



	// 220218: Number of items in cart to display on button
	incrementNumInCart(state)
	{
		//alert("anropar incrementNumInCart")
		state.numOfItemsInCart += 1;
		//alert("HÄR\n" + this.numOfItemsInCart + "\n" + + "\n" + + "\n" + + "\n")
	},


	// 220218: Number of items in cart to display on button
	NumInCartToZero(state)
	{
		//alert("anropar NumInCartToZero")
		state.numOfItemsInCart = 0;
		//alert("HÄR\n" + this.numOfItemsInCart + "\n" + + "\n" + + "\n" + + "\n")
	},


	// 220218: showCurrentNumInCart
	// This method is called eg. on reload to update the 
	// "Number of items in cart to display on button"
	// with what IS ALREADY in the localstorage cart ("NUM")
	// -- This method is run on "created" (not on button click)
	showCurrentNumInCart(state, NUM)
	{
		//alert("anropar incrementNumInCart")
		state.numOfItemsInCart = NUM;
		//alert("HÄR\n" + this.numOfItemsInCart + "\n" + + "\n" + + "\n" + + "\n")
	}



};

//States
const state = {
	counter: 0,

	// 220218: Number of items in cart to display on button
	numOfItemsInCart: 0

};

// Creates and exports vuex
export default createStore({ mutations, state, strict: true });
