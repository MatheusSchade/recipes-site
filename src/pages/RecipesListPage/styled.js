import styled from "styled-components"
import Fab from '@mui/material/Fab'

export const RecipeListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

`

export const AddRecipeButton = styled(Fab)`
  position: fixed !important;
  right: 20px;
  bottom: 20px;
  z-index: 3;
`
