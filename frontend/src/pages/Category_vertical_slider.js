import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axiosInstance from '../context/AxiosInstance';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../App.css';

const Category_vertical_slider = () => {
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
        slidesToShow: 5,
        slidesToScroll: 1,
        vertical: true, // Make the slider vertical
        verticalSwiping: true,
        autoplay: true,
        autoplaySpeed: 2000 // 2000ms = 2 seconds
    };

    return (
        <div className="vertical-slider-container">
            <h2 className="mt-4">Categories </h2>
            <div className="slider-wrapper-verticle">
                <Slider {...settings}>
                    {records ? (
                        records.map((item) => (
                            <div className="slider-item-verticle" key={item.id}>
                                <div className="card-verticle" style={{ marginTop: '0px' }}>
                                    <a href="/publicproduct">
                                        <img
                                            src={`http://localhost:8000/${item.image}`}
                                            className="card-image-verticle"
                                            alt={item.name}/>
                                    </a>    
                                    {/* <div className="card-body">
                                        <h5 className="card-title card-title-custom">{item.name}</h5>
                                        <h5 className="card-text card-text-custom">Des: {item.description}</h5>
                                    </div> */}
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

export default Category_vertical_slider;
