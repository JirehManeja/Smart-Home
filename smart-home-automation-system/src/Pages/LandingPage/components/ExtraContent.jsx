import '../styles/ExtraContent.css';
import { useNavigate } from 'react-router-dom';

function ExtraContent(){
    const navigate = useNavigate();
    
    return(
        <div className="extra-content-container">
            <img src="./src/assets/logo.png" alt="logo" className="logo" />
            <h2 className="tagline">Make your home smart.</h2>
            <button 
                className="button"
                onClick={() => navigate('/auth?mode=register')}
            >
                Get Started
            </button>
        </div>
    )
}

export default ExtraContent