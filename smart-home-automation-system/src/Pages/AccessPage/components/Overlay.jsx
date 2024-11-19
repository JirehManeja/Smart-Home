import React from 'react';
import './styles/Overlay.css';

function Overlay({ onSignUpClick, onLoginClick }) {
    return (
        <div className="overlay-container">
            <div className="overlay">
                <div className="overlay-right">
                    <h2>Connect and Control!</h2>
                    <p>Join us to effortlessly manage your home automation.</p>
                    <button id="signup-btn" onClick={onSignUpClick}>Sign Up</button>
                </div>
                <div className="overlay-left">
                    <h2>Ready to Reconnect?</h2>
                    <p>Sign in to freely automate your home.</p>
                    <button id="login-btn" onClick={onLoginClick}>Login</button>
                </div>
            </div>
        </div>
    );
}

export default Overlay; 