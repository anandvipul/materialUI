import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const arcBlue = '#0B72B9';
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
});
