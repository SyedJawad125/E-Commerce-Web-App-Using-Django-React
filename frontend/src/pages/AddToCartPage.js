import React, { useContext } from 'react';
import CartContext from '../context/CartContext'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const AddToCartPage = () => {
    const { cart, dispatch } = useContext(CartContext);
    const navigate = useNavigate();

    const handleRemoveFromCart = (product) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: product });
        toast.success('Product removed from cart');
    };

    const handleProceedToCheckout = () => {
        // Navigate to checkout page or handle checkout logic
        navigate('/checkout');
    };

    return (
        <div className='container' style={{ marginTop: '15px', marginBottom: '100px', marginLeft: '200px' }}>
            <div className="container mt-5">
                <div className="row">
                    {cart.length > 0 ? cart.map(item => (
                        <div className="col-lg-3 col-md-4 mb-4" key={item.id}>
                            <div className="card-AddToCartPage">
                                <img src={`http://localhost:8000/${item.image}`} className="card-image-AddToCartPage" alt="Product" />
                                <div className="card-body-AddToCartPage">
                                    <h5 className="card-title card-title-custom" style={{ fontSize: '18px' }}>{item.name}</h5>
                                    <h5 className="card-text card-text-custom" style={{ fontSize: '16px' }}>Price :{item.price}</h5>
                                    <button className="btn btn-danger" onClick={() => handleRemoveFromCart(item)}>Remove</button>
                                </div>
                            </div>
                        </div>
                    )) : <p>Your cart is empty</p>}
                </div>
                {cart.length > 0 && (
                    <div className="row">
                        <div className="col-12">
                            <button className="btn btn-success" onClick={handleProceedToCheckout}>Proceed to Checkout</button>
                        </div>
                    </div>
                )}
            </div>
            <ToastContainer />
        </div>
    );
};

export default AddToCartPage;
