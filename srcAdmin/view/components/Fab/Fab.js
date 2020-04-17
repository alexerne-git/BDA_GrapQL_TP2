import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import makeStyles from '@material-ui/core/styles/makeStyles';

import {
  Fab
} from '@material-ui/core';

import {
  fabStyle,
  confStyleColor,
  getTypeColor,
  getType
} from './fabStyle';

const useStyles = makeStyles((theme) => ({
  ...fabStyle(theme)
}));

const FabComponent = React.forwardRef((props, ref) => {
  const {
    children,
    className,
    color,
    type,
    round,
    square,
    transparent,
    size,
    style,
    onClick
  } = props;

  const colorX = getTypeColor({ color });
  const typeX = getType({ type, colorX });

  const confStyle = makeStyles((theme) => ({
    ...confStyleColor(color, theme)
  }));

  const confClasses = confStyle();
  const classes = useStyles();

  const btnClasses = classNames({
    [confClasses.transparent]: transparent,
    [confClasses.square]: square,
    [confClasses.round]: round,
    [confClasses[colorX]]: color,
    [confClasses[typeX]]: type,
    [classes.button]: true,
    [classes[colorX]]: color,
    [classes[typeX]]: type,
    [confClasses[size]]: size,
    [className]: className,
  });

  return (
    <div>
      <Fab
        onClick={onClick}
        style={style}
        ref={ref}
        className={btnClasses}
      >
        {children}
      </Fab>
    </div>
  );
});

FabComponent.propTypes = {
  color: PropTypes.string,
  type: PropTypes.oneOf([
    'text',
    'border',
    'borderFilling',
    'gradient',
  ]),
  size: PropTypes.oneOf(['xs', 's', 'm', 'l', 'xl', 'xxl']),
  children: PropTypes.any,
  className: PropTypes.string,
  round: PropTypes.bool,
  square: PropTypes.bool,
  transparent: PropTypes.bool,
  style: PropTypes.object,
  onClick: PropTypes.any,
};

export default FabComponent;
