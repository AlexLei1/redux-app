import  {useGetRecipesQuery}  from '../store/api/api';
import Header from './header/Header';
import RecipeItem from './recipe-item/RecipeItem';
// import User from './user/user';
import CreateRecipe from './create-recipe/CreateRecipe';


function App() {
	const userId = true


	const {isLoading, data} = useGetRecipesQuery(undefined, {skip: !userId})

  return (
		<section>
			<Header/>
			<CreateRecipe/>
			{/* <User/> */}
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
