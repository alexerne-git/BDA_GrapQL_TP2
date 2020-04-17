import React from 'react';
// nodejs library to set properties for components
import PropTypes from 'prop-types';
// @material-ui/core components
import Grid from '@material-ui/core/Grid';


export default function GridRow(props) {
  const { children, className, ...rest } = props;
  return (
    <Grid container direction="row" justify="center" alignItems="center" {...rest} className={className} spacing={5}>
      {children}
    </Grid>
  );
}

GridRow.defaultProps = {
  className: ''
};

GridRow.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};
