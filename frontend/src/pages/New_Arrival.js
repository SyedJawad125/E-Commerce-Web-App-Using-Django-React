import {React, useEffect, useState} from 'react';
import {Link, useNavigate, useLocation} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axiosInstance from '../context/AxiosInstance';
import Category_vertical_slider from './Category_vertical_slider';
import '../App.css';

const New_Arrival = () => {
    const navigate = useNavigate();
    const location = useLocation();
    // const { id } = useParams();
    const [records, setRecords] = useState([]);
    const [data, setData] = useState([]);
    const [flag, setFlag] = useState(false);
    // console.log('category id', id);

    useEffect(()=>{
        if (location.state && location.state.name){
            toast.success(location.state.name);
            navigate('/product', {state: ''});
        } else if (flag === true){
            toast.success('Product deleted');
            setFlag(false);
        }

        const receiveData = async () =>{
            const res = await axiosInstance.get(`/ecommerce/publicproduct`);
            try{
                if (res){
                    setRecords(res.data.data.data);
                    setData(res.data);
                }
            } catch (error){
                console.log('error occured', error);
            }
        };
        receiveData();
    }, [flag, location.state]);
     

    const handleProductClick = (ProductId) => {
        navigate('/productdetailpage', { state: { ProductId: ProductId } });
      };

    return (
        <div className='container' style={{ marginTop: '15px', marginBottom: '100px', marginLeft: '200px' }}>
            <div className="container mt-5">
                <div className="row">
                    {records ? records.map(item => (
                        <div className="col-lg-2 col-md-3 mb-4" key={item.id}>
                            <div className="card-5" onClick={() => handleProductClick(item.id)}>
                                {/* <Link to={'/productdetailpage', { state: { id: id } }}> */}
                                   <img src={`http://localhost:8000/${item.image}`} className="card-image5 clickable-image" alt="Jane"/>
                                {/* </Link> */}
                                <div className="card-body7">
                                    <span><h5 className="card-title card-title-custom" style={{ fontSize: '15px' }}>{item.name}</h5></span>
                                    <span><h5 className="card-text card-text-custom" style={{ fontSize: '14px' }}>Des :{item.description}</h5></span>
                                    <span><h5 className="card-text card-text-custom" style={{ fontSize: '14px' }}>Price :{item.price}</h5></span>
                                </div>
                            </div>
                        </div>
                    )) : <p>Loading....</p>}
                </div>
            </div>
            <ToastContainer />
            <Category_vertical_slider />
        </div>
    );
};

export default New_Arrival;