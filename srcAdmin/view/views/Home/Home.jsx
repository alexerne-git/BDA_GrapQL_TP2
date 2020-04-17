import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import {
  CssBaseline,
} from '@material-ui/core';

import {
  Parallax,
  GridRow,
  Footer,
  Header,
  HeaderLinks,
} from '../component';

import styles from './homeStyle';

import menuNavegation from '../MenuNavegation';

const useStyles = makeStyles(styles);

const dashboardRoutes = [];

export default function Test(props) {
  const classes = useStyles();
  const {
    className,
    ...rest
  } = props;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Meister Admin 2"
        urlIcon={`${__API__}/images/logo.png`}
        rightLinks={<HeaderLinks color="primary" menu={menuNavegation} />}
        fixed
        changeColorOnScroll={{
          height: 80,
          color: 'dark'
        }}
      />

      <Parallax image={`${__API__}/images/landing.png`} />

      <Footer>
        <GridRow justify="space-around">
          <h6>Information 1</h6>
          <h6>Information 2</h6>
          <h6>Information 3</h6>
        </GridRow>
      </Footer>
    </div>
  );
}

Test.propTypes = {
  className: PropTypes.string
};
