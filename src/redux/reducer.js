import { createSlice } from "@reduxjs/toolkit";

export const pokemonSlice = createSlice({
	name: "pokemon",
	initialState: {
		pokemon: [],
	},
	reducers: {
		storePokemon: (state, action) => {
			state.pokemon = action.payload;
		},

	},
});

// Action creators are generated for each case reducer function
export const { storePokemon } = pokemonSlice.actions;

export default pokemonSlice.reducer;
