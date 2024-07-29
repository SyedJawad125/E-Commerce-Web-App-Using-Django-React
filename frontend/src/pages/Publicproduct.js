import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axiosInstance from '../context/AxiosInstance';
import Category_vertical_slider from './Category_vertical_slider';
import '../App.css';

const PublicProduct = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { categoryId } = location.state || {};

  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (categoryId) {
      const fetchProducts = async () => {
        try {
          const res = await axiosInstance.get(`/ecommerce/publicproduct?category=${categoryId}`);
          if (res) {
            setProducts(res.data.data.data);
          }
        } catch (error) {
          console.log('Error fetching products:', error);
        }
      };
      fetchProducts();
      console.log(products)
    }
  }, [categoryId]);

  const handleProductClick = (ProductId) => {
    navigate('/productdetailpage', { state: { ProductId: ProductId } });
  };
  return (
    <div className="container" style={{ marginTop: '15px', marginBottom: '100px', marginLeft: '200px' }}>
      <h2>Products</h2>
      <div className="row">
        {products.length ? (
          products.map((product) => (
            <div className="col-lg-3 col-md-4 mb-4" key={product.id}>
              <div className="card" onClick={() => handleProductClick(product.id)}>
                <img src={`http://localhost:8000/${product.image}`} className="card-img-top clickable-image" alt={product.name}
                 />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No products found for this category.</p>
        )}
      </div>
      <Category_vertical_slider/>

    </div>
  );
};

export default PublicProduct;





// import {React, useEffect, useState} from 'react'
// import {Link, useNavigate, useLocation} from 'react-router-dom'
// import { useParams } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import axiosInstance from '../context/AxiosInstance';
// import Category_vertical_slider from './Category_vertical_slider';
// import '../App.css'

// const Publicproduct = () => {

//     const navigate = useNavigate()
//     const location = useLocation()

//     const { id } = useParams();
//     const [records, setRecords] = useState([])
//     const [data, setData] = useState([])
//     const [flag, setFlag] = useState(false)
//     console.log('category id', id)


//     useEffect(()=>{
//         if (location.state && location.state.name){
//             toast.success(location.state.name)
//             navigate('/product', {state: ''})
//           }
//           else if (flag == true){
//             toast.success('Product deleted')
//             setFlag(false)
//           }

//         const receiveData = async () =>{
//             // In params
//             const res = await axiosInstance.get(`/ecommerce/publicproduct?category=${id? id : ''}`, );
//             try{
//                 if (res){
//                     setRecords(res.data.data.data)
//                     setData(res.data)
//                 }
//             }
//             catch (error){
//                 console.log('error occured', error)
//             }
//         }
//         receiveData();
//     },   [flag, location.state, id])

//   return (
//     <div class='container' style={{ marginTop: '15px', marginBottom: '100px',  marginLeft: '200px' }}>
//     <div class="container mt-5">
//       <div class="row">
        
//         { records ? 
//         records.map(item => (
//         <div class="col-lg-2 col-md-3 mb-4">

//             <div class="card-5" >
//                     <img src={`http://localhost:8000/${item.image}`}  class="card-image5" alt="Jane"  />                  
                     
//             <div class="card-body7">
//                 <span><h5 class="card-title card-title-custom" style={{ fontSize: '15px' }}>{item.name}</h5></span>
//                 <span><h5 class="card-text card-text-custom" style={{ fontSize: '14px' }}>Des :{item.description}</h5></span>
//                 <span><h5 class="card-text card-text-custom" style={{ fontSize: '14px' }}>Price :{item.price}</h5></span>
//                 {/* <h5 class="card-text">Category :{item.category_name}</h5> */}
//             </div>
//             </div>
//         </div>  
            
// )) : 
// <p>Loading....</p>
// }
//     </div> 
//     </div>  
     
//     <ToastContainer/>
//     <Category_vertical_slider/>

// </div>
//   )
// }

// export default Publicproduct