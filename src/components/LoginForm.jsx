import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CardComponent from '../components/CardComponent';
import InputField from '../components/InputField';
import ButtonComponent from '../components/ButtonComponent';
import credentials from '../data/credentials';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const validateCredentials = () => {
        return credentials.some(
            (cred) => cred.email === email && cred.password === password
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateCredentials()) {
            setError('Invalid email or password.');
            return;
        }
        setError('');
        navigate('/home');
    };

    return (
        <CardComponent title="Sign In">
            <form onSubmit={handleSubmit}>
                {/* Username/Email Field */}
                <InputField
                    label="Username or Email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    isInvalid={!!error}
                />
                
                {/* Password Field */}
                <InputField
                    label="Password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    isInvalid={!!error}
                    errorMessage={error}
                />
                
                {/* Submit Button */}
                <ButtonComponent variant="primary" type="submit" className="w-100 mt-3">
                    Sign In
                </ButtonComponent>
            </form>

            {/* Additional Links */}
            <div className="mt-4 text-center">
                <small>
                    New user? <a href="#">Create an account</a>
                </small>
                <div className="mt-2">Or Sign In With</div>
                <div className="d-flex justify-content-center gap-3 mt-3">
                    <ButtonComponent variant="outline-secondary" className="rounded-circle">
                        <i className="bi bi-google"></i>
                    </ButtonComponent>
                    <ButtonComponent variant="outline-secondary" className="rounded-circle">
                        <i className="bi bi-facebook"></i>
                    </ButtonComponent>
                    <ButtonComponent variant="outline-secondary" className="rounded-circle">
                        <i className="bi bi-twitter"></i>
                    </ButtonComponent>
                </div>
            </div>
        </CardComponent>
    );
};

export default LoginForm;
