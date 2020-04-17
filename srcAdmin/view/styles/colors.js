
const colors = {
  default: {
    light: '#F0F0F0',
    main: '#D8D8D8',
    dark: '#888888',
    hover: '#888888',
    text: '#6b7778',
    hoverText: '#09797D',
    contrastText: '#4C4C4C',
    gradiant: 'linear-gradient(top, #f2f2f2 0%, #D8D8D8 24%, #D8D8D8 60%, #f2f2f2 100%)'
  },
  primary: {
    light: '#A720FF',
    main: '#60266D',
    dark: '#500780',
    text: '#FFFFFF',
    hover: '#500780',
    hoverText: '#FFFFFF',
    contrastText: '#DEDEDE',
    gradiant: 'linear-gradient(to bottom, rgba(220,104,240,1) 0%, rgba(176,72,194,1) 33%, rgba(189,59,212,1) 62%, rgba(146,18,168,1) 100%)'
  },
  secondary: {
    light: '#FF6BA4',
    main: '#E91E63',
    dark: '#A4013B',
    text: '#FFFFFF',
    hover: '#A4013B',
    hoverText: '#FFFFFF',
    contrastText: '#E9F7F8',
    gradiant: ' linear-gradient(to bottom, rgba(232,76,131,1) 0%, rgba(224,103,145,1) 33%, rgba(233,30,98,1) 62%, rgba(179,13,71,1) 100%)'
  },
  error: {
    light: '#F74589',
    main: '#C',
    dark: '#AC1851',
    text: '#5E5B61',
    contrastText: '#FFE8F1',
  },
  warning: {
    light: '#F74589',
    main: '#ff9800',
    dark: '#AC1851',
    text: '#5D1F67',
    contrastText: '#FFE8F1',
  },
  danger: {
    light: '#F74589',
    main: '#f44336',
    dark: '#AC1851',
    text: '#5D1F67',
    contrastText: '#FFE8F1',
  },
  success: {
    light: '#F74589',
    main: '#4caf50',
    dark: '#AC1851',
    text: '#5D1F67',
    contrastText: '#FFE8F1',
  },
  info: {
    light: '#F74589',
    main: '#00acc1',
    dark: '#006D7A',
    text: '#5D1F67',
    contrastText: '#FFE8F1',
  },
  palette: {
    transparent: '#FFFFFF00',
    sante: '#859F88',
    progres: '#6391B1',
    environnement: '#25524D',
    politique: '#62767E',
    culture: '#774B42',
    bonasavoir: '#B8AA95',
    rose: '#e91e63',
    gray: '#848484',
  },
  text: {
    primary: '#000000',
    secondary: '#505050',
    disabled: '#1F0000',
    hint: '#000000',
  },
  background: '#FFFFFF',
};

function colorTheme(color) {
  const fruits = [
    { name: 'primary', value: colors.primary.main },
    { name: 'secondary', value: colors.secondary.main },
    { name: 'error', value: colors.error.main },
    { name: 'default', value: colors.default.main },
    { name: 'warning', value: colors.warning.main },
    { name: 'danger', value: colors.danger.main },
    { name: 'success', value: colors.success.main },
    { name: 'rose', value: colors.palette.rose, },
    { name: 'gray', value: colors.palette.gray }
  ];

  const getFruit = fruits.find((fruit) => fruit.name === color);
  return getFruit.value;
}

function textColorTheme(color) {
  const fruits = [
    { name: 'primary', value: colors.primaryMainColor },
    { name: 'secondary', value: colors.secondaryMainColor },
    { name: 'error', value: colors.errorMainColor },
    { name: 'default', value: '' },
    { name: 'warning', value: colors.warningColor },
    { name: 'danger', value: colors.dangerColor },
    { name: 'success', value: colors.successColor },
    { name: 'rose', value: colors.roseColor, },
    { name: 'gray', value: colors.grayColor }
  ];

  const getFruit = fruits.find((fruit) => fruit.name === color);
  return getFruit.value;
}

export {
  colors,
  colorTheme,
  textColorTheme,
};
