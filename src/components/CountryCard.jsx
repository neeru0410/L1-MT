import React from 'react';
import { Card } from 'react-bootstrap';

const CountryCard = ({ name, region, flag }) => {
    return (
        <Card className="mb-3 shadow-sm d-flex justify-content-between">
            <Card.Img variant="top" src={flag} alt={name} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{region}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default CountryCard;
