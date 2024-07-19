import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faSignInAlt, faUserPlus, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const Topbar = () => {
  return (
    
    <div className="top-bar">
    <p></p>
        {/* Your other top bar content here  */}
        <div className="top-bar d-flex justify-content-between align-items-center px-3">
            {/* <div className="d-flex align-items-center">
            <p className="mb-0"></p>
            </div> */}
          <div className="d-flex align-items-center">
            <div className="icon-box d-flex align-items-center mx-2">
               <span><FontAwesomeIcon icon={faPhoneAlt} className="mr-2" />
               Call us: (123) 456-7890</span>
            </div>
            <div className="icon-box d-flex align-items-center mx-2">
               <span><FontAwesomeIcon icon={faSignInAlt} className="mr-2" />
               Sign In</span>
            </div>
            <div className="icon-box d-flex align-items-center mx-2">
               <span><FontAwesomeIcon icon={faUserPlus} className="mr-2" />
               Sign Up</span>
            </div>
          </div>
        </div>
    </div>
    // <div className="top-bar d-flex justify-content-between align-items-center px-3">
    //   <div className="d-flex align-items-center">
    //     <FontAwesomeIcon icon={faPhone} className="mr-2" />
    //     <p className="mb-0">Call us: (123) 456-7890</p>
    //   </div>
    //   <div className="d-flex">
    //     <div className="d-flex align-items-center mx-3">
    //       <FontAwesomeIcon icon={faSignInAlt} className="mr-2" />
    //       <p className="mb-0">Sign In</p>
    //     </div>
    //     <div className="d-flex align-items-center">
    //       <FontAwesomeIcon icon={faUserPlus} className="mr-2" />
    //       <p className="mb-0">Sign Up</p>
    //     </div>
    //   </div>
    // </div>
  )
}

export default Topbar