import React from 'react'

const Contact = () => {
  return (
//     <div class='container' style={{ marginLeft: '200px' }}  >
//     <h2 class='mt-3'>Contact Us</h2>
//     <form action="action_page.php"  onSubmit={handleSubmit}>

//       <label for="name" class='mt-3'>Name</label>
//       <input type="text" id="name" name="name" placeholder="Your name.." value={name}
//         onChange= {e => setname(e.target.value)} />

//       <label for="country">Country</label>
//       <input type="text" id="country" name="country" placeholder="Your country name.."  value={country}
//         onChange= {e => setcountry(e.target.value)} />

//       <label for="phone_number">Phone Number</label>
//       <input type="text" id="phone_number" name="phone_number" placeholder="Your phone number.."  value={phone_number}
//         onChange= {e => setphone_number(e.target.value)}/>

//       <label for="email">Email</label>
//       <input type="text" id="email" name="email" placeholder="Your email.." value={email}
//         onChange= {e => setemail(e.target.value)} />

//       <select class="form-select" aria-label="Default select example" onChange={e => setrestaurant(e.target.value)}>
//         <option selected>Select Restaurant</option>

//           { restaurantRecords ?
//             restaurantRecords.map(item => (
//               <option value={item.id} key={item.id}>{item.name}</option>
//             ))
//             :
//             <option selected>No Records</option>
//           }
//       </select>

//       {/* <label for="country">Country</label>
//       <select id="country" name="country">
//         <option value="australia">Australia</option>
//         <option value="canada">Canada</option>
//         <option value="usa">USA</option>
//       </select> */}

//       <label for="subject">Subject</label>
//       <textarea id="subject" name="subject" placeholder="Write something.."  value={subject}
//         onChange= {e => setsubject(e.target.value)} style={ {height: '150px'} }></textarea>

//       {/* <input type="submit" value="Submit" /> */}
//       <button type="submit" class="btn btn-primary mt-3">Submit</button>

//     </form>
//   </div>


    <div class="container contact-form">
    <div class="contact-image">
      <img src="https://image.ibb.co/kUagtU/rocket_contact.png" alt="rocket_contact"/>
    </div>
    <form method="post">
      <h3>Drop Us a Message</h3>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <input type="text" name="name" class="form-control" placeholder="Your Name *" value="" />
          </div>
          <div class="form-group">
            <input type="email" name="email" class="form-control" placeholder="Your Email *" value="" />
          </div>
          <div class="form-group">
            <input type="text" name="phone" class="form-control" placeholder="Your Phone Number *" value="" />
          </div>
          <div class="form-group">
            <input type="submit" name="btnSubmit" class="btnContact" value="Send Message" />
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <textarea name="message" class="form-control" placeholder="Your Message *" style={{ width: '100%', height: '150px' }}></textarea>
          </div>
        </div>
      </div>
    </form>
  </div>
  )
}

export default Contact