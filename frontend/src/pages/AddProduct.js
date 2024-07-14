import {React, useState, useContext} from 'react'
import { useNavigate } from 'react-router-dom'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import axiosInstance from '../context/AxiosInstance'
import '../App.css'

const Addproduct = () => {

  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')


  // console.log('name', name)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      const payload = {"name":name, "description":description, "price":price}
      const response = await axiosInstance.post('/courier/product', payload );
      
      if (response){
        console.log('Response:', response.data);
      // toast.success("Make added!");

        navigate('/product', { state: {  name: `${name} Added`} });
    //   setName('')
      }
      // Handle success
    } catch (error) {
      console.error('Error:', error);
      // Handle error
    }
  };

  return (
    <div class='container' style={{ marginLeft: '200px' }}>
     <form class='mt-3' onSubmit={handleSubmit}>
        <div class="mb-3">
          <label for="name" class="form-label">Name :</label>
          <input type="text" class="form-control" id="name" aria-describedby="nameHelp" 
            value={name}
            onChange= {e => setName(e.target.value)}
          />
          <label for="base_salary" class="form-label">Description :</label>
          <input type="text" class="form-control" id="name" aria-describedby="nameHelp" 
            value={description}
            onChange= {e => setDescription(e.target.value)}
          />
          <label for="base_salary" class="form-label">Price :</label>
          <input type="text" class="form-control" id="name" aria-describedby="nameHelp" 
            value={price}
            onChange= {e => setPrice(e.target.value)}
          />
        
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
     </form>

                    {/* <ToastContainer /> */}
 
    </div>
  )
}

export default Addproduct


// const handleAddProduct = () => {
//   const productName = "Product Name"; // Replace this with the actual product name
//   navigate('/product', { state: { message: { name: productName, text: 'Product Added!' } } });
// };
