import React, { useState } from 'react';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    return (
        <div className="container">
            <div className="row content">
                <div className="col-md-6 mb-3">
                    <img src="img.svg" className="img-fluid"/>
                </div>
                <div className="col-md-6">
                    <h3 className="signin-text mb-3"> Sign In </h3>
                    <form>
                        <div className="form-group">
                            <label for="email">Email</label>
                            <input type="email" 
                                name="email" 
                                onChange={(e) => handleEmail(e)} 
                                value={email} 
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label for="password">Password</label>
                            <input type="password" 
                                name="password" 
                                onChange={(e) => handlePassword(e)}
                                value={password} 
                                className="form-control"
                            />
                        </div>
                        <div className="form-group form-check">
                            <input type="checkbox" name="checkbox" className="form-check-input" id="checkbox"/>
                            <label className="form-check-label" for="checkbox">Remember Me</label>
                        </div>
                        <button className="btn btn-class">Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;