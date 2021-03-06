import React, { useState } from 'react';
import { TextField, Grid, Button, Avatar } from '@material-ui/core';
import styles from 'Styles/Account/Login.Styles';
import { Link, withRouter } from 'react-router-dom';
// import { Link } from '@material-ui/core';
import * as EmailValidator from 'email-validator';

import { toast } from 'react-toastify';
import axios from 'axios';
import { API_BASE_URL } from 'Utils/constants';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const Forgot = ({ history }) => {
  const classes = styles();
  const initialState = {
    password: '',
    email: '',
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
    if (EmailValidator.validate(state.email) === false) {
      toast.error('Email must be valid');
      return;
    }
    setAuthenticating(true);
    try {
      const res = await axios.post(
        `${API_BASE_URL}/auth/forgotPassword`,
        {
          ...state,
        }
      );
      setState(initialState);

      setAuthenticating(false);
      console.log(`res`, res);
      toast.success(res.data.message);
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
              <h2>Forgot Password</h2>

              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      label='Email Address'
                      name='email'
                      type='email'
                      fullWidth
                      value={state.email}
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
                      Reset Password
                    </Button>
                    {authenticating && (
                      <div className='loaderSmall'></div>
                    )}
                  </Grid>
                </Grid>

                <span className={classes.formSpan}>OR</span>
                <div>
                  <p
                    className={`${classes.formSpan} ${classes.socialLink}`}
                    style={{ fontWeight: '800' }}
                  >
                    <img
                      alt='google-svg'
                      src='https://img.icons8.com/fluent/48/000000/google-logo.png'
                    />
                    <img
                      alt='fb-svg'
                      src='https://img.icons8.com/ios-glyphs/60/4a90e2/facebook-new.png'
                    />
                  </p>
                </div>
                <div>
                  <p
                    className={`${classes.formSpan} ${classes.socialLink}`}
                    style={{ fontWeight: '800' }}
                  ></p>
                </div>

                {/* <span className={classes.link}>
                  Already have an account ?
                  <button
                     type='button'
                     value='login'
                     onClick={props.handleChange}
                  >
                     Login
                  </button>
               </span> */}
              </form>
            </div>
            <div className={classes.imgBx}>
              <h2>Welcome back among us !</h2>
              <span className={classes.formSpan}>
                Don't have an Account ?
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

export default withRouter(Forgot);
