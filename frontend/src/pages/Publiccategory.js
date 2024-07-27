import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axiosInstance from '../context/AxiosInstance';
import Product_vertical_slider from './Product_vertical_slider';
import '../App.css';

const Publiccategory = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [records, setRecords] = useState([]);
  const [data, setData] = useState([]);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    if (location.state && location.state.name) {
      toast.success(location.state.name);
      navigate('/product', { state: '' });
    } else if (flag === true) {
      toast.success('Product deleted');
      setFlag(false);
    }

    const receiveData = async () => {
      const res = await axiosInstance.get('/ecommerce/publiccategory');
      try {
        if (res) {
          setRecords(res.data.data.data);
          setData(res.data);
        }
      } catch (error) {
        console.log('error occurred', error);
      }
    };
    receiveData();
  }, [flag, location.state]);

  const handleCategoryClick = (categoryId) => {
    navigate('/publicproduct', { state: { categoryId: categoryId } });
  };

  return (
    <div className="container" style={{ marginTop: '15px', marginBottom: '100px', marginLeft: '200px' }}>
      <div className="container mt-5">
        <div className="row">
          {records ? (
            records.map((item) => (
              <div className="col-lg-2 col-md-3 mb-4" key={item.id}>
                <div className="card-5" onClick={() => handleCategoryClick(item.id)}>
                  <img src={`http://localhost:8000/${item.image}`} className="card-image5" alt={item.name} />
                  <div className="card-body5">
                    <h5 className="card-title card-title-custom" style={{ fontSize: '15px' }}>
                      {item.name}
                    </h5>
                    <p className="card-text card-text-custom" style={{ fontSize: '14px' }}>
                      Des: {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Loading....</p>
          )}
        </div>
      </div>

      <ToastContainer />
      <Product_vertical_slider />
    </div>
  );
};

export default Publiccategory;




// import {React, useEffect, useState, useRef} from 'react'
// import {Link, useNavigate, useLocation} from 'react-router-dom'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import axiosInstance from '../context/AxiosInstance';
// import Product_vertical_slider from './Product_vertical_slider';
// import '../App.css'

// const Publiccategory = () => {

//     const navigate = useNavigate()
//     const location = useLocation()

//     const [records, setRecords] = useState([])
//     const [data, setData] = useState([])
//     const [flag, setFlag] = useState(false)

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
//             const res = await axiosInstance.get('/ecommerce/publiccategory')
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
//     },   [flag, location.state])

// //  data['order_bill'] = OrderSerializerList(instance.order).data if instance.order else None


//   return (
//     <div class='container' style={{ marginTop: '15px', marginBottom: '100px',  marginLeft: '200px'}}>
//     <div class="container mt-5">
//       <div class="row">
        
//         { records ? 
//         records.map(item => (
//         <div class='col-lg-2 col-md-3 mb-4'>
//             <div class="card-5" >
//             <Link key={item.id} to={`/publicproduct?category=${item.id}`}>
//             {/* <a href={`/publicproduct?category=${item.id}`}> */}
//             {/* <Link to={`/publicproduct/:id/${item.id}`}> */}
//                 <img src={`http://localhost:8000/${item.image}`}  class="card-image5" />
//             </Link>
//                   <div class="card-body5">
//                       <span><h5 class="card-title card-title-custom" style={{ fontSize: '15px' }}>{item.name}</h5></span>
//                       <span><p class="card-text card-text-custom" style={{ fontSize: '14px' }}>Des: {item.description}</p></span>
                      
//                       {/* <h5 class="card-text">Category :{item.category_name}</h5> */}
//                       {/* <a className="navbar-brand" href="/">
//                         <img src={logo} alt="Logo" className="navbar-logo" />
//                       </a> */}
//                   </div>
//             </div>
//         </div>  
            
// )) : 
// <p>Loading....</p>
// }
//     </div> 
//     </div>  
     
//     <ToastContainer/>
//     <Product_vertical_slider/>
// </div>
//   )
// }

// export default Publiccategory