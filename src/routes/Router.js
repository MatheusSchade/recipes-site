import React from "react"
import AddRecipesPage from "../pages/AddRecipesPage/AddRecipesPage"
import LoginPage from "../pages/LoginPage/LoginPage"
import RecipesDetailPage from "../pages/RecipesDetailPage/RecipesDetailPage"
import RecipesListPage from "../pages/RecipesListPage/RecipesListPage"
import SignUpPage from "../pages/SignUpPage/SignUpPage"
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import { Route, Switch } from "react-router-dom"

const Router = ({setRightButtonText}) => {
    return (
        // <BrowserRouter>
        <Switch>

            <Route exact path="/login">
                <LoginPage setRightButtonText={setRightButtonText}/>
            </Route>

            <Route exact path="/cadastro">
                <SignUpPage setRightButtonText={setRightButtonText}/>
            </Route>

            <Route exact path="/">
                <RecipesListPage />
            </Route>

            <Route exact path="/adicionar-receita">
                <AddRecipesPage />
            </Route>

            <Route exact path="/detalhe/:id">
                <RecipesDetailPage />
            </Route>

            <Route>
                <ErrorPage />
            </Route>

        </Switch>
        // </BrowserRouter>
    )
}

export default Router