import { useDispatch, useSelector } from 'react-redux'
import { actions } from '../store/favorites/favorites.slice'
import styles from './RecipeItem.module.scss'

const RecipeItem = ({ recipe }) => {
	const {favorites} = useSelector(state => state)
	console.log(favorites)
	const dispatch = useDispatch()

	return (
		<div className={styles.item}>
			<h2>{recipe.name}</h2>
			<button onClick={() => dispatch(actions.toggleFavorites(recipe))}>Add to facorites</button>
		</div>
	)
}

export default RecipeItem