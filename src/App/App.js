import { AuthContext } from 'Contexts/AuthContext';
import Logout from 'Pages/Logout';
import { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import img from 'Assets/images/loader2.gif';
import './App.css';
import Home from 'Components/Home/Index';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import About from 'Components/About/Index';
import Services from 'Components/Services/Index';
import Login from 'Components/Account/Login';
import Register from 'Components/Account/Register';
import Forgot from 'Components/Account/Forgot';
import ResetPass from 'Components/Account/ResetPass';
import ConfirmMail from 'Components/Account/ConfirmMail';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0076C0',
      dark: '#03a0d7',
    },
  },
  typography: {
    fontFamily: `'Open Sans', sans-serif !important`,
    h5: {
      fontSize: '1.4rem',
    },
  },
  breakpoints: {
    values: {
      xs: 425,
      sm: 768,
      md: 1024,
      lg: 1440,
    },
  },
});

const App = () => {
  const { token, user } = useContext(AuthContext);

  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        {token ? (
          <>
            {user ? (
              <Switch>
                {/* <Route exact path='/' component={Dashboard} /> */}
                <Route exact path='/logout' component={Logout} />
                <Redirect to='/' />
              </Switch>
            ) : (
              <img src={img} alt='loader' />
            )}
          </>
        ) : (
          <>
            {/* <Route component={Navbar} /> */}
            <Switch>
              {/* <Route
              exact
              path='/account'
              component={RegistrationMain}
            />
            <Route exact path='/forgot' component={Forgot} />
            <Route
              exact
              path='/resetPassword/:resetToken'
              component={ResetPass}
            />
            <Route
              exact
              path='/confirmMail/:token'
              component={ConfirmMail}
            />*/}
              <Route exact path='/about' component={About} />
              <Route exact path='/services' component={Services} />
              <Route exact path='/' component={Home} />
              <Route exact path='/forgot' component={Forgot} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/signUp' component={Register} />
              <Route
                exact
                path='/resetPassword/:resetToken'
                component={ResetPass}
              />
              <Route
                exact
                path='/confirmMail/:token'
                component={ConfirmMail}
              />
              <Redirect to='/' from='*' />
            </Switch>
          </>
        )}
      </div>
    </ThemeProvider>
  );
};

export default App;
