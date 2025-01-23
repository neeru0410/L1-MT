import React, { useEffect, useState } from 'react';
import axios from 'axios';

import CountryCard from '../components/CountryCard';
import ButtonComponent from '../components/ButtonComponent';

import { Carousel } from 'react-bootstrap';


const Home = () => {
    const [countries, setCountries] = useState([]);
    const [filter, setFilter] = useState('');
    const [visibleCount, setVisibleCount] = useState(10);

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
        setVisibleCount((prev) => prev + 10);
    };

    return (
        <div className="container mt-5">
            <header className="d-flex justify-content-between align-items-center mb-4">
            <h6 className="text-dark">Countries</h6>
                <div>
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
            </header>

            <div className='d-flex flex-column justify-content-center align-items-center text-primary text-uppercase fw-bold'>
                <h1>Welcome</h1>

                <Carousel className="mb-4">
                <Carousel.Item>
                    <div className="d-flex justify-content-center">
                        <div className="placeholder-image" style={{ width: '650px', height: '250px', background: '#ddd' }}></div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="d-flex justify-content-center">
                        <div className="placeholder-image" style={{ width: '650px', height: '250px', background: '#ddd' }}></div>
                    </div>
                </Carousel.Item>
            </Carousel>
            </div>



            <div className="row">
                {filteredCountries.slice(0, visibleCount).map((country, index) => (
                    <div key={index} className="col-md-4">
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
        </div>
    );
};

export default Home;
