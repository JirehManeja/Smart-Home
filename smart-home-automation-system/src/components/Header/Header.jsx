import './Header.css';
import Logo from '../Logo/Logo';

function Header(){
    return(
        <header className="header">
            <Logo />
            <div className="button-section">
                <button className="header-button">Login</button>
                <button className="header-button">Register</button>
            </div>
        </header>
    )
}

export default Header