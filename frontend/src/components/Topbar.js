import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faUserPlus, faPhone } from '@fortawesome/free-solid-svg-icons';
import { useContext} from 'react'
import {Link} from 'react-router-dom'
import { AuthCon } from '../context/AuthContext'


// npm install @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons 
  // @fortawesome/react-fontawesome

const Topbar = () => {
  

  const {logout} = useContext(AuthCon)

  return (
    
    <div className="top-bar" >
    <p></p>
        {/* Your other top bar content here  */}
        <div className="top-bar d-flex justify-content-between align-items-center px-3">
            {/* <div className="d-flex align-items-center">
            <p className="mb-0"></p>
            </div> */}
          <div className="d-flex align-items-center" >
                <div className="icon-box d-flex align-items-center mx-2">
                  <span><FontAwesomeIcon icon={faPhone}  className="mr-2" />
                        (+92) 333 1906382</span>
                </div>
                  {
              localStorage.getItem('token') ? <Link onClick={logout} className="logout-lpg">
                Logout</Link> : <Link to="/login">
                <div className="icon-box d-flex align-items-center mx-2">
                    <span><FontAwesomeIcon icon={faSignInAlt} className="mr-2" />
                    Login</span>
                </div></Link>
             
                   }
                <div className="icon-box d-flex align-items-center mx-2">
                  <span><FontAwesomeIcon icon={faUserPlus}  className="mr-2" />
                  <Link to="/SignUp"  style={{ color: '#fff', marginLeft: 'auto' }}>SignUp</Link>
                        </span>
                </div>
          </div>
        </div>
        </div>
        /* {
        localStorage.getItem('token') ? <Link onClick={logout}>Sign Out</Link> : <Link to="/login">
          <div className="icon-box d-flex align-items-center mx-2">
              <span><FontAwesomeIcon icon={faSignInAlt} className="mr-2" />
              Sign In</span>
          </div>
          </Link>   
        }
          <div className="icon-box d-flex align-items-center mx-2">
              <span><FontAwesomeIcon icon={faUserPlus} className="mr-2" />
              <button  type="submit" class="right-button" onClick={Signupfunction} >SignUp</button>
              </span>
          </div> */
    
  )
}

export default Topbar