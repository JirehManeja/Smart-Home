import './styles/Logo.css';

function Logo(){
    return(
        <div className="logo-container">
            <img src='./src/assets/logo.png' className='logo' alt="HomeSync Logo" />
            <span className="logo-text">HomeSync</span>
        </div>
    )
}

export default Logo