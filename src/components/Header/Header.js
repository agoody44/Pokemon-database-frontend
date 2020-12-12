import './Header.css';
import { Link } from "react-router-dom";
import pokemonBall from './pokemonBall.png';



export default function Header (props) {
    return (
   <header className="Header">
       <Link to='/'>
            {/* <h1>Hearthstone</h1> */}
            <img src={pokemonBall} height={80} width={80} alt='hs' />
       </Link>
       <nav>
            <ul className='NavLinks'>
                 {
                     props.user ?
                     <>
                        <li><Link to='' onClick={props.handleLogout}>LogOut</Link></li>
                        <li><Link to='/Dashboard'>Dashboard</Link></li>
                     </>
                     :
                     <>
                         <li><Link to='/Cards'>Cards</Link></li>
                        <li><Link to='/signup'>SignUp</Link></li>
                        <li><Link to='/login'>Login</Link></li>
                     </>
                 }
            </ul>
       </nav>
   </header>
    )
}