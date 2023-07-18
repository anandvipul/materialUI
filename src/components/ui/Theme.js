import { createTheme } from '@mui/material/styles';

const arcBlue = '#0B72B9';
// const arcBlue = '#FF0000';
const arcOrange = '#FFBA60';

export const theme = createTheme({
  palette: {
    common: {
      arcBlue: `${arcBlue}`,
      arcOrange: `${arcOrange}`,
    },
    primary: {
      main: `${arcBlue}`,
    },
    secondary: {
      main: `${arcOrange}`,
    },
  },
  typography: {
    h3: {
      fontWeight: 300,
    },
    tab: {
      fontFamily: 'Raleway',
      textTransform: 'none',
      fontWeight: 700,
      fontSize: '1rem',
    },
    estimate: {
      fontFamily: 'Pacifico',
      fontSize: '1rem',
      textTransform: 'none',
    },
  },
  mixins: {
    toolbar: {
      minHeight: '56px',
    },
  },
});
