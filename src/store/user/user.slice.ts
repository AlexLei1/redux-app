import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getUserById } from './user.actions';
import { IInitialUserState, IUser } from './../../types/user.types';

const initialState: IInitialUserState  = {
	isLoading: false,
	error: null,
	user: {} as IUser
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
		.addCase(getUserById.fulfilled, (state, action: PayloadAction<IUser>) => {
			state.isLoading = false
			state.user = action.payload
		})
		// запрос вернул error 
		.addCase(getUserById.rejected, (state, action: any) => {
			state.isLoading = false
			state.error = action.payload.error
			state.user = {} as IUser
		})
	},
})

