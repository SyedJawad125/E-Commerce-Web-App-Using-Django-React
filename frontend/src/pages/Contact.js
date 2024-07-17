import {React,useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../context/AxiosInstance'


const Contact = () => {


  const navigate = useNavigate()

  const [name, setname] = useState('')
  const [phone_number, setphone_number] = useState('')
  const [email, setemail] = useState('')
  const [message, setmessage] = useState('')


    

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

        const payload = {"name":name ,"phone_number":phone_number, 
          "email":email, "message":message}
        
        const response = await axiosInstance.post('/ecommerce/contact', payload , {
        headers: {
            'Content-Type': 'application/json'
        }
        });
        if (response){
        console.log('Response:', response.data);
        navigate('/contact', {state: {message: 'contact Added!'}})
        }
        // Handle success
    } catch (error) {
        console.error('Error:', error);
        // Handle error
    }
    };
  return (


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
                  onChange= {e => setname(e.target.value)} />
          </div>
          <div class="form-group">
            <input type="email" name="email" class="form-control" placeholder="Your Email *"  value={email}
                  onChange= {e => setemail(e.target.value)} />
          </div>
          <div class="form-group">
            <input type="text" name="phone" class="form-control" placeholder="Your Phone Number *" value={phone_number}
                  onChange= {e => setphone_number(e.target.value)}/>
          </div>
          <div class="form-group">
            <input type="submit" name="btnSubmit" class="btnContact" value="Send Message" />
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
  )
}

export default Contact