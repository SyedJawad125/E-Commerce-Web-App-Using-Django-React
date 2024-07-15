import {React,useState} from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import axiosInstance from '../context/AxiosInstance'

const Updatecategory = () => {

  const navigate = useNavigate()
  const location = useLocation()
  const data = location.state.data

  const [name, setname] = useState(data.name)
  const [description, setdescription] = useState(data.description)
  const [restaurantRecords, setrestaurantRecords] = useState([])


 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

        const payload = {"name":name , "description":description}
        
        const response = await axiosInstance.patch('/ecommerce/category', payload , {
        headers: {
            'Content-Type': 'application/json'
        }
        });
        if (response){
        console.log('Response:', response.data);
        navigate('/category', {state: {message: 'Category Updated!'}})
        }
        // Handle success
    } catch (error) {
        console.error('Error:', error);
        // Handle error
    }
    };
  return (
    <div class='container' style={{ marginLeft: '200px' }}>
    <h2 class='mt-4'>Update Category Here :</h2>
  <form class='mt-3' onSubmit={handleSubmit}>
    <div class="mb-3">
      <label for="name" class="form-label">Name</label>
      <input type="name" class="form-control" id="name" aria-describedby="name"  value={name}
        onChange= {e => setname(e.target.value)} />
    </div>
    <div class="mb-3">
      <label for="description" class="form-label">Description</label>
      <input type="text" class="form-control" id="description" aria-describedby="description" value={description}
        onChange= {e => setdescription(e.target.value)}/>
    </div>

    <button type="submit" class="btn btn-primary mt-3">Submit</button>
  </form>
</div>
  )
}

export default Updatecategory