import { GlobalStyle } from "./GlobalStyle"
import Router from "./routes/Router"
import { ThemeProvider } from '@mui/material/styles';
import theme from "./contants/theme"
import React, { useState } from "react"
import Header from "./components/Header/Header";
import { BrowserRouter } from "react-router-dom"

const App = () => {
  const token = localStorage.getItem("token")
  const [rightButtonText, setRightButtonText] = useState(token ? "LOGOUT" : "LOGIN")

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header setRightButtonText={setRightButtonText} rightButtonText={rightButtonText} />
        <GlobalStyle />
        <Router setRightButtonText={setRightButtonText}/>
      </BrowserRouter>
    </ThemeProvider>

  )
}


export default App