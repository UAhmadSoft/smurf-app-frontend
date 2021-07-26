import React, { useState } from 'react';
import * as EmailValidator from 'email-validator';
import {
  TextField,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Button,
  Avatar,
} from '@material-ui/core';
import styles from 'Styles/Account/Login.Styles';
// import img from 'Assets/svgs/login.svg';
import { Link } from 'react-router-dom';
// import { Link } from '@material-ui/core';
import { toast } from 'react-toastify';
import LockOutlined from '@material-ui/icons/LockOutlined';
import { API_BASE_URL } from 'Utils/constants';
import axios from 'axios';

const Register = () => {
  const classes = styles();
  const initialState = {
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
  };

  const [state, setState] = useState(initialState);
  const [authenticating, setAuthenticating] = useState(false);

  const [role, setRole] = useState('tasker');

  const handleTxtChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !state.email ||
      !state.name ||
      !state.password ||
      !state.passwordConfirm
    ) {
      toast.error('Plz fill in all fields');
      return;
    } else if (state.password !== state.passwordConfirm) {
      toast.error(`Passwords must be same`);
      return;
    } else if (
      state.password.length < 8 ||
      state.passwordConfirm.length < 0
    ) {
      toast.error(`Passwords must be at least of 8 characters`);
      return;
    } else if (
      EmailValidator.validate(state.email) === false // true
    ) {
      toast.error('Email must be valid');
      return;
    }
    setAuthenticating(true);

    try {
      const res = await axios.post(`${API_BASE_URL}/auth/signUp`, {
        ...state,
        role: role.toLowerCase(),
      });

      setAuthenticating(false);
      console.log(`res`, res);
      setState(initialState);

      toast.success('Sign Up Successfull ...!');
      toast.success(
        `Verify your Account by link sent to your Email ${res.data.user.email}`
      );
      // signInUser(res.data.token, res.data.user);
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
                <LockOutlined />
              </Avatar>
              <h3 style={{ margin: 0 }}>Sign up</h3>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      label='Username'
                      name='name'
                      value={state.name}
                      onChange={handleTxtChange}
                      type='text'
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      label='Email Address'
                      name='email'
                      type='email'
                      value={state.email}
                      onChange={handleTxtChange}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      label='Password'
                      name='password'
                      type='password'
                      value={state.password}
                      onChange={handleTxtChange}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      label='Confirm Password'
                      name='passwordConfirm'
                      type='password'
                      value={state.passwordConfirm}
                      onChange={handleTxtChange}
                      fullWidth
                    />
                  </Grid>

                  <Grid item xs={12} sm={12}>
                    <div className={classes.dropdown}>
                      <InputLabel style={{ textAlign: 'left' }}>
                        Choose Role
                      </InputLabel>
                      <Select
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        style={{ flexGrow: 1, maxWidth: 130 }}
                      >
                        <MenuItem key='tasker' value='tasker'>
                          Tasker
                        </MenuItem>
                        <MenuItem key='customer' value='customer'>
                          Customer
                        </MenuItem>
                      </Select>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <Button
                      fullWidth
                      className={classes.button}
                      onClick={handleSubmit}
                      type='submit'
                    >
                      Register
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
              <h2>Create New Account</h2>
              <span className={classes.formSpan}>
                Already have an account ?{' '}
                <Link to='/login'>Login</Link>
              </span>
              {/* <img src={img} alt='' /> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
