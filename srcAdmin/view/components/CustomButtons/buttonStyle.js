import {
  colors
} from '../../styles/colors';

const buttonStyle = (theme, widthProps, heightProps, borderProps, textColor, background) => ({
  button: {
    minHeight: `${heightProps}`,
    minWidth: `${widthProps}`,
    backgroundColor: background || colors.default.main,
    color: textColor || colors.default.text,
    boxShadow:
      '0 2px 2px 0 rgba(153, 153, 153, 0.14), 0 3px 1px -2px rgba(153, 153, 153, 0.2), 0 1px 5px 0 rgba(153, 153, 153, 0.12)',
    border: `${borderProps}`,
    borderColor: colors.default.text,
    borderRadius: '12px',
    position: 'relative',
    padding: '12px 25px',
    margin: '4px',
    textTransform: 'inherit',
    fontSize: '15px',
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
      backgroundColor: background || colors.default.hover,
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
    backgroundColor: background || colors.primary.main,
    '&:hover': {
      color: colors.primary.hoverText,
      backgroundColor: background || colors.primary.hover,
    }
  },
  secondary: {
    color: colors.secondary.text,
    backgroundColor: background || colors.secondary.main,
    '&:hover': {
      color: colors.secondary.hoverText,
      backgroundColor: background || colors.secondary.hover,
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
    backgroundColor: background || colors.palette.transparent,
    boxShadow:
        '0 0px 0px 0px rgba(0, 0, 0, 0)',
    '&:hover': {
      backgroundColor: background || colors.palette.transparent,
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
    backgroundColor: background || colors.palette.transparent,
    border: '3px solid',
    padding: '9px 30px',
    borderColor: colors.default.light,
    color: `${textColor}`,
    boxShadow:
        '0 0px 0px 0px rgba(0, 0, 0, 0)',
    '&:hover': {
      backgroundColor: background || colors.palette.transparent,
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
    backgroundColor: background || colors.palette.transparent,
    border: '2px solid',
    padding: '10px 30px',
    borderColor: colors.default.light,
    color: `${textColor}`,
    boxShadow:
        '0 0px 0px 0px rgba(0, 0, 0, 0)',
    '&:hover': {
      backgroundColor: background || colors.default.main,
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
        backgroundColor: background || colors.primary.main,
        borderColor: colors.primary.main,
        color: colors.background,
      }
    },
    '&$secondary': {
      color: colors.secondary.main,
      borderColor: colors.secondary.light,
      '&:hover': {
        backgroundColor: background || colors.secondary.main,
        borderColor: colors.secondary.main,
        color: colors.background,
      }
    },
  },
  gradient: {
    background: colors.default.gradiant,
    transition: 'red',
    padding: '10px 30px',
    borderColor: 'white',
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
      padding: '11px 30px',
      borderColor: 'white',
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
      padding: '11px 30px',
      borderColor: 'white',
      background: colors.secondary.gradiant,
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
  gradientBorder: {
    background: colors.default.gradiant,
    transition: 'red',
    padding: '10px 30px',
    border: '2px solid',
    borderColor: 'white',
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
      boxShadow: `0 0px 0px 1px ${colors.primary.light}`,
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
      boxShadow: `0 0px 0px 1px ${colors.secondary.light}`,
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

const confStyleColor = (color, theme, widthProps, heightProps, borderProps, textColor, background) => ({
  color: {
    minHeight: `${heightProps}`,
    minWidth: `${widthProps}`,
    backgroundColor: `${color}`,
    border: `${borderProps}`,
    color: `${textColor}`,
    '&:hover': {
      color: `${textColor}`,
      backgroundColor: `${color}`,
    }
  },
  hoverColor: {
    backgroundColor: background || 'transparent',
    boxShadow:
      '0 0px 0px 0px rgba(0, 0, 0, 0)',
    color: colors.default.text,
    '&:hover': {
      backgroundColor: background || 'transparent',
      color: `${textColor}`,
      boxShadow:
      '0 0px 0px 0px rgba(0, 0, 0, 0)',
    },
  },
  typeText: {
    backgroundColor: background || 'transparent',
    boxShadow:
      '0 0px 0px 0px rgba(0, 0, 0, 0)',
    color: `${textColor}`,
    '&:hover': {
      backgroundColor: background || 'transparent',
      color: `${textColor}`,
      boxShadow:
      '0 0px 0px 0px rgba(0, 0, 0, 0)',
    },
  },
  typeBorder: {
    backgroundColor: background || 'transparent',
    border: `3px solid ${color}`,
    padding: '9px 30px',
    boxShadow:
        '0 0px 0px 0px rgba(0, 0, 0, 0)',
    color: `${textColor}`,
    '&:hover': {
      backgroundColor: background || 'transparent',
      color: `${textColor}`,
      border: `2px solid ${color}`,
      padding: '10px 31px',
      boxShadow:
      '0 14px 26px -12px rgba(153, 153, 153, 0.1), 0 4px 23px 0px rgba(0, 0, 0, 0.01), 0 12px 10px -5px rgba(153, 153, 153, 0.1)',
    },
  },
  typeBorderFilling: {
    backgroundColor: background || 'transparent',
    border: `2px solid ${color}`,
    padding: '10px 30px',
    boxShadow:
          '0 0px 0px 0px rgba(0, 0, 0, 0)',
    color: `${textColor}`,
    '&:hover': {
      backgroundColor: `${color}`,
      color: `${textColor}`,
    },
  },
  typeGradient: {
    background: `linear-gradient(to bottom, rgba(255,255,255,1) 0%, ${color} 51%, ${color} 100%)`,
    padding: '11px 30px',
    borderColor: 'white',
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
  typeGradientBorder: {
    background: `linear-gradient(to bottom, rgba(255,255,255,1) 0%, ${color} 51%, ${color} 100%)`,
    padding: '10px 30px',
    border: '2px solid',
    borderColor: 'white',
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
    padding: '2rem 3rem',
    fontSize: '0.875rem',
    lineHeight: '1.333333',
    borderRadius: '1.2rem'
  },
  xl: {
    marginLeft: theme.spacing(1),
    padding: '1.5rem 2.5rem',
    fontSize: '0.875rem',
    lineHeight: '1.333333',
    borderRadius: '1.2rem'
  },
  l: {
    marginLeft: theme.spacing(1),
    padding: '1rem 2rem',
    fontSize: '0.875rem',
    lineHeight: '1.5',
    borderRadius: '0.9rem'
  },
  m: {
    marginLeft: theme.spacing(1),
    padding: '0.60625rem 1.5rem',
    fontSize: '0.675rem',
    lineHeight: '1.5',
    borderRadius: '0.7rem'
  },
  s: {
    marginLeft: theme.spacing(1),
    padding: '0.40625rem 1.25rem',
    fontSize: '0.6875rem',
    lineHeight: '1.5',
    borderRadius: '0.5rem'
  },
  xs: {
    marginLeft: theme.spacing(1),
    padding: '0.20625rem 0.65rem',
    fontSize: '0.5875rem',
    lineHeight: '1.5',
    borderRadius: '0.3rem'
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
    if (data.type === 'hover') return 'hoverColor';
    if (data.type === 'border') return 'typeBorder';
    if (data.type === 'borderFilling') return 'typeBorderFilling';
    if (data.type === 'gradient') return 'typeGradient';
    if (data.type === 'gradientBorder') return 'typeGradientBorder';
    return data.type;
  }
  return data.type;
};

export {
  buttonStyle,
  confStyleColor,
  getTypeColor,
  getType
};
