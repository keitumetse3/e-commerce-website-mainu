// BagItems.js
import React from 'react';
// import { myBag, setMyBag } from '../components/Sidebag'; 
import Sidebar from '../components/sidebar/Sidebar';
import Bag , {myBag, setMyBag}from '../components/Bag';
import Rating from '../components/Rating';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../pages/CheckBagItems.css';

function BagItems() {
    const [cartItems, setCartItems] = React.useState(myBag);

    React.useEffect(() => {
        const updatedCartItems = myBag.map(item => {
            if (typeof item.quantity !== 'number') {
                return { ...item, quantity: 1 };
            }
            return item;
        });
        setCartItems(updatedCartItems);
        setMyBag(updatedCartItems);
    }, []);

    const increaseQuantity = (productId) => {
        const updatedBag = cartItems.map(item => {
            if (item.id === productId) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        });
        setCartItems(updatedBag);
        setMyBag(updatedBag);
    };

    const decreaseQuantity = (productId) => {
        const updatedBag = cartItems.map(item => {
            if (item.id === productId && item.quantity > 1) {
                return { ...item, quantity: item.quantity - 1 };
            }
            return item;
        }).filter(item => item.quantity > 0);
        setCartItems(updatedBag);
        setMyBag(updatedBag);
    };

    return (
        <div className="container">
            <div className='navbar'>
                <Sidebar/>
            </div>
            <h1>Check your Bag Items</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div className="bag-items-list">
                    {cartItems.map((product) => (
                        <div key={product.id} className="bag-item">
                            <div className="row">
                                <div className="col-md-4" style={{background: '#ffff', borderTopLeftRadius: '30px', borderBottomLeftRadius: '30px' }}>
                                    <img src={product.image} style={{ width: '60%' }} alt={product.title} />
                                </div>
                                <div className="col-md-4" style={{background: '#ffff', borderTopRightRadius: '30px', borderBottomRightRadius: '30px'}}>
                                    <h2>{product.name}</h2>
                                    <small>{product.smallDescription}</small>
                                    <p>{product.description}</p>
                                    <h3><Rating stars={product.rating}/> <span> {product.rating} / 5 </span> </h3>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <p>${product.price.toFixed(2)} <span>x {product.quantity}</span></p> 
                                        </div>
                                        <div className="col-md-6">
                                            <div className="quantity-controls">
                                                <button onClick={() => decreaseQuantity(product.id)} className="btn btn-secondary btn-decrease">-</button>
                                                <span className="quantityItem">{product.quantity}</span>
                                                <button onClick={() => increaseQuantity(product.id)} className="btn btn-secondary btn-increase">+</button>
                                            </div>
                                        </div> 
                                    </div>          
                                </div>
                                <div className='bagComp col-md-4' style={{display: 'flex', justifyContent: 'flex-end', position: 'fixed', top: '15%', right: '0'}}>
                                    <Bag/>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default BagItems;
