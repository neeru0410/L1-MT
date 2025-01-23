import React from 'react';
import { Form } from 'react-bootstrap';

const InputField = ({ label, type, placeholder, value, onChange, isInvalid, errorMessage }) => {
    return (
        <Form.Group className="mb-3">
            {label && <Form.Label>{label}</Form.Label>}
            <Form.Control
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                isInvalid={isInvalid}
            />
            {isInvalid && <Form.Control.Feedback type="invalid">{errorMessage}</Form.Control.Feedback>}
        </Form.Group>
    );
};

export default InputField;
