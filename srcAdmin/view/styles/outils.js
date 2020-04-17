const title = {
  color: '#3C4858',
  margin: '1.75rem 0 0.875rem',
  textDecoration: 'none',
  fontWeight: '700',
  fontFamily: '"Roboto Slab", "Times New Roman", serif'
};

const conatinerFluid = {
  paddingRight: '5px',
  paddingLeft: '5px',
  marginRight: 'auto',
  marginLeft: 'auto',
  width: '100%'
};

const container = {
  ...conatinerFluid,
  '@media (min-width: 320px)': {
    maxWidth: '320px'
  },
  '@media (min-width: 420px)': {
    maxWidth: '400px'
  },
  '@media (min-width: 576px)': {
    maxWidth: '570px'
  },
  '@media (min-width: 768px)': {
    maxWidth: '730px'
  },
  '@media (min-width: 992px)': {
    maxWidth: '970px'
  },
  '@media (min-width: 1200px)': {
    maxWidth: '1060px'
  },
};

const subtitle = {
  fontSize: '1.313rem',
  maxWidth: '500px',
  margin: '10px auto 0',
  fontFamily: ' "Times New Roman","Roboto Slab", serif',
};

const main = {
  background: '#FFFFFF',
  position: 'relative',
  zIndex: '3',
  margin: '-60px 15px 100px',
  borderRadius: '3px',
  boxShadow:
      '0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)'
};

export {
  title,
  subtitle,
  container,
  conatinerFluid,
  main,
};
