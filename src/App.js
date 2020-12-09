import { useState } from 'react'


import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import DashBoardPage from './pages/DashBoardPage';

import { getUser } from './services/userService';

import { Route, Switch, withRouter } from 'react-router-dom';


import './App.css';


function App(props) {

  const [ userState, setUserState ] = useState({ user: getUser() });


  /* helper functions */
  function handleSignupOrLogin() {
    setUserState({ user: getUser() });
    props.history.push('/dashboard');

  }

  return (
    <div className="App">
      <Header />
        <Switch>
        <Route exact path="/" render={ props => 
            <HomePage />
          }/>
           <Route exact path="/dashboard" render={ props => 
            <DashBoardPage />
          }/>
          <Route exact path="/signup" render={ props => 
           <SignUpPage handleSignupOrLogin={handleSignupOrLogin} />
          }/>
          <Route exact path="/login" render={ props => 
            <LoginPage handleSignupOrLogin={handleSignupOrLogin} />
          }/>
        </Switch>
      <Footer />

    </div>
  );
}

export default withRouter(App);
