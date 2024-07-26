import {React, useEffect, useState, useRef} from 'react'
import {Link, useNavigate, useLocation} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axiosInstance from '../context/AxiosInstance';
// import '../App.css'
import './Admin_card_css.css';


const Category = () => {

    const navigate = useNavigate()
    const location = useLocation()

    const [records, setRecords] = useState([])
    const [data, setData] = useState([])
    const [flag, setFlag] = useState(false)


    useEffect(()=>{
        if (location.state && location.state.name){
            toast.success(location.state.name)
            navigate('/category', {state: ''})
          }
          else if (flag == true){
            toast.success('Product deleted')
            setFlag(false)
          }

        const receiveData = async () =>{
            const res = await axiosInstance.get('/ecommerce/category')
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
        const res = await axiosInstance.delete(`/ecommerce/category?id=${id}`)
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
    navigate('/Update/Updatecategory', {state: {data: item}})
}


  return (
    <div class='container'  style={{ marginLeft: '200px' }} >
    <h2 class='mt-4'>List Of Categories </h2>

    <Link type="submit" class="btn btn-primary mt-3" to='/Add/Addcategory'>Add Category</Link>

    
    <br/><br/>

    {data ? <p>Total: {data.count}</p> : <p>Total: 0</p>}

    <div class="container mt-5">
      <div class="row">
        
        { records ? 
        records.map(item => (
        <div class="col-lg-3 col-md-6 mb-1">
            <div class="admincard" >
               <img src={`http://localhost:8000/${item.image}`}  class="admincard-image" />
            <div class="admincard-body">
                <h5 class="admincard-title card-title-custom">{item.name}</h5>
                <h5 class="admincard-text card-text-custom">Des :{item.description}</h5>
                {/* <h5 class="card-context">{item.created_by_name}</h5> */}
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
export default Category