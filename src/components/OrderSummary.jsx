import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

const OrderSummary = ({ items }) => {
    const calculateTotal = () => {
        return items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    return (
        <div className="container mt-5">
            <h2>Order Summary</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Item</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                        <th scope="col">Total</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.quantity}</td>
                            <td>${item.price.toFixed(2)}</td>
                            <td>${(item.price * item.quantity).toFixed(2)}</td>
                        </tr>
                    ))}
                    <tr>
                        <td colSpan="3" className="text-right"><strong>Total</strong></td>
                        <td><strong>${calculateTotal()}</strong></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default OrderSummary;
