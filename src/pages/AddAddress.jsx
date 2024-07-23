import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ShippingForm = () => {
    const [formData, setFormData] = useState({
        shippingName: '',
        streetName: '',
        city: '',
        stateProvince: '',
        country: '',
        zip: '',
        checked: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log(formData);
    };

    return (
        <div className="container mt-5">
            <form id="shippingForm" onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="shippingName">Shipping Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="shippingName"
                            name="shippingName"
                            value={formData.shippingName}
                            onChange={handleChange}
                            required
                        />
                    </div><br></br>
                    <div className="form-group col-md-6">
                        <label htmlFor="streetName">Street Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="streetName"
                            name="streetName"
                            value={formData.streetName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div><br></br>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="city">City</label>
                        <input
                            type="text"
                            className="form-control"
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            required
                        />
                    </div><br></br>
                    <div className="form-group col-md-4">
                        <label htmlFor="stateProvince">State/Province</label>
                        <input
                            type="text"
                            className="form-control"
                            id="stateProvince"
                            name="stateProvince"
                            value={formData.stateProvince}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    
                </div><br></br>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="country">Country</label>
                        <select
                            id="country"
                            className="form-control"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Choose...</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            {/* Add other countries or states as needed */}
                        </select>
                    </div>
                </div><br></br>
                <div className="form-group">
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="gridCheck"
                            name="checked"
                            checked={formData.checked}
                            onChange={handleChange}
                        />
                        <label className="form-check-label" htmlFor="gridCheck">
                            Save this as your default address
                        </label>
                    </div>
                </div><br></br>
                <button type="submit" className="btn btn-primary">Add Address</button>
            </form>
        </div>
    );
};

export default ShippingForm;
