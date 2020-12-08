import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import SignUpPage from './components/pages/SignUpPage';
import DashBoardPage from './components/pages/DashBoardPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Footer />
      <HomePage />
      <LoginPage />
      <SignUpPage />
      <DashBoardPage />
    </div>
  );
}

export default App;
