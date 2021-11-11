import { createTheme } from '@mui/material/styles';
import { primaryColor, neutralColor } from "./colors";


const theme = createTheme({
    typography: {
        fontFamily: 'Roboto',
        body1: {
            fontSize: 16,
        },
        body2: {
            fontSize: 12,
        },
        bold: {
            fontWeight: 900,
        },
        button: {
            textTransform: 'none',
            fontSize: 16,
            fontWeight: 600,
        },

    },

    palette: {

        primary: {
            main: primaryColor,
            contrastText: 'white',
        },

        text: {
            primary: neutralColor,
        },
    }



})

export default theme;
