import {React, useEffect, useState, useRef} from 'react'
import {Link, useNavigate, useLocation} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axiosInstance from '../context/AxiosInstance';
import '../App.css'

const Publiccategory = () => {

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
    

   

    <div class="container mt-5">
      <div class="row">
        
        { records ? 
        records.map(item => (
        <div class="col-lg-3 col-md-6 mb-1">

            <div class="card" >
            <div class="card-body">
                <span><h5 class="card-title card-title-custom">{item.name}</h5></span>
                <span><h5 class="card-text card-text-custom">Des :{item.description}</h5></span>
                
                {/* <h5 class="card-text">Category :{item.category_name}</h5> */}
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

export default Publiccategory