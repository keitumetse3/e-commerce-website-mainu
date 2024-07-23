import React, { useState } from 'react';

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
        <form onSubmit={handleSubmit}>
            <div>
                <label>Full Name:</label>
                <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
            </div>
            <div>
                <label>Address:</label>
                <input type="text" name="address" value={formData.address} onChange={handleChange} required />
            </div>
            <div>
                <label>City:</label>
                <input type="text" name="city" value={formData.city} onChange={handleChange} required />
            </div>
            <div>
                <label>State:</label>
                <input type="text" name="state" value={formData.state} onChange={handleChange} required />
            </div>
            <div>
                <label>Zip Code:</label>
                <input type="text" name="zipCode" value={formData.zipCode} onChange={handleChange} required />
            </div>
            <div>
                <label>Country:</label>
                <input type="text" name="country" value={formData.country} onChange={handleChange} required />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

const OrderSummary = ({ shippingAddress }) => {
    return (
        <div>
            <h2>Order Summary</h2>
            {shippingAddress && (
                <div>
                    <h3>Shipping Address</h3>
                    <p>{shippingAddress.fullName}</p>
                    <p>{shippingAddress.address}</p>
                    <p>{shippingAddress.city}, {shippingAddress.state} {shippingAddress.zipCode}</p>
                    <p>{shippingAddress.country}</p>
                </div>
            )}
        </div>
    );
};

const Checkout = () => {
    const [shippingAddress, setShippingAddress] = useState(null);

    const handleFormSubmit = (formData) => {
        setShippingAddress(formData);
    };

    return (
        <>
            <div>
                <h2>Shipping Address</h2>
                <ShippingAddressForm onSubmit={handleFormSubmit} />
            </div>
            <div>Review Your Bag Section</div>
            <OrderSummary shippingAddress={shippingAddress} />
        </>
    );
};

export default Checkout;
