import RecipeItem from './recipe-item/RecipeItem';

function App() {
  return (
		<div>
			<RecipeItem recipe={{id: 1, name: 'Лазанья'}}/>
			<RecipeItem recipe={{id: 2, name: 'Паста'}}/>
			<RecipeItem recipe={{id: 3, name: 'Пицца'}}/>
			<RecipeItem recipe={{id: 4, name: 'Печенье'}}/>
		</div>
  )
}

export default App
