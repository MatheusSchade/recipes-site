import axios from "axios";
import { BASE_URL } from "../contants/urls"
import { goToRecipesList } from "../routes/coordinator"

export const createRecipe = (form, clear, history, setIsLoading) => {
    setIsLoading(true)
    axios.post(`${BASE_URL}/recipe`, form, {
        headers: {
            Authorization: localStorage.getItem(`token`)
        }
    })
        .then((response) => {
            clear()
            alert(response.data.message)
            goToRecipesList(history)
            setIsLoading(false)
        })
        .catch((error) => {
            setIsLoading(false)
            alert(error.response.message)
        })
}

