import './Header.css';
import { Link } from "react-router-dom";

export default function Header (props) {
    return (
   <header className="Header">
       <Link to='/'>
            <h1>Project 3</h1>
       </Link>
       <nav>
            <ul className='NavLinks'>
                <li><Link to='/logout'>LogOut</Link></li>
                <li><Link to='/Dashboard'>Dashboard</Link></li>
                <li><Link to='/signup'>SignUp</Link></li>
                <li><Link to='/login'>Login</Link></li>
            </ul>
       </nav>
   </header>
    )
}