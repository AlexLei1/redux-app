import { useActions } from '../../hooks/useActions'
import { useFavorites } from '../../hooks/useFavorites';
import styles from './RecipeItem.module.scss'

const RecipeItem = ({ recipe }) => {
	
	const { favorites } = useFavorites() 
	const { toggleFavorites } = useActions()

	// checking for favorites
	const isExists = favorites.some(r => r.id === recipe.id)

	return (
		<div className={styles.item}>
			<h2>{recipe.name}</h2>
			<button onClick={() => toggleFavorites(recipe)}>{isExists ? 'Remove from':'Add to'} favorites</button>
		</div>
	)
}

export default RecipeItem