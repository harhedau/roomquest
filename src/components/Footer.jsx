import React from 'react'

function Footer() {
  return (
    <footer className="bg-dark text-white text-center">
    <div className="container py-5">
      <div className="row">
        <div className="col-md-4 ">
          <h5>Quick Links</h5>
          <ul className="list-unstyled">
            <li><a href="#" className='text-decoration-none text-light'>Home</a></li>
            <li><a href="#" className='text-decoration-none text-light'>About Us</a></li>
            <li><a href="#" className='text-decoration-none text-light'>Services</a></li>
            <li><a href="#" className='text-decoration-none text-light'>Contact Us</a></li>
          </ul>
        </div>
        <div className="col-md-4">
          <h5>Resources</h5>
          <ul className="list-unstyled">
            <li><a href="#" className='text-decoration-none text-light'>Moving Tips</a></li>
            <li><a href="#" className='text-decoration-none text-light'>City Guides</a></li>
            <li><a href="#" className='text-decoration-none text-light'>Accommodation Listings</a></li>
            <li><a href="#" className='text-decoration-none text-light'>FAQs</a></li>
          </ul>
        </div>
        <div className="col-md-4">
          <h5>Contact Us</h5>
          <p>123 Street Name, City<br />Phone: 123-456-7890<br />Email: info@example.com</p>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col">
          <p>&copy; 2024 Your Website. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer