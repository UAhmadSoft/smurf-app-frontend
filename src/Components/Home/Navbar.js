import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import logo from 'Assets/images/logo.png';
import useStyles from 'Styles/Home/Navbar.Styles';
import { Box, Button, Divider } from '@material-ui/core';
import { NavLink, withRouter } from 'react-router-dom';

const Navbar = ({ history }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
      className={classes.MobileMenu}
    >
      <MenuItem>
        <NavLink
          exact
          to='/'
          style={{ width: '100%', textAlign: 'center' }}
          activeClassName={'activeLink'}
          className={classes.NavLink}
        >
          Home
        </NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink
          to='/about'
          style={{ width: '100%', textAlign: 'center' }}
          activeClassName={'activeLink'}
          className={classes.NavLink}
        >
          About Us
        </NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink
          to='/services'
          style={{ width: '100%', textAlign: 'center' }}
          activeClassName={'activeLink'}
          className={classes.NavLink}
        >
          Services
        </NavLink>
      </MenuItem>
      <Divider style={{ marginBlock: 10 }} />
      <MenuItem>
        <Button
          variant='contained'
          color='primary'
          style={{
            borderRadius: 20,
          }}
        >
          Login / Register
        </Button>
      </MenuItem>
      <MenuItem>
        <Button
          variant='outlined'
          className={classes.RegisterBtn}
          onClick={() => history.push('/account')}
          color='primary'
        >
          Become a Tasker
        </Button>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={`${classes.root}`}>
      <AppBar position='fixed' className={classes.Appbar}>
        <Toolbar>
          <Typography
            variant='h5'
            noWrap
            style={{
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              minWidth: 160,
              color: '#000',
            }}
            onClick={() => history.push('/')}
          >
            <img
              src={logo}
              alt='logo'
              style={{ width: 50, height: 45, marginRight: 10 }}
            />
            Smurf App
          </Typography>

          <div className={classes.sectionDesktop}>
            <Box
              display='flex'
              justifyContent='space-around'
              alignItems='center'
              flexGrow='1'
            >
              <Box className={classes.NavLinks}>
                <NavLink
                  exact
                  to='/'
                  activeClassName={'activeLink'}
                  className={classes.NavLink}
                >
                  Home
                </NavLink>
                <NavLink
                  to='/about'
                  activeClassName={'activeLink'}
                  className={classes.NavLink}
                >
                  About Us
                </NavLink>
                <NavLink
                  to='/services'
                  activeClassName={'activeLink'}
                  className={classes.NavLink}
                >
                  Services
                </NavLink>
              </Box>
              <Box className={classes.NavActions}>
                <Button
                  variant='contained'
                  color='primary'
                  style={{
                    borderRadius: 20,
                    marginRight: 10,
                  }}
                >
                  Login / Register
                </Button>
                <Button
                  variant='outlined'
                  className={classes.RegisterBtn}
                  onClick={() => history.push('/account')}
                  color='primary'
                >
                  Become a Tasker
                </Button>
              </Box>
            </Box>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label='show more'
              aria-controls={mobileMenuId}
              aria-haspopup='true'
              onClick={handleMobileMenuOpen}
              style={{
                marginLeft: 'auto',
                color: '#000',
              }}
            >
              <MenuIcon color='primary' />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}

      <Box paddingTop={'64px'}> </Box>
    </div>
  );
};
export default withRouter(Navbar);
