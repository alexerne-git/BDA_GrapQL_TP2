import {
  colors
} from '../../styles/colors';

const fabStyle = (theme) => ({
  button: {
    minHeight: 'auto',
    minWidth: 'auto',
    backgroundColor: colors.default.main,
    color: colors.default.text,
    marginLeft: theme.spacing(1),
    boxShadow:
        '0 2px 2px 0 rgba(153, 153, 153, 0.14), 0 3px 1px -2px rgba(153, 153, 153, 0.2), 0 1px 5px 0 rgba(153, 153, 153, 0.12)',
    border: 'none',
    borderColor: colors.default.text,
    borderRadius: '12px',
    position: 'relative',
    padding: '12px 25px',
    margin: '4px',
    fontSize: '13px',
    fontWeight: '400',
    letterSpacing: '0',
    willChange: 'box-shadow, transform',
    transition:
        'box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
    lineHeight: '1.42857143',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    verticalAlign: 'middle',
    touchAction: 'manipulation',
    cursor: 'pointer',
    '&:hover': {
      color: colors.default.hoverText,
      backgroundColor: colors.default.hover,
      boxShadow:
          '0 14px 26px -12px rgba(153, 153, 153, 0.7), 0 4px 23px 0px rgba(0, 0, 0, 0.2), 0 12px 10px -5px rgba(153, 153, 153, 0.7)'
    },
    /* '&:focus': {
        color: '#FFFFFF',
        backgroundColor: colors.default.light,
        boxShadow:
          '0 14px 26px -12px rgba(153, 153, 153, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(153, 153, 153, 0.2)'
      }, */
  },
  primary: {
    color: colors.primary.text,
    backgroundColor: colors.primary.main,
    '&:hover': {
      color: colors.primary.hoverText,
      backgroundColor: colors.primary.hover,
    }
  },
  secondary: {
    color: colors.secondary.text,
    backgroundColor: colors.secondary.main,
    '&:hover': {
      color: colors.secondary.hoverText,
      backgroundColor: colors.secondary.hover,
    }
  },
  default: {
    color: colors.default.text,
    backgroundr: colors.primary.main,
    '&:hover': {
      color: colors.default.hoverText,
      background: colors.default.hover,
    }
  },
  text: {
    backgroundColor: colors.palette.transparent,
    boxShadow:
          '0 0px 0px 0px rgba(0, 0, 0, 0)',
    '&:hover': {
      backgroundColor: colors.palette.transparent,
      boxShadow:
        '0 14px 26px -12px rgba(153, 153, 153, 0.7), 0 4px 23px 0px rgba(0, 0, 0, 0.2), 0 12px 10px -5px rgba(153, 153, 153, 0.7)',
      textDecoration: 'none',
    },
    '&$primary': {
      color: colors.primary.main,
      '&,&:focus,&:hover,&:visited': {
        color: colors.primary.main
      }
    },
    '&$secondary': {
      color: colors.secondary.main,
      '&,&:focus,&:hover,&:visited': {
        color: colors.secondary.main
      }
    },
  },
  border: {
    backgroundColor: colors.palette.transparent,
    border: '3px solid',
    padding: '9px 30px',
    borderColor: colors.default.light,
    boxShadow:
          '0 0px 0px 0px rgba(0, 0, 0, 0)',
    '&:hover': {
      backgroundColor: colors.palette.transparent,
      borderColor: colors.default.main,
      border: '2px solid',
      padding: '10px 31px',
      boxShadow:
        '0 14px 26px -12px rgba(153, 153, 153, 0.1), 0 4px 23px 0px rgba(0, 0, 0, 0.01), 0 12px 10px -5px rgba(153, 153, 153, 0.1)',
      textDecoration: 'none',
    },
    '&$primary': {
      color: colors.primary.main,
      borderColor: colors.primary.light,
      '&:hover': {
        color: colors.primary.main,
        borderColor: colors.primary.main,
      }
    },
    '&$secondary': {
      color: colors.secondary.main,
      borderColor: colors.secondary.light,
      '&:hover': {
        color: colors.secondary.main,
        borderColor: colors.secondary.main,
      }
    },
  },
  borderFilling: {
    backgroundColor: colors.palette.transparent,
    border: '2px solid',
    padding: '10px 30px',
    borderColor: colors.default.light,
    boxShadow:
          '0 0px 0px 0px rgba(0, 0, 0, 0)',
    '&:hover': {
      backgroundColor: colors.default.main,
      borderColor: colors.default.main,
      color: colors.default.text,
      boxShadow:
        '0 14px 26px -12px rgba(153, 153, 153, 0.7), 0 4px 23px 0px rgba(0, 0, 0, 0.2), 0 12px 10px -5px rgba(153, 153, 153, 0.7)',
      textDecoration: 'none',
    },
    '&$primary': {
      color: colors.primary.main,
      borderColor: colors.primary.light,
      '&:hover': {
        backgroundColor: colors.primary.main,
        borderColor: colors.primary.main,
        color: colors.background,
      }
    },
    '&$secondary': {
      color: colors.secondary.main,
      borderColor: colors.secondary.light,
      '&:hover': {
        backgroundColor: colors.secondary.main,
        borderColor: colors.secondary.main,
        color: colors.background,
      }
    },
  },
  gradient: {
    background: colors.default.gradiant,
    transition: 'red',
    boxShadow: `0 0px 0px 1px ${colors.default.light}`,
    color: colors.default.text,
    '&:hover': {
      boxShadow:
        `0 1px 8px 1px ${colors.default.main}, 0 1px 16px 0px rgba(0, 0, 0, 0.01), 0 1px 8px 1px ${colors.default.main}`,
      textDecoration: 'none',
    },
    '&:active': {
      background: `${colors.default.main}`,
    },
    '&$primary': {
      boxShadow: `0 0px 0px 1px ${colors.default.light}`,
      background: colors.primary.gradiant,
      color: colors.background,
      '&:hover': {
        boxShadow:
          `0 1px 8px 1px ${colors.primary.light}, 0 1px 16px 0px rgba(0, 0, 0, 0.01), 0 1px 8px 1px ${colors.primary.main}`,
      },
      '&:active': {
        background: `${colors.primary.main}`
      }
    },
    '&$secondary': {
      background: colors.secondary.gradiant,
      boxShadow: `0 0px 0px 1px ${colors.default.light}`,
      color: colors.background,
      '&:hover': {
        boxShadow:
          `0 1px 8px 1px ${colors.secondary.light}, 0 1px 16px 0px rgba(0, 0, 0, 0.01), 0 1px 8px 1px ${colors.secondary.main}`,
      },
      '&:active': {
        background: `${colors.secondary.main}`
      }
    },
  },
  // fin
});

