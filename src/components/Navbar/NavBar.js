import React from 'react';
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';





const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
         
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
       

        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
              
            </li>
            <li>
              <NavLink to="/About">About</NavLink>
            </li>
            <li>
              <NavLink to="/Flights">Flights</NavLink>
            </li>

            <li>
              <NavLink to="/Flight_operations">Flights Bookings</NavLink>
            </li>




              
            <li>
              <NavLink to="/AddFlights">Add Flights</NavLink>
            </li>

            
            <li>
              <NavLink to="/Contact">Contact</NavLink>
          
            </li>

            <li>
              <NavLink to="/Signup">Signup</NavLink>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  )
}


export default Navbar;





