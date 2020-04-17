import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import makeStyles from '@material-ui/core/styles/makeStyles';

import {
  Button
} from '@material-ui/core';

import {
  buttonStyle,
  confStyleColor,
  getTypeColor,
  getType
} from './buttonStyle';


const ButtonComponet = React.forwardRef((props, ref) => {
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
    onClick,
    width,
    height,
    border,
    textColor,
    background,
    ...rest
  } = props;

  const colorX = getTypeColor({ color });
  const typeX = getType({ type, colorX });

  const useStyles = makeStyles((theme) => ({
    ...buttonStyle(theme, width, height, border, textColor, background)
  }));

  const confStyle = makeStyles((theme) => ({
    ...confStyleColor(color, theme, width, height, border, textColor, background)
  }));

  const confClasses = confStyle();
  const classes = useStyles();

  const btnClasses = classNames({
    [confClasses.transparent]: transparent,
    [confClasses[size]]: size,
    [confClasses.square]: square,
    [confClasses.round]: round,
    [confClasses[colorX]]: color,
    [confClasses[typeX]]: type,
    [classes.button]: true,
    [classes[colorX]]: color,
    [classes[typeX]]: type,
    [className]: className,
  });

  return (
    <div>
      <Button
        onClick={onClick}
        style={style}
        className={btnClasses}
        {...rest}
      >
        {children}
      </Button>
    </div>
  );
});

ButtonComponet.defaultProps = {
  width: 'auto',
  height: 'auto',
  border: 'none',
  textColor: 'white',
};

ButtonComponet.propTypes = {
  color: PropTypes.string,
  type: PropTypes.oneOf([
    'text',
    'border',
    'borderFilling',
    'gradient',
    'gradientBorder',
    'hoverColor'
  ]),
  size: PropTypes.oneOf(['xs', 's', 'm', 'l', 'xl', 'xxl']),
  children: PropTypes.node,
  className: PropTypes.string,
  round: PropTypes.bool,
  square: PropTypes.bool,
  transparent: PropTypes.bool,
  style: PropTypes.object,
  onClick: PropTypes.any,
  width: PropTypes.string,
  height: PropTypes.string,
  border: PropTypes.string,
  textColor: PropTypes.string,
  background: PropTypes.string
};

export default ButtonComponet;
