import React from 'react';
import { Card } from 'react-bootstrap';

const CardComponent = ({ title, children }) => {
    return (
        <Card className="p-4 border-0 rounded bg-transparent">
            <Card.Body>
                <Card.Title className="mb-4 text-center">{title}</Card.Title>
                {children}
            </Card.Body>
        </Card>
    );
};

export default CardComponent;
