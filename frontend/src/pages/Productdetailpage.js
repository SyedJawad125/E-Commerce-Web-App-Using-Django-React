import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from '../context/AxiosInstance';
import '../App.css';

const Productdetailpage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await axiosInstance.get(`/ecommerce/publicproduct/${id}`);
                setProduct(res.data.data.data);
            } catch (error) {
                console.log('Error fetching product details', error);
            }
        };

        fetchProduct();
    }, [id]);

    if (!product) {
        return <p>Loading...</p>;
    }

    return (
        <div className='container_product_datail' style={{ marginTop: '15px', marginBottom: '100px', marginLeft: '200px' }}>
            <div className='product-detail'>
                <img src={`http://localhost:8000/${product.image}`} alt={product.name} />
                <h1>{product.name}</h1>
                <p>Description: {product.description}</p>
                <p>Price: {product.price}</p>
                {/* Add other product details as needed */}
            </div>
        </div>
    );
};

export default Productdetailpage;
