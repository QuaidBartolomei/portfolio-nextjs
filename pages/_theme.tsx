import { createMuiTheme } from '@material-ui/core/styles';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    background: {},
    primary: {
      main: '#457b9d',
      light: '#a8dadc',
      dark: '#1d3557',
    },
    secondary: {
      main: '#e63946',
    },
  },
});

export default theme;
