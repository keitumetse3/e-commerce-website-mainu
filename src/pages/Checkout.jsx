import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const ShippingAddressForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        fullName: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        country: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="fullName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control 
                    type="text" 
                    name="fullName" 
                    value={formData.fullName} 
                    onChange={handleChange} 
                    required 
                />
            </Form.Group>
            <Form.Group controlId="address">
                <Form.Label>Address</Form.Label>
                <Form.Control 
                    type="text" 
                    name="address" 
                    value={formData.address} 
                    onChange={handleChange} 
                    required 
                />
            </Form.Group>
            <Form.Group controlId="city">
                <Form.Label>City</Form.Label>
                <Form.Control 
                    type="text" 
                    name="city" 
                    value={formData.city} 
                    onChange={handleChange} 
                    required 
                />
            </Form.Group>
            <Form.Group controlId="state">
                <Form.Label>State</Form.Label>
                <Form.Control 
                    type="text" 
                    name="state" 
                    value={formData.state} 
                    onChange={handleChange} 
                    required 
                />
            </Form.Group>
            <Form.Group controlId="zipCode">
                <Form.Label>Zip Code</Form.Label>
                <Form.Control 
                    type="text" 
                    name="zipCode" 
                    value={formData.zipCode} 
                    onChange={handleChange} 
                    required 
                />
            </Form.Group>
            <Form.Group controlId="country">
                <Form.Label>Country</Form.Label>
                <Form.Control 
                    type="text" 
                    name="country" 
                    value={formData.country} 
                    onChange={handleChange} 
                    required 
                />
            </Form.Group>
            <Button variant="primary" type="submit" className='bg-black p-2 px-12 '>
                Submit
            </Button>
        </Form>
    );
};

const OrderSummary = ({ shippingAddress }) => {
    return (
        <Card>
            <Card.Header>Order Summary</Card.Header>
            <Card.Body>
                {shippingAddress && (
                    <>
                        <h5>Shipping Address</h5>
                        <p>{shippingAddress.fullName}</p>
                        <p>{shippingAddress.address}</p>
                        <p>{shippingAddress.city}, {shippingAddress.state} {shippingAddress.zipCode}</p>
                        <p>{shippingAddress.country}</p>
                    </>
                )}
            </Card.Body>
        </Card>
    );
};

const Checkout = () => {
    const [shippingAddress, setShippingAddress] = useState(null);

    const handleFormSubmit = (formData) => {
        setShippingAddress(formData);
    };

    return (
        <Container>
            <Row>
                <Col md={6}>
                    <h2>Shipping Address</h2>
                    <ShippingAddressForm onSubmit={handleFormSubmit} />
                </Col>
                <Col md={6}>
                    <h2>Review Your Bag</h2>
                    {/* Add your bag items component here */}
                    <OrderSummary shippingAddress={shippingAddress} />
                </Col>
            </Row>
        </Container>
    );
};

export default Checkout;
