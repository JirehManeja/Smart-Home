import './styles/Header.css';
import Logo from './Logo';
import { useNavigate } from 'react-router-dom';

function Header(){
    const navigate = useNavigate();

    return(
        <header className="header">
            <Logo />
            <div className="button-section">
                <button 
                    className="header-button"
                    onClick={() => navigate('/auth?mode=login')}
                >
                    Login
                </button>
                <button 
                    className="header-button"
                    onClick={() => navigate('/auth?mode=signup')}
                >
                    Register
                </button>
            </div>
        </header>
    )
}

export default Header