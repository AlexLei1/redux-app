import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IRecipe } from './../../types/recipe.types';

const initialState: IRecipe[] = []

export const favoritesSlice = createSlice({
	name: 'favorites',
	initialState, 
	reducers: {
		// добавить в избранное
		toggleFavorites: (state, {payload: recipe}: PayloadAction<IRecipe>) => {
			// елси рецепт с данным id уже существует 
			if (state.some(item => item.id === recipe.id)) {
				const index = state.findIndex(item => item.id === recipe.id)
				if (index !== -1) state.splice(index, 1)
			} else state.push(recipe)
		}
	}
})

export const {actions, reducer} = favoritesSlice
// в файлах slice мы создаем reducer, name, initialState, actions 