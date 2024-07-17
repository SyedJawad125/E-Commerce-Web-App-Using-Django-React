import {React, useEffect, useState, useRef} from 'react'
import {Link, useNavigate, useLocation} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axiosInstance from '../context/AxiosInstance';
import '../App.css'

const Product = () => {

    const navigate = useNavigate()
    const location = useLocation()

    const [records, setRecords] = useState([])
    const [data, setData] = useState([])
    const [flag, setFlag] = useState(false)

    const [search, setSearch] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoading, setIsLoading] = useState(false); // Track loading state
    const [searchResults, setSearchResults] = useState([]); // Store search results

    const debounceTimeout = useRef(null); // useRef for timeout
    // const location = useLocation();
    // const { message } = location.state || { message: { name: '', text: '' } };


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
            const res = await axiosInstance.get('/ecommerce/product')
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


    const deleteRecord = async (id) => {
    try{
        const res = await axiosInstance.delete(`/ecommerce/product?id=${id}`)
        if(res){
            console.log('Delete Successfully')
            setFlag(true)
        }
    }
    catch(error){
        console.log(error)
    }
    }

    const updateRecord = async (item) => {
    navigate('/Update/Updateproduct', {state: {data: item}})
}


  // Clear timeout on unmount to prevent memory leaks
  useEffect(() => {
    return () => clearTimeout(debounceTimeout.current);
  }, []);

  return (
    <div class='container' >
    <h2 class='mt-4'>List Of Products </h2>

    <Link type="submit" class="btn btn-primary mt-3" to='/Add/Addproduct'>Add Product</Link>

    <br/><br/>

    {data ? <p>Total: {data.count}</p> : <p>Total: 0</p>}

   
    <div class="container mt-5">
      <div class="row">
        
        { records ? 
        records.map(item => (
        <div class="col-lg-3 col-md-6 mb-1">
         

            
            <div className="card" >
                    <img src={`http://localhost:8000/${item.image}`}  class="card-image" />
                   
                     
            <div class="card-body">
                <span><h5 class="card-title card-title-custom">Name :{item.name}</h5></span>
                <span><h5 class="card-text card-text-custom">Des :{item.description}</h5></span>
                <span><h5 class="card-text card-text-custom">Price :{item.price}</h5></span>
                <h5 class="card-text card-text-custom">Category :{item.category_name}</h5>
                <button class='btn btn-danger'onClick={()=> deleteRecord(item.id)}>Delete</button>
                <button class='btn btn-primary mx-2' onClick={()=> updateRecord(item)}>Update</button>
            </div>
            </div>
        </div>  
          

            
)) : 
<p>Loading....</p>
}
    </div> 
    </div>  
    
     
    <ToastContainer/>
</div>
  )
}
export default Product


// For No Round Border Of Card
{/* <div className="card card-no-round" style={{ borderRadius: '0' }}>
<img src={`http://localhost:8000/${item.image}`}  class="card-img-top" style={{ borderRadius: '0' }}/> */}