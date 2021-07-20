import { AuthContext } from 'Contexts/AuthContext';
import Logout from 'Pages/Logout';
import { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import img from 'Assets/images/loader2.gif';
import './App.css';

const App = () => {
  const { token, user } = useContext(AuthContext);

  return (
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
            />
            <Route exact path='/' component={Home} /> */}
            <Redirect to='/' from='*' />
          </Switch>
        </>
      )}
    </div>
  );
};

export default App;
