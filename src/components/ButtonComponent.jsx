import React from 'react';
import { Button } from 'react-bootstrap';

const ButtonComponent = ({ variant, onClick, children, type = 'button' }) => {
    return (
        <Button variant={variant} onClick={onClick} type={type}>
            {children}
        </Button>
    );
};

export default ButtonComponent;
