import { FC, FormEvent, useState } from "react"
import styles from './CreateRecipe.module.scss'
import { useCreateRecipeMutation } from "../../store/api/api"
import { IRecipeData } from "../../types/recipe.types"


const defaultValue:IRecipeData = {
	name: ''
}

const CreateRecipe: FC = () => {
	const [recipe, setRecipe] = useState(defaultValue)


	const [ CreateRecipe ] = useCreateRecipeMutation()

	const handleCreateRecipe = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		await CreateRecipe(recipe).then(() => {
			setRecipe(defaultValue)
		})
	}

	return (

		<div className={styles.blok}>
			<form onSubmit={handleCreateRecipe}>
				<h3>Create new recipt</h3>
				<label>
					<input 
						type="text" 
						placeholder="Name"
						value={recipe.name} 
						onChange={e => setRecipe({...recipe, name: e.target.value})}
					/>
				</label>
				<button disabled={!recipe.name} type="submit">Create</button>
		</form>
	</div>
	)
}

export default CreateRecipe