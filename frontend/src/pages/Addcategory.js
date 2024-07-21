import {React,useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../context/AxiosInstance'

const Addcategory = () => {

  const navigate = useNavigate()

  const [name, setname] = useState('')
  const [description, setdescription] = useState('')
  const [image, setimage] = useState(null)
  const [restaurantRecords, setrestaurantRecords] = useState([])


 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

        const payload = {"name":name , "description":description}
        
        const response = await axiosInstance.post('/ecommerce/category', payload , {
        headers: {
            'Content-Type': 'application/json'
        }
        });
        if (response){
        console.log('Response:', response.data);
        navigate('/category', {state: {message: 'Category Added!'}})
        }
        // Handle success
    } catch (error) {
        console.error('Error:', error);
        // Handle error
    }
    };

  return (
    <div class='container' >
    <h2 class='mt-4'>Add Category Here :</h2>
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
    <div class="form-group">
        <label for="image">Upload Image</label>
        <input type="file" class="form-control-file" id="image" onChange={(e)=> setimage(e.target.files[0])}/>
    </div> 

    <button type="submit" class="btn btn-primary mt-3">Submit</button>
  </form>
</div>

  )
}

export default Addcategory