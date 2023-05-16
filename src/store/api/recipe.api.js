import { api } from './api';

export const recipeApi = api.injectEndpoints({
	endpoints: builder => ({
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
	})
})

export const {useCreateRecipeMutation, useDeleteRecipeMutation} = recipeApi