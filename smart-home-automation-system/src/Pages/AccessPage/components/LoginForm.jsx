import React from 'react';
import './styles/LoginForm.css';

function LoginForm() {
    return (
        <div className="login">
            <form action="#">
                <h3 className='login-title'>Sign In</h3>
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
                <a className='forgot-password' href="#">Forgot Password?</a>
                <button>Login</button>
            </form>
        </div>
    );
}

export default LoginForm; 