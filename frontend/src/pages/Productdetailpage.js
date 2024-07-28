import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
// import { useParams } from 'react-router-dom';
import axiosInstance from '../context/AxiosInstance';
import Category_vertical_slider from './Category_vertical_slider';

import '../App.css';

const Productdetailpage = () => {
    const location = useLocation();
  const { ProductId } = location.state || {};

  const [product, setProduct] = useState([]);

    useEffect(() => {
        if (ProductId) {
          const fetchProduct = async () => {
            try {
              const res = await axiosInstance.get(`/ecommerce/publicproduct?id=${ProductId}`);
              if (res) {
                setProduct(res.data.data.data);
              }
            } catch (error) {
              console.log('Error fetching products:', error);
            }
          };
          fetchProduct();
          console.log(product)
        }
      }, [ProductId]);
    //     const fetchProduct = async () => {
    //         try {
    //             console.log('comming id', id)
    //             const res = await axiosInstance.get(`/ecommerce/publicproduct?id=${id}`);
    //             setProduct(res.data.data.data);
    //         } catch (error) {
    //             console.log('Error fetching product details', error);
    //         }
    //     };

    //     fetchProduct();
    // }, [id]);

    if (!product) {
        return <p>Loading...</p>;
    }
    
return (
<div className="container_product_datail" style={{ marginTop: '15px', marginBottom: '100px', marginLeft: '200px' }}>
        {product.length ? (
          product.map((product) => (
            <div  key={product.id}>
              <div className='product-detail'>
                <img src={`http://localhost:8000/${product.image}`} alt={product.name} />
                <h1>{product.name}</h1>
                <p>Description: {product.description}</p>
                <p>Price: {product.price}</p>
             </div>
            </div>
          ))
        ) : (
          <p>No products found for this category.</p>
        )}
      <Category_vertical_slider/>

    </div>
  );
};

export default Productdetailpage;
