import React from 'react';
import { Card } from 'react-bootstrap';

const CountryCard = ({ name, region, flag }) => {
    return (
        <Card className="mb-3 shadow-sm d-flex justify-content-between">
            <div className='d-flex flex-row align-items-center px-3'>
                <Card.Img variant="top" src={flag} alt={name} className='w-25 h-25' />
                <Card.Body>
                    <Card.Text className='fw-bold mb-0'>{name}</Card.Text>
                    <Card.Text>{region}</Card.Text>
                </Card.Body>
            </div>
        </Card>
    );
};

export default CountryCard;
