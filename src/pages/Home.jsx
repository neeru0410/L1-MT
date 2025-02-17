import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

import CountryCard from '../components/CountryCard';
import ButtonComponent from '../components/ButtonComponent';

import { Button, Carousel } from 'react-bootstrap';


const Home = () => {
    const [countries, setCountries] = useState([]);
    const [filter, setFilter] = useState('');
    const [visibleCount, setVisibleCount] = useState(12);
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get('https://restcountries.com/v2/all?fields=name,region,flag')
            .then((response) => setCountries(response.data))
            .catch((error) => console.error('Error fetching countries:', error));
    }, []);

    const filteredCountries = countries.filter((country) =>
        filter ? country.region === filter : true
    );

    const loadMore = () => {
        setVisibleCount((prev) => prev + 12);
    };

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        navigate('/');
    };

    return (
        <div className="container mt-5">
            <header className="d-flex justify-content-between align-items-center mb-4">
                <h5 className="text-dark">Countries</h5>
                <div className='d-flex gap-2'>
                    <div className='d-flex gap-2'>
                        <ButtonComponent
                            variant="outline-secondary"
                            onClick={() => setFilter('')}
                        >
                            All
                        </ButtonComponent>
                        <ButtonComponent
                            variant="outline-secondary"
                            onClick={() => setFilter('Asia')}
                        >
                            Asia
                        </ButtonComponent>
                        <ButtonComponent
                            variant="outline-secondary"
                            onClick={() => setFilter('Europe')}
                        >
                            Europe
                        </ButtonComponent>
                    </div>
                    <ButtonComponent variant="danger" onClick={handleLogout}>
                        Logout
                    </ButtonComponent>
                </div>
            </header>

            <div className='d-flex flex-column justify-content-center align-items-center text-primary text-uppercase fw-bold'>
                <h1>Welcome</h1>

                <Carousel className="mb-4">
                    <Carousel.Item>
                        <div className="d-flex justify-content-center">
                            <div className="placeholder-image" style={{ width: '250px', height: '250px', background: '#ddd' }}></div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="d-flex justify-content-center">
                            <div className="placeholder-image" style={{ width: '250px', height: '250px', background: '#ddd' }}></div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>



            <div className="row mx-auto">
                {filteredCountries.slice(0, visibleCount).map((country, index) => (
                    <div key={index} className="col-xl-3 col-lg-4 col-md-6 col-12">
                        <CountryCard
                            name={country.name}
                            region={country.region}
                            flag={country.flag}
                        />
                    </div>
                ))}
            </div>

            {visibleCount < filteredCountries.length && (
                <div className="text-center mt-4">
                    <ButtonComponent variant="secondary" onClick={loadMore}>
                        Load More
                    </ButtonComponent>
                </div>
            )}

            <div className='d-flex flex-column gap-2 align-items-center'>
                <div className="d-flex justify-content-center gap-4 mt-5">
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
                <p className='mb-0 small'>Example@email.com</p>
                <p className='small'>Copyright © 2025 Name. All right reserved.</p>
            </div>
        </div>
    );
};

export default Home;
