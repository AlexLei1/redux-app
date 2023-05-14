import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {reducer as favoritesReducer} from './favorites/favorites.slice'

const reducers = combineReducers({favorites: favoritesReducer})

export const store = configureStore({
	reducer: reducers,
	devTools: true,
})

// export type storeState = ReturnType<typeof store.getState>