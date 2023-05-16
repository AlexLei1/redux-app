import { useActions } from '../../hooks/useActions'
import { useFavorites } from '../../hooks/useFavorites';
import { useDeleteRecipeMutation } from '../../store/api/recipe.api';
import styles from './RecipeItem.module.scss'

const RecipeItem = ( {recipe} ) => {
	
	const { favorites } = useFavorites() 
	const { toggleFavorites } = useActions()
	const { deleteRecipe } = useDeleteRecipeMutation()



	// checking for favorites
	const isExists = favorites.some(r => r.id === recipe.id)

	return (
		<div className={styles.item}>
			<h3>{recipe.name}</h3>
			<button onClick={() => toggleFavorites(recipe)}>{isExists ? 'Remove from':'Add to'} favorites</button>
			<button onClick={() => deleteRecipe(recipe.id)}>delete</button>
		</div>
	)
}

export default RecipeItem