import { container, primaryColor } from '../../styles/material-kit-react';

const footerStyle = {
  block: {
    color: 'inherit',
    fontWeight: '500',
    fontSize: '12px',
    textTransform: 'uppercase',
    borderRadius: '3px',
    textDecoration: 'none',
    position: 'relative',
    display: 'block'
  },
  left: {
    float: 'left!important',
    display: 'block'
  },
  right: {
    padding: '15px 0',
    margin: '0',
    float: 'right!important'
  },
  bottom: {
    position: 'relative',
    bottom: '0',
    left: '0',
    right: '0',
  },
  footer: {
    padding: '0.6375rem 0 0 0'
  },
  a: {
    color: primaryColor,
    textDecoration: 'none',
    backgroundColor: 'transparent'
  },
  footerWhiteFont: {
    '&,&:hover,&:focus': {
      color: '#FFFFFF'
    }
  },
  container: {
    ...container,
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  list: {
    padding: '0',
    marginTop: '0',
    marginBottom: '0px',
    position: 'relative',
    left: '0',
    right: '0',
    bottom: '0',
  },
  inlineBlock: {
    display: 'inline-block',
    padding: '0px',
    width: 'auto'
  },
  icon: {
    marginLeft: '10px',
    marginRight: '10px',
    marginBottom: '-8px',
    width: '35px',
    height: '35px',
    color: 'rgba(188, 147, 229, 1)'
  },
  dropdownLink: {
    '&,&:hover,&:focus': {
      textDecoration: 'none',
      textAling: 'center'
    }
  },
  badge: {
    right: '12px',
    top: '3px'
  }
};
export default footerStyle;
