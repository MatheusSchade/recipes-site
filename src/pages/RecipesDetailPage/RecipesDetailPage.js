import { useParams } from "react-router";
import useProtectedPage from "../../hooks/useProtectedPage";
import { BASE_URL } from "../../contants/urls"
import useRequestData from "../../hooks/useRequestData"
import Typography from '@mui/material/Typography'
import Loading from "../../components/Loading/Loading"
import {RecipeImage, RecipeContainer, ScreenContainer} from "./styled"

const RecipesDetailPage = () => {
  useProtectedPage()

  const params = useParams()
  const recipe = useRequestData([], `${BASE_URL}/recipe/${params.id}`)[0]

  return (
    <ScreenContainer>
      {recipe ?
        <RecipeContainer>
          <RecipeImage src={recipe.image} />
          <Typography gutterBottom align={'center'} variant={'h5'} color={'primary'}>{recipe.title}</Typography>
          <Typography align={'center'}>{recipe.description}</Typography>
        </RecipeContainer>
        :
        <Loading />
      }
    </ScreenContainer>
  )
}


export default RecipesDetailPage