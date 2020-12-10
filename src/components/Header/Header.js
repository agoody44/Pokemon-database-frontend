import './Header.css';
import { Link } from "react-router-dom";
// import hearthstone from './Header/hearthstone.png';



export default function Header (props) {
    return (
   <header className="Header">
       <Link to='/'>
            <h1>Hearthstone</h1>
            {/* <img src={hearthstone} height={100} width={100} alt='hs' />; */}
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
                        <li><Link to='/signup'>SignUp</Link></li>
                        <li><Link to='/login'>Login</Link></li>
                     </>
                 }
            </ul>
       </nav>
   </header>
    )
}