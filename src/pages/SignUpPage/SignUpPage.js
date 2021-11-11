import Button from '@mui/material/Button';
import { useState } from "react"
import LoginIcon from '@mui/icons-material/Login';
import useForm from "../../hooks/useForm"
import TextField from '@mui/material/TextField';
import { useHistory } from "react-router-dom"
import { goToLogin } from "../../routes/coordinator"
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import { LoginButtonArea, SignUpForm, Body, InputContainer } from "./styled"
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import { signUp } from '../../services/user';
import { CircularProgress } from '@mui/material';

const SignUpPage = ({ setRightButtonText }) => {
  const history = useHistory()
  useUnprotectedPage()
  const [isLoading, setIsLoading] = useState(false)
  const [form, onChange, clear] = useForm({ name: "", email: "", password: "" })
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const onSubmitSignUp = (event) => {
    setIsLoading(true)
    event.preventDefault()
    signUp(form, clear, history, setIsLoading, setRightButtonText)
  }

  return (
    <Body>
      <InputContainer>
        <SignUpForm onSubmit={onSubmitSignUp}>

          <h4>
            CRIE UMA CONTA GRATUITA E DESCUBRA DELICIOSAS RECEITAS
          </h4>

          <TextField
            required
            name={"name"}
            value={form.name}
            onChange={onChange}
            type={"text"}
            label="Nome"
            fullWidth
            sx={{
              mt: 1,
            }}
          />

          <TextField
            required
            name={"email"}
            value={form.email}
            onChange={onChange}
            type={"email"}
            label="E-mail"
            fullWidth
            sx={{
              mt: 1,
            }}
          />

          <TextField
            required
            label="Password"
            type={values.showPassword ? "text" : "password"}
            variant="outlined"
            name={"password"}
            value={form.password}
            onChange={onChange}
            fullWidth
            sx={{
              mt: 1,
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <Button
            variant="contained"
            type={"submit"}
            endIcon={<LoginIcon />}
            sx={{
              width: '33vw',
              mt: 2.2,
              height: 50,
            }}
          >{isLoading ? <CircularProgress
            color={"inherit"}
            size={24}
          /> : <>Entrar</>}</Button>
        </SignUpForm>

        <LoginButtonArea>
          <Button
            onClick={() => goToLogin(history)}
            color="inherit"
            variant="text"
            fullWidth
            sx={{
              mt: 1.8,
            }}
          >JÁ TEM UMA CONTA? FAÇA LOGIN</Button>

        </LoginButtonArea>
      </InputContainer>
    </Body>
  )
}


export default SignUpPage