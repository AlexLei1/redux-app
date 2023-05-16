import { useState } from "react"
import { useCreateRecipeMutation } from "../../store/api/recipe.api"
import styles from './CreateRecipe.module.scss'

const CreateRecipe = () => {
	const [recipe, setRecipe] = useState({
		name: '',
		image: '',
	})

	const [ CreateRecipe ] = useCreateRecipeMutation()

	const handleSubmit = (e) => {
		e.preventDefault()
		CreateRecipe(recipe).then(() => {
			setRecipe({name: '', image: ''})
		})
	}

	return (

		<div className={styles.blok}>
			<form onSubmit={handleSubmit}>
				<h3>Create new recipt</h3>
				<label>
					<input 
						type="text" 
						placeholder="Name"
						value={recipe.name} 
						onChange={e => setRecipe({...recipe, name: e.target.value})}
					/>
				</label>
				<label>
					<input 
						type="text" 
						placeholder="Image"
						value={recipe.image} 
						onChange={e => setRecipe({...recipe, image: e.target.value})}
						/>
				</label>
				<button type="submit">Create</button>
		</form>
	</div>
	)
}

export default CreateRecipe