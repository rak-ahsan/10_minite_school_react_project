import React from 'react'
import { Link } from 'react-router-dom'
import "../backend/css/side.css"
const sidebar = () => {
  return (
    <div className="accordion accordion-flush" id="accordionFlushExample">
      <div className="accordion-item">
          <div className="accordion-body"><Link to={"/dashboard"} className='nav-link'>Dashboard</Link></div>
        <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
          <div className="accordion-body"></div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
            Courses
          </button>
        </h2>
        <div id="flush-collapseTwo" className="accordion-collapse collapse hov" data-bs-parent="#accordionFlushExample">
          <div className="accordion-body"><Link to={"/courseadd"} className='nav-link'>Add</Link></div>
          <div className="accordion-body"><Link to={"/viewcourse"} className='nav-link'> course</Link></div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
            New Admission
          </button>
        </h2>
        <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
          <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseThree">
            Admisson
          </button>
        </h2>
        <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
          <div className="accordion-body"><Link to={"/booking"} className='nav-link'>Booking </Link></div>
          <div className="accordion-body"><Link to={"/Students"} className='nav-link'>Class </Link></div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseThree">
            Teachers
          </button>
        </h2>
        <div id="flush-collapseFive" className="accordion-collapse collapse hov" data-bs-parent="#accordionFlushExample">
          <div className="accordion-body"><Link to={"/Addteacher"} className='nav-link'>Add </Link></div>
          <div className="accordion-body"><Link to={"/viewteacher"} className='nav-link'>View </Link></div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsesix" aria-expanded="false" aria-controls="flush-collapseThree">
            Student
          </button>
        </h2>
        <div id="flush-collapsesix" className="accordion-collapse collapse hov" data-bs-parent="#accordionFlushExample">
          <div className="accordion-body"><Link to={"/student"} className='nav-link'>Add </Link></div>
          <div className="accordion-body"><Link to={"/viewstudent"} className='nav-link'>View </Link></div>
        </div>
      </div>
    </div>
  )
}

export default sidebar