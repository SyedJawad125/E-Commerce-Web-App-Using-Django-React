import {React, useState, useContext} from 'react'
import { useNavigate, useLocation  } from 'react-router-dom'
import axiosInstance from '../context/AxiosInstance'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthCon } from '../context/AuthContext';
// import '../App.css'
import './Login.css'


const Login = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const { login } = useContext(AuthCon);
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [flag, setFlag] = useState(false)

    // ReactToastify
    if (location.state && location.state.message){
      toast.success(location.state.message)
      navigate('/login', {state: ''})
    }
    else if (flag == true){
      toast.success('Not Registered')
      setFlag(false)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const payload = {"username":username, "password":password}
          const response = await axiosInstance.post('/user/login', payload , {
            headers: {
              'Content-Type': 'application/json'
            }
          });
          if (response.status===200){
            login(response.data.data.token)
            navigate('/adminpage', {state: {message: 'Logged In!'}})
          }
        } catch (error) {
            // toast.error("invalid Username or Password")
            console.error('Error:', error);
        }
      };

    const Signupfunction = () => {
        navigate('/SignUp' )
    }

    const textboxStyle = {
      margin: '10px', // Adjust margin as needed
      border: '1px solid black',
      padding: '8px', // Adds padding inside the textbox
    };

  return (
    <div class="container-log" >
    <div class="row justify-content-center-log">
        <div class="col-md-5">
            <div class="cards-log mt-5">
                <div class="card-header-log">
                    <h3 class="text-center-log">Login</h3>
                </div>
                <div class="card-bodies-log" >
                    <form onSubmit={handleSubmit}>
                        <div class="mb-3-log">
                            <label for="username" class="form-label-log">User Name</label>
                            {/* <input type="text" style={textboxStyle} id="username" aria-describedby="emailHelp" required value={username}
                              onChange= {e => setUsername(e.target.value)}/> */}
                              <input type="text" value={username} onChange= {e => setUsername(e.target.value)} placeholder="Enter Username"
                                class="textbox-log"/>
      
                            <div id="emailHelp" class="form-text-log">We'll never share your email with anyone else.</div>
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label-log">Password</label>
                            <input type="password" class="textbox-log" id="password" required  value={password}
                              onChange= {e => setPassword(e.target.value)} />
                        </div>
                        {/* <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" id="rememberMe" />
                            <label class="form-check-label" for="rememberMe">Remember me</label>
                        </div> */}
                        <button type="submit" class="btn-log btn-primary-log w-100">Login</button>
                        <div class="call-to-action-logs">
                        {/* <button  type="submit" class="btn btn-danger w-20 mt-4 marginLeft: 80px"onClick={()=> updateRecord()} >SignUp</button> */}
                        <button  type="submit" class="right-button-logs" onClick={Signupfunction} >SignUp</button>
                        </div>
                    </form>
                </div>
                <div class="card-footer-log text-center">
                    <small>&copy; 2024 HRMS</small>
                </div>
            </div>
        </div>
    </div>
    <ToastContainer/>
</div>
  )
}

export default Login