import React, { useState } from 'react';
import '../styles/ProductList.css';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import appleWatch from '../assets/apple-watch.png';
import headphones from '../assets/headphones.png';
import iphone11Black from '../assets/iphone-11-black.png';
import iphone11Green from '../assets/iphone-11-green.png';
import iphone11Red from '../assets/iphone-11-red.png';
import iphone11White from '../assets/iphone-11-white.png';
import dellXpsWhite from '../assets/dell-xps-13-white.png';
import iphone11Blue from '../assets/iphone-12-pro-blue.png';
import macbook from '../assets/macbook.png';
import samsungNote21 from '../assets/samsung-note21.png';
import '../App.css';
import { addToSideBag } from './Sidebag';
import { addToBag } from './Bag';

const ProductList = () => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');

    const products = [
        {
            id: 1,
            image: appleWatch,
            name: "Apple Watch",
            smallDescription: "Series 5 SE",
            description : 'Stay connected and active with the Apple Watch Series 5 SE, featuring advanced health tracking and customizable watch faces.',
            fullDescription:'Stay connected and active with the Apple Watch Series 5 SE, featuring advanced health tracking and customizable watch faces. The Series 5 SE offers a Retina display, ECG app, fall detection, and built-in compass. It also includes an always-on altimeter and a variety of workout modes to monitor your fitness activities. The watch is swim-proof, making it ideal for all kinds of water activities.',
            price: 529.99,
            rating: 4
        },
        {
            id: 2,
            image: headphones,
            name: "Sony ZX33OBT",
            smallDescription: "Light Grey",
            description : 'Experience wireless freedom and superior sound quality with the light grey Sony ZX33OBT headphones.',
            fullDescription:'Experience wireless freedom and superior sound quality with the light grey Sony ZX33OBT headphones. These headphones offer Bluetooth connectivity, 30mm driver units for dynamic sound, and a swivel design for easy portability. The built-in microphone and NFC one-touch connection provide convenience for hands-free calls and music streaming.',
            price: 39.99,
            rating: 4
        },
        {
            id: 3,
            image: iphone11Black,
            name: "iPhone 11",
            smallDescription: "Serious Black",
            description : 'The iPhone 11 in Serious Black offers stunning photos, powerful performance, and all-day battery life.',
            fullDescription:'The iPhone 11 in Serious Black offers stunning photos, powerful performance, and all-day battery life. It features a 6.1-inch Liquid Retina HD display, dual-camera system with 12MP Ultra Wide and Wide cameras, and Night mode for impressive low-light photography. Powered by the A13 Bionic chip, the iPhone 11 provides smooth performance and efficient multitasking.',
            price: 619.99,
            rating: 4
        },
        {
            id: 4,
            image: iphone11Green,
            name: "iPhone 11",
            smallDescription: "Subway Blue",
            fullDescription:'Enjoy the sleek design and robust features of the iPhone 11, now available in the eye-catching Subway Blue. This model includes a 6.1-inch Liquid Retina HD display, dual-camera system with Ultra Wide and Wide lenses, and all the advanced features of iOS. The A13 Bionic chip ensures powerful performance for all your apps and games.',
            description : 'Enjoy the sleek design and robust features of the iPhone 11, now available in the eye-catching Subway Blue.',
            price: 619.99,
            rating: 4
        },
        {
            id: 5,
            image: iphone11Red,
            name: "iPhone 11",
            smallDescription: "Product RED",
            description : 'Make a statement with the iPhone 11 in Product RED, combining cutting-edge technology with a bold color.',
            fullDescription:' Make a statement with the iPhone 11 in Product RED, combining cutting-edge technology with a bold color. This edition supports the global fight against AIDS with a portion of proceeds going to the Global Fund. It features the same powerful A13 Bionic chip, dual-camera system, and long battery life as other iPhone 11 models.',
            price: 619.99,
            rating: 4
        },
        {
            id: 6,
            image: iphone11White,
            name: "iPhone 11",
            smallDescription: "Milky White",
            description : 'The iPhone 11 in Milky White provides a clean, classic look with the power and performance you expect from Apple.',
            fullDescription:'The iPhone 11 in Milky White provides a clean, classic look with the power and performance you expect from Apple. This model includes a 6.1-inch Liquid Retina HD display, dual 12MP cameras with 4K video recording, and Night mode. With its robust design and water resistance, it is built to last in any environment.',
            price: 619.99,
            rating: 4
        },
        {
            id: 7,
            image: iphone11Red,
            name: "iPhone 13",
            smallDescription: "Product RED",
            description : 'Upgrade to the iPhone 13 in Product RED for enhanced performance, stunning camera capabilities, and vibrant design.',
            fullDescription:'Upgrade to the iPhone 13 in Product RED for enhanced performance, stunning camera capabilities, and vibrant design. Featuring the A15 Bionic chip, this model offers improved speed and efficiency. The advanced dual-camera system includes sensor-shift optical image stabilization and cinematic mode for professional-quality video.',
            price: 619.99,
            rating: 4
        },
        {
            id: 8,
            image: iphone11Red,
            name: "iPhone 14",
            smallDescription: "Product RED",
            fullDescription:'The latest iPhone 14 in Product RED delivers unmatched performance, cutting-edge features, and a striking design. Powered by the A16 Bionic chip, it provides extraordinary speed and efficiency. The iPhone 14 includes an advanced camera system with ProRAW capabilities and enhanced battery life for all-day use.',
            description : 'The latest iPhone 14 in Product RED delivers unmatched performance, cutting-edge features, and a striking design.',
            price: 619.99,
        },
        {
            id: 9,
            image: dellXpsWhite,
            name: "Dell XPS 13",
            smallDescription: "White",
            description : 'The Dell XPS 13 in white offers a premium laptop experience with a stunning display, powerful performance, and sleek design.',
            fullDescription:'The Dell XPS 13 in white offers a premium laptop experience with a stunning display, powerful performance, and sleek design. It features a 13.4-inch InfinityEdge display, up to 11th Gen Intel Core processors, and a long-lasting battery. The lightweight and durable build make it perfect for on-the-go productivity.',
            price: 1799.99,
            rating: 4
        },
        {
            id: 10,
            image: iphone11Blue,
            name: "iPhone 11",
            smallDescription: "Navy Blue",
            description : 'The iPhone 11 in Navy Blue combines elegance and functionality, providing a seamless user experience with impressive features.',
            fullDescription:'The iPhone 11 in Navy Blue combines elegance and functionality, providing a seamless user experience with impressive features. It includes a 6.1-inch Liquid Retina HD display, A13 Bionic chip, and dual-camera system. The sleek Navy Blue finish adds a touch of sophistication to this versatile device.',
            price: 729.99,
            rating: 4
        },
        {
            id: 11,
            image: macbook,
            name: "Macbook",
            smallDescription: "Macbook Air",
            description : 'The Macbook Air is the perfect blend of performance and portability, featuring a stunning Retina display and advanced technology.',
            fullDescription:'The MacBook Air is the perfect blend of performance and portability, featuring a stunning Retina display and advanced technology. Powered by the Apple M1 chip, it delivers incredible speed and efficiency. The lightweight design, long battery life, and high-resolution display make it ideal for both work and entertainment.',
            price: 3799.99,
            rating: 5
        },
        {
            id: 12,
            image: samsungNote21,
            name: "Samsung Note 21",
            smallDescription: "Violet",
            fullDescription:'Stay productive and creative on the go with the Samsung Note 21 in Violet, featuring a powerful S Pen and vibrant display. The large AMOLED screen provides stunning visuals, while the advanced camera system captures detailed photos and videos. With its robust performance and stylish design, the Note 21 is perfect for both work and play.',
            description : 'Stay productive and creative on the go with the Samsung Note 21 in Violet, featuring a powerful S Pen and vibrant display.',
            price: 319.99,
            rating: 4
        }
    ];

    const handleItemView = (product) => {

       navigate('/item-view', {state: {product} });
    };

    const handleAddToBag = (product) => {
        addToSideBag(product);
        addToBag(product);
    };

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <div className='container'>
                <div className="search-bar mb-4 mx-auto" style={{ maxWidth: '50%' }}>
                    <label className="search-label" htmlFor="search">Search Item</label>
                    <input
                        type="text"
                        id="search"
                        className="form-control"
                        placeholder="Apple Watch, Samsung 21, Macbook Pro"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            <div className='row'>
                {filteredProducts.length > 0 ? (
                filteredProducts.map(product => (
                    <div key={product.id} className='col-lg-3 col-md-12 col-sm-12 mb-4'>
                        <div className='card w-50 border-0 bg-transparent' >
                            <img src={product.image} alt={product.name} className="card-image mx-auto d-block" height='230' width='190' onClick={() => handleItemView(product)} />
                            <div className="card-content d-flex flex-column">
                                <div className="card-title">{product.name}</div>
                                <div className="card-description">{product.smallDescription}</div>
                                <div className="mt-auto d-flex action">
                                    <span className="card-price">$ {product.price}</span>
                                    <button className='btn' onClick={() =>
                                        handleAddToBag(product)}>
                                        <i className='bi bi-bag-plus-fill'></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
                ) : (
                    <div className="col-12">
                        <p>No results</p>
                    </div>
                )}
            </div>
        </div>
        </>
    );
};

export default ProductList;