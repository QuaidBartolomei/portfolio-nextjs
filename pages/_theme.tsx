import { createMuiTheme } from '@material-ui/core/styles';
import { blueGrey, red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    background: {
      paper: blueGrey[400],
    },
  },
});

export default theme;
