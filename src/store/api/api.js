import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const API_URL = 'http://localhost:5100/recipes'

// создаем общий api
export const api = createApi({
	reducerPath: 'api',
	tagTypes: ['Recipe'], // для переобновления данных 
	baseQuery: fetchBaseQuery({ baseUrl: API_URL}), // базовый url к каждому запросу пребовляем API_URL
	endpoints: builder => ({
		getRecipes: builder.query({
			query: () => '/',
			providesTags: () => [{
				type: 'Recipe'
			}]
		}),
		createRecipe: builder.mutation({
			query: (recipe) => ({
				body: recipe,
				url: '/',
				method: 'POST'
			}),
			invalidatesTags: () => [{
				type: 'Recipe'
			}]
		}),
		deleteRecipe: builder.mutation({
			query: (id) => ({
				url: `/${id}`,
				method: 'DELETE'
			}),
			invalidatesTags: () => [{
				type: 'Recipe'
			}]
		})
	}),
})

export const {useGetRecipesQuery, useCreateRecipeMutation, useDeleteRecipeMutation} = api