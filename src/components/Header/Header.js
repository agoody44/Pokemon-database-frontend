import './Header.css';

export default function Header (props) {
    return (
   <header className="Header">
       <h1>Project 3</h1>
       <nav>
            <ul className='NavLinks'>
                <li>LogOut</li>
                <li>Dashboard</li>
                <li>SignUp</li>
                <li>Login</li>
            </ul>
       </nav>
   </header>
    )
}