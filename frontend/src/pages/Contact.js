import {React,useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../context/AxiosInstance'
// import Image_banner from '../components/Image_banner'
// import axios from 'axios';

const Contact = () => {

  const navigate = useNavigate()

  const [name, setname] = useState('')
  const [phone_number, setphone_number] = useState('')
  const [email, setemail] = useState('')
  const [message, setmessage] = useState('')

  // const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    try {
        e.preventDefault();
        const payload = {"name":name ,"phone_number":phone_number, 
          "email":email, "message":message}
        
        const response = await axiosInstance.post('/ecommerce/contact', payload , {
        headers: {
            'Content-Type': 'application/json'
        }
        });
        if (response){
          // setIsSubmitting(true);
           
          console.log('Response:', response.data);
          setname('');
          setphone_number('');
          setemail('');
          setmessage('');

          navigate('/contact', {state: {message: 'contact Added!'}})
        }
        // Handle success
        // setTimeout(() => setIsSubmitting(false), 1000);
    } catch (error) {
        console.error('Error:', error);
        //  setIsSubmitting(false);
        // Handle error
    }
    };
  
  return (
    <>
    {/* <Image_banner/> */}
    <div class="container contact-form">
    <div class="contact-image">
      <img src="https://image.ibb.co/kUagtU/rocket_contact.png" alt="rocket_contact"/>
    </div>
    <form method="post" onSubmit={handleSubmit}>
      <h3>Drop Us a Message</h3>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <input type="text" name="name" class="form-control" placeholder="Your Name *" value={name}
                  onChange= {e => setname(e.target.value)}  />
          </div>
          <div class="form-group">
            <input type="email" name="email" class="form-control" placeholder="Your Email *"  value={email}
                  onChange= {e => setemail(e.target.value)}/>
          </div>
          <div class="form-group">
            <input type="text" name="phone" class="form-control" placeholder="Your Phone Number *" value={phone_number}
                  onChange= {e => setphone_number(e.target.value)} />
          </div>
          <div class="form-group">
            <input type="submit" name="btnSubmit" class="btnContact" value="Send Message"  />
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <textarea name="message" class="form-control" placeholder="Your Message *" style={{ width: '100%', height: '150px' }}
            value={message} onChange= {e => setmessage(e.target.value)} ></textarea>
          </div>
        </div>
      </div>
    </form>
  </div>
  </>
  )
}

export default Contact


//     const [formData, setFormData] = useState({
//       name: '',
//       email: '',
//       phone_number: '',
//       message: ''
//     });
//     const [submitted, setSubmitted] = useState(false);
  
//     const handleChange = (e) => {
//       const { name, value } = e.target;
//       setFormData({ ...formData, [name]: value });
//     };
  
//     const handleSubmit = async (e) => {
//       e.preventDefault();
  
//       try {
//         // Send form data to the backend (replace 'your-backend-endpoint' with your actual endpoint)
//         await axios.post('http://localhost:8000/ecommerce/contact', formData);
        
//         // Set form submitted state to true to show success message
//         setSubmitted(true);
  
//         // Reset form data
//         setFormData({
//           name: '',
//           email: '',
//           phone_number: '',
//           message: ''
//         });
  
//         // Optionally, reset the submitted state after a few seconds to hide the success message
//         setTimeout(() => setSubmitted(false), 1000);
  
//       } catch (error) {
//         console.error('Error submitting form:', error);
//         // Handle error if needed
//       }
//     };



// <div class="container contact-form">
//     <div class="contact-image">
//       <img src="https://image.ibb.co/kUagtU/rocket_contact.png" alt="rocket_contact"/>
//     </div>
//     {submitted && <div className="success-message">Form submitted successfully!</div>}
//     <form onSubmit={handleSubmit}>
//       <h3>Drop Us a Message</h3>
//       <div class="row">
//         <div class="col-md-6">
//           <div class="form-group">
//             <input type="text" name="name" class="form-control" placeholder="Your Name *"value={formData.name}
//                   onChange={handleChange}  required  />
//           </div>
//           <div class="form-group">
//             <input type="email" name="email" class="form-control" placeholder="Your Email *"  value={formData.email}
//                   onChange={handleChange}  required/>
//           </div>
//           <div class="form-group">
//             <input type="text" name="phone_number" class="form-control" placeholder="Your Name *"value={formData.phone_number}
//                   onChange={handleChange}  required />
//           </div>
//           <div class="form-group">
//           <button type="submit">Submit</button>
//           </div>
//         </div>
//         <div class="col-md-6">
//           <div class="form-group">
//             <textarea name="message" class="form-control" placeholder="Your Message *" style={{ width: '100%', height: '150px' }}
//             value={formData.message} onChange={handleChange}  required></textarea>
//           </div>
//         </div>
//       </div>
//     </form>
//   </div>
