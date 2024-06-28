import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
    palette: {
        primary: {
            main: '#f5e5bc'
        },
        secondary: {
            main: '#37464d'
        }
    }
});

const darkTheme = createTheme({
    palette: {
        primary: {
            main: '#37464d'
        },
        secondary: {
            main: '#f5e5bc'
        }
    }
});

const luckyTheme = createTheme({

});

const megaTheme = createTheme({

});

const powerTheme = createTheme({

});

export { lightTheme, darkTheme, luckyTheme, megaTheme, powerTheme };