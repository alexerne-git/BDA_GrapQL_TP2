import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import { colors } from './colors';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: colors.primary,
    secondary: colors.secondary,
    error: colors.error,
    contrastThreshold: 3,
    tonalOffset: 0.2,
    text: colors.text,
    background: {
      paper: 'white',
      default: colors.background
    }
  },
  typography: {
    fontFamily: '"PT Serif",Georgia,serif',
    fontWeight: '300',
    fontSize: 12,
    h1: {

    },
    h2: {

    },
    h3: {

    },
    h4: {

    },
    h5: {

    },
    h6: {

    },
    subtitle1: {
      fontSize: 2,
    },
    subtitle2: {
      fontSize: 1.5,
    },
    body1: {
      fontSize: 1.1,
    },
    body2: {
      fontSize: 1.1,
    },
    caption: {
      fontSize: 1.1,
    },
    overline: {
      fontSize: 1.1,
    },
    button: {
      fontSize: 1.1,
    },
    p: {
      fontFamily: '"Arial"',
      fontSize: '80%',
    }
  },

  spacing: 4,
  textAlign: 'left',

});

export default theme;