const confStyleColor = (color, theme) => ({
  color: {
    marginLeft: theme.spacing(1),
    backgroundColor: `${color}`,
    color: '#FFFFFF',
    '&:hover': {
      color: '#FFFFFF',
      backgroundColor: `${color}`,
    }
  },
  typeText: {
    marginLeft: theme.spacing(1),
    backgroundColor: '#FFFFFF00',
    boxShadow:
        '0 0px 0px 0px rgba(0, 0, 0, 0)',
    color: `${color}`,
    '&:hover': {
      backgroundColor: '#FFFFFF00',
      color: `${color}`,
    },
  },
  typeBorder: {
    marginLeft: theme.spacing(1),
    backgroundColor: colors.background,
    border: `3px solid ${color}`,
    padding: '9px 30px',
    boxShadow:
          '0 0px 0px 0px rgba(0, 0, 0, 0)',
    color: `${color}`,
    '&:hover': {
      backgroundColor: '#FFFFFF00',
      color: `${color}`,
      border: `2px solid ${color}`,
      padding: '10px 31px',
      boxShadow:
        '0 14px 26px -12px rgba(153, 153, 153, 0.1), 0 4px 23px 0px rgba(0, 0, 0, 0.01), 0 12px 10px -5px rgba(153, 153, 153, 0.1)',
    },
  },
  typeBorderFilling: {
    marginLeft: theme.spacing(1),
    backgroundColor: colors.background,
    border: `2px solid ${color}`,
    padding: '10px 30px',
    boxShadow:
            '0 0px 0px 0px rgba(0, 0, 0, 0)',
    color: `${color}`,
    '&:hover': {
      backgroundColor: `${color}`,
      color: '#FFFFFF',
    },
  },
  typeGradient: {
    marginLeft: theme.spacing(1),
    background: `linear-gradient(to bottom, rgba(255,255,255,1) 0%, ${color} 51%, ${color} 100%)`,
    color: colors.background,
    boxShadow:
      `0 0px 0px 1px ${color}`,
    '&:hover': {
      boxShadow:
        `0 1px 8px 1px ${color}, 0 1px 16px 0px rgba(0, 0, 0, 0.01), 0 1px 8px 1px ${color}`,
    },
    '&:active': {
      background: `${color}`
    }
  },
  xxl: {
    marginLeft: theme.spacing(1),
    height: '120px',
    width: '120px',
    fontSize: '1.575rem',
    lineHeight: '1.333333',
    borderRadius: '0.2rem'
  },
  xl: {
    marginLeft: theme.spacing(1),
    height: '100px',
    width: '100px',
    margin: '0.1rem 0.1rem',
    padding: '1px 1px',
    fontSize: '1rem',
    lineHeight: '1.333333',
    borderRadius: '0.2rem'
  },
  l: {
    marginLeft: theme.spacing(1),
    height: '80px',
    width: '80px',
    margin: '0.1rem 0.1rem',
    padding: '1px 1px',
    fontSize: '0.5rem',
    lineHeight: '1.333333',
    borderRadius: '0.2rem'
  },
  m: {
    marginLeft: theme.spacing(1),
    height: '60px',
    width: '60px',
    margin: '0.1rem 0.1rem',
    padding: '1px 1px',
    fontSize: '0.5rem',
    lineHeight: '1.333333',
    borderRadius: '0.2rem',
    '&:hover': {
      border: `1px solid ${color}`,
      padding: '1px 1px',
      boxShadow:
            '0 14px 26px -12px rgba(153, 153, 153, 0.1), 0 4px 23px 0px rgba(0, 0, 0, 0.01), 0 12px 10px -5px rgba(153, 153, 153, 0.1)',
    },
  },
  s: {
    marginLeft: theme.spacing(1),
    height: '40px',
    width: '40px',
    margin: '0.1rem 0.1rem',
    padding: '1px 1px',
    fontSize: '0.4rem',
    lineHeight: '1.333333',
    borderRadius: '0.2rem',
    '&:hover': {
      border: `1px solid ${color}`,
      padding: '1px 1px',
      boxShadow:
            '0 14px 26px -12px rgba(153, 153, 153, 0.1), 0 4px 23px 0px rgba(0, 0, 0, 0.01), 0 12px 10px -5px rgba(153, 153, 153, 0.1)',
    },
  },
  xs: {
    marginLeft: theme.spacing(1),
    height: '30px',
    width: '30px',
    margin: '1px 1px',
    padding: '1px 1px',
    fontSize: '0.4rem',
    lineHeight: '1.333333',
    borderRadius: '0.2rem',
    '&:hover': {
      border: `1px solid ${color}`,
      padding: '1px 1px',
      boxShadow:
          '0 14px 26px -12px rgba(153, 153, 153, 0.1), 0 4px 23px 0px rgba(0, 0, 0, 0.01), 0 12px 10px -5px rgba(153, 153, 153, 0.1)',
    },
  },
  round: {
    borderRadius: '60px'
  },
  square: {
    borderRadius: '0%'
  },
  transparent: {
    '&,&:focus,&:hover,&:visited': {
      color: 'inherit',
      background: 'transparent',
      boxShadow: 'none'
    }
  },
});

const getTypeColor = (data) => {
  if (data.color) {
    if (data.color === 'primary' || data.color === 'secondary') return data.color;
    return 'color';
  }
  return 'default';
};

const getType = (data) => {
  if (data.type && data.colorX === 'color') {
    if (data.type === 'text') return 'typeText';
    if (data.type === 'border') return 'typeBorder';
    if (data.type === 'borderFilling') return 'typeBorderFilling';
    if (data.type === 'gradient') return 'typeGradient';
    return data.type;
  }
  return data.type;
};


export {
  fabStyle,
  confStyleColor,
  getTypeColor,
  getType
};
