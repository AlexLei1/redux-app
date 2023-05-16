import { createAsyncThunk } from "@reduxjs/toolkit"


// запрос на сервер
const fetchUserById = (userId) => new Promise((resolve) => {
	setTimeout(() =>  resolve({id: 1, name: 'Alex'}),1000)})


// actions - получить пользователя по id 
export const getUserById = createAsyncThunk(
	'users/by-id',
	async(userId, thunkApi) => {
	try{
		const response = await fetchUserById(userId)
		return response
	} catch (error) {
		thunkApi.rejectWithValue(error)
	}
})

