import useProtectedPage from "../../hooks/useProtectedPage";
import RecipeCard from "../../components/RecipeCard/RecipeCard"
import { BASE_URL } from "../../contants/urls"
import useRequestData from "../../hooks/useRequestData"
import { RecipeListContainer, AddRecipeButton } from "./styled"
import AddIcon from '@mui/icons-material/Add';
import { goToAddRecipes, goToRecipeDetail } from "../../routes/coordinator";
import { useHistory } from "react-router";
import Loading from "../../components/Loading/Loading"

const RecipesListPage = () => {
  useProtectedPage()
  const history = useHistory()
  const recipes = useRequestData([], `${BASE_URL}/recipe/feed`)

  const onClickCard = (id) => {
    goToRecipeDetail(history, id)
  }

  const eachRecipeCard = recipes.map((item, index) => {
    // return index < 20 && <RecipeCard
    return <RecipeCard
      key={item.recipe_id}
      title={item.title}
      image={item.image}
      onClick={() => onClickCard(item.recipe_id)}
    />
  })

  return (
    <RecipeListContainer>

      {eachRecipeCard.length === 0 ? <Loading /> : eachRecipeCard}

      <AddRecipeButton
        color={"primary"}
        onClick={() => goToAddRecipes(history)}>
        <AddIcon />
      </AddRecipeButton>


    </RecipeListContainer >
  )
}


export default RecipesListPage