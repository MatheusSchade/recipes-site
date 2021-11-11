import useProtectedPage from "../../hooks/useProtectedPage";
import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { InputsContainer, AddRecipeFormContainer, ScreenContainer, RecipeContainer } from './styled'
import useForm from '../../hooks/useForm'
import { createRecipe } from "../../services/recipe"
import Typography from '@mui/material/Typography'
import { useHistory } from "react-router";
import { CircularProgress } from '@mui/material';

const AddRecipesPage = () => {
  useProtectedPage()
  const history = useHistory()
  const [form, onChange, clear] = useForm({ title: "", description: "", image: "" })
  const [isLoading, setIsLoading] = useState(false)

  const onSubmitForm = (event) => {
    event.preventDefault()
    createRecipe(form, clear, history, setIsLoading)
  }

  return (

    <ScreenContainer>
      <RecipeContainer>
        <form onSubmit={onSubmitForm}>



          <Typography gutterBottom variant={'h4'} align={'center'} color={'textPrimary'}>Adicionar Nova Receita</Typography>

          <AddRecipeFormContainer>
            <InputsContainer>
              <TextField
                name={"title"}
                value={form.title}
                onChange={onChange}
                label={'Título'}
                variant={'outlined'}
                fullWidth
                required
                autoFocus
                margin={'normal'}
              />
              <TextField
                name={"description"}
                value={form.description}
                onChange={onChange}
                label={'Descrição'}
                variant={'outlined'}
                fullWidth
                required
                margin={'normal'}
                sx={{
                  heigth: 2000,
                }}
              />
              <TextField
                name={"image"}
                value={form.image}
                onChange={onChange}
                label={'Foto'}
                variant={'outlined'}
                fullWidth
                required
                margin={'normal'}
              />
            </InputsContainer>
            <Button
              color={'primary'}
              variant={'contained'}
              type={'submit'}
              fullWidth
            >
              {isLoading ? <CircularProgress color={"inherit"} size={24} /> : <>Adicionar Receita</>}
            </Button>
          </AddRecipeFormContainer>
        </form>
      </RecipeContainer>
    </ScreenContainer>
  )
}


export default AddRecipesPage