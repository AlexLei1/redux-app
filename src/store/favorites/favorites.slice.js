import { createSlice } from "@reduxjs/toolkit";

const initialState = []

export const favoritesSlice = createSlice({
	name: 'favorites',
	initialState, 
	reducers: {
		// добавить в избранное
		toggleFavorites: (state, {payload: recipe}) => {
			// елси рецепт с данным id уже существует 
			if (state.some(r => r.id === recipe.id)) {
				state = state.filter(r => r.id !== recipe.id)
			} else {
				state.push(recipe)
			}
			
		}
	}
})

export const {actions, reducer} = favoritesSlice

// в файлах slice мы создаем reducer, name, initialState, actions 