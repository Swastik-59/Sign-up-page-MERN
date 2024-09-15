import React, { useState } from 'react';
import './styles.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios"

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const userData = {
            email: email,
            password: password
        };

        try {
            axios.post("http://localhost:8000/SignIn", userData, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            navigate("/result")
        } catch (error) {
            alert("error")
            console.error("Error:", error);
        }

    };

    return (
        <div className="form-container">
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit} className="sign-in-form">
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="submit-button">Sign In</button>
                <p>
                    Don't have an account?
                    <span>
                        <Link to="/signup" style={{ textDecoration: 'none' }}>
                            Sign Up
                        </Link>
                    </span>
                </p>
            </form>
        </div>
    );
};

export default SignIn;
