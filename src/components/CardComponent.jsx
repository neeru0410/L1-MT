import React from 'react';
import { Card } from 'react-bootstrap';

const CardComponent = ({ title, children }) => {
    return (
        <Card className="shadow-lg mb-4">
            {title && <Card.Header as="h5">{title}</Card.Header>}
            <Card.Body>{children}</Card.Body>
        </Card>
    );
};

export default CardComponent;
