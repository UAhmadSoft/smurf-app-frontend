import React, { useContext, useState } from 'react';
import { TextField, Grid, Button, Avatar } from '@material-ui/core';
import styles from 'Styles/Account/Login.Styles';
import { Link, withRouter } from 'react-router-dom';
// import { Link } from '@material-ui/core';
import { toast } from 'react-toastify';
import axios from 'axios';
import { API_BASE_URL } from 'Utils/constants';
import { AuthContext } from 'Contexts/AuthContext';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const ResetPassword = ({ match }) => {
  const classes = styles();
  const initialState = {
    password: '',
    passwordConfirm: '',
  };

  const [state, setState] = useState(initialState);
  const [authenticating, setAuthenticating] = useState(false);

  const handleTxtChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!state.password || !state.passwordConfirm) {
      toast.error('Plz fill in all fields');
      return;
    } else if (state.password !== state.passwordConfirm) {
      toast.error(`Passwords must be same`);
      return;
    }
    setAuthenticating(true);
    try {
      const res = await axios.post(
        `${API_BASE_URL}/auth/resetPassword/${match.params.resetToken}`,
        {
          ...state,
        }
      );

      setAuthenticating(false);
      console.log(`res`, res);
      toast.success('Password Updated  Successfully ...!');
      window.location.href = '/login';
    } catch (err) {
      setAuthenticating(false);
      let errMsg = 'Something Went Wrong';
      if (
        err.response &&
        err.response.data &&
        err.response.data.message
      )
        errMsg = err.response.data.message;
      toast.error(errMsg);
    }
  };

  return (
    <div className={classes.root}>
      <section className={classes.sectionReg}>
        <div className={`${classes.containerReg}`}>
          <div className={classes.user}>
            <div className={classes.formBx}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <h2>Reset Password</h2>

              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      label='Password'
                      name='password'
                      type='password'
                      fullWidth
                      value={state.password}
                      onChange={handleTxtChange}
                    />
                  </Grid>

                  <Grid item xs={12} sm={12}>
                    <TextField
                      label='Password Confirm'
                      name='passwordConfirm'
                      type='password'
                      fullWidth
                      value={state.passwordConfirm}
                      onChange={handleTxtChange}
                    />
                  </Grid>

                  <Grid item xs={12} sm={12}>
                    <Button
                      fullWidth
                      className={classes.button}
                      onClick={handleSubmit}
                      type='submit'
                      disabled={authenticating}
                    >
                      Update Password
                    </Button>
                    {authenticating && (
                      <div className='loaderSmall'></div>
                    )}
                  </Grid>
                </Grid>
              </form>
            </div>
            <div className={classes.imgBx}>
              <h2>Welcome back among us !</h2>
              <span className={classes.formSpan}>
                Don't have an Account ?{' '}
                <Link to='/signUp'>Sign Up</Link>
              </span>
              {/* <img src={img} alt='' /> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default withRouter(ResetPassword);
