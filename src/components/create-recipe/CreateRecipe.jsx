import { useState } from "react"
import styles from './CreateRecipe.module.scss'
import { useCreateRecipeMutation } from "../../store/api/api"

const CreateRecipe = () => {
	const [recipe, setRecipe] = useState({
		name: ''
	})

	const [ CreateRecipe ] = useCreateRecipeMutation()

	const handleSubmit = (e) => {
		e.preventDefault()
		CreateRecipe(recipe).then(() => {
			setRecipe({name: ''})
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
				<button type="submit">Create</button>
		</form>
	</div>
	)
}

export default CreateRecipe