import React from 'react';
// nodejs library to set properties for components
import PropTypes from 'prop-types';
// @material-ui/core components
import Grid from '@material-ui/core/Grid';


export default function GridColon(props) {
  const { children, className, ...rest } = props;
  return (
    <Grid container direction="column" justify="center" alignItems="center" {...rest} className={className} spacing={5}>
      {children}
    </Grid>
  );
}

GridColon.defaultProps = {
  className: ''
};

GridColon.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};
