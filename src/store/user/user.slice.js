import { createSlice } from "@reduxjs/toolkit";
import { getUserById } from './user.actions';

const initialState = {
	isLoading: false,
	error: null,
	user: {}
}

export const userSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
		// когда запрос ушел на сервер
		.addCase(getUserById.pending, state => {
			state.isLoading = true
		})
		// запрос успешно прошел 
		.addCase(getUserById.fulfilled, (state, action) => {
			state.isLoading = false
			state.user = action.payload
		})
		// запрос вернул error 
		.addCase(getUserById.rejected, (state, action) => {
			state.isLoading = false
			state.error = action.payload.error
			state.user = {}
		})
	},
})

