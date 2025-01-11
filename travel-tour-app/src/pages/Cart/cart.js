import React, { useState } from 'react';
import './cart.css';

const Cart = () => {
    // Updated cart items with two additional packages
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            type: 'Hotel',
            name: 'Luxury Beach Resort',
            details: 'A 5-star beach resort with stunning views and premium amenities.',
            price: '$299 per night',
        },
        {
            id: 2,
            type: 'Package',
            name: 'Winter Wonderland Package',
            details: 'A magical winter escape with cozy stays and snowy adventures.',
            price: '$599',
        },
        {
            id: 3,
            type: 'Package',
            name: 'Tropical Paradise Getaway',
            details: 'Relax in the tropics with beautiful beaches and all-inclusive resorts.',
            price: '$899',
        },
        {
            id: 4,
            type: 'Package',
            name: 'European Heritage Tour',
            details: 'Explore the historical landmarks of Europe with guided tours.',
            price: '$1,299',
        },
    ]);

    const handleRemove = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const handleBook = (name) => {
        alert(`Booking confirmed for: ${name}`);
    };

    return (
        <div className="cart">
            <h1>Your Cart</h1>
            {cartItems.length === 0 ? (
                <p className="empty-cart">Your cart is empty. Start adding items!</p>
            ) : (
                <div className="cart-items">
                    {cartItems.map((item) => (
                        <div key={item.id} className="cart-item">
                            <div className="item-info">
                                <h2>{item.type}: {item.name}</h2>
                                <p>{item.details}</p>
                                <p className="item-price">{item.price}</p>
                            </div>
                            <div className="item-actions">
                                <button 
                                    className="book-button" 
                                    onClick={() => handleBook(item.name)}
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
    );
};

export default Cart;
