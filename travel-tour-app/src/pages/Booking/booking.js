
import React, { useState } from 'react';
import './booking.css';

const BookingForm = ({ selectedItem, onBook }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle booking logic here
        alert(`Booking confirmed for: ${selectedItem.name}`);
        onBook(); // Reset the cart and close the booking form
    };

    return (
        <div className="booking-form">
            <h2>Booking Form for {selectedItem.name}</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-field">
                    <label>Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-field">
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-field">
                    <label>Card Number</label>
                    <input
                        type="text"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        required
                    />
                </div>
                <div className="form-field">
                    <label>Expiry Date</label>
                    <input
                        type="text"
                        value={expiryDate}
                        onChange={(e) => setExpiryDate(e.target.value)}
                        required
                    />
                </div>
                <div className="form-field">
                    <label>CVV</label>
                    <input
                        type="text"
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="submit-button">Confirm Booking</button>
            </form>
        </div>
    );
};

export default BookingForm;
