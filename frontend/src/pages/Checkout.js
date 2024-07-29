import React, { useContext, useState } from 'react';
import CartContext from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../App.css';

const CheckoutPage = () => {
    const { cart, dispatch } = useContext(CartContext);
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: '',
        address: '',
        email: '',
        paymentMethod: 'Credit Card'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (cart.length === 0) {
            toast.error('Your cart is empty');
            return;
        }

        // Simulate checkout process
        console.log('Order placed', form, cart);
        toast.success('Order placed successfully');
        dispatch({ type: 'CLEAR_CART' });
        navigate('/');
    };

    const handleContinueShopping = () => {
        navigate('/publiccategory'); // Redirect to the main product listing page
    };

    // Calculate total price
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    // Calculate total number of products
    const totalProducts = cart.length;

    return (
        <div className='container mt-5 mb-5'> 
            <div className="row">
                <div className="col-md-6" style={{ marginTop: '5px' }}>
                    <h2 className="mb-4">Checkout</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-2">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" name="name" value={form.name} onChange={handleChange} required />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="address" className="form-label">Address</label>
                            <input type="text" className="form-control" id="address" name="address" value={form.address} onChange={handleChange} required />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" name="email" value={form.email} onChange={handleChange} required />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="paymentMethod" className="form-label">Payment Method</label>
                            <select className="form-select" id="paymentMethod" name="paymentMethod" value={form.paymentMethod} onChange={handleChange} required>
                                <option value="Credit Card">Credit Card</option>
                                <option value="PayPal">PayPal</option>
                                <option value="Bank Transfer">Bank Transfer</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary w-25">Place Order</button>
                        <button type="button" className="btn btn-secondary w-45" onClick={handleContinueShopping}>Continue Shopping</button>
                    </form>
                </div>
                <div className="col-md-5" style={{ marginTop: '5px', marginLeft: '50px' }}>
                    <h3 className="mb-4">Order Summary</h3>
                    {cart.length > 0 ? (
                        <>
                            {cart.map(item => (
                                <div className="card-checkout" key={item.id}>
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img src={`http://localhost:8000/${item.image}`} className="img-fluid rounded-start" alt={item.name} />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body-checkout">
                                                <h5 className="card-title-checkout">{item.name}</h5>
                                                <p className="card-text-checkout">PKR. Price: {item.price}</p>
                                                <p className="card-text-checkout"><small className="text-muted">Quantity: 1</small></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <h4 className="mt-4">Total Products: {totalProducts}</h4> {/* Display total number of products */}
                            <h4>Total Price: PKR. {totalPrice}/-</h4> {/* Display total price */}
                        </>
                    ) : <p>Your cart is empty</p>}
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default CheckoutPage;





// import React, { useContext, useState } from 'react';
// import CartContext from '../context/CartContext';
// import { useNavigate } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import '../App.css';

// const CheckoutPage = () => {
//     const { cart, dispatch } = useContext(CartContext);
//     const navigate = useNavigate();
//     const [form, setForm] = useState({
//         name: '',
//         address: '',
//         email: '',
//         paymentMethod: 'Credit Card'
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setForm({ ...form, [name]: value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (cart.length === 0) {
//             toast.error('Your cart is empty');
//             return;
//         }

//         // Simulate checkout process
//         console.log('Order placed', form, cart);
//         toast.success('Order placed successfully');
//         dispatch({ type: 'CLEAR_CART' });
//         navigate('/');
//     };

//     const handleContinueShopping = () => {
//         navigate('/publiccategory'); // Redirect to the main product listing page
//     };

//     return (
//         <div className='container mt-5 mb-5'> 
//             <div className="row">
//                 <div className="col-md-6" style = {{marginTop:'5px'}}>
//                     <h2 className="mb-4">Checkout</h2>
//                     <form onSubmit={handleSubmit}>
//                         <div className="mb-2">
//                             <label htmlFor="name" className="form-label">Name</label>
//                             <input type="text" className="form-control" id="name" name="name" value={form.name} onChange={handleChange} required />
//                         </div>
//                         <div className="mb-2">
//                             <label htmlFor="address" className="form-label">Address</label>
//                             <input type="text" className="form-control" id="address" name="address" value={form.address} onChange={handleChange} required />
//                         </div>
//                         <div className="mb-2">
//                             <label htmlFor="email" className="form-label">Email</label>
//                             <input type="email" className="form-control" id="email" name="email" value={form.email} onChange={handleChange} required />
//                         </div>
//                         <div className="mb-2">
//                             <label htmlFor="paymentMethod" className="form-label">Payment Method</label>
//                             <select className="form-select" id="paymentMethod" name="paymentMethod" value={form.paymentMethod} onChange={handleChange} required>
//                                 <option value="Credit Card">Credit Card</option>
//                                 <option value="PayPal">PayPal</option>
//                                 <option value="Bank Transfer">Bank Transfer</option>
//                             </select>
//                         </div>
//                         <button type="submit" className="btn btn-primary w-25">Place Order</button>
//                         <button type="button" className="btn btn-secondary w-45 " onClick={handleContinueShopping}>Continue Shopping</button>
//                     </form>
//                 </div>
//                 <div className="col-md-5" style = {{marginTop:'5px', marginLeft: '50px'}}>
//                     <h3 className="mb-4">Order Summary</h3>
//                     {cart.length > 0 ? cart.map(item => (
//                         <div className="card-checkout " key={item.id}>
//                             <div className="row g-0">
//                                 <div className="col-md-4">
//                                     <img src={`http://localhost:8000/${item.image}`} className="img-fluid rounded-start" alt={item.name} />
//                                 </div>
//                                 <div className="col-md-8">
//                                     <div className="card-body-checkout">
//                                         <h5 className="card-title-checkout">{item.name}</h5>
//                                         <p className="card-text-checkout">PKR.  Price: {item.price}</p>
//                                         <p className="card-text-checkout"><small className="text-muted">Quantity: 1</small></p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     )) : <p>Your cart is empty</p>}
//                 </div>
//             </div>
//             <ToastContainer />
//         </div>
//     );
// };

// export default CheckoutPage;













