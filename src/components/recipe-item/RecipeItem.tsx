import { FC } from 'react';
import { useActions } from '../../hooks/useActions'
import { useFavorites } from '../../hooks/useFavorites';
import { useDeleteRecipeMutation } from '../../store/api/api';
import { IRecipe } from './../../types/recipe.types';
import styles from './RecipeItem.module.scss'

interface IRecipeItem {
	recipe: IRecipe
}

const RecipeItem: FC<IRecipeItem> = ( {recipe} ) => {
	
	const { favorites } = useFavorites() 
	const { toggleFavorites } = useActions()
	
	const [ deleteRecipe, {isError}] = useDeleteRecipeMutation()

	const handleDeleteRecipe = async (id: number) => {
		await deleteRecipe(id).unwrap()
	}

	// checking for favorites
	const isExists = favorites.some(r => r.id === recipe.id)

	return (
		<div className={styles.item}>
			<h3>{recipe.name}</h3>
			<button onClick={() => toggleFavorites(recipe)}>{isExists ? 'Remove from':'Add to'} favorites</button>
			<button onClick={() => handleDeleteRecipe(recipe.id)}>delete</button>
		</div>
	)
}

export default RecipeItem