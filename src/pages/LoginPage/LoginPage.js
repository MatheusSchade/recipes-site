import Button from '@mui/material/Button';
import React, { useState } from 'react';
import LoginIcon from '@mui/icons-material/Login';
import TextField from '@mui/material/TextField';
import { LoginForm, Body, SignUpButtonArea,InputContainer } from "./styled"
import { useHistory } from "react-router-dom"
import { goToSignUp } from "../../routes/coordinator"
import useForm from "../../hooks/useForm"
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import { CircularProgress } from '@mui/material';
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import { login } from '../../services/user';


const LoginPage = ({setRightButtonText}) => {
  const history = useHistory()
  useUnprotectedPage()
  const [form, onChange, clear] = useForm({ email: "", password: "" })
  const [isLoading, setIsLoading] = useState(false)
  const [values, setValues] = useState({ password: "", showPassword: false, });

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const onSubmitLogin = (event) => {
    setIsLoading(true)
    event.preventDefault()
    login(form, clear, history, setIsLoading, setRightButtonText)
  }

  return (
    <Body>
      <InputContainer>
      <LoginForm onSubmit={onSubmitLogin}>

        <h4>
          ACESSE SUA CONTA E DESCUBRA DELICIOSAS RECEITAS
        </h4>


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
        /> : <>Entrar</>} </Button>

      </LoginForm>

      <SignUpButtonArea>
        <Button
          onClick={() => goToSignUp(history)}
          color="inherit"
          variant="text"
          fullWidth
          sx={{
            mt: 1.8,
          }}
        >AINDA NÃO UMA CONTA? CADASTRE-SE</Button>

      </SignUpButtonArea>
      </InputContainer>
    </Body>
  )
}


export default LoginPage