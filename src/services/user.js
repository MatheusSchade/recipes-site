import axios from 'axios';
import { BASE_URL } from "../contants/urls"
import { goToRecipesList } from "../routes/coordinator"

export const login = (body, clear, history, setIsLoading, setRightButtonText) => {
    setIsLoading(true)
    axios.post(`${BASE_URL}/user/login`, body)
        .then((response) => {
            localStorage.setItem("token", response.data.token)
            clear()
            goToRecipesList(history)
            setIsLoading(false)
            setRightButtonText("LOGOUT")
        })
        .catch((error) => {
            alert(error.response.data.message)
            setIsLoading(false)
        })
}

export const signUp = (body, clear, history, setIsLoading, setRightButtonText) => {
    setIsLoading(true)
    axios.post(`${BASE_URL}/user/signup`, body)
        .then((response) => {
            localStorage.setItem("token", response.data.token)
            clear()
            goToRecipesList(history)
            setIsLoading(false)
            setRightButtonText("LOGOUT")
        })
        .catch((error) => {
            alert(error.response.data.message)
            setIsLoading(false)
        })
}