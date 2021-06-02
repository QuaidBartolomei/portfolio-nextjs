import { createMuiTheme } from '@material-ui/core/styles';
import { blueGrey, grey, lightBlue, orange, red, teal } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    background: {
      paper: blueGrey[50],
    },
    primary: blueGrey,
    secondary: grey,
  },
});

export default theme;
