import {getPokemonData} from './services/pokemon-api';
import { useState, useEffect } from 'react'



import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import DashBoardPage from './pages/DashBoardPage';
import CardsPage from './pages/CardsPage';
// import CardsPic from './pages/CardsPic';


import { getUser, logout } from './services/userService';

import { Redirect, Route, Switch, withRouter } from 'react-router-dom';


import './App.css';



function App(props) {

  const [ userState, setUserState ] = useState({ user: getUser() });


  const [pokemonData, setPokemonData] = useState ({
  count : '',
  next: "",
  previous: '',
  results: [],
  url: '',
  sprites: {
    front_default: ''
  }
  });
  // const pokemonIds = [1,2,3]


  async function getAppData() {
    const data = await getPokemonData();
    // const data = pokemonIds.map((id) => {
    //   return fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    //   .then(res => res.json())

      
    // })
    console.log(data);
    setPokemonData(data);
    // console.log(cardsData);
  };

  useEffect(() => {
    getAppData();
    console.log('effect');
  }, []);




  /* helper functions */
  function handleSignupOrLogin() {
    setUserState({ user: getUser() });
    props.history.push('/dashboard');
  }

  function handleLogout () { // Call the logout function defined in userService from handleLogout
    logout(); // this removes the token from localstorage;
    setUserState({ user: null }); // Set userState.user to null
    props.history.push('/'); // Programmatically navigate the user to the homepage
  }

  return (
    <div className="App">
      <Header user={userState.user} handleLogout={handleLogout} />

  

        <Switch>
        <Route exact path="/" render={ props => 
            <HomePage />
          }/>
          <Route exact path="/cards" render={props =>
          <CardsPage results={pokemonData.results}/>
          } />
           <Route exact path="/dashboard" render={ props => 
           getUser() ?
            <DashBoardPage results={pokemonData.results}/>
            :
            <Redirect to='/login' />
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
