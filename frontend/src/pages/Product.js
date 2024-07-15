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

    {/* <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search..."
      />
      {isLoading && <p>Loading...</p>}
      {searchResults.length > 0 && (
        <ul>
          {searchResults.map((result) => (
            <li key={result.id}>{result.name || result.title || result}</li>
          ))}
        </ul>
      )} */}
    {/* <button class='btn-primary' type='submit' onClick={handleSearch}>Search</button> */}
    
    <br/><br/>

    {data ? <p>Total: {data.count}</p> : <p>Total: 0</p>}

    <div class="row">
        
        { records ? 
        records.map(item => (
            <div class="card" style={{width: "18rem"}}>
                    <img src={`http://localhost:8000/${item.image}`} alt="Jane" style={ {width: '70%'} } />

            <div class="card-body">
                <h5 class="card-title">Name :{item.name}</h5>
                <h5 class="card-title">Des :{item.description}</h5>
                <h5 class="card-title">Price :{item.price}</h5>
                <h5 class="card-title">Category :{item.category_name}</h5>
                {/* <h5 class="card-context">{item.created_by_name}</h5> */}
                <button class='btn btn-danger'onClick={()=> deleteRecord(item.id)}>Delete</button>
                <button class='btn btn-primary mx-2' onClick={()=> updateRecord(item)}>Update</button>
            </div>
            </div>
//         data['menu_name'] = instance.menu.name
//         data['restaurant_name'] = instance.restaurant.name if instance.restaurant else None
//         data['order_bill'] = OrderSerializerList(instance.order).data if instance.order else None


)) : 
<p>Loading....</p>
}
    </div>  
    <ToastContainer/>
</div>
  )
}

export default Product