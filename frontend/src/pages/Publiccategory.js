import {React, useEffect, useState, useRef} from 'react'
import {Link, useNavigate, useLocation} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axiosInstance from '../context/AxiosInstance';
import Product_vertical_slider from './Product_vertical_slider';
import '../App.css'

const Publiccategory = () => {

    const navigate = useNavigate()
    const location = useLocation()

    const [records, setRecords] = useState([])
    const [data, setData] = useState([])
    const [flag, setFlag] = useState(false)

    useEffect(()=>{
        if (location.state && location.state.name){
            toast.success(location.state.name)
            navigate('/product', {state: ''})
          }
          else if (flag == true){
            toast.success('Product deleted')
            setFlag(false)
          }

        const receiveData = async () =>{
            const res = await axiosInstance.get('/ecommerce/publiccategory')
            try{
                if (res){
                    setRecords(res.data.data.data)
                    setData(res.data)
                }
            }
            catch (error){
                console.log('error occured', error)
            }
        }
        receiveData();
    },   [flag, location.state])

  return (
    <div class='container' style={{ marginTop: '15px', marginBottom: '100px',  marginLeft: '200px'}}>
    <div class="container mt-5">
      <div class="row">
        
        { records ? 
        records.map(item => (
        <div class="col-lg-3 col-md-6 mb-1">
            <div class="card" >
              <a  href="/publicproduct">
                <img src={`http://localhost:8000/${item.image}`}  class="card-image" />
              </a>
            <div class="card-body">
                <span><h5 class="card-title card-title-custom">{item.name}</h5></span>
                <span><h5 class="card-text card-text-custom">Des :{item.description}</h5></span>
                
                {/* <h5 class="card-text">Category :{item.category_name}</h5> */}
                {/* <a className="navbar-brand" href="/">
                   <img src={logo} alt="Logo" className="navbar-logo" />
                </a> */}
            </div>
            </div>
        </div>  
            
)) : 
<p>Loading....</p>
}
    </div> 
    </div>  
     
    <ToastContainer/>
    <Product_vertical_slider/>
</div>
  )
}

export default Publiccategory