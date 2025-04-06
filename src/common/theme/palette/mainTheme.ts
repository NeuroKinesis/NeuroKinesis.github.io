import CustomPalette from '@common/theme/palette/type';
import { alpha } from '@mui/material/styles';

const GREY = {
  0: '#FFFFFF',
  50: '#F9FAFB',
  100: '#F2F2F2',
  200: '#F4F6F8',
  300: '#DFE3E8',
  400: '#C4CDD5',
  500: '#919EAB',
  600: '#637381',
  700: '#454F5B',
  800: '#212B36',
  900: '#152828',
  A100: '#D0D7DC',
  A200: '#A1AEBD',
  A400: '#657487',
  A700: '#455463',
};

const PRIMARY = {
  lighter: '#0A0A0F99',
  light: '#151520',
  main: '#151520',
  dark: '#151520',
  darker: '#152828',
  contrastText: '#FFFFFF',
};

const SECONDARY = {
  lighter: '#f8c8f6',
  light: '#f86cf1',
  main: '#F10DE6',
  dark: '#c50cbc',
  darker: '#8d0386',
  contrastText: '#fff',
};

const INFO = {
  lighter: '#CAFDF5',
  light: '#61F3F3',
  main: '#0CE5FE',
  dark: '#06afc2',
  darker: '#003768',
  contrastText: '#FFFFFF',
};

const SUCCESS = {
  lighter: '#D8FBDE',
  light: '#86E8AB',
  main: '#A3D9A5',
  dark: '#679B6A',
  darker: '#0A5554',
  contrastText: '#FFFFFF',
};

const WARNING = {
  lighter: '#FFF5CC',
  light: '#FFD666',
  main: '#F4B400',
  dark: '#C49000',
  darker: '#7A4100',
  contrastText: GREY[800],
};

const ERROR = {
  lighter: '#FFE9D5',
  light: '#FFAC82',
  main: '#E63946',
  dark: '#9D2A2E',
  darker: '#7A0916',
  contrastText: '#FFFFFF',
};

const palette: CustomPalette = {
  common: { black: '#152828', white: '#fff' },
  primary: PRIMARY,
  secondary: SECONDARY,
  info: INFO,
  success: SUCCESS,
  warning: WARNING,
  error: ERROR,
  grey: GREY,
  divider: alpha(GREY[500], 0.24),
  text: {
    primary: GREY[100],
    secondary: GREY[300],
    disabled: GREY[400],
  },
  background: {
    paper: '#fff',
    default: '#0A0A0F',
    neutral: GREY[200],
  },
  action: {
    active: GREY[600],
    hover: alpha(GREY[500], 0.08),
    selected: alpha(GREY[500], 0.16),
    disabled: alpha(GREY[500], 0.8),
    disabledBackground: alpha(GREY[500], 0.24),
    focus: alpha(GREY[500], 0.24),
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

export default palette;
