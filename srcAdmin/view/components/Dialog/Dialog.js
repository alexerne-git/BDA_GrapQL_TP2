import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
    background: '#212121 !important',
    color: 'white'
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));


export default function AlertDialog(props) {
  const {
    open,
    setOpen,
    children,
    className,
    disagree,
    agree,
    disagreeLabel,
    agreeLabel,
    contentText,
    title,
    appBar,
    logo,
    agreeBottom,
    ...rest
  } = props;

  const classes = useStyles();

  return (
    <div className={className}>
      <Dialog
        {...rest}
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {appBar ? (
          <AppBar className={classes.appBar}>
            <Toolbar>
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
              >
                {logo ? (
                  <Avatar alt="logo" src={`${__API__}/images/logo.png`} />
                ) : ''}

                {logo ? (
                  <p className={classes.title}>H-Integral</p>
                ) : ''}


                <Typography variant="h6" className={classes.title}>
                  {title}
                </Typography>
              </Grid>

              {
                agreeBottom === true ? '' : (
                  <Button autoFocus color="inherit" onClick={() => setOpen(false)}>
                    {agreeLabel || 'Aceptar'}
                  </Button>
                )
              }
            </Toolbar>
          </AppBar>
        ) : (<DialogTitle id="alert-dialog-title">{title}</DialogTitle>)}

        <DialogContent>
          {
            contentText ? (
              <DialogContentText id="alert-dialog-description">
                {contentText}
              </DialogContentText>
            ) : ''
          }
          {children}
        </DialogContent>
        <DialogActions>
          {
              appBar !== true ? (
                agree ? (
                  <Button onClick={() => agree()} color="primary">
                    {agreeLabel || 'Aceptar'}
                  </Button>
                ) : (
                  <Button onClick={() => setOpen(false)} color="primary">
                    {agreeLabel || 'Aceptar'}
                  </Button>
                )
              ) : ''
            }
          {
              appBar === true ? (
                agreeBottom === true ? (
                  agree ? (
                    <Button onClick={() => agree()} color="primary">
                      {agreeLabel || 'Aceptar'}
                    </Button>
                  ) : (
                    <Button onClick={() => setOpen(false)} color="primary">
                      {agreeLabel || 'Aceptar'}
                    </Button>
                  )
                ) : ''
              ) : ''
            }
          {
            disagree ? (
              <Button onClick={() => disagree()} color="primary">
                {disagreeLabel || 'Anular'}
              </Button>
            ) : ''
          }
        </DialogActions>
      </Dialog>
    </div>
  );
}

AlertDialog.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  disagree: PropTypes.any,
  disagreeLabel: PropTypes.string,
  agree: PropTypes.any,
  agreeLabel: PropTypes.string,
  open: PropTypes.bool,
  setOpen: PropTypes.any,
  contentText: PropTypes.string,
  title: PropTypes.string,
  appBar: PropTypes.bool,
  logo: PropTypes.bool,
  agreeBottom: PropTypes.bool,
};
