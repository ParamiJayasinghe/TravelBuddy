import React, { useState } from 'react';
import './cart.css';
import BookingForm from '../Booking/booking'; 

const Cart = () => {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            type: 'Hotel',
            name: 'Luxury Beach Resort',
            validity: 'Valid until Dec 31, 2025',
            price: '$299 per night',
        },
        {
            id: 2,
            type: 'Package',
            name: 'Winter Wonderland Package',
            validity: 'Valid until Jan 15, 2025',
            price: '$599',
        },
        {
            id: 3,
            type: 'Package',
            name: 'Tropical Paradise Getaway',
            validity: 'Valid until Mar 20, 2025',
            price: '$899',
        },
        {
            id: 4,
            type: 'Package',
            name: 'European Heritage Tour',
            validity: 'Valid until Nov 30, 2025',
            price: '$1,299',
        },
    ]);

    const [showBookingForm, setShowBookingForm] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const handleRemove = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const handleBook = (item) => {
        setSelectedItem(item);
        setShowBookingForm(true); // Show the booking form
    };

    const handleBookingCancel = () => {
        setShowBookingForm(false); // Hide the booking form
        setSelectedItem(null);
    };

    return (
        <div className="cart">
            <h1>Your Cart</h1>
            {showBookingForm ? (
                <BookingForm selectedItem={selectedItem} onBook={handleBookingCancel} />
            ) : (
                <div>
                    {cartItems.length === 0 ? (
                        <p className="empty-cart">Your cart is empty. Start adding items!</p>
                    ) : (
                        <div className="cart-items">
                            {cartItems.map((item) => (
                                <div key={item.id} className="cart-item">
                                    <div className="item-info">
                                        <h2>{item.name}</h2>
                                        <p className="validity-text">{item.validity}</p>
                                        <p className="item-price">{item.price}</p>
                                    </div>
                                    <div className="item-actions">
                                        <button 
                                            className="book-button" 
                                            onClick={() => handleBook(item)}
                                        >
                                            Book Now
                                        </button>
                                        <button 
                                            className="remove-button" 
                                            onClick={() => handleRemove(item.id)}
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Cart;
