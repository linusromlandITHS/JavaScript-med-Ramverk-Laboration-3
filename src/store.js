// External dependencies:
import { createStore } from 'vuex';

//Mutations
const mutations = {
	increment(state) {
		state.counter += 1;
	}
};

//States
const state = {
	counter: 0
};

// Creates and exports vuex
export default createStore({ mutations, state, strict: true });
