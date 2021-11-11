import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { StyledToolbar } from "./styled"
import Button from '@mui/material/Button';
import KitchenIcon from '@mui/icons-material/Kitchen';
import LoginIcon from '@mui/icons-material/Login';
import { goToRecipesList, goToLogin } from "../../routes/coordinator"
import { useHistory } from "react-router-dom"

const Header = ({ setRightButtonText, rightButtonText }) => {
    const history = useHistory()
    const token = localStorage.getItem("token")

    const logout = () => {
        localStorage.removeItem("token")
    }

    const rightButtonAction = () => {
        if (token) {
            logout()
            setRightButtonText("LOGIN")
            goToLogin(history)
        } else {
            goToLogin(history)
        }
    }


    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <StyledToolbar>
                    <Button
                        onClick={() => goToRecipesList(history)}
                        color="inherit"
                        startIcon={<KitchenIcon
                            sx={{
                                mb: 0.4,
                            }}
                        />}
                    >
                        RECEITA DAORA
                    </Button>
                    <Button
                        onClick={rightButtonAction}
                        color="inherit"
                        endIcon={<LoginIcon
                            sx={{
                                mb: 0.2,
                            }}
                        />}
                    >
                        {rightButtonText}
                    </Button>
                </StyledToolbar>
            </AppBar>
        </Box>
    );
}

export default Header