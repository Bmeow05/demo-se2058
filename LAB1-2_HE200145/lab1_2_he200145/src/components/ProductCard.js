import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap';

export default function ProductCard({ items, handleOnClick, cart }) {
    const [buttonState, setButtonState] = useState(false);
    return (
        <Card style={{ width: "18rem" }}>
            <Card.Img style={{ height: "200px" }} src={items.image} />
            <Card.Body>
                <Card.Title>{items.name}</Card.Title>
                <Card.Text>
                    <div>
                        <p>{items.price}</p>
                        <p>{items.status}</p>
                    </div>
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <Button className={`w-100 ${buttonState ? "btn-secondary" : "btn-success"}`} disabled={buttonState} onClick={() => { handleOnClick(items); setButtonState(true) }}>{buttonState ? "Added to Cart" :
                    "Add Cart"}</Button>
            </Card.Footer>
        </Card>

    )
}
