import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import DashBoardPage from './pages/DashBoardPage';

import { Route, Switch, Redirect } from 'react-router-dom';

function App() {
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
           <SignUpPage />
          }/>
          <Route exact path="/login" render={ props => 
            <LoginPage />
          }/>
        </Switch>
      <Footer />

    </div>
  );
}

export default App;
