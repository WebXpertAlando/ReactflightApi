import React from 'react';
import "./App.css"

import './style.css'

import Navbar from './components/Navbar/NavBar.js';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from "./components/Auth/Login";
import About from "./components/About"
import Home from "./components/Home";
import SearchFlights from './components/SearchFlights';
import Flights from "./components/Flights";
import Flight_operations from "./components/Flight_operations";
import AddFlights from "./components/AddFlights"
import Bookings from "./components/Bookings";

import Contact from './components/Contact';
import Signup from './components/Signup';





function App() {

    return (
      <BrowserRouter>
      <Navbar/>
    
      
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path='/' element={<Home />}></Route> 
          <Route path='/About' element={<About />}></Route>
          <Route path='/Flights' element={<Flights />}></Route>
          <Route path='/Flight_operations' element={<Flight_operations />}></Route>
          <Route path='/SearchFlights' element={<SearchFlights />}></Route>
          <Route path='/AddFlights' element={<AddFlights/>}></Route>
          <Route path='/Bookings' element={<Bookings />}></Route>
          <Route path='/Contact' element={<Contact/>}></Route>
          <Route path='/Signup' element={<Signup/>}></Route>

        </Routes>
  

      </BrowserRouter>

    );
};




export default App;