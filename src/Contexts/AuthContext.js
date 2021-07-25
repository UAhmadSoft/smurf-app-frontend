import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router';
import { makeReq } from 'Utils/constants';
import { toast } from 'react-toastify';

export const AuthContext = React.createContext();

export const AuthProvider = withRouter(({ children, history }) => {
  let tokenLocal;

  try {
    tokenLocal = window.localStorage.getItem('jwt');
  } catch (err) {
    tokenLocal = null;
  }

  const [token, setToken] = useState(tokenLocal);
  const [user, setUser] = useState(null);

  useEffect(() => {
    getMe();
  }, []);

  const getMe = async () => {
    try {
      const res = await makeReq(`/users/me`, {}, 'GET');
      console.log(`res`, res);
      localStorage.setItem('user', JSON.stringify(res.user));

      setUser(res.user);
    } catch (err) {
      setToken(null);
      localStorage.removeItem('jwt');
      localStorage.removeItem('user');

      // if (history.location !== '/') history.push('/');
    }
  };

  const signInUser = (tk, us) => {
    console.log(`tk`, tk);
    console.log(`us`, us);

    window.localStorage.setItem('jwt', tk);
    window.localStorage.setItem('user', us);

    setTimeout(() => {
      setToken(tk);
      setUser(us);
    }, 1000);
  };

  const logoutUser = () => {
    setToken(null);
    setUser(null);

    localStorage.removeItem('user');
    localStorage.removeItem('jwt');

    // setTimeout(() => {
    //   window.location.href = '/';
    // }, 1000);
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        setToken,
        logoutUser,
        user,
        setUser,
        signInUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
});
