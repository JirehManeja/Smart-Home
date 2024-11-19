import React from 'react';
import './styles/SignupForm.css';

function SignupForm() {
    return (
        <div className="signup">
            <form action="#">
                <h3>Create Account</h3>
                <div className="fullname">
                    <input type="text" placeholder="Last Name" required />
                    <input type="text" placeholder="First Name" required />
                </div>
                <input type="email" placeholder="Email" required />
                <input type="text" placeholder="Username" required />
                <input type="tel" placeholder="+63" required pattern="\+63[0-9]{10}" />
                <input type="password" placeholder="Password" required />
                <input type="password" placeholder="Confirm Password" required />
                <button>Create Account</button>
            </form>
        </div>
    );
}

export default SignupForm; 