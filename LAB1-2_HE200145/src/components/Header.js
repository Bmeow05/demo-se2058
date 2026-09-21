import React from 'react'
import { Button } from 'react-bootstrap';

export default function Header({ cart }) {
    return (
        <div className="bg-light mb-3">
            <div className="d-flex justify-content-center">
                <img src="Images/logo.jpg" alt="logo" style={{ width: "150px" }} />
            </div>
            <div className="d-flex flex-row justify-content-evenly">
                <button className="btn">Home</button>
                <button className="btn">Products</button>
                <button className="btn">Men</button>
                <button className="btn">Women</button>
                <button className="btn">Contact</button>
                <button className="btn">Cart ({cart.length})</button>
            </div>
        </div>
    )
}
