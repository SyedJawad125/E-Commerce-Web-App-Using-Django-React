import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axiosInstance from '../context/AxiosInstance';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../App.css';

const Category_slider = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [records, setRecords] = useState([]);
    const [data, setData] = useState([]);
    const [flag, setFlag] = useState(false);

    useEffect(() => {
        if (location.state && location.state.name) {
            toast.success(location.state.name);
            navigate('/category', { state: '' });
        } else if (flag === true) {
            toast.success('Product deleted');
            setFlag(false);
        }

        const receiveData = async () => {
            const res = await axiosInstance.get('/ecommerce/slidercategory');
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
    }, [flag, location.state, navigate]);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000 // 2000ms = 2 seconds
    };

    return (
        <div className="container" style={{ marginBottom: '100px' ,  marginLeft: '200px'}}>
            <h2 className="mt-4">List Of Categories </h2>
            {/* <Link type="submit" className="btn btn-primary mt-3" to="/Add/Addcategory">
                Add Category
            </Link> */}
            {/* <br />
            <br /> */}
            {/* {data ? <p>Total: {data.count}</p> : <p>Total: 0</p>} */}
            <div className="container mt-5">
                <Slider {...settings}>
                    {records ? (
                        records.map((item) => (
                            <div className="col-lg-3 col-md-6 mb-1" key={item.id}>
                                <div className="card" style={{ marginTop: '0px' }}>
                                    <a className="navbar-brand" href="/publicproduct">
                                        <img
                                            src={`http://localhost:8000/${item.image}`}
                                            className="card-image"
                                            alt={item.name}/>
                                    </a>
                                    <div className="card-body">
                                        <h5 className="card-title card-title-custom">{item.name}</h5>
                                        <h5 className="card-text card-text-custom">Des: {item.description}</h5>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>Loading....</p>
                    )}
                </Slider>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Category_slider;
