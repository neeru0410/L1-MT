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
                <InputField
                    label="Username or Email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    isInvalid={!!error}
                />
                <InputField
                    label="Password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    isInvalid={!!error}
                    errorMessage={error}
                />
                <ButtonComponent variant="primary" type="submit">
                    Sign In
                </ButtonComponent>
            </form>
        </CardComponent>
    );
};

export default LoginForm;
