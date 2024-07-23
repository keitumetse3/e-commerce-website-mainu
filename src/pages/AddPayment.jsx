import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/AddPayment.css";
import { FaLock } from 'react-icons/fa';

export default function AddPayment() {
  const navigate = useNavigate();

  const handleAddPayment = (e) => {
    e.preventDefault();
    // Add your form validation or API call here
    navigate("./Checkout.jsx"); // Redirect to the desired page
  };

  return (
    <div className="container py-5 d-flex justify-content-center">
      <div className="row w-100">
        <div className="col-md-8 offset-md-2">
          <div className="mb-4">
            <h5 className="mb-3">Select a Card</h5>
            <div className="list-group">
              <button type="button" className="list-group-item list-group-item-action">
                MasterCard ending in 4242
              </button>
              <button type="button" className="list-group-item list-group-item-action">
                VISA Debit ending in 2894
              </button>
              <button type="button" className="list-group-item list-group-item-action">
                Add a new Card
              </button>
            </div>
          </div>

          <form className="p-4 border rounded bg-light position-relative" onSubmit={handleAddPayment}>
            <h5 className="mb-4">Add a new Card</h5>
            <div className="mb-3">
              <label htmlFor="cardholderName" className="form-label">Cardholder Name</label>
              <input type="text" className="form-control" id="cardholderName" placeholder="John Maker" />
            </div>
            <div className="mb-3">
              <label htmlFor="cardNumber" className="form-label">Card Number</label>
              <input type="text" className="form-control" id="cardNumber" placeholder="5126-5987-2214-7621" />
            </div>
            <div className="row mb-3">
              <div className="col-md-6 mb-3 mb-md-0">
                <label htmlFor="expiryDate" className="form-label">Expiry Date</label>
                <input type="text" className="form-control" id="expiryDate" placeholder="MM / YYYY" />
              </div>
              <div className="col-md-6">
                <label htmlFor="cvc" className="form-label">CVC</label>
                <input type="text" className="form-control" id="cvc" placeholder="123" />
              </div>
            </div>
            <div className="form-check mb-3">
              <input type="checkbox" className="form-check-input" id="saveDefault" />
              <label className="form-check-label" htmlFor="saveDefault">Save this as your default payment method</label>
            </div>
            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-black">Add Payment Method</button>
            </div>
            <div className="position-absolute bottom-0 end-0 m-3">
              <a href="#!" className="back-link">Back</a>
            </div>
            <div className="position-absolute bottom-0 start-0 m-3 d-flex align-items-center">
              <FaLock className="me-1" />
              <p className="secure-text text-muted mb-0">Secure Connection</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
