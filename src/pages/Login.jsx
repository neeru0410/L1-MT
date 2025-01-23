import React, { useState } from 'react';
import { Form, Button, Row, Col, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import credentials from '../data/credentials';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    const validateCredentials = () => {
        return credentials.some(
            (cred) => cred.email === email && cred.password === password
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Password validation check
        if (!passwordPattern.test(password)) {
            setError('Password must be at least 8 characters long, include at least one uppercase letter, one number, and one symbol.');
            return;
        }

        if (!validateCredentials()) {
            setError('Invalid email or password.');
            return;
        }

        setError('');
        localStorage.setItem('isAuthenticated', 'true');
        navigate('/home'); // Redirect to /home
    };

    return (
        <div className="container vh-100 d-flex justify-content-center align-items-center">
            <Row className="w-100 align-items-center">
                {/* Login Form Section */}
                <Col md={6} className="d-flex flex-column justify-content-center">
                    <h2 className="mt-5 mb-4">Sign In</h2>
                    <p>
                        New user? <a href="#">Create an account</a>
                    </p>
                    <Form onSubmit={handleSubmit}>
                        {/* Display error message */}
                        {error && <Alert variant="danger">{error}</Alert>}

                        <Form.Group controlId="formUsername" className="mb-3">
                            <Form.Label>Username or email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter your username or email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                isInvalid={!!error}
                            />
                        </Form.Group>
                        <Form.Group controlId="formPassword" className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                isInvalid={!!error}
                            />
                        </Form.Group>
                        <Form.Group controlId="formCheckbox" className="mb-3">
                            <Form.Check type="checkbox" label="Keep me signed in" />
                        </Form.Group>
                        <Button variant="dark" type="submit" className="w-100 mb-3">
                            Sign In
                        </Button>
                        <div className="text-center">Or Sign In With</div>
                        <div className="d-flex justify-content-center gap-3 mt-3">
                    <Button variant="outline-secondary" className="rounded-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
                            <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z" />
                        </svg>
                    </Button>
                    <Button variant="outline-secondary" className="rounded-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                        </svg>
                    </Button>
                    <Button variant="outline-secondary" className="rounded-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                        </svg>
                    </Button>
                    <Button variant="outline-secondary" className="rounded-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15" />
                        </svg>
                    </Button>
                        </div>
                    </Form>
                </Col>

                {/* Image Section */}
                <Col md={6} className="text-center">
                    <img
                        src="/Key-amico.png"
                        alt="Illustration"
                        className="img-fluid"
                        style={{ maxHeight: '500px' }}
                    />
                </Col>
            </Row>
        </div>
    );
};

export default Login;
