import React from 'react'
import { Carousel } from 'react-bootstrap';

export default function Banner() {
    return (
        <div>
            <Carousel className="mb-3">
                <Carousel.Item>
                    <Carousel.Caption>
                        <h3>FASHION COLLECTION 2026</h3>
                        <p>Discover the latest fashion trends</p>
                    </Carousel.Caption>
                    <img src="Images/banner1.jpg"
                        alt="First slide" style={{ width: '100%', height: '400px', objectFit: 'contain' }} />
                </Carousel.Item>
                <Carousel.Item>
                    <Carousel.Caption>
                        <h3>NEW ARRIVALS</h3>
                        <p>Explore our newest clothing collection</p>
                    </Carousel.Caption>
                    <img src="Images/banner2.jpg"
                        alt="First slide"
                        style={{ width: '100%', height: '400px', objectFit: 'contain' }} />
                </Carousel.Item>
                <Carousel.Item>
                    <Carousel.Caption>
                        <h3>SUMMER SALE UP TO 50%</h3>
                        <p>Enjoy special discounts on selected products</p>
                    </Carousel.Caption>
                    <img src="Images/banner3.jpg"
                        alt="First slide"
                        style={{ width: '100%', height: '400px', objectFit: 'contain' }} />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
