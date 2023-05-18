import { useState } from 'react';
import  {useGetRecipesQuery}  from '../store/api/api';
import Header from './header/Header';
import RecipeItem from './recipe-item/RecipeItem';
// import User from './user/user';
import CreateRecipe from './create-recipe/CreateRecipe';



function App() {
	const [count, setCount] = useState('');
	const {isLoading, data} = useGetRecipesQuery(count)

  return (
		<section>
			<Header/>
			<CreateRecipe/>
			{/* <User/> */}
			<h3>Display</h3>
			<select value={count} onChange={(e) => setCount(e.target.value)}>
					<option value="">all</option>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
			</select>
			<div>
				{isLoading ? (
				<div>Loading...</div>
				) : data ? (
					data.map(recipe => <RecipeItem key={recipe.id} recipe={recipe}/>)
				) : (
					<div>Not found</div>
				)}
			</div>
		</section>
  )
}

export default App
